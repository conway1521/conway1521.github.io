# Working paper series tooling

`cover.py` writes the working paper cover page, either as LaTeX for a
paper's own source or stamped onto a built PDF, and `series.json` holds the
series metadata that every cover is drawn from.

## How the published PDFs are built

Each paper lives in its own repository and carries the cover in its own
source, so a build of the paper produces the cover with it:

- the four LaTeX papers hold it as a `titlepage` before `\maketitle`,
  generated with `--emit-latex`
- `paper-skills-dna` holds it as `paper/cover.tex`, generated with
  `--emit-latex --inline-abstract --pandoc` and passed to pandoc with `-H`

The PDFs in `assets/papers/` are those builds. A clean checkout cannot yet
rebuild every paper, because the figures and generated tables of some are
not committed and the microdata behind them is not either. For the
September 2026 builds, a figure missing from a checkout was taken unchanged
from the previously published PDF, so every figure is the one already
published. In the skills-dna paper the recovered third figure is cropped to
remove a line of body text that had been captured with it, and text from the
surrounding page that sat invisibly inside the recovered figures is removed.

Without `--emit-latex`, `cover.py` stamps the cover onto a PDF as it was
built, which remains the route for a paper whose source cannot be built.
Nothing inside the paper is touched in that case, and the stamped file is
the built paper with one page in front of it.

## Running it

    python tools/cover.py --all
    python tools/cover.py --slug flows-engine
    python tools/cover.py --slug flows-engine --force

A paper that already carries a cover is skipped, so running `--all` twice
does not stamp a cover onto a cover. `--force` replaces the existing one.
Where a paper's own repository tracks a copy of its PDF, the stamped file
is mirrored there too, so the published file and the repository agree.

The tool needs `pypdf` and `reportlab`, and it expects the sibling paper
repositories to sit beside this one.

## The series

Numbering is `AC-WP-<year of first draft>-<sequence within that year>`, and
the sequence runs in order of first draft. Three numbers are reserved in
`series.json` for papers whose estimation is not yet run, so that nothing
renumbers when they are published.

The year in the identifier and in the suggested citation is the year of the
first draft, and a revision keeps it.

`series.json` also holds each paper's keywords and JEL codes, which the
cover prints under the abstract and which are written into the PDF
metadata, so they can be pasted straight into an SSRN or MPRA submission.
Keywords use American spelling, because that is how both services are
searched, although the papers themselves are written in British spelling.
Each paper prints the same two lines under its own abstract, so a printed
copy carries them whether or not it was taken from the cover.
