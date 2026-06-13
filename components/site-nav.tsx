"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Coffee, Menu, X, Sun, Moon, Youtube } from "lucide-react"
import { withBasePath } from "@/lib/base-path"
import { siteConfig } from "@/lib/site-config"
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle dark mode"
    >
      <Sun className="h-5 w-5 hidden dark:block" />
      <Moon className="h-5 w-5 block dark:hidden" />
    </button>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="relative transition-colors duration-200 hover:text-[#002862] dark:hover:text-[#7EB5F0] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FFBA69] after:to-[#002862] after:transition-all after:duration-300 hover:after:w-full"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
]

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const logoSrc = withBasePath("/images/logo_transparent.png")

  return (
    <nav className="sticky top-0 z-50 border-b border-white/30 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(35,45,75,0.45)]">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center space-x-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200 hover:text-[#002862] dark:hover:text-[#7EB5F0]"
          >
            <Image
              src={logoSrc}
              alt=""
              width={36}
              height={36}
              priority
              className="h-9 w-9 object-contain"
            />
            <span>Deep Learning</span>
          </Link>
          <div className="hidden items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.youtube.playlist}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
            aria-label="Course playlist on YouTube"
            title="Course playlist on YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <ThemeToggle />
          <a
            href={siteConfig.support}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-200/80 bg-white/55 px-3 text-xs font-semibold text-slate-600 shadow-sm shadow-slate-900/[0.03] transition-colors hover:border-[#FFBA69]/70 hover:bg-[#FFF7EE] hover:text-[#8B4B1E] focus:outline-none focus:ring-2 focus:ring-[#FFBA69]/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-[#FFBA69]/50 dark:hover:bg-[#FFBA69]/10 dark:hover:text-[#FFD8A8]"
            title="Support the course"
            aria-label="Support the course on Buy Me a Coffee"
          >
            <Coffee className="h-4 w-4" aria-hidden="true" />
            <span>Support the course</span>
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/30 dark:border-white/10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.youtube.playlist}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              YouTube Playlist
            </a>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
              <a
                href={siteConfig.support}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-[#FFBA69]/70 hover:bg-[#FFF7EE] hover:text-[#8B4B1E] dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-[#FFBA69]/50 dark:hover:bg-[#FFBA69]/10 dark:hover:text-[#FFD8A8]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Coffee className="h-4 w-4" aria-hidden="true" />
                <span>Support the course</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
