"""Prepend a working paper cover page to a built paper PDF.

The papers themselves are built from their own repositories, each of which
needs data that is not committed, so this tool never rebuilds a paper. It
takes the PDF as built, draws a cover page carrying the series identifier,
the version, the citation and the abstract, and writes the two together.

    python tools/cover.py --all
    python tools/cover.py --slug flows-engine

Metadata for every paper in the series lives in tools/series.json. A paper
that already carries a cover is skipped unless --force is given, so running
the tool twice does not stamp a cover onto a cover.
"""

import argparse
import io
import json
import re
import shutil
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
REPOS = ROOT.parent
SPEC = Path(__file__).resolve().parent / "series.json"

PAGE_W, PAGE_H = A4
MARGIN = 85.0
MEASURE = PAGE_W - 2 * MARGIN
ABSTRACT_INSET = 26.0

SERIF = "Times-Roman"
SERIF_BOLD = "Times-Bold"
SERIF_ITALIC = "Times-Italic"

# WinAnsi, which is what the base fourteen fonts encode, has no minus sign
# and no typographic apostrophe in the places the sources use them.
SUBSTITUTIONS = {"−": "–", "'": "’"}


def clean(text):
    for bad, good in SUBSTITUTIONS.items():
        text = text.replace(bad, good)
    return text


def wrap(text, font, size, width):
    """Greedy line breaking, returning a list of word lists."""
    lines, current = [], []
    for word in text.split():
        trial = current + [word]
        if current and stringWidth(" ".join(trial), font, size) > width:
            lines.append(current)
            current = [word]
        else:
            current = trial
    if current:
        lines.append(current)
    return lines


def draw_centred(c, text, font, size, y):
    c.setFont(font, size)
    c.drawCentredString(PAGE_W / 2, y, text)
    return y


def draw_justified(c, text, font, size, leading, y, left, width, last_ragged=True):
    """Draw a justified paragraph and return the y below its last line."""
    c.setFont(font, size)
    lines = wrap(text, font, size, width)
    for index, words in enumerate(lines):
        is_last = index == len(lines) - 1
        if is_last and last_ragged or len(words) == 1:
            c.drawString(left, y, " ".join(words))
        else:
            text_width = sum(stringWidth(w, font, size) for w in words)
            gap = (width - text_width) / (len(words) - 1)
            x = left
            for word in words:
                c.drawString(x, y, word)
                x += stringWidth(word, font, size) + gap
        y -= leading
    return y + leading


def rule(c, y, width=MEASURE, thickness=0.5, grey=0.45):
    c.setStrokeGray(grey)
    c.setLineWidth(thickness)
    c.line((PAGE_W - width) / 2, y, (PAGE_W + width) / 2, y)
    c.setStrokeGray(0)


def build_cover(paper, series):
    """Render the cover page and return it as bytes."""
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    c.setTitle(paper["title"])
    c.setAuthor(series["author"])

    y = PAGE_H - 132

    for line in paper["title_lines"]:
        size = 16.5
        while stringWidth(line, SERIF_BOLD, size) > MEASURE and size > 11:
            size -= 0.5
        draw_centred(c, clean(line), SERIF_BOLD, size, y)
        y -= size + 6.5

    y -= 20
    draw_centred(c, series["author"], SERIF, 12, y)

    y -= 36
    rule(c, y)

    y -= 20
    draw_centred(c, "Working Paper %s" % paper["id"], SERIF_BOLD, 11, y)
    y -= 16
    version = "Version %s (%s)" % (paper["version"], paper["version_date"])
    draw_centred(c, version, SERIF, 10.5, y)
    y -= 16
    draw_centred(c, series["notice"], SERIF_ITALIC, 10, y)

    y -= 14
    rule(c, y)

    y -= 34
    draw_centred(c, "Abstract", SERIF_BOLD, 11, y)
    y -= 19
    y = draw_justified(
        c,
        clean(paper["abstract"]),
        SERIF,
        9.6,
        13.4,
        y,
        MARGIN + ABSTRACT_INSET,
        MEASURE - 2 * ABSTRACT_INSET,
    )

    # Keywords and JEL codes, set as a paragraph with a bold lead-in, the way
    # the papers set them under their own abstracts.
    y -= 26
    left = MARGIN + ABSTRACT_INSET
    width = MEASURE - 2 * ABSTRACT_INSET
    for label, value in (
        ("Keywords: ", paper["keywords"]),
        ("JEL classification: ", paper["jel"]),
    ):
        offset = stringWidth(label, SERIF_BOLD, 9.2)
        c.setFont(SERIF_BOLD, 9.2)
        c.drawString(left, y, label)
        c.setFont(SERIF, 9.2)

        # The first line shares its line with the label, so it is short by the
        # label's width; what does not fit runs full measure underneath.
        words = clean(value).split()
        first = []
        while words and stringWidth(
            " ".join(first + words[:1]), SERIF, 9.2
        ) <= width - offset:
            first.append(words.pop(0))
        c.drawString(left + offset, y, " ".join(first))
        y -= 12.4
        for line in wrap(" ".join(words), SERIF, 9.2, width):
            c.drawString(left, y, " ".join(line))
            y -= 12.4
        y -= 3

    # The citation and the rights notice sit on the bottom margin, so their
    # position does not move with the length of the abstract.
    citation = (
        "Suggested citation: %s, %s (%d). “%s.” Working Paper %s, Version %s."
        % (
            series["author"].split()[-1],
            series["author"].split()[0],
            paper["cite_year"],
            paper["title"],
            paper["id"],
            paper["version"],
        )
    )
    rights = series["rights_line"]

    # The rights line can run to two lines now that it names a licence, so
    # the citation above it is placed relative to however tall it turns out.
    citation_lines = wrap(clean(citation), SERIF, 8.6, MEASURE)
    rights_lines = wrap(clean(rights), SERIF, 8.6, MEASURE)
    rights_top = MARGIN + 12 + (len(rights_lines) - 1) * 11.6
    bottom = rights_top + 11.6 + 6 + len(citation_lines) * 11.6
    rule(c, bottom + 8, grey=0.6)
    draw_justified(c, clean(citation), SERIF, 8.6, 11.6, bottom, MARGIN, MEASURE)
    c.setFont(SERIF, 8.6)
    y = rights_top
    for line in rights_lines:
        c.drawString(MARGIN, y, " ".join(line))
        y -= 11.6

    c.showPage()
    c.save()
    return buffer.getvalue()



