"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type ModuleCategory =
  | "fundamentals"
  | "cnn"
  | "bridge"
  | "rnn"
  | "attention"
  | "transformer"
  | "advanced"
  | "upcoming"

type CourseModule = {
  id: number
  title: string
  description: string
  topics: string[]
  category: ModuleCategory
}

const moduleThemes: Record<
  ModuleCategory | "default",
  {
    badgeGradient: string
    badgeShadow: string
    tagBackground: string
    tagColor: string
    halo: string
    cardShadow: string
    accentText: string
  }
> = {
  fundamentals: {
    badgeGradient: "linear-gradient(135deg, #F9C27A 0%, #F09062 100%)",
    badgeShadow: "0 20px 45px -20px rgba(240, 144, 98, 0.55)",
    tagBackground: "rgba(255, 241, 226, 0.78)",
    tagColor: "#8B4B1E",
    halo: "rgba(240, 144, 98, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(240, 144, 98, 0.55)",
    accentText: "#9B4D20",
  },
  cnn: {
    badgeGradient: "linear-gradient(135deg, #F09062 0%, #EA6C77 100%)",
    badgeShadow: "0 20px 45px -22px rgba(234, 108, 119, 0.55)",
    tagBackground: "rgba(255, 227, 232, 0.78)",
    tagColor: "#8B3D4B",
    halo: "rgba(234, 108, 119, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(234, 108, 119, 0.48)",
    accentText: "#8E3E4C",
  },
  bridge: {
    badgeGradient: "linear-gradient(135deg, #EA6C77 0%, #C26D9F 100%)",
    badgeShadow: "0 20px 45px -22px rgba(194, 109, 159, 0.52)",
    tagBackground: "rgba(244, 221, 236, 0.8)",
    tagColor: "#743B63",
    halo: "rgba(194, 109, 159, 0.24)",
    cardShadow: "0 30px 60px -35px rgba(194, 109, 159, 0.45)",
    accentText: "#7C3E66",
  },
  rnn: {
    badgeGradient: "linear-gradient(135deg, #C26D9F 0%, #7F7DD6 100%)",
    badgeShadow: "0 20px 45px -22px rgba(127, 125, 214, 0.52)",
    tagBackground: "rgba(229, 225, 245, 0.82)",
    tagColor: "#463A8F",
    halo: "rgba(127, 125, 214, 0.24)",
    cardShadow: "0 30px 60px -35px rgba(127, 125, 214, 0.45)",
    accentText: "#4F3EA0",
  },
  attention: {
    badgeGradient: "linear-gradient(135deg, #7F7DD6 0%, #546FE1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(84, 111, 225, 0.5)",
    tagBackground: "rgba(223, 231, 255, 0.82)",
    tagColor: "#2E3FA8",
    halo: "rgba(84, 111, 225, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(84, 111, 225, 0.42)",
    accentText: "#2F3FA8",
  },
  transformer: {
    badgeGradient: "linear-gradient(135deg, #546FE1 0%, #2E77D1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(46, 119, 209, 0.5)",
    tagBackground: "rgba(215, 232, 255, 0.82)",
    tagColor: "#1F4D8C",
    halo: "rgba(46, 119, 209, 0.2)",
    cardShadow: "0 30px 60px -35px rgba(46, 119, 209, 0.4)",
    accentText: "#225AA1",
  },
  advanced: {
    badgeGradient: "linear-gradient(135deg, #2E77D1 0%, #1B6FA9 100%)",
    badgeShadow: "0 20px 45px -22px rgba(27, 111, 169, 0.5)",
    tagBackground: "rgba(212, 243, 243, 0.8)",
    tagColor: "#0B4E63",
    halo: "rgba(27, 111, 169, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(27, 111, 169, 0.38)",
    accentText: "#0F4D63",
  },
  upcoming: {
    badgeGradient: "linear-gradient(135deg, rgba(208, 213, 221, 0.95) 0%, rgba(148, 163, 184, 0.95) 100%)",
    badgeShadow: "0 18px 40px -24px rgba(148, 163, 184, 0.4)",
    tagBackground: "rgba(226, 232, 240, 0.85)",
    tagColor: "#475569",
    halo: "rgba(148, 163, 184, 0.2)",
    cardShadow: "0 30px 60px -35px rgba(100, 116, 139, 0.32)",
    accentText: "#475569",
  },
  default: {
    badgeGradient: "linear-gradient(135deg, #546FE1 0%, #2E77D1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(46, 119, 209, 0.5)",
    tagBackground: "rgba(215, 232, 255, 0.82)",
    tagColor: "#1F4D8C",
    halo: "rgba(46, 119, 209, 0.2)",
    cardShadow: "0 30px 60px -35px rgba(46, 119, 209, 0.4)",
    accentText: "#225AA1",
  },
}

