"use client"

import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import ShakeriLogo from "@/public/images/logo_square.jpeg"
import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { withBasePath } from "@/lib/base-path"
import { ThemeProvider } from "@/components/theme-provider"
import { useTheme } from "next-themes"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Deep Learning - Shakeri Lab</title>
        <meta name="description" content="Comprehensive deep learning course from Shakeri Lab at UVA's School of Data Science." />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="deep learning, neural networks, machine learning, AI, course, UVA, Shakeri Lab" />
        <meta name="author" content="Shakeri Lab - University of Virginia" />
        <link rel="icon" type="image/png" sizes="64x64" href={withBasePath("/favicon.png")} />
        <link rel="apple-touch-icon" href={withBasePath("/favicon.png")} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <nav className="sticky top-0 z-50 border-b border-white/30 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(35,45,75,0.45)]">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
              <div className="flex items-center space-x-10">
                <Link
                  href="/"
                  className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200 hover:text-[#002862] dark:hover:text-[#7EB5F0]"
                >
                  Deep Learning
                </Link>
                <div className="hidden items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
                  <NavLink href="/resources">Resources</NavLink>
                  <NavLink href="/setup">Setup</NavLink>
                  <NavLink href="/faq">FAQ</NavLink>
                </div>
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <ThemeToggle />
                <a
                  href="https://shakeri-lab.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 transition-colors hover:text-[#002862] dark:hover:text-[#7EB5F0]"
                >
                  <Image
                    src={ShakeriLogo}
                    alt="Shakeri Lab logo"
                    width={58}
                    height={58}
                    priority
                    className="h-[58px] w-[58px] object-contain"
                  />
                  <span className="text-left leading-tight">
                    Shakeri Lab
                    <span className="block text-[0.7rem] tracking-[0.24em] text-slate-400 dark:text-slate-500">
                      School of Data Science &bull; UVA
                    </span>
                  </span>
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
                  <Link
                    href="/resources"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/setup"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Setup
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                    <a
                      href="https://shakeri-lab.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 hover:text-[#002862] dark:hover:text-[#7EB5F0] transition-colors"
                    >
                      <Image
                        src={ShakeriLogo}
                        alt="Shakeri Lab logo"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                      />
                      <span className="text-left leading-tight">
                        Shakeri Lab
                        <span className="block text-[0.65rem] tracking-[0.2em] text-slate-400 dark:text-slate-500">
                          School of Data Science &bull; UVA
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>
          {children}

          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Deep Learning</h3>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
                  <span>Developed by</span>
                  <a
                    href="https://shakeri-lab.github.io/"
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
              </div>
              <div className="flex justify-center space-x-6 text-sm">
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
                <Link href="/setup" className="text-gray-300 hover:text-white transition-colors">
                  Setup Guide
                </Link>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-gray-400 text-center">
                <p>
                  &copy; 2025{" "}
                  <a
                    href="https://shakeri-lab.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline underline-offset-2 hover:text-blue-200"
                  >
                    Shakeri Lab
                  </a>{" "}
                  &bull; School of Data Science &bull; University of Virginia. Course materials &copy; 2025 Shakeri Lab. Licensed under{" "}
                  <a
                    href="https://creativecommons.org/licenses/by/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline underline-offset-2 hover:text-blue-200"
                  >
                    CC BY 4.0
                  </a>
                  .
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
