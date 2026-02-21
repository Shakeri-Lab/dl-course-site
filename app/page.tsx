"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

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

type ThemeColors = {
  badgeGradient: string
  badgeShadow: string
  tagBackground: string
  tagColor: string
  halo: string
  cardShadow: string
  accentText: string
  labelBorder: string
}

const lightThemes: Record<ModuleCategory | "default", ThemeColors> = {
  fundamentals: {
    badgeGradient: "linear-gradient(135deg, #F9C27A 0%, #F09062 100%)",
    badgeShadow: "0 20px 45px -20px rgba(240, 144, 98, 0.55)",
    tagBackground: "rgba(255, 241, 226, 0.78)",
    tagColor: "#8B4B1E",
    halo: "rgba(240, 144, 98, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(240, 144, 98, 0.55)",
    accentText: "#9B4D20",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  cnn: {
    badgeGradient: "linear-gradient(135deg, #F09062 0%, #EA6C77 100%)",
    badgeShadow: "0 20px 45px -22px rgba(234, 108, 119, 0.55)",
    tagBackground: "rgba(255, 227, 232, 0.78)",
    tagColor: "#8B3D4B",
    halo: "rgba(234, 108, 119, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(234, 108, 119, 0.48)",
    accentText: "#8E3E4C",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  bridge: {
    badgeGradient: "linear-gradient(135deg, #EA6C77 0%, #C26D9F 100%)",
    badgeShadow: "0 20px 45px -22px rgba(194, 109, 159, 0.52)",
    tagBackground: "rgba(244, 221, 236, 0.8)",
    tagColor: "#743B63",
    halo: "rgba(194, 109, 159, 0.24)",
    cardShadow: "0 30px 60px -35px rgba(194, 109, 159, 0.45)",
    accentText: "#7C3E66",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  rnn: {
    badgeGradient: "linear-gradient(135deg, #C26D9F 0%, #7F7DD6 100%)",
    badgeShadow: "0 20px 45px -22px rgba(127, 125, 214, 0.52)",
    tagBackground: "rgba(229, 225, 245, 0.82)",
    tagColor: "#463A8F",
    halo: "rgba(127, 125, 214, 0.24)",
    cardShadow: "0 30px 60px -35px rgba(127, 125, 214, 0.45)",
    accentText: "#4F3EA0",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  attention: {
    badgeGradient: "linear-gradient(135deg, #7F7DD6 0%, #546FE1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(84, 111, 225, 0.5)",
    tagBackground: "rgba(223, 231, 255, 0.82)",
    tagColor: "#2E3FA8",
    halo: "rgba(84, 111, 225, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(84, 111, 225, 0.42)",
    accentText: "#2F3FA8",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  transformer: {
    badgeGradient: "linear-gradient(135deg, #546FE1 0%, #2E77D1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(46, 119, 209, 0.5)",
    tagBackground: "rgba(215, 232, 255, 0.82)",
    tagColor: "#1F4D8C",
    halo: "rgba(46, 119, 209, 0.2)",
    cardShadow: "0 30px 60px -35px rgba(46, 119, 209, 0.4)",
    accentText: "#225AA1",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  advanced: {
    badgeGradient: "linear-gradient(135deg, #2E77D1 0%, #1B6FA9 100%)",
    badgeShadow: "0 20px 45px -22px rgba(27, 111, 169, 0.5)",
    tagBackground: "rgba(212, 243, 243, 0.8)",
    tagColor: "#0B4E63",
    halo: "rgba(27, 111, 169, 0.22)",
    cardShadow: "0 30px 60px -35px rgba(27, 111, 169, 0.38)",
    accentText: "#0F4D63",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  upcoming: {
    badgeGradient: "linear-gradient(135deg, rgba(208, 213, 221, 0.95) 0%, rgba(148, 163, 184, 0.95) 100%)",
    badgeShadow: "0 18px 40px -24px rgba(148, 163, 184, 0.4)",
    tagBackground: "rgba(226, 232, 240, 0.85)",
    tagColor: "#475569",
    halo: "rgba(148, 163, 184, 0.2)",
    cardShadow: "0 30px 60px -35px rgba(100, 116, 139, 0.32)",
    accentText: "#475569",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
  default: {
    badgeGradient: "linear-gradient(135deg, #546FE1 0%, #2E77D1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(46, 119, 209, 0.5)",
    tagBackground: "rgba(215, 232, 255, 0.82)",
    tagColor: "#1F4D8C",
    halo: "rgba(46, 119, 209, 0.2)",
    cardShadow: "0 30px 60px -35px rgba(46, 119, 209, 0.4)",
    accentText: "#225AA1",
    labelBorder: "1px solid rgba(255,255,255,0.4)",
  },
}

const darkThemes: Record<ModuleCategory | "default", ThemeColors> = {
  fundamentals: {
    badgeGradient: "linear-gradient(135deg, #F9C27A 0%, #F09062 100%)",
    badgeShadow: "0 20px 45px -20px rgba(240, 144, 98, 0.35)",
    tagBackground: "rgba(240, 144, 98, 0.12)",
    tagColor: "#F9C27A",
    halo: "rgba(240, 144, 98, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(240, 144, 98, 0.25)",
    accentText: "#F9C27A",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  cnn: {
    badgeGradient: "linear-gradient(135deg, #F09062 0%, #EA6C77 100%)",
    badgeShadow: "0 20px 45px -22px rgba(234, 108, 119, 0.35)",
    tagBackground: "rgba(234, 108, 119, 0.12)",
    tagColor: "#F5A0A9",
    halo: "rgba(234, 108, 119, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(234, 108, 119, 0.2)",
    accentText: "#F5A0A9",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  bridge: {
    badgeGradient: "linear-gradient(135deg, #EA6C77 0%, #C26D9F 100%)",
    badgeShadow: "0 20px 45px -22px rgba(194, 109, 159, 0.35)",
    tagBackground: "rgba(194, 109, 159, 0.12)",
    tagColor: "#D9A0C5",
    halo: "rgba(194, 109, 159, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(194, 109, 159, 0.2)",
    accentText: "#D9A0C5",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  rnn: {
    badgeGradient: "linear-gradient(135deg, #C26D9F 0%, #7F7DD6 100%)",
    badgeShadow: "0 20px 45px -22px rgba(127, 125, 214, 0.35)",
    tagBackground: "rgba(127, 125, 214, 0.12)",
    tagColor: "#B5B3E8",
    halo: "rgba(127, 125, 214, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(127, 125, 214, 0.2)",
    accentText: "#B5B3E8",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  attention: {
    badgeGradient: "linear-gradient(135deg, #7F7DD6 0%, #546FE1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(84, 111, 225, 0.35)",
    tagBackground: "rgba(84, 111, 225, 0.12)",
    tagColor: "#9DADE8",
    halo: "rgba(84, 111, 225, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(84, 111, 225, 0.2)",
    accentText: "#9DADE8",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  transformer: {
    badgeGradient: "linear-gradient(135deg, #546FE1 0%, #2E77D1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(46, 119, 209, 0.35)",
    tagBackground: "rgba(46, 119, 209, 0.12)",
    tagColor: "#7EB5F0",
    halo: "rgba(46, 119, 209, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(46, 119, 209, 0.2)",
    accentText: "#7EB5F0",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  advanced: {
    badgeGradient: "linear-gradient(135deg, #2E77D1 0%, #1B6FA9 100%)",
    badgeShadow: "0 20px 45px -22px rgba(27, 111, 169, 0.35)",
    tagBackground: "rgba(27, 111, 169, 0.12)",
    tagColor: "#7ECAE0",
    halo: "rgba(27, 111, 169, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(27, 111, 169, 0.2)",
    accentText: "#7ECAE0",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  upcoming: {
    badgeGradient: "linear-gradient(135deg, rgba(148, 163, 184, 0.6) 0%, rgba(100, 116, 139, 0.6) 100%)",
    badgeShadow: "0 18px 40px -24px rgba(148, 163, 184, 0.2)",
    tagBackground: "rgba(148, 163, 184, 0.1)",
    tagColor: "#94A3B8",
    halo: "rgba(148, 163, 184, 0.1)",
    cardShadow: "0 20px 50px -30px rgba(100, 116, 139, 0.15)",
    accentText: "#94A3B8",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
  default: {
    badgeGradient: "linear-gradient(135deg, #546FE1 0%, #2E77D1 100%)",
    badgeShadow: "0 20px 45px -22px rgba(46, 119, 209, 0.35)",
    tagBackground: "rgba(46, 119, 209, 0.12)",
    tagColor: "#7EB5F0",
    halo: "rgba(46, 119, 209, 0.15)",
    cardShadow: "0 20px 50px -30px rgba(46, 119, 209, 0.2)",
    accentText: "#7EB5F0",
    labelBorder: "1px solid rgba(255,255,255,0.12)",
  },
}

const categoryLabels: Record<ModuleCategory, string> = {
  fundamentals: "Foundations",
  cnn: "CNN Architectures",
  bridge: "Encoder \u2022 Decoder",
  rnn: "Sequence Models",
  attention: "Attention",
  transformer: "Transformers",
  advanced: "Modern LLM Stack",
  upcoming: "In Development",
}

const courseModules: CourseModule[] = [
  { id: 1, title: "Introduction to Deep Learning", description: "Foundations, history, key ideas", topics: ["Neural Networks Basics", "Perceptrons", "History of AI"], category: "fundamentals" },
  { id: 2, title: "Backpropagation", description: "Backpropagation powers modern training", topics: ["Backpropagation", "Gradient Descent", "Activations"], category: "fundamentals" },
  { id: 3, title: "Optimization Foundations & Ablation Methodology", description: "Optimization strategy and ablation workflow", topics: ["Optimizers", "LR Schedules", "Regularization"], category: "fundamentals" },
  { id: 4, title: "Convolutional Neural Networks", description: "CNNs for visual understanding", topics: ["Convolution", "Pooling", "Vision Models"], category: "cnn" },
  { id: 5, title: "Advanced CNN Architectures", description: "Next-gen CNN design patterns", topics: ["ResNet", "DenseNet", "EfficientNet"], category: "cnn" },
  { id: 6, title: "Encoder Decoder Architectures", description: "Encoder\u2013decoder design patterns", topics: ["Seq2Seq", "Encoder\u2013Decoder", "U-Net"], category: "bridge" },
  { id: 7, title: "Recurrent Neural Networks", description: "RNNs, LSTMs, sequential data", topics: ["RNN Basics", "LSTM", "GRU"], category: "rnn" },
  { id: 8, title: "Attention Mechanism", description: "Attention concepts, Q-K-V, scaling", topics: ["Attention Basics", "Q-K-V", "Scaled Dot-Product"], category: "attention" },
  { id: 9, title: "Transformer", description: "Transformer building blocks", topics: ["Self-Attention", "Positional Encoding", "Transformer"], category: "transformer" },
  { id: 10, title: "Transformer Models in Vision and Text", description: "Vision + text transformer stack", topics: ["ViT", "BERT/T5/GPT", "Scaling"], category: "transformer" },
  { id: 11, title: "Prompting, PEFT & Quantization", description: "Prompting, PEFT, quantization toolkit", topics: ["Prompting/RAG", "PEFT", "QLoRA"], category: "advanced" },
  { id: 12, title: "Multimodal Learning & GenAI", description: "Vision-language fusion plus diffusion, VAE, and GAN generative pipelines.", topics: ["Multimodal", "Diffusion", "VAE", "GAN"], category: "advanced" },
]

function ModuleCard({ module }: { module: CourseModule }) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const element = cardRef.current
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { setIsVisible(true); observer.unobserve(e.target) } }) },
      { rootMargin: "0px 0px 20% 0px", threshold: 0.05 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const themes = isDark ? darkThemes : lightThemes
  const theme = themes[module.category] ?? themes.default

  return (
    <Card
      ref={cardRef}
      className={cn(
        "module-card reveal-card group relative h-full min-h-[180px] md:min-h-[200px] overflow-hidden border border-white/30 dark:border-white/10 bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl",
        isVisible && "is-visible"
      )}
      style={{ boxShadow: theme.cardShadow }}
    >
      <span className="pointer-events-none absolute -right-20 top-1/3 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: theme.halo }} />
      <span className="pointer-events-none absolute inset-x-8 top-5 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <CardContent className="relative flex h-full flex-col p-5 md:p-6">
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="module-badge relative flex h-12 w-12 items-center justify-center rounded-3xl text-lg font-semibold text-white shadow-lg" style={{ background: theme.badgeGradient, boxShadow: theme.badgeShadow }}>
              {module.id}
              <span className="absolute inset-0 rounded-3xl border border-white/35" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{module.title}</h3>
                <span className="rounded-full bg-white/60 dark:bg-white/10 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.26em]" style={{ color: theme.accentText, border: theme.labelBorder }}>
                  {categoryLabels[module.category]}
                </span>
              </div>
            </div>
          </div>
          {module.topics.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {module.topics.slice(0, 4).map((topic, i) => (
                <Badge key={i} className="rounded-full border border-white/40 dark:border-white/20 px-2.5 py-0.5 text-[0.7rem] font-medium backdrop-blur" style={{ background: theme.tagBackground, color: theme.tagColor }} variant="secondary">
                  {topic}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-end">
          <Link
            href={`/module/${module.id}`}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300/60 dark:border-slate-600/60 bg-white/60 dark:bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FFBA69]/80 hover:to-[#2E77D1]/80 hover:text-[#123C5A]"
          >
            Explore Module
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CoursePage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute right-[5%] top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,186,105,0.28),rgba(255,186,105,0))] dark:bg-[radial-gradient(circle_at_center,rgba(255,186,105,0.1),rgba(255,186,105,0))] blur-3xl" />
      <div className="pointer-events-none absolute left-[8%] top-[55%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,119,209,0.35),rgba(46,119,209,0))] dark:bg-[radial-gradient(circle_at_center,rgba(46,119,209,0.15),rgba(46,119,209,0))] blur-[90px]" />

      <header className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-10 pt-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">Deep Learning</h1>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/syllabus.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600/70 bg-white/60 dark:bg-white/10 px-5 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#FFBA69]/80 hover:to-[#2E77D1]/80 hover:text-[#123C5A]">
            Course Syllabus (PDF)
            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-6">
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courseModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>
    </div>
  )
}
