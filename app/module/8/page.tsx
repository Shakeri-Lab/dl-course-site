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

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">⟵ Back to Modules Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
