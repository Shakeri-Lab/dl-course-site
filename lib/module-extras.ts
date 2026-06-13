// Per-module learning metadata. Generated from Syllabus.tex design tables and a
// verified d2l.ai link map (June 2026); edit freely — this file is the source of truth.

export type ModuleCategory =
  | "fundamentals"
  | "cnn"
  | "bridge"
  | "rnn"
  | "attention"
  | "transformer"
  | "advanced"

export type D2lLink = { label: string; url: string }

export type ModuleExtras = {
  category: ModuleCategory
  topics: string[]
  objectives: string[]
  estimatedTime: string
  prereq?: string
  d2lLinks?: D2lLink[]
}

export const moduleExtras: Record<number, ModuleExtras> = {
  1: {
    category: "fundamentals",
    topics: ["Neural Networks Basics", "Perceptrons", "History of AI"],
    objectives: [
      "Compute matrix–vector products and visualize linear transforms",
      "Explain XOR nonlinearity and demonstrate failure → fix with ReLU",
      "Implement a minimal MLP (NumPy/PyTorch) and describe SGD updates",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "None — start here",
    d2lLinks: [
      { label: "§ 2.3 Linear Algebra", url: "https://d2l.ai/chapter_preliminaries/linear-algebra.html" },
      { label: "§ 3.1 Linear Regression", url: "https://d2l.ai/chapter_linear-networks-regression/linear-regression.html" },
      { label: "§ 4.1 Softmax Regression", url: "https://d2l.ai/chapter_linear-networks-classification/softmax-regression.html" },
      { label: "§ 5.1 Multilayer Perceptrons", url: "https://d2l.ai/chapter_multilayer-perceptrons/mlp.html" },
      { label: "§ 12.4 Stochastic Gradient Descent", url: "https://d2l.ai/chapter_optimization-algorithms/sgd.html" },
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
    d2lLinks: [
      { label: "§ 2.4 Calculus", url: "https://d2l.ai/chapter_preliminaries/calculus.html" },
      { label: "§ 2.5 Automatic Differentiation", url: "https://d2l.ai/chapter_preliminaries/autograd.html" },
      { label: "§ 5.3 Forward Propagation, Backward Propagation, and Computational Graphs", url: "https://d2l.ai/chapter_multilayer-perceptrons/backprop.html" },
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
    d2lLinks: [
      { label: "§ 3.6 Generalization", url: "https://d2l.ai/chapter_linear-networks-regression/generalization.html" },
      { label: "§ 3.7 Weight Decay", url: "https://d2l.ai/chapter_linear-networks-regression/weight-decay.html" },
      { label: "Ch. 12 Optimization Algorithms", url: "https://d2l.ai/chapter_optimization-algorithms/index.html" },
      { label: "Ch. 19 Hyperparameter Optimization", url: "https://d2l.ai/chapter_hyperparameter-optimization/index.html" },
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
    d2lLinks: [
      { label: "§ 5.6 Dropout", url: "https://d2l.ai/chapter_multilayer-perceptrons/dropout.html" },
      { label: "Ch. 7 Convolutional Neural Networks", url: "https://d2l.ai/chapter_convolutional-neural-networks/index.html" },
      { label: "§ 8.1 Deep Convolutional Neural Networks (AlexNet)", url: "https://d2l.ai/chapter_modern-convolutional-neural-networks/deep-alexnet.html" },
      { label: "§ 14.1 Image Augmentation", url: "https://d2l.ai/chapter_computer-vision/image-augmentation.html" },
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
    d2lLinks: [
      { label: "§ 5.4 Numerical Stability and Initialization", url: "https://d2l.ai/chapter_multilayer-perceptrons/numerical-stability-and-init.html" },
      { label: "§ 8.2 Networks Using Blocks (VGG)", url: "https://d2l.ai/chapter_modern-convolutional-neural-networks/vgg.html" },
      { label: "§ 8.3 Network in Network (NiN)", url: "https://d2l.ai/chapter_modern-convolutional-neural-networks/nin.html" },
      { label: "§ 8.4 Multi-Branch Networks (GoogLeNet)", url: "https://d2l.ai/chapter_modern-convolutional-neural-networks/googlenet.html" },
      { label: "§ 8.5 Batch Normalization", url: "https://d2l.ai/chapter_modern-convolutional-neural-networks/batch-norm.html" },
      { label: "§ 8.6 Residual Networks (ResNet) and ResNeXt", url: "https://d2l.ai/chapter_modern-convolutional-neural-networks/resnet.html" },
      { label: "§ 14.2 Fine-Tuning", url: "https://d2l.ai/chapter_computer-vision/fine-tuning.html" },
    ],
  },
  6: {
    category: "bridge",
    topics: ["Seq2Seq", "Encoder–Decoder", "U-Net"],
    objectives: [
      "Implement an autoencoder from scratch; visualize learned representations",
      "Build a CNN encoder-decoder for image tasks",
    ],
    estimatedTime: "≈5 h · 1.5 h video · 1.5 h reading · 2 h coding",
    prereq: "Builds on Modules 1–5",
    d2lLinks: [
      { label: "§ 10.6 The Encoder-Decoder Architecture", url: "https://d2l.ai/chapter_modern-recurrent-neural-networks/encoder-decoder.html" },
      { label: "§ 14.10 Transposed Convolution", url: "https://d2l.ai/chapter_computer-vision/transposed-conv.html" },
      { label: "§ 14.11 Fully Convolutional Networks", url: "https://d2l.ai/chapter_computer-vision/fcn.html" },
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
    prereq: "Builds on Modules 1–5",
    d2lLinks: [
      { label: "Ch. 9 Recurrent Neural Networks", url: "https://d2l.ai/chapter_recurrent-neural-networks/index.html" },
      { label: "Ch. 10 Modern Recurrent Neural Networks", url: "https://d2l.ai/chapter_modern-recurrent-neural-networks/index.html" },
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
    d2lLinks: [
      { label: "§ 11.1 Queries, Keys, and Values", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/queries-keys-values.html" },
      { label: "§ 11.2 Attention Pooling by Similarity", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/attention-pooling.html" },
      { label: "§ 11.3 Attention Scoring Functions", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/attention-scoring-functions.html" },
      { label: "§ 11.4 The Bahdanau Attention Mechanism", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/bahdanau-attention.html" },
      { label: "§ 11.5 Multi-Head Attention", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/multihead-attention.html" },
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
    d2lLinks: [
      { label: "Ch. 11 Attention Mechanisms and Transformers", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html" },
    ],
  },
  10: {
    category: "transformer",
    topics: ["ViT", "BERT/T5/GPT", "Scaling"],
    objectives: [
      "Implement patchify + linear embedding; train a tiny ViT",
      "Run a patch-size ablation; inspect attention maps qualitatively",
      "Compare a small ViT vs small ResNet for efficiency vs accuracy",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–9",
    d2lLinks: [
      { label: "Ch. 11 Attention Mechanisms and Transformers", url: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html" },
    ],
  },
  11: {
    category: "advanced",
    topics: ["Prompting/RAG", "PEFT", "QLoRA"],
    objectives: [
      "Pretrain on synthetic sequences (masked and autoregressive); evaluate representations",
      "Fine-tune on a small downstream task; compare PEFT (LoRA) vs full FT",
      "Summarize scaling-law takeaways for model/data/compute",
    ],
    estimatedTime: "≈6 h · 2 h video · 2 h reading · 2 h coding",
    prereq: "Builds on Modules 1–10",
  },
  12: {
    category: "advanced",
    topics: ["Multimodal", "Diffusion", "VAE", "GAN"],
    objectives: [
      "Implement a tiny VAE; explore the latent space qualitatively",
      "Train a small GAN; apply simple stability tweaks; assess samples",
      "Explain forward/reverse diffusion and demonstrate sampling",
      "Briefly discuss evaluation metrics and ethical considerations",
    ],
    estimatedTime: "≈7 h · 2.5 h video · 2 h reading · 2.5 h coding",
    prereq: "Builds on Modules 1–11",
  },
}
