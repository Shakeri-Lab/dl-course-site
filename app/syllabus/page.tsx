import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Download,
  GraduationCap,
  Layers,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { withBasePath } from "@/lib/base-path"
import { pageMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site-config"

export const metadata = pageMetadata({
  title: "Syllabus",
  description:
    "Fall 2026 syllabus for DS 6050 Deep Learning at UVA: weekly topics, five 100-point assignments, the one-drop homework policy, project milestones, and grading.",
  path: "/syllabus/",
})

const linkClasses =
  "text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:text-[#7EB5F0] dark:hover:text-[#a8d0ff]"

const phases = [
  {
    number: "01",
    name: "Foundations & From-Scratch Understanding",
    modules: "Modules 1–3",
    summary:
      "Build the mathematical foundation, then implement linear models, multilayer perceptrons, and backpropagation from scratch with NumPy. Optimization and ablation methodology become recurring tools rather than one-off topics.",
  },
  {
    number: "02",
    name: "Architectural Innovations & Domain Specialization",
    modules: "Modules 4–9",
    summary:
      "Connect data modality to architecture: CNNs for spatial data, RNNs for sequences, and attention and Transformers for general-purpose modeling. Diagnose the training challenges specific to each family.",
  },
  {
    number: "03",
    name: "Modern Practice & Research Skills",
    modules: "Modules 10–12",
    summary:
      "Study large-scale pretraining, vision transformers, efficient adaptation, and generative modeling while practicing paper reproduction, systematic ablations, and research judgment.",
  },
]

const schedule = [
  { week: 1, module: 1, topic: "From Linear Regression to Neural Networks" },
  { week: 2, module: 2, topic: "Backpropagation" },
  { week: 3, module: 3, topic: "Training MLPs" },
  { week: 4, module: 4, topic: "Convolutional Neural Networks" },
  { week: 5, module: 5, topic: "Advanced CNN Architectures" },
  { week: 6, module: 6, topic: "Encoder Decoder Architectures" },
  { week: 7, module: 7, topic: "Recurrent Neural Networks" },
  { week: 8, module: 8, topic: "Attention Mechanism" },
  { week: 9, module: 9, topic: "Self-Attention and Transformers" },
  { week: 10, module: 10, topic: "Transformer Models" },
  { week: 11, module: 11, topic: "Prompting, PEFT & Quantization" },
  { week: 12, module: 12, topic: "Generative Modeling" },
]

const assignments = [
  {
    name: "Homework 1",
    modules: "Modules 1–2",
    points: "100 points",
    focus: "Foundations & backpropagation",
    detail: "Linear models, gradients, and early autograd practice. The supporting Colab is on Module 1.",
  },
  {
    name: "Homework 2",
    modules: "Modules 4–5",
    points: "100 points",
    focus: "Optimization & CNNs",
    detail: "Training stability, convolutional stacks, and transfer learning. The supporting Colab is on Module 5.",
  },
  {
    name: "Homework 3",
    modules: "Module 7",
    points: "100 points",
    focus: "Sequence-to-sequence learning",
    detail: "Implement and study a recurrent sequence-to-sequence model in the provided Colab.",
  },
  {
    name: "Homework 4",
    modules: "Module 8",
    points: "100 points",
    focus: "Attention",
    detail: "Add cross-attention to a GRU-based sequence-to-sequence model.",
  },
  {
    name: "Homework 5",
    modules: "Module 10",
    points: "100 points",
    focus: "Transformer 2.0",
    detail: "Integrate the course's Transformer concepts in the final programming assignment.",
  },
]

const projectMilestones = [
  { name: "Proposal & literature review", weight: "5%" },
  { name: "Mid-project checkpoint", weight: "10%" },
  { name: "Final deliverables", weight: "25%" },
]

const grading = [
  {
    component: "Programming assignments",
    weight: "40%",
    detail: "Five assignments, each out of 100; grade is the average of your four highest scores (one automatic drop)",
  },
  { component: "Group project", weight: "40%", detail: "Proposal, checkpoint, and final deliverables" },
  { component: "Participation", weight: "20%", detail: "Canvas quizzes and course engagement" },
]

export default function SyllabusPage() {
  return (
    <div className="relative min-h-screen pb-20">
      <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-6 sm:px-6 sm:pt-10">
        <section className="overflow-hidden rounded-3xl border border-white/40 bg-[radial-gradient(circle_at_top_right,rgba(255,186,105,0.30),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.90),rgba(232,241,252,0.78))] p-5 shadow-[0_35px_90px_-50px_rgba(0,40,98,0.75)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_right,rgba(255,186,105,0.15),transparent_40%),linear-gradient(135deg,rgba(17,24,39,0.94),rgba(5,19,40,0.88))] sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <Badge className="mb-4 border-[#FFBA69]/70 bg-[#FFBA69]/20 text-[#6b3b00] hover:bg-[#FFBA69]/20 dark:text-[#ffd9a8]">
                {siteConfig.contentCurrentAsOf}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
                {siteConfig.courseCode}: {siteConfig.courseName}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                A 12-module graduate training camp for building deep-learning systems from first
                principles, diagnosing why they fail, and making defensible engineering and
                research decisions.
              </p>
            </div>
            <Button asChild variant="outline" className="h-11 w-full shrink-0 bg-white/70 sm:w-auto dark:bg-white/10">
              <a href={withBasePath("/syllabus.pdf")} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/60 bg-white/65 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Instructor</p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">Heman Shakeri, PhD</p>
              <a className={`${linkClasses} mt-1 inline-flex max-w-full items-center gap-1 break-all text-sm`} href="mailto:hs9hd@virginia.edu">
                <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                hs9hd@virginia.edu
              </a>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/65 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Teaching assistant</p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">Fokhrul Islam</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">UVA ID: sdh4py</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/65 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Delivery</p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">Asynchronous</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Weekly lectures and readings on Canvas</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/65 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Canonical reading</p>
              <a href={siteConfig.courseBook.url} target="_blank" rel="noopener noreferrer" className={`${linkClasses} mt-2 inline-block font-semibold`}>
                {siteConfig.courseBook.name}
              </a>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Open course book</p>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="purpose-heading">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2E77D1] dark:text-[#7EB5F0]">Course purpose</p>
              <h2 id="purpose-heading" className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                Move beyond surface-level recipes
              </h2>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <p>
                Grand challenges in medical imaging, language, and scientific discovery require
                more than off-the-shelf code. They require quantitative understanding, disciplined
                implementation practice, and the judgment to evaluate trade-offs honestly.
              </p>
              <p>
                By the end of the course, you should be able to reason from mathematical principles,
                build core components from scratch, debug model behavior systematically, and adapt
                those learning strategies to new architectures and research after graduation.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="phases-heading">
          <h2 id="phases-heading" className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
            <Layers className="h-6 w-6 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
            Three learning phases
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {phases.map((phase) => (
              <Card key={phase.number} className="border-white/40 bg-white/70 dark:border-white/10 dark:bg-gray-900/70">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-2xl font-bold text-[#2E77D1]/55 dark:text-[#7EB5F0]/65">{phase.number}</span>
                    <Badge variant="secondary">{phase.modules}</Badge>
                  </div>
                  <CardTitle className="pt-2 text-lg leading-snug dark:text-white">{phase.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{phase.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="calendar-heading">
          <h2 id="calendar-heading" className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
            <CalendarDays className="h-6 w-6 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
            Course calendar
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">One module per week across the 12-week sequence.</p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {schedule.map((item) => (
              <li key={item.week} className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-4 dark:border-white/10 dark:bg-gray-900/70">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  <span>Week {item.week}</span>
                  <span>Module {item.module}</span>
                </div>
                <Link href={`/module/${item.module}`} className={`${linkClasses} mt-3 block font-semibold leading-snug`}>
                  {item.topic}
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12" aria-labelledby="assessment-heading">
          <h2 id="assessment-heading" className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
            <ClipboardCheck className="h-6 w-6 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
            Assessment as learning
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
            Assessment is designed first as guided practice: unit tests, iteration, reflection,
            feedback, and optional peer code review make evaluation a by-product of learning.
          </p>

          <h3 className="mt-7 text-lg font-bold text-slate-900 dark:text-white">Programming assignments</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {assignments.map((assignment) => (
              <div key={assignment.name} className="min-w-0 rounded-2xl border border-white/40 bg-white/70 p-4 dark:border-white/10 dark:bg-gray-900/70">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="font-semibold text-slate-900 dark:text-white">{assignment.name}</p>
                  <div className="flex flex-wrap justify-end gap-2">
                    <Badge variant="outline">{assignment.modules}</Badge>
                    <Badge className="border-[#FFBA69]/70 bg-[#FFBA69]/20 text-[#6b3b00] hover:bg-[#FFBA69]/20 dark:text-[#ffd9a8]">
                      {assignment.points}
                    </Badge>
                  </div>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#174f95] dark:text-[#7EB5F0]">{assignment.focus}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{assignment.detail}</p>
              </div>
            ))}
          </div>

          <section
            className="mt-5 overflow-hidden rounded-3xl border border-[#FFBA69]/60 bg-white/75 shadow-[0_24px_60px_-48px_rgba(0,40,98,0.9)] dark:border-[#FFBA69]/25 dark:bg-gray-900/75"
            aria-labelledby="homework-policy-heading"
          >
            <div className="bg-[radial-gradient(circle_at_top_right,rgba(255,186,105,0.28),transparent_48%),linear-gradient(135deg,rgba(0,40,98,0.08),rgba(255,255,255,0.45))] p-5 dark:bg-[radial-gradient(circle_at_top_right,rgba(255,186,105,0.14),transparent_48%),linear-gradient(135deg,rgba(46,119,209,0.13),rgba(15,23,42,0.25))] sm:p-6">
              <Badge className="border-[#FFBA69]/70 bg-[#FFBA69]/20 text-[#6b3b00] hover:bg-[#FFBA69]/20 dark:text-[#ffd9a8]">
                Homework policy
              </Badge>
              <h3 id="homework-policy-heading" className="mt-3 text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                One automatic drop, equal weight
              </h3>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-slate-700 dark:text-slate-200">
                Every homework is graded out of <strong>100 points</strong>, so all five carry exactly the same weight.
                Your homework grade is the <strong>average of your four highest scores out of five</strong>: one homework
                is dropped for everyone, automatically.
              </p>
            </div>

            <div className="grid gap-px bg-slate-200/80 dark:bg-white/10 md:grid-cols-3">
              <div className="bg-white/80 p-5 dark:bg-gray-900/90">
                <p className="font-semibold text-slate-900 dark:text-white">The drop is the skip</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A skipped homework is scored 0 and becomes your drop. If you submit all five, your weakest score is
                  dropped. Everyone is graded on four assignments; there is no separate skip plus drop.
                </p>
              </div>
              <div className="bg-white/80 p-5 dark:bg-gray-900/90">
                <p className="font-semibold text-slate-900 dark:text-white">Nothing is submitted late</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Work not submitted by the deadline is scored 0 and becomes your drop. You do not need to notify us,
                  apologize, or make a request.
                </p>
              </div>
              <div className="bg-white/80 p-5 dark:bg-gray-900/90">
                <p className="font-semibold text-slate-900 dark:text-white">Documented exceptions</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  A second missed homework requires instructor or TA approval before the deadline. If a sudden emergency
                  prevents advance notice, contact us as soon as you are able, with documentation. An approved absence is
                  removed from the calculation, and your automatic drop still applies.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200/80 bg-[#002862]/5 p-5 dark:border-white/10 dark:bg-[#7EB5F0]/10 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#174f95] dark:text-[#7EB5F0]">
                Same benefit for everyone
              </p>
              <p className="mt-2 text-base leading-relaxed text-slate-800 dark:text-slate-100">
                All five count equally. No homework is worth more than another, and <strong>there is nothing to gain by
                choosing which one to skip.</strong>
              </p>
              <div className="mt-4 grid gap-3 lg:grid-cols-2">
                <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-gray-950/35">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">One skipped</p>
                  <p className="mt-1 break-words font-mono text-sm font-semibold text-slate-800 dark:text-slate-100">
                    92, 88, 0, 95, 90 → 91.25
                  </p>
                </div>
                <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-gray-950/35">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">All submitted</p>
                  <p className="mt-1 break-words font-mono text-sm font-semibold text-slate-800 dark:text-slate-100">
                    92, 88, 71, 95, 90 → 91.25
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                In both examples, the lowest score is removed and the remaining four scores are averaged.
              </p>
            </div>
          </section>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <Card className="border-white/40 bg-white/70 dark:border-white/10 dark:bg-gray-900/70">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Module quizzes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  Short 10–15 question, open-book checks focus on understanding rather than
                  memorization. Full credit is based on thoughtful completion, with immediate
                  explanatory feedback.
                </p>
                <p className="rounded-xl bg-[#002862]/5 p-3 text-slate-700 dark:bg-[#7EB5F0]/10 dark:text-slate-200">
                  Quizzes are delivered in Canvas; quiz questions are not published on the public module pages.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/40 bg-white/70 dark:border-white/10 dark:bg-gray-900/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg dark:text-white">
                  <Users className="h-5 w-5 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
                  Group grand challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Teams apply course concepts to a real problem through three feedback-centered milestones.
                </p>
                <ol className="mt-3 space-y-2">
                  {projectMilestones.map((milestone, index) => (
                    <li key={milestone.name} className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/70 p-3 dark:border-white/10">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#002862] text-xs font-bold text-white dark:bg-[#7EB5F0] dark:text-[#07182d]">
                        {index + 1}
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-medium text-slate-800 dark:text-slate-100">{milestone.name}</span>
                      <Badge variant="outline" className="shrink-0">{milestone.weight}</Badge>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="grading-heading">
          <h2 id="grading-heading" className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
            <GraduationCap className="h-6 w-6 text-[#002862] dark:text-[#7EB5F0]" aria-hidden="true" />
            Grading
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Homework deadlines, the automatic drop, and excused absences follow the homework policy above.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {grading.map((item) => (
              <div key={item.component} className="rounded-2xl border border-white/40 bg-white/70 p-5 dark:border-white/10 dark:bg-gray-900/70">
                <p className="text-3xl font-bold text-[#174f95] dark:text-[#7EB5F0]">{item.weight}</p>
                <p className="mt-2 font-semibold text-slate-900 dark:text-white">{item.component}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-5 dark:border-emerald-400/20 dark:bg-emerald-950/20 sm:p-6" aria-labelledby="integrity-heading">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
            <div>
              <h2 id="integrity-heading" className="text-lg font-bold text-slate-900 dark:text-white">Professional and academic integrity</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                All work must comply with the UVA Honor System. Individual assignments must be
                original work; conceptual discussion is encouraged, and external code, ideas, and
                resources must be cited. Include the honor pledge with relevant submissions.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={siteConfig.courseBook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-5 py-2.5 text-center text-sm font-semibold text-slate-800 transition-colors hover:border-[#2E77D1] hover:text-[#174f95] dark:border-slate-600/70 dark:bg-white/10 dark:text-slate-200 dark:hover:text-[#7EB5F0]"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Open the course book
          </a>
          <Link
            href="/start-here"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFBA69] to-[#2E77D1] px-6 py-2.5 text-center text-sm font-semibold text-[#0B2545] shadow-lg shadow-[#2E77D1]/20 transition-transform duration-300 hover:scale-[1.02]"
          >
            Start the course
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
