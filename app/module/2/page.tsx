import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ModulePager } from "@/components/module-pager"

export const metadata = {
  title: "Module 2 – Backpropagation",
  description: "Lecture video and assignments for Module 2 of the Deep Learning course by DYNAMO Lab."
}

export default function ModulePage() {
  return (
    <div className="relative min-h-screen bg-transparent pb-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        {/* Lecture Video */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 2 – Backpropagation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/JcYMZxoxCBA"
                  title="Backpropagation – Lecture 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 2.2 */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 2.2 – Coding in PyTorch &amp; Linear Regression with Autograd</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/MKh0OtgrVHQ"
                  title="DL2.2: Coding in PyTorch & Linear Regression with Autograd"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Lecture Code */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Resources & Lecture Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]">Dive into Deep Learning</a> — D2L: <strong>2.4; 2.5; 5.3</strong>.
            </p>
            <p className="text-slate-600">
              The Colab notebook contains the lecture code for Module 2 (backpropagation and PyTorch basics). Follow along by running the cells in order.
            </p>
            <div className="pt-2">
              <Button asChild>
                <a
                  href="https://colab.research.google.com/drive/1lNxYvpKIZDtZNdsrG5hq2558DE1voNMu?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Colab Notebook
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <ModulePager current={2} />

      </div>
    </div>
  )
}
