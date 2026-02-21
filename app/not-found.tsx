import Link from "next/link"
import { Home, BookOpen } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#002862] dark:text-[#7EB5F0] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-2">Page Not Found</h2>
          <p className="text-slate-600 dark:text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#002862] text-white rounded-lg font-medium hover:bg-[#003580] transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <BookOpen size={18} />
            Resources
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Looking for course materials?</p>
          <div className="flex flex-wrap gap-2 justify-center text-sm">
            <Link href="/setup" className="text-[#002862] dark:text-[#7EB5F0] hover:underline">Setup Guide</Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link href="/faq" className="text-[#002862] dark:text-[#7EB5F0] hover:underline">FAQ</Link>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <Link href="/module/1" className="text-[#002862] dark:text-[#7EB5F0] hover:underline">Module 1</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
