import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ModulePager } from "@/components/module-pager"
import { withBasePath } from "@/lib/base-path"

export const metadata = {
  title: "Module 8 – Attention Mechanism",
  description: "Lecture resources and live coding notebook for Module 8 of the Deep Learning course by DYNAMO Lab."
}

export default function ModulePage() {
  return (
    <div className="relative min-h-screen bg-transparent pb-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        

        {/* Lecture Video 8.1 */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
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
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
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
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Lecture 8.3 – Implementing Attention in seq2seq Decoder</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/nDcFkXXFzJs"
                  title="Implementing Attention in seq2seq Decoder – Lecture 8.3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources & Live Coding */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Resources & Live Coding</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Recommended reading: <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]">Dive into Deep Learning</a> — D2L: <strong>Chapter 11 up to 11.5</strong>.
            </p>
            <p className="text-slate-600">
              Homework 4: Add <strong>cross-attention</strong> to your prior <strong>GRU-based seq2seq</strong> model so that the decoder can attend over <em>all encoder hidden states</em> at each decoding step (same translation task). Report and compare accuracy/bleu vs your previous best.
            </p>
            <div className="pt-2">
              <p className="text-slate-600 font-medium mb-2">Cross-Attention diagram preview:</p>
              <div className="rounded-lg border overflow-hidden">
                <iframe
                  src={withBasePath("/seq2seq_cross_attention.pdf")}
                  title="Seq2Seq Cross-Attention Diagram"
                  className="w-full h-96"
                />
              </div>
            </div>
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

        <ModulePager current={8} />

      </div>
    </div>
  )
}