const categoryLabels: Record<ModuleCategory, string> = {
  fundamentals: "Foundations",
  cnn: "CNN Architectures",
  bridge: "Encoder • Decoder",
  rnn: "Sequence Models",
  attention: "Attention",
  transformer: "Transformers",
  advanced: "Modern LLM Stack",
  upcoming: "In Development",
}

const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Introduction to Deep Learning",
    description: "Foundations, history, and key concepts",
    topics: ["Neural Networks Basics", "Perceptrons", "History of AI"],
    category: "fundamentals",
  },
  {
    id: 2,
    title: "Backpropagation",
    description: "The algorithm that powers deep learning",
    topics: ["Backpropagation", "Gradient Descent", "Activation Functions"],
    category: "fundamentals",
  },
  {
    id: 3,
    title: "Optimization Foundations & Ablation Methodology",
    description: "Optimization algorithms and experimental design",
    topics: ["Optimizers", "Learning Rate Scheduling", "Regularization"],
    category: "fundamentals",
  },
  {
    id: 4,
    title: "Convolutional Neural Networks",
    description: "CNNs for computer vision applications",
    topics: ["Convolution", "Pooling", "CNN Architectures"],
    category: "cnn",
  },
  {
    id: 5,
    title: "Advanced CNN Architectures",
    description: "ResNet, DenseNet, and modern architectures",
    topics: ["ResNet", "DenseNet", "EfficientNet"],
    category: "cnn",
  },
  {
    id: 6,
    title: "Encoder Decoder Architectures",
    description: "Encoder–decoder design",
    topics: ["Seq2Seq", "Encoder–Decoder", "U-Net"],
    category: "bridge",
  },
  {
    id: 7,
    title: "Recurrent Neural Networks",
    description: "RNNs, LSTMs, and sequence modeling",
    topics: ["RNN Basics", "LSTM", "GRU"],
    category: "rnn",
  },
  {
    id: 8,
    title: "Attention Mechanism",
    description: "Attention, queries-keys-values, scaled dot-product",
    topics: ["Attention Basics", "Q-K-V", "Scaled Dot-Product"],
    category: "attention",
  },
  {
    id: 9,
    title: "Transformer",
    description: "Self-attention, positional encoding, encoder–decoder transformer",
    topics: ["Self-Attention", "Positional Encoding", "Transformer"],
    category: "transformer",
  },
  {
    id: 10,
    title: "Transformer Models in Vision and Text",
    description: "ViT, DeiT, BERT/T5/GPT, scaling laws",
    topics: ["ViT", "BERT/T5/GPT", "Scaling"],
    category: "transformer",
  },
  {
    id: 11,
    title: "Prompting, PEFT & Quantization",
    description: "ICL/Prompting, RAG; LoRA/PEFT; QLoRA & quantization",
    topics: ["Prompting/RAG", "PEFT", "QLoRA"],
    category: "advanced",
  },
  {
    id: 12,
    title: "",
    description: "Under construction",
    topics: [],
    category: "upcoming",
  },
]

