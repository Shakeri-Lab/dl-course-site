"use client"

import type React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import ShakeriLogo from "@/public/images/logo_transparent.png"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>Deep Learning - Shakeri Lab</title>
        <meta name="description" content="Comprehensive deep learning course from Shakeri Lab at UVA's School of Data Science." />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="deep learning, neural networks, machine learning, AI, course, UVA, Shakeri Lab" />
        <meta name="author" content="Shakeri Lab - University of Virginia" />
        <link rel="icon" type="image/png" sizes="64x64" href={withBasePath("/favicon.png")} />
        <link rel="icon" type="image/png" sizes="256x256" href={withBasePath("/icon.png")} />
        <link rel="apple-touch-icon" href={withBasePath("/icon.png")} />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <nav className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(35,45,75,0.45)]">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
            <div className="flex items-center space-x-10">
              <Link
                href="/"
                className="text-xl font-semibold text-slate-900 transition-colors duration-200 hover:text-[#002862]"
              >
                Deep Learning
              </Link>
              <div className="hidden items-center space-x-6 text-sm font-medium text-slate-600 md:flex">
                <Link
                  href="/resources"
                  className="relative transition-colors duration-200 hover:text-[#002862] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FFBA69] after:to-[#002862] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Resources
                </Link>
                <Link
                  href="/setup"
                  className="relative transition-colors duration-200 hover:text-[#002862] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FFBA69] after:to-[#002862] after:transition-all after:duration-300 hover:after:w-full"
                >
                  Setup
                </Link>
                <Link
                  href="/faq"
                  className="relative transition-colors duration-200 hover:text-[#002862] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#FFBA69] after:to-[#002862] after:transition-all after:duration-300 hover:after:w-full"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:flex">
              <a
                href="https://shakeri-lab.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-500 transition-colors hover:text-[#002862]"
              >
                <Image
                  src={ShakeriLogo}
                  alt="Shakeri Lab logo"
                  width={52}
                  height={52}
                  priority
                  className="h-12 w-12 rounded-full border border-white/60 bg-white/80 p-1 shadow-[0_10px_28px_-18px_rgba(0,40,98,0.45)]"
                />
                <span className="text-left leading-tight">
                  Shakeri Lab
                  <span className="block text-[0.7rem] tracking-[0.24em] text-slate-400">
                    School of Data Science • UVA
                  </span>
                </span>
              </a>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-[#002862] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/30 bg-white/95 backdrop-blur-xl">
              <div className="px-6 py-4 space-y-3">
                <Link
                  href="/resources"
                  className="block text-sm font-medium text-slate-600 hover:text-[#002862] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/setup"
                  className="block text-sm font-medium text-slate-600 hover:text-[#002862] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Setup
                </Link>
                <Link
                  href="/faq"
                  className="block text-sm font-medium text-slate-600 hover:text-[#002862] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <div className="pt-3 border-t border-slate-200">
                  <a
                    href="https://shakeri-lab.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 hover:text-[#002862] transition-colors"
                  >
                    <Image
                      src={ShakeriLogo}
                      alt="Shakeri Lab logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border border-white/60 bg-white/80 p-1 shadow-sm"
                    />
                    <span className="text-left leading-tight">
                      Shakeri Lab
                      <span className="block text-[0.65rem] tracking-[0.2em] text-slate-400">
                        School of Data Science • UVA
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
        {children}

        {/* Clean Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
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
                <span>•</span>
                <span>School of Data Science</span>
                <span>•</span>
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
                • School of Data Science • University of Virginia. Course materials are proprietary. Redistribution,
                reuse, or citation requires written permission.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
