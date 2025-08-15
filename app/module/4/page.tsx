import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 4 – Convolutional Neural Networks (CNNs)",
  description: "Lecture video and assignments for Module 4 of the Deep Learning course by DYNAMO Lab."
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

        {/* Lecture Video 4.1 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 4 – Convolutional Neural Networks (CNNs)</CardTitle>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/Shakeri-Lab/dl-course/tree/main/module-4" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Lecture Notes &amp; HW Notebook
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/s6xDEvdz3tY"
                  title="DL4.1: Convolutional Neural Networks (CNNs) | From Flawed MLPs to Modern Computer Vision"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 4.2 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">DL4.2 – Coding up your first CNN</CardTitle>
              <Button asChild variant="outline" size="sm">
                <a href="https://github.com/Shakeri-Lab/dl-course/tree/main/module-4" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Lecture Notes &amp; HW Notebook
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/Dprs8jH13GA"
                  title="DL4.2: Coding up your first CNN"
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
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dive into Deep Learning</a> — <strong>Chapter 7</strong>.
            </p>
            <p className="text-gray-700">
              Homework 4 focuses on implementing and training CNNs for image classification tasks. Complete the exercises in the provided notebook.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
