# DS 6050: Deep Learning — Course Website

The public website for **DS 6050 Deep Learning** (School of Data Science, University of
Virginia), taught by [Heman Shakeri](https://shakeri-lab.github.io/). Twelve modules take
you from linear models and backpropagation to transformers, parameter-efficient
fine-tuning, and generative AI — through video lectures, readings from the open
[Dive into Deep Learning](https://d2l.ai) textbook, Colab notebooks, and self-check
questions.

**Live site:** <https://shakeri-lab.github.io/dl-course-site/>
**YouTube playlist:** <https://www.youtube.com/playlist?list=PLwZv_wzaKu3vzW88m6ASKemCTb70ukycH>

The site is fully public and self-paced. For-credit logistics (deadlines, quizzes,
submissions, grades) live in UVA's Canvas, not here.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- Tailwind CSS + a trimmed set of [shadcn/ui](https://ui.shadcn.com) components
- [KaTeX](https://katex.org) for math in self-check questions (rendered at build time)
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Where content lives

All course content is data, not markup. To update content you almost never touch JSX:

| File | Contents |
|------|----------|
| `lib/module-data.ts` | Per-module lectures (YouTube IDs, slide PDFs), Colab links, readings, descriptions |
| `lib/module-extras.ts` | Per-module learning objectives, time estimates, prerequisites, D2L section links, homepage topics |
| `lib/self-check-data.ts` | Per-module self-check questions (KaTeX `$...$` math supported) |
| `lib/site-config.ts` | Site-wide facts: URLs, instructor, playlist, analytics code, "content current as of" |
| `public/` | Slide PDFs (Modules 11–12), syllabus PDF, logo, social-share card, `llms.txt` |

Pages (`app/…/page.tsx`) render that data through `components/module-template.tsx` and
friends. SEO infrastructure (sitemap, robots, JSON-LD, Open Graph) is generated from the
same data — adding a module to `module-data.ts` updates everything automatically.

### Common edits

- **New lecture video:** add `{ title, videoId }` to the module's `lectures` array in
  `lib/module-data.ts`.
- **Change a reading:** edit `d2lLinks` in `lib/module-extras.ts` (each entry is a
  verified `https://d2l.ai/...` section URL).
- **Add a self-check question:** append to the module's array in `lib/self-check-data.ts`.
- **Enable analytics:** create a free [GoatCounter](https://www.goatcounter.com) site and
  put its code in `siteConfig.goatcounter`.
- **New semester:** update `siteConfig.contentCurrentAsOf`, tag the release
  (`git tag spring-2027`), adjust content as needed.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/ (what GitHub Pages serves)
```

The production build serves under the `/dl-course-site` base path (see
`next.config.mjs`); local dev runs at the root.

## Deployment

Push to `main` → GitHub Actions builds the static export and publishes it to GitHub
Pages. Nothing manual. A separate weekly workflow (`link-check.yml`) sweeps all external
links (D2L, arXiv, YouTube) and opens an issue if any rot.

## Design principles

- **One learning path per module** — watch → read → self-check → code, all on the module
  page. D2L is the canonical text for Modules 1–9; for Modules 10–12 (ViT, PEFT,
  quantization, multimodal, diffusion) the lecture slides and linked papers are the
  readings, because the book doesn't cover them at course depth.
- **No slide duplication** — lectures are board-first; slides are published only where
  they substitute for not-yet-recorded videos (Modules 11–12). Keeping slides out of the
  site elsewhere avoids drift against the LaTeX sources.
- **Evergreen** — no dates on the public site; semester logistics stay in Canvas.

## License

Original course materials are licensed [CC BY 4.0](LICENSE). Lecture videos
© Heman Shakeri. Linked readings (papers, D2L) remain under their own licenses.