function ModuleCard({ module, position }: { module: CourseModule; position: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const theme = moduleThemes[module.category] ?? moduleThemes.default
  const offsets = ["md:mt-0", "md:mt-12 xl:mt-16", "md:-mt-10 xl:-mt-4"]
  const offsetClass = offsets[position % offsets.length]
  const hasContent = Boolean(module.title)
  const displayTitle = hasContent ? module.title : "Coming Soon"

  return (
    <Card
      ref={cardRef}
      className={cn(
        "module-card reveal-card group relative overflow-hidden border border-white/30 bg-white/60 backdrop-blur-2xl",
        offsetClass,
        isVisible && "is-visible"
      )}
      style={{ boxShadow: theme.cardShadow }}
    >
      <span
        className="pointer-events-none absolute -right-20 top-1/3 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: theme.halo }}
      />
      <span className="pointer-events-none absolute inset-x-8 top-5 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <CardContent className="relative flex flex-col gap-6 p-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-6">
            <div
              className="module-badge relative flex h-16 w-16 items-center justify-center rounded-3xl text-2xl font-semibold text-white shadow-lg"
              style={{ background: theme.badgeGradient, boxShadow: theme.badgeShadow }}
            >
              {module.id}
              <span className="absolute inset-0 rounded-3xl border border-white/35" />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold text-slate-900">{displayTitle}</h3>
                <span
                  className="rounded-full bg-white/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: theme.accentText, border: "1px solid rgba(255,255,255,0.4)" }}
                >
                  {categoryLabels[module.category]}
                </span>
              </div>

              <p className="text-base leading-relaxed text-slate-600">{module.description}</p>
            </div>
          </div>

          {module.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {module.topics.slice(0, 4).map((topic, index) => (
                <Badge
                  key={index}
                  className="rounded-full border border-white/40 px-3 py-1 text-xs font-medium backdrop-blur"
                  style={{ background: theme.tagBackground, color: theme.tagColor }}
                  variant="secondary"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {hasContent ? (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#FFBA69]/70 to-[#2E77D1]/70" />
              <span>UVA Dynamo Lab</span>
            </div>
            <Link
              href={`/module/${module.id}`}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/50 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FFBA69]/80 hover:to-[#2E77D1]/80 hover:text-[#123C5A]"
            >
              Explore Module
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              <span className="h-1 w-6 rounded-full bg-gradient-to-r from-slate-300 to-slate-500" />
              <span>Stay Tuned</span>
            </div>
            <span className="rounded-full border border-dashed border-slate-300/70 bg-white/40 px-4 py-2 text-xs font-semibold text-slate-500">
              Materials in progress
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function CoursePage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute right-[5%] top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,186,105,0.28),rgba(255,186,105,0))] blur-3xl" />
      <div className="pointer-events-none absolute left-[8%] top-[55%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,119,209,0.35),rgba(46,119,209,0))] blur-[90px]" />

      <header className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-10 pt-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#FFBA69]/80 shadow-[0_0_8px_rgba(255,186,105,0.8)]" />
          Dynamo Lab • UVA
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          A modern, minimal home for mastering Deep Learning
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Journey from first principles to cutting-edge transformer systems through curated lectures, guided notebooks,
          and pragmatic engineering checklists.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/60 px-5 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FFBA69]/80 hover:to-[#2E77D1]/80 hover:text-[#123C5A]"
          >
            Course Syllabus (PDF)
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="https://canvas.virginia.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#002862] to-[#0B4D63] px-5 py-2 text-sm font-semibold text-white shadow-[0_20px_40px_-24px_rgba(0,40,98,0.6)] transition-all duration-300 hover:shadow-[0_24px_45px_-20px_rgba(0,40,98,0.55)]"
          >
            Access Canvas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-6">
        <div className="pointer-events-none absolute -right-24 top-10 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),rgba(255,255,255,0))] blur-2xl lg:block" />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courseModules.map((module, index) => (
            <ModuleCard key={module.id} module={module} position={index} />
          ))}
        </div>
      </section>
    </div>
  )
}
