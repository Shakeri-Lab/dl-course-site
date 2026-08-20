// Per-module learning metadata and the canonical route through the course book.
// Keep this map aligned with the route published on the book homepage.

export type ModuleCategory =
  | "fundamentals"
  | "cnn"
  | "bridge"
  | "rnn"
  | "attention"
  | "transformer"
  | "advanced"

export type BookChapter = { label: string; url: string }

export type ModuleExtras = {
  category: ModuleCategory
  topics: string[]
  objectives: string[]
  estimatedTime: string
  prereq?: string
  bookChapters?: BookChapter[]
}

const appendixA: BookChapter = {
  label: "Appendix A · Linear Algebra and the SVD",
  url: "https://shakeri-lab.github.io/dl-book/chapters/appendices/a1-linear-algebra.html",
}
const appendixB: BookChapter = {
  label: "Appendix B · Tensors in Practice",
  url: "https://shakeri-lab.github.io/dl-book/chapters/appendices/a2-tensors.html",
}
const appendixC: BookChapter = {
  label: "Appendix C · Numerical Precision and Hardware Efficiency",
  url: "https://shakeri-lab.github.io/dl-book/chapters/appendices/a3-precision-performance.html",
}
const appendixD: BookChapter = {
  label: "Appendix D · Notation",
  url: "https://shakeri-lab.github.io/dl-book/chapters/appendices/a4-notation.html",
}
const appendixE: BookChapter = {
  label: "Appendix E · Statistical Learning Contracts",
  url: "https://shakeri-lab.github.io/dl-book/chapters/appendices/a5-statistical-learning.html",
}

