import { withBasePath } from "@/lib/base-path"

export type Reading = {
  label: string
  url: string
}

export type ColabLink = {
  label: string
  url: string
  variant?: "default" | "outline"
}

export type Lecture = {
  title: string
  videoId?: string
  pdf?: string
  description?: string
  colabLinks?: ColabLink[]
  readings?: Reading[]
}

export type ExtraSection = {
  title: string
  icon?: string
  description?: string
  links: ColabLink[]
}

export type ModuleData = {
  moduleNumber: number
  metadata: { title: string; description: string }
  lectures: Lecture[]
  resourceTitle?: string
  d2lReference?: string
  resourceDescription?: string
  homeworkDescription?: string
  colabLinks?: ColabLink[]
  readings?: Reading[]
  pdfPreview?: { title: string; src: string }
  extraSections?: ExtraSection[]
}

export const modules: Record<number, ModuleData> = {
  1: {
    moduleNumber: 1,
    metadata: {
      title: "Module 1 – Introduction to Deep Learning",
      description: "Lecture video and assignments for Module 1 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 1 – From Linear Regression to Neural Networks",
        videoId: "-bdoWPWjyTc",
      },
      {
        title: "Lecture 1.2 – Linear Regression via Neural Networks in Python",
        videoId: "WOFb8EKAy7I",
      },
    ],
    d2lReference: "2.3; 3.1.4; 4.1; 5.1; 12.4",
    resourceDescription:
      "These Colab notebooks contain the lecture codes demonstrated in class and help you with the homework 1. Read the instructions at the top and run the cells in order.",
    colabLinks: [
      { label: "Open Colab Notebook 1", url: "https://colab.research.google.com/drive/1zQoyTDKP37dFEzM8G5aACAcWlnI8Jfre?usp=sharing" },
      { label: "Open Colab Notebook 2", url: "https://colab.research.google.com/drive/1dXLaMnIOQtcBqCZ9LnPiSEpVYmtviRxB?usp=sharing", variant: "outline" },
    ],
  },

  2: {
    moduleNumber: 2,
    metadata: {
      title: "Module 2 – Backpropagation",
      description: "Lecture video and assignments for Module 2 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 2 – Backpropagation",
        videoId: "JcYMZxoxCBA",
      },
      {
        title: "Lecture 2.2 – Coding in PyTorch & Linear Regression with Autograd",
        videoId: "MKh0OtgrVHQ",
      },
    ],
    d2lReference: "2.4; 2.5; 5.3",
    resourceDescription:
      "The Colab notebook contains the lecture code for Module 2 (backpropagation and PyTorch basics). Follow along by running the cells in order.",
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1lNxYvpKIZDtZNdsrG5hq2558DE1voNMu?usp=sharing" },
    ],
  },

  3: {
    moduleNumber: 3,
    metadata: {
      title: "Module 3 – Optimization Foundations & Ablation Methodology",
      description: "Lecture video and assignments for Module 3 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 3 – Optimization Foundations & Ablation Methodology",
        videoId: "V0l6b5R6Vkw",
        description:
          "Before diving into deep multilayer perceptrons, we add regularization (weight decay) and data splits (train/validation). We minimize MSE(y, ŷ) + λ‖θ‖² on the training split and evaluate generalization on the validation split.",
      },
      {
        title: "3.2: Training MLP I",
        videoId: "1H8vhZk8kHo",
      },
      {
        title: "3.3: Training MLP II",
        videoId: "XdzQ5C5NSBw",
      },
    ],
    d2lReference: "3.6–3.7; 12; 19",
    resourceDescription:
      "The Colab notebook contains the lecture code for Module 3 (optimization and training MLPs). Run the cells sequentially as demonstrated in the lecture.",
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1lNxYvpKIZDtZNdsrG5hq2558DE1voNMu?usp=sharing" },
    ],
  },

  4: {
    moduleNumber: 4,
    metadata: {
      title: "Module 4 – Convolutional Neural Networks (CNNs)",
      description: "Lecture video and assignments for Module 4 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 4 – Convolutional Neural Networks (CNNs)",
        videoId: "s6xDEvdz3tY",
      },
      {
        title: "DL4.2 – Coding up your first CNN",
        videoId: "Dprs8jH13GA",
      },
    ],
    d2lReference: "5.6; Ch. 7; 8.1; 14.1",
    resourceDescription:
      "The Colab notebook includes the lecture code for Module 4 (CNNs and a first PyTorch CNN). Use it to reproduce the code demos from lecture.",
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1U487JBOOdJhIV72a9RZl0ASiSnkpX5KJ?usp=sharing" },
    ],
  },

  5: {
    moduleNumber: 5,
    metadata: {
      title: "Module 5 – Advanced CNN Architectures",
      description: "Lecture video and resources for Module 5 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 5 – Modern CNN Architectures and Transfer Learning",
        videoId: "-R64Wg5Sgsc",
      },
    ],
    d2lReference: "5.4.1; 8.2–8.6; 14.2",
    resourceDescription:
      "The Colab notebook contains the lecture code for Module 5 (advanced CNN architectures and transfer learning). Use it to follow along the in-class demos.",
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1U487JBOOdJhIV72a9RZl0ASiSnkpX5KJ?usp=sharing" },
    ],
  },

  6: {
    moduleNumber: 6,
    metadata: {
      title: "Module 6 – Encoder Decoder Architectures",
      description: "Lecture video and resources for Module 6 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 6 – Encoder-Decoder Architectures",
        videoId: "XxePU8jubto",
      },
      {
        title: "Lecture 6.2 – Encoder-Decoder Architectures (Part 2)",
        videoId: "RkOjUjdbKbg",
      },
      {
        title: "Lecture 6.3 – Encoder-Decoder Architectures (Part 3)",
        videoId: "7faFnaelya0",
      },
    ],
    d2lReference: "10.6; 14.10; 14.11",
    resourceDescription:
      "The Colab notebook contains the lecture code for Module 6 (encoder–decoder architectures). Use it to follow along with the in-class demos.",
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1Lq3H1VtkT1IFDNfykULpIPel-9cSXsIt?usp=sharing" },
    ],
  },

  7: {
    moduleNumber: 7,
    metadata: {
      title: "Module 7 – Recurrent Neural Networks",
      description: "Lecture video and resources for Module 7 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 7 – Recurrent Neural Networks",
        videoId: "qyU35PKg_NE",
      },
      {
        title: "Lecture 7.2 – Recurrent Neural Networks (Part 2)",
        videoId: "_2NGDmVNUrM",
      },
      {
        title: "Lecture 7.3 – Recurrent Neural Networks (Part 3)",
        videoId: "Az0K6fyf-X4",
      },
    ],
    d2lReference: "9; 10",
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1RizCNioTF-6u5F-BopXPBefOReV3rSgu?usp=sharing" },
      { label: "Useful decorators in PyTorch (Colab)", url: "https://colab.research.google.com/drive/102yn6vsljzZyx8ypgbqH1t-6EJZzKltK?usp=sharing", variant: "outline" },
    ],
  },

  8: {
    moduleNumber: 8,
    metadata: {
      title: "Module 8 – Attention Mechanism",
      description: "Lecture resources and live coding notebook for Module 8 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 8 – Attention Mechanism (Part 1)",
        videoId: "8WBIyiaW7Cc",
      },
      {
        title: "Lecture 8.2 – Attention Mechanism (Part 2)",
        videoId: "oq92FA-_xa4",
      },
      {
        title: "Lecture 8.3 – Implementing Attention in seq2seq Decoder",
        videoId: "nDcFkXXFzJs",
      },
    ],
    resourceTitle: "📚 Resources & Live Coding",
    d2lReference: "Chapter 11 up to 11.5",
    homeworkDescription:
      "Homework 4: Add cross-attention to your prior GRU-based seq2seq model so that the decoder can attend over all encoder hidden states at each decoding step (same translation task). Report and compare accuracy/bleu vs your previous best.",
    pdfPreview: {
      title: "Seq2Seq Cross-Attention Diagram",
      src: withBasePath("/seq2seq_cross_attention.pdf"),
    },
    colabLinks: [
      { label: "Open Live Coding Colab", url: "https://colab.research.google.com/drive/1K04Xu9lqBF3mClD7O97k36qPNS1AMvgO?usp=sharing" },
    ],
  },

  9: {
    moduleNumber: 9,
    metadata: {
      title: "Module 9 – Transformer",
      description: "Lecture videos and resources for Module 9 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "Lecture 9 – Transformer",
        videoId: "N4ePLi42ADk",
      },
      {
        title: "Lecture 9.2 – Transformer (Part 2)",
        videoId: "tG8b2eNm6Gg",
      },
    ],
    d2lReference: "Chapter 11",
    readings: [
      { label: "Vaswani et al., \"Attention Is All You Need\" (NeurIPS 2017)", url: "https://papers.nips.cc/paper_files/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html" },
    ],
    colabLinks: [
      { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1-fMvYAQc0jNl0_JeYhk52UVH575uuan8?usp=sharing" },
    ],
  },

  10: {
    moduleNumber: 10,
    metadata: {
      title: "Module 10 – Transformer Models in Vision and Text",
      description: "Lecture videos, readings, and Colab notebooks for Module 10 of the Deep Learning course by DYNAMO Lab.",
    },
    lectures: [
      {
        title: "10.1 Vision Transformer (ViT)",
        videoId: "JSjPB1a-eS8",
      },
      {
        title: "10.2 Pretrained Transformer Models",
        videoId: "SDHOqinS8dg",
      },
      {
        title: "10.3 Scaling of Decoder Transformer Models",
        videoId: "Q56DkFc05Tg",
      },
    ],
    resourceTitle: "📚 Resources, Readings & Colab",
    d2lReference: "Chapter 11",
    readings: [
      { label: "Vision Transformer (ViT)", url: "https://arxiv.org/abs/2010.11929" },
      { label: "DeiT", url: "https://arxiv.org/abs/2012.12877" },
      { label: "BERT", url: "https://arxiv.org/abs/1810.04805" },
      { label: "T5", url: "https://arxiv.org/abs/1910.10683" },
      { label: "GPT-3", url: "https://arxiv.org/abs/2005.14165" },
      { label: "DeepSeek-V2", url: "https://arxiv.org/abs/2405.07950" },
      { label: "Kaplan et al. (Scaling Laws)", url: "https://arxiv.org/abs/2001.08361" },
      { label: "Chinchilla: Training Compute-Optimal LLMs", url: "https://arxiv.org/abs/2203.15556" },
    ],
    colabLinks: [
      { label: "DeiT Playground (Colab)", url: "https://colab.research.google.com/drive/1qbTNmh_4_6CUiNCKpgvPndiID8RTxx3J?usp=sharing" },
      { label: "Hugging Face Transformer Tutorial (Colab)", url: "https://colab.research.google.com/drive/1kVDgeXvQX5HdsuhrnMAgreCxNtyE9M8d?usp=sharing" },
      { label: "Homework 5: Transformer 2.0 (Colab)", url: "https://colab.research.google.com/drive/16IskVYK7IT8LoyUEegslr0hCUmvBtEpA?usp=sharing", variant: "outline" },
    ],
  },

  11: {
    moduleNumber: 11,
    metadata: {
      title: "Module 11 – Prompting, PEFT, and Quantization (Gemma)",
      description: "Slides, required readings, and Gemma fine-tuning resources for Module 11.",
    },
    lectures: [
      {
        title: "11.1 – ICL, Prompt Engineering, and RAG",
        pdf: withBasePath("/11.1-%20ICL-PromptEng-RAG.pdf"),
        readings: [
          { label: "Brown et al., GPT-3 Few-Shot Learning", url: "https://arxiv.org/abs/2005.14165" },
          { label: "Wei et al., Chain-of-Thought Prompting", url: "https://arxiv.org/abs/2201.11903" },
          { label: "Lewis et al., Retrieval-Augmented Generation", url: "https://arxiv.org/abs/2005.11401" },
        ],
      },
      {
        title: "11.2 – Parameter-Efficient Fine-Tuning (PEFT)",
        pdf: withBasePath("/11.2%20PEFT.pdf"),
        readings: [
          { label: "Hu et al., LoRA", url: "https://arxiv.org/abs/2106.09685" },
          { label: "Li & Liang, Prefix-Tuning", url: "https://arxiv.org/abs/2101.00190" },
          { label: "Liu et al., P-Tuning v2", url: "https://arxiv.org/abs/2110.07602" },
        ],
      },
      {
        title: "11.3 – Quantization & QLoRA",
        pdf: withBasePath("/11.3-%20Quantization-QLoRA.pdf"),
        readings: [
          { label: "Dettmers et al., QLoRA", url: "https://arxiv.org/abs/2305.14314" },
          { label: "Frantar et al., GPTQ", url: "https://arxiv.org/abs/2210.17323" },
          { label: "Lin et al., AWQ", url: "https://arxiv.org/abs/2306.00978" },
        ],
      },
    ],
    extraSections: [
      {
        title: "🧪 Gemma Fine-Tuning",
        description:
          "Gemma model card: ai.google.dev/gemma/docs/core/model_card_3",
        links: [
          { label: "Full Model Fine-Tune (Hugging Face Transformers, Colab)", url: "https://colab.research.google.com/github/google/generative-ai-docs/blob/main/site/en/gemma/docs/core/huggingface_text_full_finetune.ipynb" },
          { label: "Fine-Tune with QLoRA (Hugging Face, Guide)", url: "https://ai.google.dev/gemma/docs/core/huggingface_text_finetune_qlora", variant: "outline" },
          { label: "Fine-Tuning with Gemma Library (Colab)", url: "https://colab.research.google.com/github/google-deepmind/gemma/blob/main/colabs/finetuning.ipynb", variant: "outline" },
        ],
      },
    ],
  },

  12: {
    moduleNumber: 12,
    metadata: {
      title: "Module 12 – Multimodal Learning & GenAI",
      description: "Slides, previews, and Colab notebooks for multimodal learning and generative AI.",
    },
    lectures: [
      {
        title: "12.1 – Multimodal Learning",
        description: "Vision-language alignment, contrastive objectives (e.g., CLIP), and fusion strategies for building multimodal systems.",
        pdf: withBasePath("/12.1%20Multimodal%20Leaning.pdf"),
        colabLinks: [
          { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/10CNVZa0wmGUYatqpVvd0O0cbfk9WyMvB?usp=sharing" },
        ],
        readings: [
          { label: "CLIP (Radford et al., 2021)", url: "https://arxiv.org/abs/2103.00020" },
          { label: "Contrastive Language–Image Pretraining (Jia et al., ALIGN)", url: "https://arxiv.org/abs/2102.05918" },
          { label: "BLIP-2 (Li et al., 2023)", url: "https://arxiv.org/abs/2301.12597" },
        ],
      },
      {
        title: "12.2 – Diffusion Models",
        description: "Noise schedules, forward/reverse processes, and sampling recipes that power modern generative diffusion pipelines.",
        pdf: withBasePath("/12.2%20Diffusion.pdf"),
        colabLinks: [
          { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/111Iux63gpCEKFcTb17aXYo8Y5WEW4Jez?usp=sharing" },
        ],
        readings: [
          { label: "Denoising Diffusion Probabilistic Models (Ho et al., 2020)", url: "https://arxiv.org/abs/2006.11239" },
          { label: "Improved Denoising Diffusion Models (Nichol & Dhariwal, 2021)", url: "https://arxiv.org/abs/2102.09672" },
          { label: "Latent Diffusion Models (Rombach et al., 2022)", url: "https://arxiv.org/abs/2112.10752" },
        ],
      },
      {
        title: "12.3 – Variational Autoencoders (VAE)",
        description: "Latent variable modeling with encoder/decoder pairs, ELBO optimization, and practical VAE architectures.",
        pdf: withBasePath("/12.3%20VAE.pdf"),
        colabLinks: [
          { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1seQyM-w2kQLm48bdyo2uKRGUZPRP42hr?usp=sharing" },
        ],
        readings: [
          { label: "Auto-Encoding Variational Bayes (Kingma & Welling, 2014)", url: "https://arxiv.org/abs/1312.6114" },
          { label: "Variational Inference with Normalizing Flows (Rezende & Mohamed, 2015)", url: "https://arxiv.org/abs/1505.05770" },
          { label: "β-VAE (Higgins et al., 2017)", url: "https://openreview.net/forum?id=Sy2fzU9gl" },
        ],
      },
      {
        title: "12.4 – Generative Adversarial Networks (GAN)",
        description: "Adversarial training, loss variants, and practical tips for stabilizing GANs for image generation.",
        pdf: withBasePath("/12.4%20GAN.pdf"),
        colabLinks: [
          { label: "Open Colab Notebook", url: "https://colab.research.google.com/drive/1Gz5laYgBDddXRfaTgZNq-kswXZFREIb5?usp=sharing" },
        ],
        readings: [
          { label: "Generative Adversarial Nets (Goodfellow et al., 2014)", url: "https://arxiv.org/abs/1406.2661" },
          { label: "Wasserstein GAN (Arjovsky et al., 2017)", url: "https://arxiv.org/abs/1701.07875" },
          { label: "StyleGAN (Karras et al., 2019)", url: "https://arxiv.org/abs/1812.04948" },
        ],
      },
    ],
  },
}
