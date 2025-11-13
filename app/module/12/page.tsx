import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

import { ModulePager } from "@/components/module-pager"

type Reading = {
  label: string
  url: string
}

type Session = {
  id: string
  title: string
  description: string
  pdf: string
  notebook: string
  readings: Reading[]
}

const sessions: Session[] = [
  {
    id: "12.1",
    title: "Multimodal Learning",
    description:
      "Vision-language alignment, contrastive objectives (e.g., CLIP), and fusion strategies for building multimodal systems.",
    pdf: "/dl-course-site/12.1%20Multimodal%20Leaning.pdf",
    notebook: "https://colab.research.google.com/drive/10CNVZa0wmGUYatqpVvd0O0cbfk9WyMvB?usp=sharing",
    readings: [
      { label: "CLIP (Radford et al., 2021)", url: "https://arxiv.org/abs/2103.00020" },
      { label: "Contrastive Language–Image Pretraining (Jia et al., ALIGN)", url: "https://arxiv.org/abs/2102.05918" },
      { label: "BLIP-2 (Li et al., 2023)", url: "https://arxiv.org/abs/2301.12597" },
    ],
  },
  {
    id: "12.2",
    title: "Diffusion Models",
    description:
      "Noise schedules, forward/reverse processes, and sampling recipes that power modern generative diffusion pipelines.",
    pdf: "/dl-course-site/12.2%20Diffusion.pdf",
    notebook: "https://colab.research.google.com/drive/111Iux63gpCEKFcTb17aXYo8Y5WEW4Jez?usp=sharing",
    readings: [
      { label: "Denoising Diffusion Probabilistic Models (Ho et al., 2020)", url: "https://arxiv.org/abs/2006.11239" },
      { label: "Improved Denoising Diffusion Models (Nichol & Dhariwal, 2021)", url: "https://arxiv.org/abs/2102.09672" },
      { label: "Latent Diffusion Models (Rombach et al., 2022)", url: "https://arxiv.org/abs/2112.10752" },
    ],
  },
  {
    id: "12.3",
    title: "Variational Autoencoders (VAE)",
    description:
      "Latent variable modeling with encoder/decoder pairs, ELBO optimization, and practical VAE architectures.",
    pdf: "/dl-course-site/12.3%20VAE.pdf",
    notebook: "https://colab.research.google.com/drive/1seQyM-w2kQLm48bdyo2uKRGUZPRP42hr?usp=sharing",
    readings: [
      { label: "Auto-Encoding Variational Bayes (Kingma & Welling, 2014)", url: "https://arxiv.org/abs/1312.6114" },
      { label: "Variational Inference with Normalizing Flows (Rezende & Mohamed, 2015)", url: "https://arxiv.org/abs/1505.05770" },
      { label: "β-VAE (Higgins et al., 2017)", url: "https://openreview.net/forum?id=Sy2fzU9gl" },
    ],
  },
  {
    id: "12.4",
    title: "Generative Adversarial Networks (GAN)",
    description:
      "Adversarial training, loss variants, and practical tips for stabilizing GANs for image generation.",
    pdf: "/dl-course-site/12.4%20GAN.pdf",
    notebook: "https://colab.research.google.com/drive/1Gz5laYgBDddXRfaTgZNq-kswXZFREIb5?usp=sharing",
    readings: [
      { label: "Generative Adversarial Nets (Goodfellow et al., 2014)", url: "https://arxiv.org/abs/1406.2661" },
      { label: "Wasserstein GAN (Arjovsky et al., 2017)", url: "https://arxiv.org/abs/1701.07875" },
      { label: "StyleGAN (Karras et al., 2019)", url: "https://arxiv.org/abs/1812.04948" },
    ],
  },
] as const

export const metadata = {
  title: "Module 12 – Multimodal Learning & GenAI",
  description: "Slides, previews, and Colab notebooks for multimodal learning and generative AI."
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

        {sessions.map((session) => (
          <Card key={session.id} className="mb-12 border border-white/30 bg-white/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]">
            <CardHeader>
              <CardTitle className="text-2xl">{session.id} – {session.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-slate-600">{session.description}</p>

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
                <Button asChild>
                  <a href={session.notebook} target="_blank" rel="noopener noreferrer">
                    Open Colab Notebook
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

        <ModulePager current={12} />

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline">⟵ Back to Modules Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
