import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ModulePager } from "@/components/module-pager"

export const metadata = {
  title: "Module 3 – Optimization Foundations & Ablation Methodology",
  description: "Lecture video and assignments for Module 3 of the Deep Learning course by DYNAMO Lab."
}

export default function ModulePage() {
  return (
    <div className="relative min-h-screen bg-transparent pb-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        {/* Back */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-500 transition-colors hover:text-[#002862]">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Modules
          </Link>
        </div>

        {/* Lecture Video */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 3 – Optimization Foundations & Ablation Methodology</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/V0l6b5R6Vkw"
                  title="3.1: Coding in PyTorch | Regularized Linear Regression in PyTorch"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-6 space-y-3 text-gray-800">
                <h3 className="text-xl font-semibold">3.1: Coding in PyTorch — Regularized Linear Regression in PyTorch</h3>
                <p>
                  Before we dive into deep multilayer perceptrons (piecewise linear regression), we’ll add two essentials while
                  staying in the linear regression setting:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Regularization in neural nets:</strong> we’ll write a custom loss that <em>explicitly</em> takes the network
                    parameters, adding weight decay to the usual residual term.
                  </li>
                  <li>
                    <strong>Working with data splits:</strong> we’ll hold out a validation set to monitor training and tune hyperparameters
                    without bias.
                  </li>
                </ul>
                <p>
                  Concretely, we’ll minimize <code>MSE(y, ŷ) + λ‖θ‖²</code> on the training split and use the validation split to evaluate
                  generalization in an unbiased way.
                </p>
                <p>
                  Watch on YouTube: <a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://youtu.be/V0l6b5R6Vkw" target="_blank" rel="noopener noreferrer">https://youtu.be/V0l6b5R6Vkw</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 3.2 */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">3.2: Training MLP I</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/1H8vhZk8kHo"
                  title="DL3.2: Training MLP I"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 3.3 */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">3.3: Training MLP II</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/XdzQ5C5NSBw"
                  title="DL3.3: Training MLP II"
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
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]">Dive into Deep Learning</a> — D2L: <strong>3.6–3.7; 12; 19</strong>.
            </p>
            <p className="text-slate-600">
              The Colab notebook contains the lecture code for Module 3 (optimization and training MLPs). Run the cells sequentially as demonstrated in the lecture.
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
        <ModulePager current={3} />

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">⟵ Back to Modules Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
