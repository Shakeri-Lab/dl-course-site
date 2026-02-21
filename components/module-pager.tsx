import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type ModulePagerProps = {
  current: number
  total?: number
}

export function ModulePager({ current, total = 12 }: ModulePagerProps) {
  const previous = current > 1 ? current - 1 : null
  const next = current < total ? current + 1 : null

  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-white/40 dark:border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex-1">
        {previous ? (
          <Button
            asChild
            variant="ghost"
            className="justify-start gap-2 text-slate-600 dark:text-slate-300 transition-colors hover:text-[#002862] dark:hover:text-[#7EB5F0]"
          >
            <Link href={`/module/${previous}`}>
              <ArrowLeft className="h-4 w-4" />
              <span>Module {previous}</span>
            </Link>
          </Button>
        ) : (
          <span className="text-sm text-slate-400 dark:text-slate-500">Start of course</span>
        )}
      </div>

      <div className="flex-1 text-right">
        {next ? (
          <Button
            asChild
            variant="ghost"
            className="ml-auto justify-end gap-2 text-slate-600 dark:text-slate-300 transition-colors hover:text-[#002862] dark:hover:text-[#7EB5F0]"
          >
            <Link href={`/module/${next}`}>
              <span>Module {next}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <span className="text-sm text-slate-400 dark:text-slate-500">End of course</span>
        )}
      </div>
    </div>
  )
}
