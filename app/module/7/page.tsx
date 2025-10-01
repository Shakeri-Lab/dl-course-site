import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 7 – Recurrent Neural Networks",
  description: "Lecture video and resources for Module 7 of the Deep Learning course by DYNAMO Lab."
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

        {/* Lecture Video 7.1 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 7 – Recurrent Neural Networks</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/qyU35PKg_NE"
                  title="Recurrent Neural Networks – Lecture 7"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 7.2 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 7.2 – Recurrent Neural Networks (Part 2)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/_2NGDmVNUrM"
                  title="Recurrent Neural Networks – Lecture 7.2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 7.3 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 7.3 – Recurrent Neural Networks (Part 3)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/Az0K6fyf-X4"
                  title="Recurrent Neural Networks – Lecture 7.3"
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
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dive into Deep Learning</a> — D2L: <strong>9; 10</strong>.
            </p>
            <div className="pt-2">
              <Button asChild>
                <a
                  href="https://colab.research.google.com/drive/1RizCNioTF-6u5F-BopXPBefOReV3rSgu?usp=sharing"
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
                  href="https://colab.research.google.com/drive/102yn6vsljzZyx8ypgbqH1t-6EJZzKltK?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Useful decorators in PyTorch (Colab)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
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
