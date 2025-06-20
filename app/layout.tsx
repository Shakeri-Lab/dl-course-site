import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deep Learning Mastery - Course Materials",
  description: "Comprehensive deep learning course materials and resources",
    generator: 'v0.dev'
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
                <a href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
                  Deep Learning Mastery
                </a>
                <div className="hidden md:flex items-center space-x-6 text-sm">
                  <a href="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Resources
                  </a>
                  <a href="/setup" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Setup
                  </a>
                  <a href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                    FAQ
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button asChild size="sm" variant="outline">
                  <a
                    href="https://github.com/your-username/dl-course-materials"
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
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Deep Learning Mastery</h3>
              <p className="text-gray-300 text-sm max-w-2xl mx-auto">
                Comprehensive course materials for learning deep learning from fundamentals to advanced applications.
                All materials are open source and freely available.
              </p>
            </div>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="/resources" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </a>
              <a href="/setup" className="text-gray-300 hover:text-white transition-colors">
                Setup Guide
              </a>
              <a href="/faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <a
                href="https://github.com/your-username/dl-course-materials"
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
            <div className="border-t border-gray-800 mt-6 pt-6 text-xs text-gray-400">
              <p>&copy; 2024 Deep Learning Mastery. Course materials are open source and freely available.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
