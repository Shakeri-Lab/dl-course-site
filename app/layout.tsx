import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
                  Deep Learning
                </Link>
                <div className="hidden md:flex items-center space-x-6 text-sm">
                  <Link href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Resources
                  </Link>
                  <Link href="/setup" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Setup
                  </Link>
                  <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                    FAQ
                  </Link>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button asChild size="sm" variant="outline">
                  <a
                    href="https://github.com/Shakeri-Lab/dl-course-site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </Button>

                <Button asChild size="sm">
                  <a
                    href="https://canvas.instructure.com/courses/your-course"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Canvas</span>
                  </a>
                </Button>
              </div>
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
              <a
                href="https://github.com/Shakeri-Lab/dl-course-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://canvas.instructure.com/courses/your-course"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Canvas
              </a>
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
