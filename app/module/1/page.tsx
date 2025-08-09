import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 1 – Introduction to Deep Learning",
  description: "Lecture video and assignments for Module 1 of the Deep Learning course by DYNAMO Lab."
}

export default function ModuleOnePage() {
  const githubRoot = "https://github.com/Shakeri-Lab/dl-course-site/tree/main/assignments/module1"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Modules
          </Link>
        </div>

        {/* Lecture Video */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 1 – From Linear Regression to Neural Networks</CardTitle>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/Shakeri-Lab/dl-course/tree/main/module-1" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Lecture Notes &amp; HW Notebook
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/bpvleOXJrk8"
                  title="From Linear Regression to Neural Networks – Lecture 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Lecture Video: DL1.2 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">DL1.2 – Linear Regression via Neural Networks in Python (From-Scratch Guide to Module 1)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/WOFb8EKAy7I"
                  title="DL1.2: Linear Regression via Neural Networks in Python | From-Scratch Guide to Module 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Homework */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Resources & Homework</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dive into Deep Learning</a> – from Section 3 up to&nbsp;
              <strong>Section 5.2 "Implementation of Multilayer Perceptrons"</strong>.
            </p>
            <p className="text-gray-700">
              Homework covers different parts (plus a bonus) inside the single notebook. Read the instructions at the top of the notebook and complete the parts in order.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}