export const moduleExtras: Record<number, ModuleExtras> = {
  1: {
    category: "fundamentals",
    topics: ["Neural Networks Basics", "Perceptrons", "History of AI"],
    objectives: [
      "Compute matrix–vector products and visualize linear transforms",
      "Explain XOR nonlinearity and demonstrate failure → fix with ReLU",
      "Implement a minimal MLP with PyTorch tensors/modules and describe SGD updates",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "None — start here",
    bookChapters: [
      { label: "Ch. 1 · Linear Regression, the Mother Model", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/01-linear-regression.html" },
      { label: "Ch. 2 · Linear Models that Classify", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/02-logistic-softmax.html" },
      { label: "Ch. 3 · Nonlinearity and the MLP", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/03-nonlinearity-mlp.html" },
      { label: "Ch. 4 · Training: Loss and SGD", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/04-training-loss-sgd.html" },
      appendixA,
      appendixB,
      appendixD,
      appendixE,
    ],
  },
  2: {
    category: "fundamentals",
    topics: ["Backpropagation", "Gradient Descent", "Activations"],
    objectives: [
      "Derive gradients for a 1–2 layer network and draw the computation graph",
      "Implement gradient checking and validate layer derivatives",
      "Use torch.autograd to build a tiny autograd toy and inspect backward",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Module 1",
    bookChapters: [
      { label: "Ch. 5 · Backpropagation", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/05-backpropagation.html" },
      appendixB,
      appendixD,
    ],
  },
  3: {
    category: "fundamentals",
    topics: ["Optimizers", "LR Schedules", "Regularization"],
    objectives: [
      "Run an optimizer sweep (SGD/Momentum/Adam) with LR schedules; compare results",
      "Design a 2–3 factor ablation; log all runs with consistent seeds and configs",
    ],
    estimatedTime: "≈5 h · 1.5 h video · 1.5 h reading · 2 h coding",
    prereq: "Builds on Modules 1–2",
    bookChapters: [
      { label: "Ch. 4 · Training: Loss and SGD", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/04-training-loss-sgd.html" },
      { label: "Ch. 6 · Generalization and Inductive Bias", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/06-generalization-inductive-bias.html" },
      { label: "Interlude · Who Trains the Trainer? Learning by Experiment", url: "https://shakeri-lab.github.io/dl-book/chapters/interludes/learning-by-experiment.html" },
      appendixB,
      appendixD,
      appendixE,
    ],
  },
  4: {
    category: "cnn",
    topics: ["Convolution", "Pooling", "Vision Models"],
    objectives: [
      "Show MLP spatial limits (shifted inputs) vs a simple CNN",
      "Implement convolutional layers and train a small CNN",
      "Apply augmentation and dropout; run a brief augmentation ablation",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–3",
    bookChapters: [
      { label: "Ch. 6 · Generalization and Inductive Bias", url: "https://shakeri-lab.github.io/dl-book/chapters/part1/06-generalization-inductive-bias.html" },
      { label: "Ch. 7 · Filters and Convolution", url: "https://shakeri-lab.github.io/dl-book/chapters/part2/07-filters-convolution.html" },
      { label: "Ch. 8 · CNNs: Making Filters Learnable", url: "https://shakeri-lab.github.io/dl-book/chapters/part2/08-cnn.html" },
      appendixB,
      appendixD,
      appendixE,
    ],
  },
  5: {
    category: "cnn",
    topics: ["ResNet", "DenseNet", "EfficientNet"],
    objectives: [
      "Inspect gradient flow; compare networks with/without BatchNorm",
      "Implement a ResNet block; reproduce a mini-ResNet training",
      "Fine-tune a pretrained model; summarize efficiency trade-offs (e.g., MobileNet)",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–4",
    bookChapters: [
      { label: "Ch. 9 · Modern CNNs and Transfer Learning", url: "https://shakeri-lab.github.io/dl-book/chapters/part2/09-modern-cnns-transfer.html" },
      appendixB,
      appendixC,
      appendixD,
    ],
  },
  6: {
    category: "bridge",
    topics: ["Autoencoders", "PCA", "Encoder–Decoder"],
    objectives: [
      "Implement an autoencoder from scratch; visualize learned representations",
      "Build a CNN encoder-decoder for image tasks",
    ],
    estimatedTime: "≈5 h · 1.5 h video · 1.5 h reading · 2 h coding",
    prereq: "Builds on Modules 1–5",
    bookChapters: [
      { label: "Interlude · Autoencoders—Making PCA Learnable", url: "https://shakeri-lab.github.io/dl-book/chapters/interludes/making-pca-learnable.html" },
      appendixA,
      appendixB,
      appendixD,
    ],
  },
  7: {
    category: "rnn",
    topics: ["RNN Basics", "LSTM", "GRU"],
    objectives: [
      "Implement char-RNN and visualize gradient flow over time steps",
      "Build LSTM from scratch; run gate ablation studies",
      "Compare LSTM vs GRU performance and computational efficiency",
      "Apply gradient clipping and truncated BPTT; analyze training stability",
    ],
    estimatedTime: "≈7 h · 2.5 h video · 2 h reading · 2.5 h coding",
    prereq: "Builds on Modules 1–6",
    bookChapters: [
      { label: "Ch. 10 · Sequences and Recurrence", url: "https://shakeri-lab.github.io/dl-book/chapters/part3/10-sequences-rnn.html" },
      { label: "Ch. 11 · Encoder–Decoder, Teacher Forcing, Beam Search", url: "https://shakeri-lab.github.io/dl-book/chapters/part3/11-encoder-decoder.html" },
      appendixB,
      appendixD,
    ],
  },
  8: {
    category: "attention",
    topics: ["Attention Basics", "Q-K-V", "Scaled Dot-Product"],
    objectives: [
      "Implement QKV attention; visualize attention weights",
      "Build a toy seq2seq (copy/reverse) with attention; interpret alignments",
      "Run a small ablation on attention variants and report findings",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–7",
    bookChapters: [
      { label: "Ch. 12 · Kernel Regression", url: "https://shakeri-lab.github.io/dl-book/chapters/part4/12-kernel-regression.html" },
      { label: "Ch. 13 · Attention: Making Similarity Learnable", url: "https://shakeri-lab.github.io/dl-book/chapters/part4/13-attention.html" },
      appendixA,
      appendixB,
      appendixD,
    ],
  },
  9: {
    category: "transformer",
    topics: ["Self-Attention", "Positional Encoding", "Transformer"],
    objectives: [
      "Implement a transformer block and train a tiny Transformer",
      "Compare positional encodings; pre- vs post-norm; analyze patterns",
      "Use warmup and dropout; document stability/perf. impacts",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–8",
    bookChapters: [
      { label: "Ch. 14 · Self-Attention and the Transformer", url: "https://shakeri-lab.github.io/dl-book/chapters/part4/14-self-attention-transformer.html" },
      { label: "Interlude · Attention as Test-Time Regression", url: "https://shakeri-lab.github.io/dl-book/chapters/interludes/attention-as-test-time-regression.html" },
      appendixB,
      appendixC,
      appendixD,
    ],
  },
  10: {
    category: "transformer",
    topics: ["ViT", "BERT/T5/GPT", "Scaling", "Test-Time Memory & Control"],
    objectives: [
      "Implement patchify + linear embedding and explain ViT's data-versus-bias trade-off",
      "Contrast BERT, T5, and GPT through their pretraining objectives and attention masks",
      "Explain knowledge distillation and why a CNN teacher can lend useful inductive bias to ViT",
      "Use scaling laws to reason jointly about parameters, training tokens, and compute",
      "Compare KV retention, factorized sufficient statistics, and bounded online state in regression vocabulary; critique test-time planning under a compute-matched rematch",
    ],
    estimatedTime: "≈6.5 h · 2 h video · 20 min frontier outline · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–9",
    bookChapters: [
      { label: "Ch. 15 · BERT and Pretraining", url: "https://shakeri-lab.github.io/dl-book/chapters/part4/15-bert-pretraining.html" },
      { label: "Ch. 16 · Vision Transformers and Scaling", url: "https://shakeri-lab.github.io/dl-book/chapters/part4/16-vit-scaling.html" },
      appendixB,
      appendixC,
      appendixD,
    ],
  },
  11: {
    category: "advanced",
    topics: ["Prompting/RAG", "PEFT", "QLoRA"],
    objectives: [
      "Choose zero-shot, few-shot, or chain-of-thought prompting for a concrete task",
      "Explain how RAG grounds generation and when retrieval is preferable to changing weights",
      "Compare full fine-tuning with LoRA/QLoRA in trainable parameters and memory use",
      "Distinguish instruction tuning, preference learning, and policy optimization as alignment objectives",
      "Use the course decision framework to choose prompting, RAG, PEFT, or quantization",
    ],
    estimatedTime: "≈7 h · 2 h video · 3 h reading · 2 h coding",
    prereq: "Builds on Modules 1–10",
    bookChapters: [
      { label: "Ch. 17 · Prompting, Retrieval, PEFT, and Quantization", url: "https://shakeri-lab.github.io/dl-book/chapters/part5/17-peft-quantization.html" },
      { label: "Ch. 18 · Alignment and RL Fine-Tuning", url: "https://shakeri-lab.github.io/dl-book/chapters/part5/18-alignment.html" },
      appendixB,
      appendixC,
      appendixD,
      appendixE,
    ],
  },
  12: {
    category: "advanced",
    topics: ["Multimodal", "Diffusion", "VAE", "GAN"],
    objectives: [
      "Explain symmetric image–text contrastive learning and audit cross-modal retrieval",
      "Implement a tiny VAE; explore the latent space qualitatively",
      "Train a small GAN; apply simple stability tweaks; assess samples",
      "Explain forward/reverse diffusion and demonstrate sampling",
      "Briefly discuss evaluation metrics and ethical considerations",
    ],
    estimatedTime: "≈8 h · 2.5 h video · 3 h reading · 2.5 h coding",
    prereq: "Builds on Modules 1–11",
    bookChapters: [
      { label: "Ch. 19 · Generative Models: From Codes to Samples", url: "https://shakeri-lab.github.io/dl-book/chapters/part5/19-generative.html" },
      { label: "Ch. 20 · Multimodal Learning: One Space, Two Views", url: "https://shakeri-lab.github.io/dl-book/chapters/part5/20-multimodal.html" },
      appendixA,
      appendixB,
      appendixC,
      appendixD,
      appendixE,
    ],
  },
}
