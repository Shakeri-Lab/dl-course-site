import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, ExternalLink, Youtube } from "lucide-react"
import { ModuleGrid } from "@/components/module-grid"
import { CourseJsonLd } from "@/components/structured-data"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function CoursePage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <CourseJsonLd />
      <div className="pointer-events-none absolute right-[5%] top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,186,105,0.28),rgba(255,186,105,0))] dark:bg-[radial-gradient(circle_at_center,rgba(255,186,105,0.1),rgba(255,186,105,0))] blur-3xl" />
      <div className="pointer-events-none absolute left-[8%] top-[55%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,119,209,0.35),rgba(46,119,209,0))] dark:bg-[radial-gradient(circle_at_center,rgba(46,119,209,0.15),rgba(46,119,209,0))] blur-[90px]" />

      <header className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-12 pt-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Deep Learning
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          A free, open graduate course from UVA&apos;s School of Data Science — from linear models and
          backpropagation to transformers and generative AI, taught through video lectures, readings
          from the open{" "}
          <a
            href={siteConfig.textbook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"
          >
            Dive into Deep Learning
          </a>{" "}
          textbook, and hands-on PyTorch notebooks.
        </p>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Taught by{" "}
          <a
            href={siteConfig.instructor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-[#002862] dark:text-slate-200 dark:hover:text-[#7EB5F0]"
          >
            {siteConfig.instructor.name}
          </a>{" "}
          · {siteConfig.institution}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/start-here"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFBA69] to-[#2E77D1] px-6 py-2.5 text-sm font-semibold text-[#0B2545] shadow-lg shadow-[#2E77D1]/20 transition-transform duration-300 hover:scale-[1.03]"
          >
            Start Here
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/module/1"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-white/60 dark:bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FFBA69]/80 hover:to-[#2E77D1]/80 hover:text-[#123C5A]"
          >
            Jump to Module 1
          </Link>
          <a
            href={siteConfig.youtube.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-white/60 dark:bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 hover:border-transparent hover:bg-[#FF0000]/10 hover:text-[#c4302b] dark:hover:text-[#ff6b66]"
          >
            <Youtube className="h-4 w-4" aria-hidden="true" />
            Watch on YouTube
          </a>
          <Link
            href="/syllabus"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-white/60 dark:bg-white/10 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FFBA69]/80 hover:to-[#2E77D1]/80 hover:text-[#123C5A]"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Syllabus
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-6" aria-label="Course modules">
        <ModuleGrid />
      </section>

      <section className="relative mx-auto mt-14 max-w-4xl px-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          All materials stay freely available — no account needed. Course code and original materials
          are open under CC BY 4.0 on{" "}
          <a
            href={siteConfig.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"
          >
            GitHub
            <ExternalLink className="ml-1 inline h-3 w-3" aria-hidden="true" />
          </a>
          .
        </p>
      </section>
    </div>
  )
}
