# DS 6050 Course Website — Deep-Dive Analysis & Enhancement Proposal

*Prepared June 12, 2026 · Site: <https://shakeri-lab.github.io/dl-course-site/> · Repo: [Shakeri-Lab/dl-course-site](https://github.com/Shakeri-Lab/dl-course-site)*

> **Implementation status (June 12, 2026):** Phases 1–2 and most of 3–4 were implemented
> the same day, with three instructor decisions amending the plan:
> 1. **No slide publishing for Modules 1–10** (§3 item 13 dropped). Lectures are
>    board-first; slides on the site would duplicate the LaTeX project and drift. Slides
>    remain only on Modules 11–12, where they substitute for not-yet-recorded videos.
> 2. **YouTube playlist already exists** and is now wired throughout the site:
>    <https://www.youtube.com/playlist?list=PLwZv_wzaKu3vzW88m6ASKemCTb70ukycH>
> 3. **Logo simplified** to the existing circular `logo_transparent.png` (50 KB static
>    PNG); the 6 MB GIF and 2 MB JPEGs are deleted.
>
> Still manual/pending: Search Console submission, GoatCounter signup, GitHub repo
> description/topics, video chapters in YouTube descriptions, Module 12.1 PDF
> compression (no Ghostscript on this machine), and the Phase 3 notes for Modules 10–12.

---

## 1. Executive summary

The site is in good shape where it counts: all 12 module pages are live, all 27 YouTube
lectures play, every Colab and arXiv link works (zero broken links found in a full crawl),
deploys are 5-for-5 green, and the data-driven module architecture (`lib/module-data.ts` +
`ModuleTemplate`) is the right foundation to build on.

The single biggest finding: **the site is effectively invisible to the public audience it
should serve.** Google does not index it (`site:shakeri-lab.github.io` returns only the lab
homepage), because the site ships no sitemap, no robots.txt, no canonical URLs, no Open
Graph tags, no structured data — and every page carries *two* conflicting `<title>` tags.
Meanwhile each page loads a **6 MB animated GIF logo** and up to three eager YouTube
iframes, which hurts both ranking and first impressions.

The second finding: **module pages are uneven.** Modules 11–12 are model hubs (slides +
readings + notebooks per lecture); Modules 1–10 are video-plus-one-link pages even though
slide sources exist in `6050/LaTeX/`. A public learner landing on Module 2 gets a video
and a Colab link with no objectives, no context, and no path forward.

The proposal below matches your stated priorities: **public learners first, one
consolidated learning path per module (D2L as the spine), evergreen maintenance over
semester deadlines.** Phases are independent; each ends in a deployable state.

---

## 2. Current state — what the deep dive found

A multi-agent analysis (19 agents) covered the codebase, the live site (every route
fetched), the GitHub org, and a gap analysis against local materials and exemplar course
sites (CS231n, Karpathy Zero-to-Hero, UvA DL, MIT 6.S191). All high-severity claims were
independently re-verified, and this proposal itself went through an adversarial review
pass (accuracy / pedagogy / prioritization critics).

### What's working

- **Architecture**: Next.js 15 static export → GitHub Pages via Actions; clean separation
  of data (`module-data.ts`) and presentation (`module-template.tsx`); 109 tracked files.
- **Content integrity**: 27/27 videos live on @hemanshakeri8145; 20+ Colabs accessible;
  28+ paper links valid; D2L links valid. Zero broken links.
- **UX fundamentals**: responsive, dark mode, breadcrumb + module dropdown + prev/next
  pager, custom 404, correct heading hierarchy, focus styles, aria labels.
- **Rich exemplar modules**: 11 and 12 show the target format — per-lecture slides PDF,
  curated readings, Colab per lecture.

### Verified issues

