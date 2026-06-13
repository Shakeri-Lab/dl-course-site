import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MathText } from "@/components/math-text"
import type { SelfCheckQuestion } from "@/lib/self-check-data"

// Conceptual questions with hidden-until-clicked answers. Pure HTML
// (<details>/<summary>) — works without JavaScript.
export function SelfCheck({ questions }: { questions: SelfCheckQuestion[] }) {
  if (!questions || questions.length === 0) return null

  return (
    <Card className="mb-12 border border-white/30 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
      <CardHeader>
        <CardTitle className="text-xl dark:text-white">🧠 Test your understanding</CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Try each question before revealing the answer — these mirror the ideas the module quiz checks.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {questions.map((q, index) => (
          <details
            key={index}
            className="group rounded-lg border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-gray-800/60"
          >
            <summary className="cursor-pointer list-none text-slate-800 dark:text-slate-100 marker:content-none">
              <span className="mr-2 font-semibold text-[#002862] dark:text-[#7EB5F0]">Q{index + 1}.</span>
              <MathText text={q.question} />
              {q.choices && q.choices.length > 0 && (
                <ul className="mt-3 ml-7 list-[lower-alpha] space-y-1 pl-4 text-slate-600 dark:text-slate-300">
                  {q.choices.map((choice, i) => (
                    <li key={i}>
                      <MathText text={choice} />
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-2 block text-xs font-medium text-slate-400 group-open:hidden dark:text-slate-500">
                Show answer ▾
              </span>
            </summary>
            <div className="mt-3 border-t border-slate-200/80 pt-3 text-slate-700 dark:border-white/10 dark:text-slate-200">
              <p>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">Answer: </span>
                <MathText text={q.answer} />
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                <MathText text={q.explanation} />
              </p>
            </div>
          </details>
        ))}
      </CardContent>
    </Card>
  )
}
