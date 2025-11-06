import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 10 – Transformer Models in Vision and Text",
  description: "Lecture videos, readings, and Colab notebooks for Module 10 of the Deep Learning course by DYNAMO Lab."
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

        {/* Lecture Video 10.1 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">10.1 Vision Transformer (ViT)</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/JSjPB1a-eS8"
                  title="Transformer in Vision and Text – Lecture 10.1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 10.2 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">10.2 Pretrained Transformer Models</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/SDHOqinS8dg"
                  title="Transformer Models – Lecture 10.2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Video 10.3 */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">10.3 Scaling of Decoder Transformer Models</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/Q56DkFc05Tg"
                  title="Transformer Models – Lecture 10.3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources, Readings & Colab */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Resources, Readings & Colab</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dive into Deep Learning</a> — D2L: <strong>Chapter 11</strong>.
            </p>
            <div className="space-y-1 text-gray-700">
              <p className="font-medium">Optional papers (arXiv):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2010.11929">Vision Transformer (ViT)</a>; <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2012.12877">DeiT</a></li>
                <li><a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/1810.04805">BERT</a>; <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/1910.10683">T5</a>; <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2005.14165">GPT-3</a>; <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2405.07950">DeepSeek-V2</a></li>
                <li><a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2001.08361">Kaplan et al. (Scaling Laws)</a>; <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2203.15556">Chinchilla: Training Compute-Optimal LLMs</a></li>
              </ul>
            </div>

            <div className="pt-2">
              <Button asChild>
                <a
                  href="https://colab.research.google.com/drive/1qbTNmh_4_6CUiNCKpgvPndiID8RTxx3J?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DeiT Playground (Colab)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="pt-2">
              <Button asChild>
                <a
                  href="https://colab.research.google.com/drive/1kVDgeXvQX5HdsuhrnMAgreCxNtyE9M8d?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hugging Face Transformer Tutorial (Colab)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline">
                <a
                  href="https://colab.research.google.com/drive/16IskVYK7IT8LoyUEegslr0hCUmvBtEpA?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Homework Transformer 2.0 (Colab)
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