| # | Issue | Evidence | Why it matters |
|---|-------|----------|----------------|
| 1 | **Not indexed by Google** | Web search for the course returns the lab site only | Public learners cannot find the course at all |
| 2 | **No sitemap.xml / robots.txt** | 404 on both | Crawlers have no map; compounds #1 |
| 3 | **Duplicate `<title>` tags on every module page** | Live HTML shows `<title>Deep Learning - Shakeri Lab</title>` *and* `<title>Module 1 – …</title>` | Root layout is `"use client"` with a hand-rolled `<head>` (`app/layout.tsx:53-62`) fighting the per-page `metadata` exports |
| 4 | **No OG/Twitter cards, no og:image, no canonical, no JSON-LD** (Course/VideoObject/BreadcrumbList) | Absent from all fetched HTML | No rich results, ugly social shares, no video snippets |
| 5 | **6 MB animated GIF logo on every page** (`public/images/logo_square.gif`, preloaded) | 6.0 MB file; HTML itself is only ~45–61 KB | ~99% of page weight is the logo; kills LCP and mobile experience |
| 6 | **Eager YouTube iframes** (up to 3/page, no facade, no `loading="lazy"`) | `module-template.tsx:153-159` | Each embed pulls the full YouTube SDK at load |
| 7 | **Slides published for Modules 11–12 only** | `pdf` field populated only at `module-data.ts:328,337,346,378,391,404,417`; your beamer sources for the other modules sit unpublished in `6050/LaTeX/Module */` | Inconsistent learner experience; your own materials aren't reaching learners |
| 8 | **No learning objectives, prerequisites, or pacing anywhere on the site** | Syllabus.tex design tables (lines 344–561) contain per-module objectives; site exposes none | Learners can't answer "what will I learn?" or "am I ready?" |
| 9 | **Homepage duplicates module data and undersells the course** | `app/page.tsx:237-250` re-declares titles/topics already in `module-data.ts`; hero is just "Deep Learning" + PDF link | Two sources of truth drift; no pitch, no instructor, no YouTube link |
| 10 | **No course playlist on the YouTube channel; no channel link on the site; no chapters on videos** | Channel checked via oembed + page fetch | The two public surfaces don't reinforce each other |
| 11 | **GitHub repo metadata empty** (no description/homepage/topics on any course repo); README is template boilerplate with `your-username` placeholder links | `gh api` shows `topics: []`, `homepage: null` | GitHub search surface wasted; README misleads collaborators |
| 12 | **Repo/site hygiene debris** | 2 MB `logo square.jpeg` at repo root; `Syllabus.tex` duplicated in site repo; v0 `placeholder-*.{png,svg,jpg}` shipped in `public/`; 11 MB `12.1 Multimodal Leaning.pdf`; empty leftover `app/module/[id]/` dir; footer says © 2025; ~8 unused top-level deps (recharts, embla-carousel, zod, cmdk, react-hook-form, @hookform/resolvers, sonner, date-fns) plus unused radix packages behind ~40 dead `components/ui/*` files | Repo weight, build time, professionalism |
| 13 | **Accessibility gaps**: no skip-to-content link, no `prefers-reduced-motion` handling, dark mode ignores OS preference (`enableSystem={false}`) | `app/layout.tsx:64`, `globals.css` | WCAG 2.1 AA misses; needless friction |
| 14 | **D2L references are plain strings** ("D2L: 2.3; 3.1.4; 4.1") | `module-data.ts` `d2lReference` | The canonical textbook is a manual navigation away — works against the consolidation goal |

Refuted during verification (no action needed): "dl-course repo staleness breaks the
site" — module content is self-contained in the site repo.

Content-ops observations (local, not site):

- There is no `5-*` materials folder — Module 5 sources are split under
  `2- Lecture Backprop/{3- Lecture Regularization,4-Opt}/` and `LaTeX/Module 4,5-CNN/`.
  Worth consolidating whenever you next touch those files.
