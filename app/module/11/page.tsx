import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ModulePager } from "@/components/module-pager"

export const metadata = {
  title: "Module 11 – Prompting, PEFT, and Quantization (Gemma)",
  description: "Slides, required readings, and Gemma fine-tuning resources for Module 11."
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

        {/* Slides */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📑 Slides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Button asChild variant="outline">
                <a href="/dl-course-site/11.1-%20ICL-PromptEng-RAG.pdf" target="_blank" rel="noopener noreferrer">
                  11.1 – ICL, Prompt Engineering, and RAG
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/dl-course-site/11.2%20PEFT.pdf" target="_blank" rel="noopener noreferrer">
                  11.2 – PEFT
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/dl-course-site/11.3-%20Quantization-QLoRA.pdf" target="_blank" rel="noopener noreferrer">
                  11.3 – Quantization and QLoRA
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Required Reading */}
        <Card className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">📚 Required Reading</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Slides</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="/dl-course-site/11.1-%20ICL-PromptEng-RAG.pdf" target="_blank" rel="noopener noreferrer">11.1 – ICL, Prompt Engineering, and RAG</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="/dl-course-site/11.2%20PEFT.pdf" target="_blank" rel="noopener noreferrer">11.2 – PEFT</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="/dl-course-site/11.3-%20Quantization-QLoRA.pdf" target="_blank" rel="noopener noreferrer">11.3 – Quantization and QLoRA</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">ICL, Prompting, and RAG</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2005.14165" target="_blank" rel="noopener noreferrer">Brown et al., Language Models are Few-Shot Learners (GPT-3)</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2201.11903" target="_blank" rel="noopener noreferrer">Wei et al., Chain-of-Thought Prompting</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2203.11171" target="_blank" rel="noopener noreferrer">Wang et al., Self-Consistency Improves CoT Reasoning</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">Lewis et al., Retrieval-Augmented Generation (RAG)</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">PEFT (Parameter-Efficient Fine-Tuning)</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2106.09685" target="_blank" rel="noopener noreferrer">Hu et al., LoRA</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2101.00190" target="_blank" rel="noopener noreferrer">Li & Liang, Prefix-Tuning</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2110.07602" target="_blank" rel="noopener noreferrer">Liu et al., P-Tuning v2</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Quantization and QLoRA</h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2305.14314" target="_blank" rel="noopener noreferrer">Dettmers et al., QLoRA</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2210.17323" target="_blank" rel="noopener noreferrer">Frantar et al., GPTQ</a></li>
                <li><a className="text-[#002862] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44]" href="https://arxiv.org/abs/2306.00978" target="_blank" rel="noopener noreferrer">Lin et al., AWQ</a></li>
              </ul>
            </div>
          </CardContent>
        </Card>

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

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">⟵ Back to Modules Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
