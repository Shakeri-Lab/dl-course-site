import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 8 – Attention Mechanism",
  description: "Lecture resources and live coding notebook for Module 8 of the Deep Learning course by DYNAMO Lab."
}

export default function ModulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Modules
          </Link>
        </div>

        {/* Resources & Live Coding */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Resources & Live Coding</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dive into Deep Learning</a> — D2L: <strong>Chapter 11 up to 11.5</strong>.
            </p>
            <p className="text-gray-700">
              Homework note: Submit with Module 9 — Add attention to your last seq2seq assignment (same translation task) and compare with your previous best results.
            </p>
            <div className="pt-2">
              <Button asChild>
                <a
                  href="https://colab.research.google.com/drive/1K04Xu9lqBF3mClD7O97k36qPNS1AMvgO?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Live Coding Colab
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 8.1 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 8 – Attention Mechanism (Part 1)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/8WBIyiaW7Cc"
                  title="Attention Mechanism – Lecture 8.1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 8.2 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 8.2 – Attention Mechanism (Part 2)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/oq92FA-_xa4"
                  title="Attention Mechanism – Lecture 8.2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 8.3 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 8.3 – Implementing Attention in seq2seq Decoder</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/_pXUqnVEpJk"
                  title="Implementing Attention in seq2seq Decoder – Lecture 8.3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">⟵ Back to Modules Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