LATEX_COVER = r"""% ---------------------------------------------------------------------------
% Working paper cover page. Generated by tools/cover.py --emit-latex in the
% website repository; change the entry in tools/series.json and regenerate
% rather than editing the numbers here. The abstract is taken from
% \paperabstract so that the cover and the abstract environment cannot drift.
% ---------------------------------------------------------------------------
\newcommand{\wpid}{@ID@}
\newcommand{\wpversion}{@VERSION@}
\newcommand{\wpversiondate}{@VERSIONDATE@}
\newcommand{\wpciteyear}{@CITEYEAR@}
\newcommand{\wpkeywords}{@KEYWORDS@}
\newcommand{\wpjel}{@JEL@}

\begin{titlepage}
\thispagestyle{empty}
\singlespacing
\vspace*{1.8cm}
\begin{center}
{\Large\bfseries @TITLELINES@}\\[1.8em]
{\large Alessandro Conway}
\end{center}
\vspace{1.4em}
\hrule height 0.4pt
\vspace{1.1em}
\begin{center}
{\bfseries Working Paper \wpid}\\[0.5em]
Version \wpversion\ (\wpversiondate)\\[0.5em]
\emph{Not peer reviewed. Comments welcome.}
\end{center}
\vspace{0.9em}
\hrule height 0.4pt
\vspace{2.2em}
\begin{center}{\bfseries Abstract}\end{center}
\vspace{0.4em}
\begin{quote}\small\noindent \paperabstract

\vspace{1.3em}\noindent\textbf{Keywords:} \wpkeywords\\
\textbf{JEL classification:} \wpjel\end{quote}
\vfill
\hrule height 0.4pt
\vspace{0.9em}
{\footnotesize\noindent Suggested citation: Conway, Alessandro (\wpciteyear).
``@TITLEFLAT@.'' Working Paper \wpid, Version \wpversion.\\[1em]
\copyright\ Alessandro Conway 2026. Licensed under Creative Commons
Attribution 4.0 International (CC BY 4.0).\par}
\end{titlepage}
"""


LATEX_SPECIALS = {
    "\\": "\\textbackslash{}",
    "&": "\\&",
    "%": "\\%",
    "$": "\\$",
    "#": "\\#",
    "_": "\\_",
    "{": "\\{",
    "}": "\\}",
    "~": "\\textasciitilde{}",
    "^": "\\textasciicircum{}",
}


def tex_escape(text):
    return "".join(LATEX_SPECIALS.get(ch, ch) for ch in text)


