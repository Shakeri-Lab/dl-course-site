import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Deep Learning - DYNAMO Lab Course",
  description: "Comprehensive deep learning course from DYNAMO Lab at UVA - Master neural networks, modern architectures, and real-world applications",
  generator: 'Next.js',
  keywords: ["deep learning", "neural networks", "machine learning", "AI", "course", "UVA", "DYNAMO Lab"],
  authors: [{ name: "DYNAMO Lab - University of Virginia" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
              <span className="h-2 w-2 rounded-full bg-[#FFBA69]/70 shadow-[0_0_10px_rgba(255,186,105,0.6)]" />
              <Image
                src="/images/logo_transparent.png"
                alt="Shakeri Lab logo"
                width={24}
                height={24}
                className="h-6 w-6 rounded-full border border-white/60 bg-white/80 p-0.5 shadow-[0_6px_18px_-10px_rgba(0,40,98,0.45)]"
              />
              <span>Shakeri Lab</span>
            </div>
          </div>
        </nav>
        {children}

        {/* Clean Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Deep Learning</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
                Comprehensive course materials for learning deep learning from fundamentals to advanced applications.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <span>Developed by</span>
                <a 
                  href="https://shakeri-lab.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  DYNAMO Lab
                </a>
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
              <p>&copy; 2025 DYNAMO Lab, University of Virginia. Course materials are open source and freely available.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
