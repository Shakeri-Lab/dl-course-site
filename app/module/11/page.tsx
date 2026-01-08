import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ModulePager } from "@/components/module-pager"
import { withBasePath } from "@/lib/base-path"

type Session = {
  id: string
  title: string
  pdf: string
  readings: { label: string; url: string }[]
}

const slides: Session[] = [
  {
    id: "11.1",
    title: "ICL, Prompt Engineering, and RAG",
    pdf: withBasePath("/11.1-%20ICL-PromptEng-RAG.pdf"),
    readings: [
      { label: "Brown et al., GPT-3 Few-Shot Learning", url: "https://arxiv.org/abs/2005.14165" },
      { label: "Wei et al., Chain-of-Thought Prompting", url: "https://arxiv.org/abs/2201.11903" },
      { label: "Lewis et al., Retrieval-Augmented Generation", url: "https://arxiv.org/abs/2005.11401" },
    ],
  },
  {
    id: "11.2",
    title: "Parameter-Efficient Fine-Tuning (PEFT)",
    pdf: withBasePath("/11.2%20PEFT.pdf"),
    readings: [
      { label: "Hu et al., LoRA", url: "https://arxiv.org/abs/2106.09685" },
      { label: "Li & Liang, Prefix-Tuning", url: "https://arxiv.org/abs/2101.00190" },
      { label: "Liu et al., P-Tuning v2", url: "https://arxiv.org/abs/2110.07602" },
    ],
  },
  {
    id: "11.3",
    title: "Quantization & QLoRA",
    pdf: withBasePath("/11.3-%20Quantization-QLoRA.pdf"),
    readings: [
      { label: "Dettmers et al., QLoRA", url: "https://arxiv.org/abs/2305.14314" },
      { label: "Frantar et al., GPTQ", url: "https://arxiv.org/abs/2210.17323" },
      { label: "Lin et al., AWQ", url: "https://arxiv.org/abs/2306.00978" },
    ],
  },
]

export const metadata = {
  title: "Module 11 – Prompting, PEFT, and Quantization (Gemma)",
  description: "Slides, required readings, and Gemma fine-tuning resources for Module 11."
}

export default function ModulePage() {
  return (
    <div className="relative min-h-screen bg-transparent pb-20">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        {slides.map((session) => (
          <Card key={session.id} className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
            <CardHeader>
              <CardTitle className="text-2xl">{session.id} – {session.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="text-slate-600 font-medium mb-2">Slide preview</p>
                <div className="rounded-lg border border-white/60 bg-white/80 shadow-inner overflow-hidden">
                  <iframe
                    src={session.pdf}
                    title={`${session.title} slides`}
                    className="h-96 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href={session.pdf} target="_blank" rel="noopener noreferrer">
                    View Slides
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>

              <div>
                <p className="text-slate-600 font-medium mb-2">Suggested reading</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-600">
                  {session.readings.map((reading) => (
                    <li key={reading.url}>
                      <a
                        href={reading.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]"
                      >
                        {reading.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}


        {/* Gemma Fine-Tuning Colabs */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">🧪 Gemma Fine-Tuning</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Gemma model card: <a href="https://ai.google.dev/gemma/docs/core/model_card_3" target="_blank" rel="noopener noreferrer" className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]">ai.google.dev/gemma/docs/core/model_card_3</a>
            </p>
            <div className="grid gap-2">
              <Button asChild>
                <a href="https://colab.research.google.com/github/google/generative-ai-docs/blob/main/site/en/gemma/docs/core/huggingface_text_full_finetune.ipynb" target="_blank" rel="noopener noreferrer">
                  Full Model Fine-Tune (Hugging Face Transformers, Colab)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://ai.google.dev/gemma/docs/core/huggingface_text_finetune_qlora" target="_blank" rel="noopener noreferrer">
                  Fine-Tune with QLoRA (Hugging Face, Guide)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://colab.research.google.com/github/google-deepmind/gemma/blob/main/colabs/finetuning.ipynb" target="_blank" rel="noopener noreferrer">
                  Fine-Tuning with Gemma Library (Colab)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <ModulePager current={11} />

      </div>
    </div>
  )
}