- **Many local PDFs are third-party copyrighted materials** (e.g., Module 1 holds
  Nielsen's book chapter, the Kleinberg and Nguyen papers). These must *not* be
  republished on the public site — the publishable assets are your own beamer decks
  (`LaTeX/Module */ *S*.tex`) and notes. §3 Phase 2 accounts for this.
- Git history shows homework Colab links being *deleted* one by one during the semester
  (`Remove Module 5 Homework 2 Colab link`, …). If intentional (hide assignments while a
  cohort is graded), it should be a data flag, not a deletion — see Phase 2.

---

## 3. The proposal

### Guiding principles (from your constraints)

1. **Public learners are the audience.** Discoverability and self-paced clarity outrank
   semester logistics. Anything cohort-specific (deadlines, Gradescope, Canvas) stays in
   Canvas; the site stays evergreen.
2. **One learning path per module — no fragmentation.** The module page is the *only*
   hub: watch → read → self-check → code. "Read" means: **D2L is the canonical text for
   Modules 1–9** (one click to the exact sections); **your notes/slides are the canonical
   reading for Modules 10–12**, because D2L simply doesn't cover PEFT, quantization,
   CLIP/multimodal, or diffusion at course depth — which is why the site already publishes
   your decks there. We do **not** build parallel notes for material D2L covers well.
3. **Evergreen.** Prioritize by impact; every phase leaves the site deployable; prefer
   features with near-zero ongoing maintenance.

### Phase 1 — Become findable and measurable (~2–3 days)

Mechanical work, no content decisions. Sequence matters: land items 1–6, then do the
YouTube/GitHub cross-linking, then submit to Search Console.

1. **Fix the metadata architecture.** Move the client chrome (nav, mobile menu, theme
   toggle, footer) into a `SiteChrome` client component; make `app/layout.tsx` a server
   component using the Metadata API. Set `metadataBase` to
   `https://shakeri-lab.github.io/dl-course-site/` so canonical/OG/sitemap URLs come out
   absolute. Every page gets: unique title/description, canonical, OG + Twitter card.
   This also kills the duplicate `<title>`.
2. **Create an og:image** (1200×630: course title, UVA/Shakeri Lab, neural-net motif —
   the lab logo art you already have works) and wire it as the default social card;
   per-module cards can come later or never.
3. **Add `app/sitemap.ts` and `app/robots.ts`** (both supported with `output: 'export'`).
4. **Add JSON-LD**, generated from `module-data.ts`: `Course` on the homepage (include
   `courseMode: "Online"`, `educationalLevel`, `provider`, `instructor` — these unlock
   Google's course rich results), `VideoObject` per lecture + `BreadcrumbList` on module
   pages.
5. **Replace the 6 MB GIF logo** with a ≤50 KB static WebP/PNG (animated WebP or a tiny
   `<video>` if motion matters). Delete root `logo square.jpeg` and `placeholder-*` files.
6. **Tame the video embeds.** Immediate one-liner: `loading="lazy"` on the iframes. Then
   a thumbnail facade (`lite-youtube-embed` or equivalent) that injects the iframe on
   click — budget real time for keyboard/a11y handling; it's a component, not a one-liner.
7. **Add privacy-friendly analytics now, not later** — otherwise Phase 1's impact is
   unmeasurable. GoatCounter (free, no consent banner needed) or Plausible; one script
   tag in the layout.
8. **GitHub repo metadata + honest README**: description, homepage URL, topics
   (`deep-learning`, `pytorch`, `course-materials`, `uva`, …) on `dl-course-site`;
   rewrite README to describe the real project for a public-learner/collaborator reader
   (the current one is v0 template boilerplate with `your-username` links).
9. **YouTube ↔ site cross-linking**: create **one** course playlist ordered Module 1→12
   (one playlist, not per-phase — splitting fragments the path), add the module-page URL
   to every video description, link the playlist from the homepage hero.
10. **Submit the site + sitemap in Google Search Console.** This is the step that
    actually flips indexing.

**Measure**: Search Console impressions (expect movement in 2–4 weeks), analytics
baseline, Lighthouse before/after (the GIF + facade work should move LCP dramatically;
set the target after measuring, don't pre-commit to a number).

### Phase 2 — Make every module a complete, consistent hub (~1–2 weeks of content wiring)

11. **Extend `ModuleData`** with `objectives: string[]`, `estimatedTime?: string`, and
    `homework?: { description, colabUrl?, hidden?: boolean }`. Objectives are already
    written — lift them from the Syllabus design tables (lines 344–561). `estimatedTime`
    can start as your gut estimate ("≈6 h: 2 video + 2 reading + 2 coding") and be
    corrected by analytics later. The `hidden` flag replaces the delete-the-link-each-
    semester pattern, preserving history.
12. **D2L links, honestly scoped.** The reference strings are inconsistent ("2.3;
    3.1.4", "Ch. 7", "Chapter 11 up to 11.5") and d2l.ai has stable URLs per *section*
    page, not per subsection — so this is a hand-built lookup table, not a parser.
    Pragmatic plan: normalize `d2lReference` into structured entries
    `{ label: "3.1.4", url: <section page URL> }` linking at section level (subsection →
    parent section page). ~30–40 distinct references across 10 modules; a few hours of
    careful mapping, M effort. Add the d2l.ai URLs to the CI link checker (Phase 4) so
    upstream drift gets caught.
13. **Publish *your* slides for Modules 1–10 — copyright-aware.** Do not blanket-publish
    the local PDFs: Module folders mix your decks with third-party materials (Nielsen
    book chapter, Kleinberg/Nguyen papers, etc.) that can't be rehosted. The publishable
    sources are your beamer decks in `LaTeX/Module */` (the `*S*.tex` files) — compile
    per-module decks to compressed PDFs (Ghostscript `-dPDFSETTINGS=/ebook` typically
    gets lecture decks well under half size; tune and verify on the 11 MB `12.1` deck)
    and add `pdf` fields like Modules 11–12. Third-party readings stay as *links* to
    their canonical sources (arXiv, authors' pages), never rehosted.
14. **Self-checks from your quiz bank.** Every module has a quiz source
    (`LaTeX/Module*/`…`Q*.tex`). Convert 3–5 conceptual questions per module into a
    "Test your understanding" section with hidden/revealable answers (a `<details>`
    element — no JS needed; KaTeX where the questions need math). This completes the
    watch → read → **self-check** → code loop *inside the same hub* — depth without
    fragmentation.
15. **Even out sparse modules (1–7)** to the same minimum: objectives, 2–3 sentence
    framing, D2L links, per-module prerequisite note ("Builds on Modules 1–3"), lecture
    Colabs, homework entry, self-check. Label the intentionally shared notebooks
    explicitly ("Shared notebook for Modules 2–3" — M2/M3 share one Colab URL, M4/M5
    share another) so the reuse reads as design, not error.
16. **Homepage as the front door.** Derive module cards from `module-data.ts` (delete
    the duplicate array in `app/page.tsx`); hero gets: 2–3 sentence course pitch,
    instructor line (photo, one-line bio, lab link), YouTube playlist button, D2L
    textbook callout, and **two equal CTAs: "Start Here" and "Module 1"**.
17. **A `/start-here` page**: what this course is, prerequisites (linear algebra,
    calculus, Python) with the `0- Recap` materials as "Module 0", how to use the course
    (watch → read → self-check → code), suggested pacing (**"~1–2 weeks per module"** —
    dateless rhythm guidance; cheap to write, real value for self-paced learners), and
    environment setup (fold in/merge the existing `/setup`).
18. **An HTML `/syllabus` page** (evergreen parts only: outline, philosophy, textbook,
    grading *structure* without dates), keeping the PDF as a download.
19. **Add video chapters on YouTube** (timestamps in each description). ~2 hours across
    27 videos; one of the highest UX-per-effort wins available, and it lives entirely on
    the channel side.

### Phase 3 — Selective depth (defined done-state, not open-ended)

*Done when: Modules 10–12 (+ Module 3's ablation methodology) have web-native notes, and
site search works.*

20. **Notes only where D2L is thin.** Convert the relevant LaTeX notes for Modules 10–12
    and the Module 3 ablation-methodology material (your original content) to web pages
    with build-time KaTeX (`remark-math` + `rehype-katex`; stays fully static). For
    Modules 1–9, resist the urge: D2L + your slides is the consolidated path.
21. **Client-side search** with Pagefind (runs post-build over the static export; zero
    runtime cost). Caveat: it indexes page text, not PDFs — which is fine once
    objectives/self-checks/notes exist as HTML. Don't bother before Phase 2 lands.
22. **A feedback channel for public learners**: enable GitHub Discussions on the repo and
    link it from the footer/FAQ ("found something unclear?"). Zero infrastructure, you
    moderate at your own pace.
23. **A `/cite` page + footer line**: BibTeX entry for the course (author, title, year,
    URL, institution). 15 minutes; makes the course citable in syllabi and papers.

### Phase 4 — Engineering hygiene (background, any time)

24. **Dependency/component prune**: remove the ~8 unused top-level deps and ~40 dead
    `components/ui/*` files (keep what `module-template.tsx`/`layout.tsx` actually
    import: button, card, badge, breadcrumb, dropdown-menu + their radix deps). Faster
    installs/builds; bundle effect is modest (tree-shaking already helps) — this is
    hygiene, not perf.
25. **CI**: bump Node 18 → 20/22; try dropping `--legacy-peer-deps`; add a link-checker
    step (lychee) covering external links *and* the d2l.ai map; add a Lighthouse CI
    budget so the 6 MB-logo class of regression can't recur.
26. **Small fixes**: footer year (auto from build date, plus "Content current as of
    <semester>"); `enableSystem` for dark mode; skip-to-content link;
    `prefers-reduced-motion` media query; remove `Syllabus.tex` from the site repo
    (canonical lives in `6050/LaTeX/`); delete the empty `app/module/[id]/` dir; add
    `public/llms.txt` (plain-text course outline + license — 15 minutes, makes the
    course legible to AI assistants that learners increasingly ask first).
27. **Licensing clarity**: one footer/`/license` note distinguishing site code & original
    materials (CC BY 4.0) from lecture videos (© you, YouTube terms) and third-party
    readings (their own licenses). Avoids ambiguity once slides are published.
28. **Semester versioning, lightweight**: tag a release per semester (`fall-2025`,
    `spring-2026`) + a short CHANGELOG.md; single `main` branch stays the published
    truth.

### Explicitly out of scope (per your direction)

- **Manim video integration** — separate project; Phase 1's embed work leaves the site
  ready to swap in new videos whenever they exist.
- **Canvas/LMS integration** — Canvas remains the cohort system; the site stays public.
  (The README's "seamless Canvas integration" claim should simply be deleted — it was
  never implemented and isn't needed.)
- **Publishing Zoom session recordings** — they exist locally with transcripts, but
  student-visible recordings raise FERPA questions; not recommended without review.
- **Dated calendar/deadline pages** — semester logistics belong in Canvas; the dateless
  pacing guidance in `/start-here` covers public learners.
- **Custom domain** — optional branding, not required for reach; `github.io` already
  carries strong domain authority. Revisit only if the lab wants one umbrella domain.

---

## 4. Prioritized backlog (impact × effort)

| Priority | Item | Impact | Effort |
|----------|------|--------|--------|
| P0 | Metadata architecture (server layout, unique titles, OG, canonical, `metadataBase`) | High | M |
| P0 | og:image | High | S |
| P0 | sitemap.ts + robots.ts + Search Console submission | High | S |
| P0 | Replace 6 MB GIF logo; delete placeholder/root-jpeg debris | High | S |
| P0 | Lazy/facade YouTube embeds | High | M |
| P0 | JSON-LD (Course w/ rich-result fields, VideoObject, BreadcrumbList) | High | S–M |
| P0 | Analytics (GoatCounter/Plausible) | High | S |
| P0 | GitHub repo metadata + honest README | Med | S–M |
| P0 | One YouTube playlist + video descriptions ↔ site | High | S (manual) |
| P1 | ModuleData: objectives, estimatedTime, homework `hidden` flag | High | M |
| P1 | D2L section-link map (hand-built, ~30–40 refs) | High | M |
| P1 | Compile + publish *your* beamer decks for M1–10 (copyright-aware; compress) | High | M–L |
| P1 | Self-checks from quiz .tex bank (per module, `<details>` + KaTeX) | High | M |
| P1 | Even out Modules 1–7 + label shared notebooks + prereq notes | High | M |
| P1 | Homepage front door + single source of truth | High | M |
| P1 | /start-here (incl. Module 0 Recap + pacing) + /syllabus HTML | High | M |
| P2 | YouTube video chapters (27 videos) | Med–High | S–M (manual) |
| P2 | KaTeX notes for M10–12 + M3 ablation methodology | Med | L |
| P2 | Pagefind search (after Phase 2 content exists) | Med | S–M |
| P2 | GitHub Discussions feedback channel; /cite page | Med | S |
| P3 | Dependency/component prune | Med | S |
| P3 | CI: Node bump, lychee link check (incl. d2l map), Lighthouse budget | Med | S–M |
| P3 | A11y fixes, footer year/"current as of", dark-mode system pref, llms.txt | Low–Med | S |
| P3 | Licensing clarity; semester tags + CHANGELOG | Low | S |

S ≈ ≤half a day · M ≈ 1–3 days · L ≈ a week+ (mostly content conversion)

---

## 5. How we'll know it worked

- **Findability**: site appears for "Shakeri deep learning course" / "DS 6050" queries;
  Search Console shows impressions within ~2–4 weeks of sitemap submission.
- **Baseline → trend**: analytics (installed in Phase 1) gives visitors, top modules,
  YouTube-referral share — the numbers that tell you whether the YouTube↔site loop works.
- **Performance**: re-run Lighthouse after Phase 1; expect mobile ≥ 90 once the GIF and
  eager embeds are gone, then lock that in with the CI budget.
- **Consistency**: every module page answers, above the fold: what you'll learn, what to
  watch, exactly what to read, how to check yourself, what to code.
- **Feedback**: GitHub Discussions gives qualitative signal ("Module 3 unclear") that
  analytics can't.
