import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Deep Learning</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            <span>Developed by</span>
            <a
              href={siteConfig.lab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
            >
              Shakeri Lab
            </a>
            <span>&bull;</span>
            <span>School of Data Science</span>
            <span>&bull;</span>
            <span>University of Virginia</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">Content current as of {siteConfig.contentCurrentAsOf}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/start-here" className="text-gray-300 hover:text-white transition-colors">
            Start Here
          </Link>
          <Link href="/syllabus" className="text-gray-300 hover:text-white transition-colors">
            Syllabus
          </Link>
          <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/setup" className="text-gray-300 hover:text-white transition-colors">
            Setup Guide
          </Link>
          <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
          <a
            href={siteConfig.youtube.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            YouTube Playlist
          </a>
          <a
            href={siteConfig.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-gray-400 text-center">
          <p>
            &copy; {year}{" "}
            <a
              href={siteConfig.lab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline underline-offset-2 hover:text-blue-200"
            >
              Shakeri Lab
            </a>{" "}
            &bull; School of Data Science &bull; University of Virginia. Original course materials licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline underline-offset-2 hover:text-blue-200"
            >
              CC BY 4.0
            </a>
            ; lecture videos &copy; Heman Shakeri; linked readings remain under their own licenses.
          </p>
        </div>
      </div>
    </footer>
  )
}
