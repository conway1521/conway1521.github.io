# Working paper series tooling

`cover.py` puts the working paper cover page on a built paper PDF, and
`series.json` holds the series metadata that every cover is drawn from.

## Why the cover is stamped rather than built

Each paper lives in its own repository and is built there. None of those
builds can run from a clean checkout, because the figures and the generated
tables are not committed and the microdata behind them is not either: the
occupational papers need IPUMS extracts, the fiscal papers need their own
derived series. A rebuild here would fail on the first missing figure.

So the PDF is taken as it was built, and the cover is drawn and prepended.
Nothing inside the paper is touched, no number moves, and the stamped file
is verifiably the published paper with one page in front of it.

The same cover is also written into each paper's own source, so that the
next real rebuild carries it without this tool:

- the four LaTeX papers hold it as a `titlepage` before `\maketitle`,
  generated with `--emit-latex`
- `paper-skills-dna` holds it as `paper/cover.tex`, generated with
  `--emit-latex --inline-abstract --pandoc` and passed to pandoc with `-H`

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

Citations carry the year in the identifier, which is the year of the first
draft, not the year of the current version.
