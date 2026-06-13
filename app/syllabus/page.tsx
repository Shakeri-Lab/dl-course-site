import Link from "next/link"
import { ArrowRight, Download, GraduationCap, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { pageMetadata } from "@/lib/metadata"
import { modules } from "@/lib/module-data"
import { moduleExtras } from "@/lib/module-extras"
import { siteConfig } from "@/lib/site-config"
import { withBasePath } from "@/lib/base-path"

export const metadata = pageMetadata({
  title: "Syllabus",
  description:
    "Course structure, learning phases, module outline, textbook, and grading philosophy for DS 6050 Deep Learning at UVA's School of Data Science.",
  path: "/syllabus/",
})

const phases = [
  {
    name: "Foundations & From-Scratch Understanding",
    modules: "Modules 1–3",
    range: [1, 3],
    summary:
      "Master the mathematical underpinnings and implement core algorithms from scratch with NumPy: linear models, neural networks, and backpropagation — plus the optimization foundations and ablation methodology that recur throughout the course.",
  },
  {
    name: "Architectural Innovations & Domain Specialization",
    modules: "Modules 4–9",
    range: [4, 9],
    summary:
      "How data modalities drive architecture: CNNs for spatial data, RNNs for sequences, attention and Transformers for universal modeling. Each module revisits the optimization challenges unique to that architecture.",
  },
  {
    name: "Modern Practice & Research Skills",
    modules: "Modules 10–12",
    range: [10, 12],
    summary:
      "Contemporary practice: vision transformers, large-scale pretraining, parameter-efficient fine-tuning and quantization, and generative models (multimodal, diffusion, VAEs, GANs).",
  },
]

const grading = [
  {
    component: "Programming assignments",
    weight: "40%",
    detail:
      "Five assignments that progressively build implementation skill: linear models from scratch, MLPs & backpropagation, CNNs, sequence models, and attention & transformers.",
  },
  {
    component: "Group project",
    weight: "40%",
    detail:
      "A multi-phase grand challenge with formative milestones — proposal & literature review, mid-project check-in, and final deliverables with documentation and presentations.",
  },
  {
    component: "Participation",
    weight: "20%",
    detail:
      "Module quizzes (open-book, understanding over memorization) and discussion contributions, including leading one module discussion.",
  },
]

export default function SyllabusPage() {
  const moduleList = Object.values(modules).sort((a, b) => a.moduleNumber - b.moduleNumber)

  return (
    <div className="relative min-h-screen pb-20">
      <div className="mx-auto w-full max-w-4xl px-6 pb-12 pt-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Syllabus</h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              {siteConfig.courseCode} · {siteConfig.institution}
            </p>
          </div>
          <Button asChild variant="outline">
            <a href={withBasePath("/syllabus.pdf")} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Syllabus PDF
            </a>
          </Button>
        </div>

        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
          This course takes you from linear models to transformers and generative AI, combining
          rigorous mathematical foundations with from-scratch implementations in NumPy and PyTorch.
          The goal is genuine expertise rather than pattern-matching: the judgment to design, debug,
          and innovate in real AI systems. Lectures are mostly worked on the board; the free{" "}
          <a
            href={siteConfig.textbook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"
          >
            Dive into Deep Learning
          </a>{" "}
          textbook anchors the readings for Modules 1–9.
        </p>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Self-paced learners: dates, submissions, and grades apply to the for-credit UVA offering
          (managed in Canvas). Everything you need to learn — videos, readings, notebooks,
          self-checks — is on this site, free.
        </p>

        <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
          <Layers className="h-6 w-6 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
          Learning phases
        </h2>
        <div className="mt-4 space-y-4">
          {phases.map((phase) => (
            <Card
              key={phase.name}
              className="border border-white/30 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-lg dark:text-white">{phase.name}</CardTitle>
                  <Badge variant="secondary">{phase.modules}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-600 dark:text-slate-300">{phase.summary}</p>
                <ul className="space-y-1">
                  {moduleList
                    .filter((m) => m.moduleNumber >= phase.range[0] && m.moduleNumber <= phase.range[1])
                    .map((m) => (
                      <li key={m.moduleNumber} className="flex items-baseline gap-2 text-sm">
                        <Link
                          href={`/module/${m.moduleNumber}`}
                          className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"
                        >
                          {m.metadata.title}
                        </Link>
                        <span className="text-slate-400 dark:text-slate-500">
                          {moduleExtras[m.moduleNumber]?.estimatedTime}
                        </span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="mt-10 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
          <GraduationCap className="h-6 w-6 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
          How the for-credit course is graded
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Included for context; assessment is designed so the evaluation is a by-product of learning.
        </p>
        <div className="mt-4 space-y-3">
          {grading.map((g) => (
            <div
              key={g.component}
              className="rounded-lg border border-white/30 bg-white/70 p-4 dark:border-white/10 dark:bg-gray-900/70"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-slate-800 dark:text-slate-100">{g.component}</p>
                <Badge variant="outline" className="font-semibold">
                  {g.weight}
                </Badge>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{g.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/start-here"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFBA69] to-[#2E77D1] px-6 py-2.5 text-sm font-semibold text-[#0B2545] shadow-lg shadow-[#2E77D1]/20 transition-transform duration-300 hover:scale-[1.03]"
          >
            New here? Start with the guide
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
