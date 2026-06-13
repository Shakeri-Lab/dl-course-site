import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle, Code, ExternalLink, ListChecks, Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site-config"

export const metadata = pageMetadata({
  title: "Start Here",
  description:
    "New to the course? Prerequisites, how each module works, suggested pacing, and where to begin the free DS 6050 deep learning course from UVA.",
  path: "/start-here/",
})

const prerequisites = [
  { name: "Calculus", detail: "multivariable derivatives, the chain rule, and gradient computation" },
  { name: "Linear algebra", detail: "vectors, matrices, eigenvalues, rank, and least squares" },
  { name: "Probability & statistics", detail: "distributions, expectations, maximum likelihood estimation" },
  { name: "Programming", detail: "Python fluency with NumPy; comfort writing and debugging functions" },
  { name: "ML fundamentals", detail: "supervised vs. unsupervised learning, overfitting, train/test splits" },
]

const refreshers = [
  { label: "D2L Preliminaries (Ch. 2): linear algebra, calculus, probability", url: "https://d2l.ai/chapter_preliminaries/index.html" },
  { label: "3Blue1Brown — Essence of Linear Algebra (visual intuition)", url: "https://www.3blue1brown.com/topics/linear-algebra" },
  { label: "3Blue1Brown — Neural Networks series", url: "https://www.3blue1brown.com/topics/neural-networks" },
  { label: "Python/NumPy refresher (D2L appendix style notebooks)", url: "https://d2l.ai/chapter_preliminaries/ndarray.html" },
]

const loop = [
  { step: "Watch", detail: "the module's lecture videos (most are board lectures — have pen and paper ready)." },
  { step: "Read", detail: "the linked Dive into Deep Learning sections — the course textbook, free and open." },
  { step: "Self-check", detail: "answer the \"Test your understanding\" questions before revealing the answers." },
  { step: "Code", detail: "open the module's Colab notebook and run/modify the lecture code yourself." },
]

export default function StartHerePage() {
  return (
    <div className="relative min-h-screen pb-20">
      <div className="mx-auto w-full max-w-4xl px-6 pb-12 pt-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Start here</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Everything on this site is free and self-paced: 12 modules that take you from linear
          regression to transformers and generative AI. This page tells you what to know before
          Module 1 and how to get the most out of the course.
        </p>

        <Card className="mt-8 border border-white/30 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl dark:text-white">
              <ListChecks className="h-5 w-5 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
              What you should already know
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {prerequisites.map((p) => (
                <li key={p.name} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{p.name}:</span> {p.detail}
                  </span>
                </li>
              ))}
            </ul>
            <div className="rounded-lg border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-gray-800/60">
              <p className="font-medium text-slate-800 dark:text-slate-100">Rusty on any of these?</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Spend a few days with these free refreshers before starting — Module 1 will feel much smoother:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-600 dark:text-slate-300">
                {refreshers.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"
                    >
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border border-white/30 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl dark:text-white">
              <BookOpen className="h-5 w-5 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
              How each module works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600 dark:text-slate-300">
              Every module page is a complete, self-contained hub. Work through it in this order:
            </p>
            <ol className="space-y-2">
              {loop.map((item, i) => (
                <li key={item.step} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#002862]/10 text-xs font-bold text-[#002862] dark:bg-[#7EB5F0]/15 dark:text-[#7EB5F0]">
                    {i + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{item.step}</span> — {item.detail}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-slate-600 dark:text-slate-300">
              The textbook for Modules 1–9 is the free{" "}
              <a
                href={siteConfig.textbook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"
              >
                Dive into Deep Learning
              </a>{" "}
              — each module links the exact sections to read. Modules 10–12 cover topics past the
              book (ViT, PEFT, quantization, multimodal, diffusion), so there the lecture slides and
              linked papers are the readings.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-100">Suggested pacing:</span>{" "}
              budget 5–7 focused hours per module, roughly one module every 1–2 weeks. The modules
              build on each other — resist skipping ahead unless the prerequisites note on a module
              page says you&apos;re clear.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 border border-white/30 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl dark:text-white">
              <Code className="h-5 w-5 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
              Set up your environment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-slate-600 dark:text-slate-300">
              The fastest path is Google Colab — free GPU access, nothing to install, and every
              module&apos;s notebook opens directly in it. Prefer working locally? The setup guide
              covers Python, PyTorch, and Jupyter.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">
                  Open Google Colab
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/setup">Local Setup Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/module/1"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFBA69] to-[#2E77D1] px-6 py-2.5 text-sm font-semibold text-[#0B2545] shadow-lg shadow-[#2E77D1]/20 transition-transform duration-300 hover:scale-[1.03]"
          >
            Begin Module 1
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={siteConfig.youtube.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-white/60 dark:bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors hover:bg-[#FF0000]/10 hover:text-[#c4302b] dark:hover:text-[#ff6b66]"
          >
            <Youtube className="h-4 w-4" aria-hidden="true" />
            Full playlist on YouTube
          </a>
        </div>
      </div>
    </div>
  )
}