def emit_latex(paper, inline_abstract=False, pandoc=False):
    """Return the cover block to paste ahead of \\maketitle in a paper source.

    With inline_abstract the abstract is written into the block instead of
    being read from \\paperabstract, which is what the pandoc-built paper
    needs because its abstract lives in the markdown front matter.

    With pandoc the titlepage is wrapped in an \\AtBeginDocument hook and the
    whole block is meant for pandoc's -H option. Pandoc 3 emits its
    include-before content after \\maketitle, so a cover passed with -B would
    land on the second page; the hook runs at \\begin{document} instead.
    """
    fields = {
        "@ID@": paper["id"],
        "@VERSION@": paper["version"],
        "@VERSIONDATE@": paper["version_date"],
        "@CITEYEAR@": str(paper["cite_year"]),
        "@TITLELINES@": "\\\\[0.4em]\n".join(paper["title_lines"]).replace(
            "–", "--"
        ),
        "@TITLEFLAT@": paper["title"].replace("–", "--"),
        "@KEYWORDS@": paper["keywords"],
        "@JEL@": paper["jel"],
    }
    block = LATEX_COVER
    if inline_abstract:
        # Rewrite the comment before the macro, or the substitution below
        # would rewrite the comment's mention of the macro as well.
        block = block.replace(
            "% \\paperabstract so that the cover and the abstract environment cannot drift.",
            "% the markdown front matter, which stays the canonical copy of it.",
        )
        block = block.replace(
            "% rather than editing the numbers here. The abstract is taken from",
            "% rather than editing the numbers here. The abstract below is copied from",
        )
        block = block.replace("\\paperabstract", tex_escape(paper["abstract"]))
    for token, value in fields.items():
        block = block.replace(token, value)

    if pandoc:
        head, _, body = block.partition("\\begin{titlepage}")
        block = (
            head.rstrip()
            + "\n\n\\AtBeginDocument{%\n\\begin{titlepage}"
            + body.rstrip()
            + "\n}\n"
        )
    return block


def already_stamped(reader):
    try:
        text = reader.pages[0].extract_text() or ""
    except Exception:
        return False
    return bool(re.search(r"Working Paper AC-WP-\d{4}-\d{2}", text))


def stamp(paper, series, force=False):
    slug = paper["slug"]
    live = ROOT / "assets" / "papers" / ("%s.pdf" % slug)
    if not live.exists():
        raise SystemExit("no published PDF for %s at %s" % (slug, live))

    reader = PdfReader(str(live))
    if already_stamped(reader) and not force:
        print("  %-22s already carries a cover, skipped" % slug)
        return False

    if already_stamped(reader) and force:
        reader = PdfReader(str(live))
        pages = reader.pages[1:]
    else:
        pages = list(reader.pages)

    writer = PdfWriter()
    writer.append(PdfReader(io.BytesIO(build_cover(paper, series))))
    for page in pages:
        writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": paper["title"],
            "/Author": series["author"],
            "/Subject": "Working Paper %s, Version %s"
            % (paper["id"], paper["version"]),
            "/Keywords": paper["keywords"],
        }
    )

    out = io.BytesIO()
    writer.write(out)
    live.write_bytes(out.getvalue())
    print("  %-22s %s v%s, %d pages" % (slug, paper["id"], paper["version"], len(pages) + 1))

    # Keep the copy inside the paper's own repository in step where one is
    # tracked, so the published file and the repository never disagree.
    if paper.get("source_pdf"):
        mirror = REPOS / paper["source_repo"] / paper["source_pdf"]
        if mirror.exists():
            shutil.copyfile(live, mirror)
            print("  %-22s mirrored to %s" % ("", mirror.relative_to(REPOS)))
    return True


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--slug", action="append", help="stamp only these papers")
    parser.add_argument("--all", action="store_true", help="stamp every paper")
    parser.add_argument("--force", action="store_true", help="replace an existing cover")
    parser.add_argument("--emit-latex", action="store_true", help="print the cover as LaTeX instead of stamping")
    parser.add_argument("--inline-abstract", action="store_true", help="with --emit-latex, write the abstract into the block")
    parser.add_argument("--pandoc", action="store_true", help="with --emit-latex, wrap the cover for pandoc's -H option")
    args = parser.parse_args()

    spec = json.loads(SPEC.read_text())
    series, papers = spec["series"], spec["papers"]
    if args.slug:
        wanted = set(args.slug)
        papers = [p for p in papers if p["slug"] in wanted]
        missing = wanted - {p["slug"] for p in papers}
        if missing:
            raise SystemExit("unknown paper: %s" % ", ".join(sorted(missing)))
    elif not args.all:
        parser.error("give --all or one or more --slug")

    if args.emit_latex:
        for paper in papers:
            print(emit_latex(paper, inline_abstract=args.inline_abstract, pandoc=args.pandoc))
        return 0

    print("Stamping %d paper(s):" % len(papers))
    for paper in papers:
        stamp(paper, series, force=args.force)
    return 0


if __name__ == "__main__":
    sys.exit(main())
