import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 5 – Advanced CNN Architectures",
  description: "Lecture video and resources for Module 5 of the Deep Learning course by DYNAMO Lab."
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

        {/* Lecture Video 5.1 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 5 – Modern CNN Architectures and Transfer Learning</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/-R64Wg5Sgsc"
                  title="Modern CNN Architectures and Transfer Learning"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Lecture Code */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Resources & Lecture Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dive into Deep Learning</a> — Chapter 8.
            </p>
            <p className="text-gray-700">
              The Colab notebook contains the lecture code for Module 5 (advanced CNN architectures and transfer learning). Use it to follow along the in-class demos.
            </p>
            <div className="pt-2">
              <Button asChild>
                <a
                  href="https://colab.research.google.com/drive/1U487JBOOdJhIV72a9RZl0ASiSnkpX5KJ?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Colab Notebook
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline">
                <a
                  href="https://colab.research.google.com/drive/1LtgCpD_nTTPsckJm_urw7wfeXXekVzQu?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Homework 5 on Colab
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8">
          <Link href="/">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">⟵ Back to Modules Menu</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
