// Self-check questions per module, converted from the instructor quiz bank
// (LaTeX sources in 6050/LaTeX/Module*/…Q*.tex) and expanded with transcript-grounded
// questions verified against the lecture videos. Math uses KaTeX $...$ delimiters.

export type SelfCheckQuestion = {
  question: string
  choices?: string[]
  answer: string
  explanation: string
}

export const selfChecks: Record<number, SelfCheckQuestion[]> = {
  1: [
    {
      question: "The diagram illustrating the relationship between model complexity, training loss, and generalization loss shows an 'Overfitting' region. What does this region represent?",
      choices: ["A situation where the model is too simple to capture the underlying patterns in the data.", "The optimal point where the model performs equally well on training and unseen data.", "A situation where the model performs very well on the training data but poorly on new, unseen data.", "The point where the training loss and generalization loss are both high."],
      answer: "A situation where the model performs very well on the training data but poorly on new, unseen data.",
      explanation: "Overfitting occurs when a model learns the training data too well, capturing noise and random fluctuations rather than true underlying patterns. This leads to low training error but high generalization error.",
    },
    {
      question: "Based on the softmax function's definition, what is its primary function in a classification model?",
      choices: ["To calculate the difference between the model's output and the true labels.", "To convert the linear outputs (logits $o_1, o_2, o_3$) into a valid probability distribution.", "To reduce the number of features from the input layer to the output layer.", "To adjust the weights ($\\mathbf{w}$) and biases ($b$) to improve the model."],
      answer: "To convert the linear outputs (logits $o_1, o_2, o_3$) into a valid probability distribution.",
      explanation: "The softmax function transforms raw outputs (logits) to ensure they are non-negative and sum to 1, just like probabilities. The softmax operation is: $\\hat{y}_j = \\frac{\\exp(o_j)}{\\sum_{k} \\exp(o_k)}$. This ensures the output can be interpreted as a probability distribution over classes.",
    },
    {
      question: "Why is a non-linear activation function, such as ReLU (max(0, z)), a critical component in deep neural networks?",
      choices: ["Because stacking multiple linear layers is equivalent to a single linear layer, preventing the model from learning complex patterns.", "Because it ensures that all weights and biases in the network remain positive.", "Because it is the only function that allows for the use of stochastic gradient descent.", "Because it simplifies the model by converting it back into a linear regression problem."],
      answer: "Because stacking multiple linear layers is equivalent to a single linear layer, preventing the model from learning complex patterns.",
      explanation: "Stacking multiple linear layers simply results in another linear transformation. To learn complex, non-linear relationships found in real-world data, activation functions like ReLU introduce non-linearity, allowing networks to approximate vastly more complex functions.",
    },
    {
      question: "What does variance measure in the context of the bias-variance trade-off?",
      choices: ["How far the average model prediction deviates from the true value due to limiting assumptions like linearity.", "The randomness inherent to the data generating process that cannot be learned away.", "How much the model's prediction would change if it were trained on a different set of training data.", "The model's accuracy on the training set."],
      answer: "How much the model's prediction would change if it were trained on a different set of training data.",
      explanation: "Variance measures how much the prediction would change if we collected a fresh training set. It captures the model's sensitivity to small fluctuations in training data. High variance risks overfitting.",
    },
    {
      question: "When two neurons combine to create a 'bump' function in the input space, this illustrates the basis for what theoretical guarantee about neural networks?",
      choices: ["The Normal Equation for solving linear regression analytically.", "The Universal Approximation Theorem.", "The bias-variance trade-off.", "The central limit theorem for error estimation."],
      answer: "The Universal Approximation Theorem.",
      explanation: "This ability to create 'bumps' is the intuitive basis for the Universal Approximation Theorem. By creating and summing many such bumps of different sizes and positions, a neural network with one hidden layer can approximate any continuous function.",
    },
    {
      question: "For softmax regression with cross-entropy loss, what is the gradient of the loss with respect to the logits $\\mathbf{o}$ (before softmax)?",
      answer: "$\\nabla_{\\mathbf{o}} L = \\hat{\\mathbf{y}} - \\mathbf{y}$ (predicted probabilities minus one-hot target)",
      explanation: "This is the elegant identity that emerges from the chain rule when differentiating softmax followed by cross-entropy. The result is the difference between predicted and true probabilities, which directly informs weight updates in classification networks and is why softmax+CE is the standard pairing.",
    },
  ],
  2: [
    {
      question: "For mean squared error loss $L = \\frac{1}{2n}\\sum_{i=1}^n (\\hat{y}_i - y_i)^2$, what is $\\frac{\\partial L}{\\partial \\hat{y}_i}$?",
      answer: "$\\frac{1}{n}(\\hat{y}_i - y_i)$",
      explanation: "The factor $\\frac{1}{2}$ in the loss cancels the factor of 2 from differentiating the squared term, leaving $\\frac{1}{n}(\\hat{y}_i - y_i)$. This is the gradient of MSE with respect to predictions, foundational for understanding backpropagation.",
    },
    {
      question: "For loss $L = \\frac{1}{2n}\\|\\mathbf{X}\\mathbf{w} + b\\mathbf{1} - \\mathbf{y}\\|_2^2$, the gradient with respect to weights $\\mathbf{w}$ is which of the following? (a) $\\frac{1}{n}\\mathbf{X}^{\\top}(\\mathbf{X}\\mathbf{w} + b\\mathbf{1} - \\mathbf{y})$, (b) $\\frac{1}{n}\\mathbf{X}(\\mathbf{X}\\mathbf{w} + b\\mathbf{1} - \\mathbf{y})$, (c) $\\frac{1}{n}(\\mathbf{X}\\mathbf{w} + b\\mathbf{1} - \\mathbf{y})$, (d) $\\mathbf{X}^{\\top}\\mathbf{X}\\mathbf{w}$",
      answer: "(a) $\\frac{1}{n}\\mathbf{X}^{\\top}(\\mathbf{X}\\mathbf{w} + b\\mathbf{1} - \\mathbf{y})$",
      explanation: "The matrix transpose and multiplication by $\\mathbf{X}^{\\top}$ are essential when computing the gradient of a quadratic form with respect to $\\mathbf{w}$. This is the core equation derived in the backpropagation handout and is critical for understanding how gradients flow through linear layers.",
    },
    {
      question: "In PyTorch, when using an optimizer in a training loop, what is the correct order of operations each iteration?",
      answer: "$\\texttt{zero\\_grad()}$ → $\\texttt{backward()}$ → $\\texttt{step()}$",
      explanation: "First clear accumulated gradients from the previous iteration, then compute new gradients via backpropagation, then update parameters. Reversing this order accumulates gradients incorrectly or updates with stale information, a common source of training bugs.",
    },
    {
      question: "What is the fundamental difference between $\\texttt{tensor.detach()}$ and $\\texttt{with torch.no\\_grad():\\,}$?",
      answer: "$\\texttt{detach()}$ returns a new tensor disconnected from the computation graph, while $\\texttt{no\\_grad()}$ is a context manager that temporarily disables automatic gradient tracking for all operations within its scope.",
      explanation: "These are complementary mechanisms: $\\texttt{detach()}$ breaks the graph locally for a single tensor (useful when you want to reuse values without backprop), while $\\texttt{no\\_grad()}$ disables recording globally for efficiency during inference or when updating parameters. Understanding both is essential for controlling autograd.",
    },
    {
      question: "Why does ReLU mitigate the vanishing gradient problem in deep neural networks, while sigmoid does not?",
      choices: ["ReLU has a constant derivative of 1 for positive inputs, allowing gradients to flow unchanged through the network during backpropagation, whereas sigmoid has small derivatives everywhere except near zero", "ReLU uses a larger learning rate internally, which prevents gradient shrinkage compared to sigmoid", "ReLU is faster to compute, so the backpropagation pass completes before gradients can vanish", "ReLU normalizes the input data automatically, whereas sigmoid requires manual normalization to prevent vanishing gradients"],
      answer: "ReLU has a constant derivative of 1 for positive inputs, allowing gradients to flow unchanged through the network during backpropagation, whereas sigmoid has small derivatives everywhere except near zero",
      explanation: "The lecturer explains that sigmoid's maximum derivative is 0.25 (at z=0) and approaches zero for larger inputs, causing the chain-rule product of these small derivatives to shrink exponentially. ReLU's derivative is simply 0 or 1: when a neuron is active (positive input), the gradient passes through unchanged (multiplication by 1), creating a 'gradient superhighway' that allows error signals to propagate through many layers without diminishing.",
    },
    {
      question: "In batch normalization, why are learnable scale and shift parameters (gamma and beta) necessary after normalizing pre-activation values to mean zero and unit variance?",
      choices: ["They allow the network to undo the normalization and recover the original signal distribution when a standard normal is not optimal for the next layer", "They are required for numerical stability and prevent overflow errors during the forward pass", "They enable batch normalization to work with non-convex loss functions", "They reduce the computational cost of the normalization operation"],
      answer: "They allow the network to undo the normalization and recover the original signal distribution when a standard normal is not optimal for the next layer",
      explanation: "The lecturer notes a counterintuitive point: forcing all activations into a 'rigid structure' of standard normal distribution may limit the network's representation power, since that distribution may not be optimal for the next layer. The scale parameter (gamma) and shift parameter (beta) let the network learn to adjust the normalized values to whatever mean and variance is best for the downstream computation. In the worst case, the network can learn gamma and beta to recover the original distribution entirely.",
    },
  ],
  3: [
    {
      question: "In a standard autograd training step, what is the correct order of operations?",
      choices: ["$\\texttt{backward()} \\to \\texttt{zero\\_grad()} \\to \\texttt{step()}$", "$\\texttt{zero\\_grad()} \\to \\texttt{forward()} \\to \\texttt{loss()} \\to \\texttt{backward()} \\to \\texttt{step()}$", "$\\texttt{forward()} \\to \\texttt{step()} \\to \\texttt{loss()} \\to \\texttt{zero\\_grad()}$", "$\\texttt{forward()} \\to \\texttt{backward()} \\to \\texttt{zero\\_grad()} \\to \\texttt{step()}$"],
      answer: "$\\texttt{zero\\_grad()} \\to \\texttt{forward()} \\to \\texttt{loss()} \\to \\texttt{backward()} \\to \\texttt{step()}$",
      explanation: "Clear old gradients first, then compute forward pass and loss, backpropagate to compute gradients, and finally update parameters. Placing $\\texttt{zero\\_grad()}$ after $\\texttt{backward()}$ would discard the current gradients before using them to update.",
    },
    {
      question: "Which statement about activation functions in deep MLPs is most accurate?",
      choices: ["Sigmoid is preferred because its derivative is always $\\geq 0.25$", "Tanh eliminates vanishing gradients in deep networks", "ReLU (or variants) is generally preferred; sigmoid/tanh can saturate and vanish", "All activations are equivalent if the learning rate is small"],
      answer: "ReLU (or variants) is generally preferred; sigmoid/tanh can saturate and vanish",
      explanation: "ReLU avoids the saturation zones where derivatives approach zero, which is critical for gradient flow in deep networks. Sigmoid and tanh have derivative bounds (like $\\sigma'(z) \\leq 0.25$) and saturate to plateau regions where gradients vanish regardless of learning rate.",
    },
    {
      question: "Which change best improves gradient flow in a very deep MLP (same width)?",
      choices: ["Replace all ReLUs with sigmoids", "Add residual (skip) connections between blocks", "Remove bias terms", "Use $\\texttt{sum()}$ instead of $\\texttt{mean()}$ in the loss"],
      answer: "Add residual (skip) connections between blocks",
      explanation: "Skip connections create identity paths that allow gradients to flow directly backward without being attenuated by many layers of matrix multiplications and activations. This is the core principle enabling training of very deep networks (1000+ layers).",
    },
    {
      question: "Proper initialization for ReLU networks typically uses:",
      choices: ["Xavier only, regardless of activation", "He/Kaiming init to maintain activation/gradient scale", "All zeros for faster symmetry breaking", "Random choice; init rarely matters"],
      answer: "He/Kaiming init to maintain activation/gradient scale",
      explanation: "He initialization sets $\\text{Var}(w) = 2/\\text{fan\\_in}$ to preserve the variance of activations and gradients through ReLU layers. This is critical because ReLU kills half the activations (zeros out negative values), so He init accounts for this by doubling the variance compared to Xavier initialization designed for symmetric activations.",
    },
    {
      question: "In an ablation study for neural network training, what is the correct methodology for isolating the effect of a single technique (e.g., batch normalization)?",
      choices: ["Apply all techniques simultaneously and compare against a baseline to measure total improvement", "Start with a baseline configuration, change one component at a time, and measure performance changes for each modification", "Test each technique in isolation on completely separate datasets to avoid any interaction effects", "Apply techniques in random order and compute statistical significance with p-values"],
      answer: "Start with a baseline configuration, change one component at a time, and measure performance changes for each modification",
      explanation: "The ablation study methodology involves a controlled baseline and then systematically adding or modifying one component at a time while keeping everything else fixed. This allows you to isolate and measure the individual contribution of each technique. The lecture demonstrates this by starting with a control configuration (default initialization, no normalization, no dropout), then progressively adding He initialization, batch norm, layer norm, and dropout one at a time to see which components provide the most performance benefit.",
    },
    {
      question: "Why is batch normalization typically NOT applied to the output layer of a classification network?",
      choices: ["It increases computational cost too much for the final layer", "The output layer gradients are too large for batch norm to handle", "Normalization would distort the output scale, and the output logits should remain unnormalized for the loss function", "Batch norm only works on hidden layers with ReLU activations"],
      answer: "Normalization would distort the output scale, and the output logits should remain unnormalized for the loss function",
      explanation: "The output layer produces raw logits that feed directly into the cross-entropy loss function, which expects unnormalized scores. Applying batch normalization to the output layer would rescale these logits, distorting their magnitude and interfering with the loss computation. Unlike hidden layers where normalization stabilizes gradient flow, the output layer must preserve the natural scale of its predictions. Additionally, dropout is also skipped on the output layer because randomly suppressing predictions during training would corrupt the loss signal.",
    },
  ],
  4: [
    {
      question: "For a convolution with kernel size $k$, stride $s$, padding $p$, and input size $n$, what is the output spatial size?",
      choices: ["$\\lfloor (n + 2p - k)/s \\rfloor + 1$", "$\\lfloor (n - 2p + k)/s \\rfloor + 1$", "$\\lfloor (n + p - k)/s \\rfloor + 1$", "$\\lfloor (n + 2p + k)/s \\rfloor + 1$"],
      answer: "$\\lfloor (n + 2p - k)/s \\rfloor + 1$",
      explanation: "This formula accounts for padding added on both sides (2p), the kernel size subtracted, division by stride, plus 1 for the initial position. It is fundamental for CNN design and appears in every architecture textbook.",
    },
    {
      question: "What is the receptive field of a neuron in a CNN?",
      choices: ["The number of parameters in its kernel", "The region of the input that affects its output", "The number of channels in its layer", "The size of the feature map it produces"],
      answer: "The region of the input that affects its output",
      explanation: "Receptive field is a core concept: larger receptive fields in deeper layers allow networks to capture global context. This is crucial for understanding why stacking convolutions increases representational power.",
    },
    {
      question: "What is the main purpose of pooling layers in CNNs?",
      choices: ["To increase the number of parameters", "To add non-linearity to the network", "To reduce spatial dimensions and build translation invariance", "To normalize the activations"],
      answer: "To reduce spatial dimensions and build translation invariance",
      explanation: "Pooling (max or average) downsamples feature maps, reducing computation and memory, while providing robustness to small spatial shifts in the input.",
    },
    {
      question: "How many parameters does a convolutional layer with 32 input channels, 64 output channels, and 3×3 kernels have (including bias)?",
      choices: ["576", "18,432", "18,496", "32,832"],
      answer: "18,496",
      explanation: "Parameters = $(k_h \\times k_w \\times C_{in} \\times C_{out}) + C_{out} = (3 \\times 3 \\times 32 \\times 64) + 64 = 18,496$. The bias term (one per output channel) is often overlooked but matters for accurate parameter counting.",
    },
  ],
  5: [
    {
      question: "In VGG networks, why are multiple 3×3 convolutions preferred over a single larger kernel?",
      choices: ["They have the same receptive field with fewer parameters and more non-linearities", "3×3 is the optimal kernel size for all vision tasks", "Larger kernels don't work on GPUs", "They eliminate the need for pooling layers"],
      answer: "They have the same receptive field with fewer parameters and more non-linearities",
      explanation: "Two 3×3 convolutions create a 5×5 receptive field with 18$C^2$ parameters vs. 25$C^2$ for one 5×5, plus two activation functions instead of one—this is VGG's key insight for building deeper, more efficient networks.",
    },
    {
      question: "What is the fundamental equation for a residual block's output?",
      choices: ["$H(x) = F(x) \\cdot x$", "$H(x) = F(x) - x$", "$H(x) = F(x) + x$", "$H(x) = F(x) / x$"],
      answer: "$H(x) = F(x) + x$",
      explanation: "The identity mapping $+x$ allows networks to learn residuals rather than full functions, making it easy to learn identity mappings and enabling training of extremely deep networks.",
    },
    {
      question: "Why do skip connections in ResNet help with training very deep networks?",
      choices: ["They reduce the number of parameters", "They provide gradient highways preventing vanishing gradients", "They eliminate the need for batch normalization", "They automatically tune learning rates"],
      answer: "They provide gradient highways preventing vanishing gradients",
      explanation: "During backpropagation, gradients flow through both the residual path $\\frac{\\partial F}{\\partial x}$ and the identity path $I$, giving $\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H}(\\frac{\\partial F}{\\partial x} + I)$. The $+I$ term ensures gradients don't vanish even through hundreds of layers.",
    },
    {
      question: "When designing a CNN for a small dataset, which technique is MOST important?",
      choices: ["Using very deep networks", "Using large kernel sizes", "Transfer learning from pretrained models", "Using no regularization"],
      answer: "Transfer learning from pretrained models",
      explanation: "Transfer learning leverages features learned on large datasets (ImageNet), preventing overfitting on small data. Training from scratch on limited data will overfit quickly, making this the critical technique.",
    },
    {
      question: "In MobileNets, how does depthwise-separable convolution reduce parameters compared to standard convolution?",
      choices: ["By applying 1×1 convolutions before spatial convolutions to reduce channel dimensions first", "By performing spatial convolution separately on each input channel, then mixing channels separately using 1×1 convolutions", "By replacing all convolutions with fully connected layers", "By removing batch normalization between convolution layers"],
      answer: "By performing spatial convolution separately on each input channel, then mixing channels separately using 1×1 convolutions",
      explanation: "Depthwise-separable convolution splits standard convolution into two steps: (1) apply KxK convolution independently to each input channel (depthwise), and (2) mix channels using 1×1 convolutions (pointwise). This separates spatial computation from channel mixing, reducing parameters by roughly 10x in small blocks and exponentially across stacked layers—critical for mobile/edge devices with tight memory and latency constraints.",
    },
  ],
  6: [
    {
      question: "Why does an autoencoder force the model to learn meaningful patterns rather than memorize inputs?",
      choices: ["Because the encoder has more parameters than the input", "Because of the bottleneck: $k \\ll d$ (latent dimension much smaller than input dimension)", "Because the decoder uses different weights than the encoder", "Because autoencoders only work on labeled data"],
      answer: "Because of the bottleneck: $k \\ll d$ (latent dimension much smaller than input dimension)",
      explanation: "The information bottleneck restricts capacity, forcing the model to extract only essential patterns. With insufficient dimensions to store all input details, the network must learn the underlying structure rather than memorize.",
    },
    {
      question: "What is the relationship between PCA and a linear autoencoder?",
      choices: ["They are completely unrelated methods", "A linear autoencoder with tied weights and MSE loss learns exactly the PCA subspace", "PCA is always better than a linear autoencoder", "Linear autoencoders can only approximate PCA results"],
      answer: "A linear autoencoder with tied weights and MSE loss learns exactly the PCA subspace",
      explanation: "This is a proven mathematical equivalence (Ky Fan theorem): under these conditions, the learned latent space spans the same principal components as PCA, showing how autoencoders generalize classical dimensionality reduction.",
    },
    {
      question: "In PCA viewed as an encoder-decoder, what is the encoding step?",
      choices: ["$\\mathbf{z} = \\mathbf{x} + \\mathbf{V}_k$", "$\\mathbf{z} = \\mathbf{V}_k \\mathbf{x}$", "$\\mathbf{z} = \\mathbf{V}_k^T \\mathbf{x}$", "$\\mathbf{z} = \\mathbf{x} \\mathbf{V}_k^T$"],
      answer: "$\\mathbf{z} = \\mathbf{V}_k^T \\mathbf{x}$",
      explanation: "The transpose projects the input onto the principal component directions. Reconstruction then uses $\\hat{\\mathbf{x}} = \\mathbf{V}_k \\mathbf{z}$, recovering data in the original space.",
    },
    {
      question: "What does the information bottleneck force the model to do?",
      choices: ["Memorize all input details", "Remove noise, find structure, and learn abstractions", "Increase the dimensionality", "Use more parameters"],
      answer: "Remove noise, find structure, and learn abstractions",
      explanation: "Since the bottleneck cannot preserve all information, the model must selectively compress data by filtering noise and capturing essential patterns. This principle—that compression requires understanding—is foundational to representation learning.",
    },
    {
      question: "Why are autoencoders called unsupervised learning?",
      choices: ["They don't use any labels", "The input serves as its own target label", "They only work on unlabeled data", "They don't require training"],
      answer: "The input serves as its own target label",
      explanation: "No external labels are provided; the reconstruction objective uses the input itself as supervision. This self-supervised approach allows learning from raw data without manual annotation.",
    },
  ],
  7: [
    {
      question: "According to the lecture, why do autoencoders fail for sequence-to-sequence tasks like translation?",
      choices: ["They are too slow", "They suffer from information bottleneck, lack sequential structure, and cannot stream", "They have too many parameters", "They only work on images"],
      answer: "They suffer from information bottleneck, lack sequential structure, and cannot stream",
      explanation: "Autoencoders compress entire variable-length sequences into a fixed-size latent vector, creating an information bottleneck where per-token capacity approaches zero as sequence length increases. They also lack inherent sequential structure and cannot process tokens incrementally.",
    },
    {
      question: "What is the key innovation that defines an RNN in terms of parameter usage across time steps?",
      choices: ["Using different functions at each time step: $H_t = f_t(H_{t-1}, X_t)$", "Using the same function at every time step: $H_t = f(H_{t-1}, X_t)$", "Using no memory at all", "Using only the current input"],
      answer: "Using the same function at every time step: $H_t = f(H_{t-1}, X_t)$",
      explanation: "Parameter sharing (also called recurrence) is the defining property of RNNs. By reusing the same weight matrices across all time steps, RNNs make model size independent of sequence length and enable generalization across temporal positions.",
    },
    {
      question: "Why do vanilla RNNs suffer from vanishing gradients during backpropagation through time?",
      choices: ["Too much data", "Repeated multiplication by $\\mathbf{W}_{hh}$ across time steps; if $\\|\\mathbf{W}_{hh}\\| < 1$, gradients decay exponentially", "Too few layers", "Using tanh activation"],
      answer: "Repeated multiplication by $\\mathbf{W}_{hh}$ across time steps; if $\\|\\mathbf{W}_{hh}\\| < 1$, gradients decay exponentially",
      explanation: "Gradients in RNNs involve products of Jacobians along the chain of recurrence. If the weight matrix norm is less than 1, each multiplication shrinks the gradient, leading to exponential decay over long sequences—for example, $0.5^{50} \\approx 8.88 \\times 10^{-16}$.",
    },
    {
      question: "How does the LSTM cell state update equation solve the vanishing gradient problem compared to vanilla RNNs?",
      choices: ["It has more parameters", "The additive cell state update $\\mathbf{C}_t = \\mathbf{F}_t \\odot \\mathbf{C}_{t-1} + \\mathbf{I}_t \\odot \\tilde{\\mathbf{C}}_t$ provides a gradient highway where $\\partial \\mathbf{C}_t/\\partial \\mathbf{C}_{t-1} \\approx \\mathbf{F}_t$ can stay near 1", "It trains faster", "It uses different activations"],
      answer: "The additive cell state update $\\mathbf{C}_t = \\mathbf{F}_t \\odot \\mathbf{C}_{t-1} + \\mathbf{I}_t \\odot \\tilde{\\mathbf{C}}_t$ provides a gradient highway where $\\partial \\mathbf{C}_t/\\partial \\mathbf{C}_{t-1} \\approx \\mathbf{F}_t$ can stay near 1",
      explanation: "Unlike vanilla RNNs where gradients multiply through a fixed weight matrix, LSTM's additive cell state update creates a direct gradient path where the forget gate $\\mathbf{F}_t$ is learned and dynamic. When $\\mathbf{F}_t \\approx 1$, gradients flow nearly unchanged, enabling long-term dependency learning.",
    },
    {
      question: "What is the fundamental architectural difference between LSTM and GRU?",
      choices: ["LSTM is always better", "LSTM maintains separate cell state $\\mathbf{C}_t$ (long-term memory) and hidden state $\\mathbf{h}_t$ (short-term memory), while GRU merges them into a single state $\\mathbf{h}_t$", "GRU has more parameters", "LSTM cannot handle long sequences"],
      answer: "LSTM maintains separate cell state $\\mathbf{C}_t$ (long-term memory) and hidden state $\\mathbf{h}_t$ (short-term memory), while GRU merges them into a single state $\\mathbf{h}_t$",
      explanation: "LSTM uses 3 gates (forget, input, output) to control separate cell and hidden states, providing more flexible control. GRU uses only 2 gates (update, reset) and a single state, making it more parameter-efficient while still capturing long-range dependencies effectively.",
    },
    {
      question: "Why does truncated backpropagation through time (TBPTT)—where sequences are split into shorter segments of fixed length (e.g., 20–50 tokens)—remain effective for training RNNs despite not capturing long-range dependencies?",
      choices: ["Longer sequences are always harmful, so truncation eliminates them entirely", "The influence of past observations on gradients decays naturally; information beyond a few steps is already diluted by repeated nonlinearities; and fixed-size segments act as a mild regularizer preventing overfitting to long-range noise", "Truncation makes the model faster but sacrifices accuracy", "The RNN cell architecture makes all historical information irrelevant after truncation"],
      answer: "The influence of past observations on gradients decays naturally; information beyond a few steps is already diluted by repeated nonlinearities; and fixed-size segments act as a mild regularizer preventing overfitting to long-range noise",
      explanation: "The lecturer explains that after a few steps (20–50 in practice), the gradient contribution from earlier states decays exponentially, and information is further diluted as it passes through multiple tanh nonlinearities. Fixed-length truncation stabilizes training as a mild regularizer, learning robust short-term memory without overfitting to spurious long-range correlations—making the model more robust to out-of-distribution sequences.",
    },
  ],
  8: [
    {
      question: "What is the fundamental problem with vanilla seq2seq models that attention mechanisms solve?",
      choices: ["They use too much memory", "They compress all information into a single fixed-size vector", "They train too slowly", "They cannot handle variable-length sequences"],
      answer: "They compress all information into a single fixed-size vector",
      explanation: "Vanilla seq2seq forces all encoder information through a single context vector, creating a bottleneck that causes significant information loss for longer sequences. Attention solves this by maintaining the full memory bank of all encoder hidden states and dynamically selecting relevant information at each decoder step.",
    },
    {
      question: "Why do we scale by $1/\\sqrt{d_k}$ in dot-product attention?",
      choices: ["To make computation faster", "To keep the variance of scores stable regardless of dimension", "To normalize the output", "It is arbitrary — any scaling works"],
      answer: "To keep the variance of scores stable regardless of dimension",
      explanation: "For random vectors with unit variance, $\\text{Var}(\\mathbf{q}^\\top \\mathbf{k}) = d_k$. Without scaling, large $d_k$ leads to huge logits that saturate softmax, causing vanishing gradients. Scaling by $1/\\sqrt{d_k}$ ensures $\\text{Var}(\\mathbf{q}^\\top \\mathbf{k} / \\sqrt{d_k}) = 1$, maintaining stable gradient flow.",
    },
    {
      question: "In cross-attention for seq2seq, do we use a causal mask (preventing attention to future positions)?",
      choices: ["Yes, always", "No — the decoder can attend to all encoder positions", "Only during training", "Only for long sequences"],
      answer: "No — the decoder can attend to all encoder positions",
      explanation: "Cross-attention connects decoder to encoder (not decoder to itself), and the entire source sentence is available simultaneously. Causal masking only applies to decoder self-attention to prevent looking at future decoder positions during generation. Encoder self-attention and cross-attention are both bidirectional/unmasked.",
    },
    {
      question: "Why are $\\mathbf{W}_Q$ and $\\mathbf{W}_K$ separate matrices in dot-product attention?",
      choices: ["To save memory", "To allow asymmetric roles: queries ask 'what do I need?', keys answer 'what do I offer?'", "They should be the same matrix", "For numerical stability"],
      answer: "To allow asymmetric roles: queries ask 'what do I need?', keys answer 'what do I offer?'",
      explanation: "Separate $\\mathbf{W}_Q$ and $\\mathbf{W}_K$ create distinct feature spaces for queries and keys. Queries learn what to look for while keys learn how to be found. If they were identical, the model would compute similarity in a single shared space, reducing expressiveness and the ability to learn task-specific attention patterns.",
    },
    {
      question: "What fundamental limitation do both vanilla seq2seq AND attention-augmented RNNs share?",
      choices: ["They cannot handle long sequences", "Sequential computation prevents parallelization during training", "They do not use neural networks", "They cannot do translation"],
      answer: "Sequential computation prevents parallelization during training",
      explanation: "Both architectures rely on RNNs where $\\mathbf{h}_t$ depends on $\\mathbf{h}_{t-1}$, preventing parallelization across time steps. Attention solved the information bottleneck but not the computational bottleneck. Transformers address this by replacing RNNs entirely with self-attention, enabling massive parallelization of sequence processing.",
    },
    {
      question: "Why does additive (Bahdanau) attention require complex fused operations that don't leverage GPU tensor cores, while scaled dot-product attention achieves better scalability?",
      choices: ["Additive attention uses exponential functions which are slower than matrix multiplication", "Additive attention computes $\\tanh(\\mathbf{W}_Q \\mathbf{s}_t + \\mathbf{W}_K \\mathbf{h}_i + \\mathbf{b})$ with a nonlinearity that cannot be separated into independent operations on queries and keys alone", "Dot-product attention uses fewer parameters and trains faster", "Additive attention cannot be parallelized across batch dimensions"],
      answer: "Additive attention computes $\\tanh(\\mathbf{W}_Q \\mathbf{s}_t + \\mathbf{W}_K \\mathbf{h}_i + \\mathbf{b})$ with a nonlinearity that cannot be separated into independent operations on queries and keys alone",
      explanation: "Additive attention requires computing pairwise interactions (projections + elementwise addition + nonlinearity) in a fused kernel, which is memory-bound and doesn't utilize GPU tensor cores efficiently. Scaled dot-product attention separates the computation into independent linear transformations (can be done in parallel), then uses a simple matrix multiplication and softmax—pure dense operations that GPUs are optimized for. The key insight is that the nonlinearity in additive attention depends on *both* query and key simultaneously, making it unparallelizable at the computation-graph level, whereas dot-product defers nonlinearity to earlier RNN/MLP layers, allowing linear operations (pure matrix multiplication) in attention, which map perfectly to GPU tensor core operations.",
    },
  ],
  9: [
    {
      question: "What is the computational complexity of self-attention with respect to sequence length $n$ and embedding dimension $d$?",
      choices: ["$O(nd^2)$", "$O(n^2d)$", "$O(nd)$", "$O(n^2d^2)$"],
      answer: "$O(n^2d)$",
      explanation: "Computing $QK^T$ requires $(n \\times d) \\times (d \\times n)$ matrix multiplication, giving $n^2 \\cdot d$ operations. This quadratic complexity in sequence length enables full parallelization (unlike RNNs which are sequential), but limits practical context lengths to ~2K-8K tokens due to memory constraints.",
    },
    {
      question: "In the self-attention formula $\\text{Attention}(Q,K,V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$, why do we scale by $\\sqrt{d_k}$?",
      choices: ["To make the computation faster", "To prevent numerical overflow in the softmax", "To counteract the large magnitude of dot products when $d_k$ is large", "To normalize the output values"],
      answer: "To counteract the large magnitude of dot products when $d_k$ is large",
      explanation: "Without scaling, large $d_k$ produces large dot products $QK^T$, pushing softmax into regions with vanishing gradients. Scaling by $\\sqrt{d_k}$ keeps the variance of dot products stable, ensuring non-extreme attention weights and healthy gradient flow during backpropagation.",
    },
    {
      question: "According to the lecture, what is the primary role of Feed-Forward Networks (FFNs) in the Transformer (the ``librarian analogy'')?",
      choices: ["To route information between tokens (the librarian finding aisles)", "To act as dense, associative memory storing compressed knowledge (the content on shelves)", "To normalize activations across tokens", "To implement dropout for regularization"],
      answer: "To act as dense, associative memory storing compressed knowledge (the content on shelves)",
      explanation: "Transformers separate concerns: attention performs content-based routing across tokens; FFNs perform token-local, non-linear computation and store fact/phrase associations. FFN layers (width $\\approx 4d_{\\text{model}}$) contain most parameters, providing high-capacity storage for memorized knowledge about next-token predictions.",
    },
    {
      question: "Which key property enables relative position to be expressed linearly from sinusoidal encodings?",
      choices: ["Normalization of all encodings to unit magnitude", "A shift by $\\delta$ positions is a rotation: $\\begin{bmatrix}P_{i+\\delta,2j} \\\\ P_{i+\\delta,2j+1}\\end{bmatrix} = R_{\\delta\\omega_j}\\begin{bmatrix}P_{i,2j} \\\\ P_{i,2j+1}\\end{bmatrix}$", "Frequencies are multiples of a common base tone", "$\\sin^2 + \\cos^2 = 1$ always holds"],
      answer: "A shift by $\\delta$ positions is a rotation: $\\begin{bmatrix}P_{i+\\delta,2j} \\\\ P_{i+\\delta,2j+1}\\end{bmatrix} = R_{\\delta\\omega_j}\\begin{bmatrix}P_{i,2j} \\\\ P_{i,2j+1}\\end{bmatrix}$",
      explanation: "Trigonometric identities yield rotation matrices that depend only on offset $\\delta$, giving a linear transformation for relative shifts. This enables the Transformer to learn relative positional relationships without explicit position indices, unlike learned embeddings.",
    },
    {
      question: "Why use a geometric (not linear) progression of frequencies in sinusoidal positional encoding?",
      choices: ["It is computationally faster to compute", "It efficiently spans many octaves, capturing both local and global structure", "It reduces the embedding dimension needed", "It equalizes importance across all frequency dimensions"],
      answer: "It efficiently spans many octaves, capturing both local and global structure",
      explanation: "Geometric spacing (frequencies via $10000^{-2j/d}$) covers a wide frequency range without redundancy, yielding multi-scale positional features. Linear spacing would either waste dimensions on low frequencies or leave large gaps at high frequencies, failing to capture fine-grained local structure.",
    },
    {
      question: "In multi-head attention, why do we use multiple heads instead of a single attention head?",
      choices: ["Multiple heads process the sequence in parallel, making computation faster", "Single attention heads average information from all positions, which dilutes the model's ability to focus on different semantic relationships simultaneously; multiple heads operate on different representation subspaces to preserve resolution", "Multiple heads allow different layers of the network to attend to different tokens", "Multiple heads enable the use of different values of $d_k$ for better numerical stability"],
      answer: "Single attention heads average information from all positions, which dilutes the model's ability to focus on different semantic relationships simultaneously; multiple heads operate on different representation subspaces to preserve resolution",
      explanation: "The lecturer explains that a single attention head computes a weighted average of value vectors, which can lose information when compressing multiple relationship types (semantic roles, positional context) into one output. Using multiple heads, each attending to a different subspace of the embedding dimension, allows the model to simultaneously capture different linguistic phenomena without dilution.",
    },
  ],
  10: [
    {
      question: "Why does ViT underperform ResNet on small datasets like Fashion-MNIST, but outperform ResNet on larger datasets like JFT-300M?",
      answer: "Transformers lack the useful inductive biases present in CNNs (translation invariance and locality), which help CNNs generalize better with limited data. However, Transformers' flexibility allows them to scale better with large datasets, eventually outperforming CNNs.",
      explanation: "This illustrates the fundamental tradeoff: CNNs have built-in geometric assumptions about images that help with small datasets, but Transformers' flexibility becomes an advantage when you have abundant data to learn these properties from scratch. The dataset size determines which architecture wins.",
    },
    {
      question: "How do BERT and GPT differ in their pretraining objectives, and why does this difference affect what attention patterns they can use?",
      answer: "BERT uses masked language modeling (predicting masked tokens with bidirectional context), allowing it to use bidirectional attention. GPT uses autoregressive language modeling (predicting the next token), requiring causal masking to prevent attending to future tokens.",
      explanation: "The pretraining objective determines the permissible attention pattern. Masking creates a denoising problem where context can flow both directions, while autoregressive generation requires left-to-right causality. This architectural choice directly follows from the training objective.",
    },
    {
      question: "What architectural role does the `<cls>` token play in both ViT and BERT, and why is this design useful?",
      answer: "In both architectures, `<cls>` is prepended to the input (patches in ViT, tokens in BERT), and its representation after the Transformer is used for classification. Through self-attention, it aggregates information from all inputs and serves as a learnable global representation.",
      explanation: "Using a dedicated pooling token is elegant because self-attention automatically learns to integrate information from all inputs into a single vector. This is superior to just taking the last token because the final `<cls>` vector has direct paths to attend to every input element.",
    },
    {
      question: "How does T5 unify diverse NLP tasks (classification, summarization, translation) into a single framework, and what advantage does this provide?",
      answer: "T5 converts all tasks to text-to-text format by adding task description prefixes (e.g., \"Summarize:\", \"Translate English to German:\") and generating the target as text. This enables a single model and objective to handle multiple task types and allows multitask learning.",
      explanation: "The unified framework is powerful because it eliminates task-specific architectures and loss functions. The same encoder-decoder model with the same objective handles generation, classification, and structured prediction. This also enables zero-shot transfer and efficient multitask training.",
    },
    {
      question: "According to the textbook, Transformer language models exhibit power-law scaling relationships. What does this mean, and why is it important?",
      answer: "Performance loss scales as a power law with model parameters, training tokens, and compute: the larger the model, the more data you train on, or the more compute you use, the better the performance follows a predictable $L(N, D, C) \\propto N^{-\\alpha_N} D^{-\\alpha_D} C^{-\\alpha_C}$ relationship. This is important because it allows prediction of performance before training and guides allocation of resources.",
      explanation: "Power-law scaling is remarkable because these relationships hold over many orders of magnitude (from millions to billions of parameters). This predictability has enabled researchers to estimate optimal model sizes and training compute budgets, driving the modern push toward larger models.",
    },
    {
      question: "In knowledge distillation for ViT training, why does the lecturer argue that using separate distillation and classification tokens (with separate heads) allows the model to learn more effectively than using a single token?",
      choices: ["The distillation head forces the model to memorize the teacher's predictions rather than learning from data", "Separate tokens allow the model to learn from both the ground truth labels and the teacher's inductive bias simultaneously, without conflicting gradients", "The classification token learns faster than the distillation token, so they must be separated to prevent training instability", "Using two tokens doubles the model's parameter count, which automatically improves performance"],
      answer: "Separate tokens allow the model to learn from both the ground truth labels and the teacher's inductive bias simultaneously, without conflicting gradients",
      explanation: "The lecturer explains that the distillation token learns from the CNN teacher's hard predictions, while the classification token learns from ground truth labels via cross-entropy. By using separate heads for these two learning signals, the model can learn effectively from both sources—the inductive biases the CNN provides and the ground truth labels—without one forcing the other. The lecturer emphasizes this is 'a loss and a tradeoff that the model will do' and that 'diversity helps' because it 'leads to a richer learning signal.' The CNN teacher brings different inductive biases than the transformer naturally has, allowing the flexible transformer architecture to incorporate this prior knowledge while remaining exposed to real labels.",
    },
    {
      question: "According to the Chinchilla scaling laws, what key principle changed from earlier scaling practices like GPT-3, and what is the practical implication?",
      choices: ["Models should be as large as possible regardless of data; this means investing all compute into model parameters, not training data", "Parameters and tokens should scale equally, not privileging one dimension; approximately 20 tokens per parameter is optimal, enabling smaller models with more data to match larger models' performance", "Compute should be spent exclusively on gathering more data rather than increasing model size; this eliminates the need for large parameters", "Scaling laws only apply to decoder models like GPT; encoder models like BERT do not follow power-law relationships"],
      answer: "Parameters and tokens should scale equally, not privileging one dimension; approximately 20 tokens per parameter is optimal, enabling smaller models with more data to match larger models' performance",
      explanation: "The lecturer contrasts the earlier 'as big as possible' paradigm (exemplified by GPT-3's 175B parameters) with Chinchilla's insight: the token-to-parameter ratio matters. By scaling both dimensions proportionally (~20 tokens per parameter), you can achieve similar performance with far fewer parameters, reducing inference cost. This was empirically demonstrated: Chinchilla (smaller, more-tokens) outperformed Gopher (much larger) on many benchmarks. The practical shift from maximizing model size to optimizing the compute-parameter-token tradeoff changed how researchers design language models.",
    },
  ],
  11: [
    {
      question: "What is the central idea of In-Context Learning (ICL) in large language models?",
      choices: ["Updating model weights during inference", "Learning tasks from examples provided in the prompt without parameter updates", "Distilling a smaller model from a larger one", "Retrieving documents from an external database"],
      answer: "Learning tasks from examples provided in the prompt without parameter updates",
      explanation: "ICL is learning by conditioning on demonstrations in the prompt with frozen parameters. The model leverages attention to infer the task from exemplars, allowing the same model to perform new tasks without modifying weights.",
    },
    {
      question: "The defining feature of Retrieval-Augmented Generation (RAG) is:",
      choices: ["Fine-tuning on retrieved passages", "Plugging an external retriever to ground generation on found documents", "Using a smaller tokenizer", "Quantizing the model to 4-bit"],
      answer: "Plugging an external retriever to ground generation on found documents",
      explanation: "RAG separates knowledge storage from parametric memory by dynamically injecting retrieved documents into the context during generation, improving freshness and reducing hallucinations without changing model weights.",
    },
    {
      question: "In LoRA, a weight matrix $W \\in \\mathbb{R}^{d_{\\text{out}} \\times d_{\\text{in}}}$ is adapted using which parameterization?",
      choices: ["$W' = \\alpha W$", "$W' = W + \\Delta W$ with $\\Delta W = BA$, where $A \\in \\mathbb{R}^{r \\times d_{\\text{in}}}$ and $B \\in \\mathbb{R}^{d_{\\text{out}} \\times r}$", "$W' = W^\\top$", "$W' = W - \\lambda \\nabla W$"],
      answer: "$W' = W + \\Delta W$ with $\\Delta W = BA$, where $A \\in \\mathbb{R}^{r \\times d_{\\text{in}}}$ and $B \\in \\mathbb{R}^{d_{\\text{out}} \\times r}$",
      explanation: "LoRA trains low-rank factors $A$ and $B$ while keeping the base weight $W$ frozen. At inference, the adapted output is $W'x = Wx + B(Ax)$, where rank $r \\ll \\min(d_{\\text{in}}, d_{\\text{out}})$ controls adapter capacity and reduces trainable parameters to approximately $r(d_{\\text{in}} + d_{\\text{out}})$.",
    },
    {
      question: "QLoRA fine-tunes large language models by:",
      choices: ["Training all weights in FP32", "Storing the base weights in 4-bit and training LoRA adapters in 16-bit", "Using only prompt engineering", "Distilling to a tiny student model"],
      answer: "Storing the base weights in 4-bit and training LoRA adapters in 16-bit",
      explanation: "QLoRA combines quantization of base weights (e.g., to NF4 4-bit) with LoRA adapters trained in higher precision. This achieves near full fine-tuning quality on consumer GPUs by dramatically reducing memory requirements while maintaining task-specific expressivity.",
    },
    {
      question: "In a decision framework, choose RAG over PEFT when:",
      choices: ["The model must remember static domain style forever", "You need strict data governance and freshness without changing weights", "You cannot build an index", "You have abundant fine-tuning labels"],
      answer: "You need strict data governance and freshness without changing weights",
      explanation: "RAG is ideal when knowledge changes frequently or is sensitive/private, since it retrieves up-to-date information at inference without modifying weights. PEFT is better for persistent behavior, style, or domain shifts that must remain constant across calls.",
    },
  ],
  12: [
    {
      question: "What is the primary goal of contrastive learning in multimodal AI systems like CLIP?",
      choices: ["To generate new images from text descriptions", "To map different modalities into a shared embedding space", "To classify images into predefined categories", "To compress images into smaller representations"],
      answer: "To map different modalities into a shared embedding space",
      explanation: "Contrastive learning aligns different modalities (e.g., images and text) by maximizing similarity between semantically related pairs while minimizing similarity between unrelated pairs, creating a joint representation space essential for zero-shot transfer.",
    },
    {
      question: "Why does predicting a masked image patch directly using MSE loss typically result in blurry images, and how does diffusion solve this?",
      choices: ["MSE is computationally expensive; diffusion uses faster gradient descent", "MSE forces the model to average over multiple valid completions; diffusion predicts independent noise components instead", "MSE cannot handle color images; diffusion learns in latent space", "MSE requires too much training data; diffusion uses smaller datasets"],
      answer: "MSE forces the model to average over multiple valid completions; diffusion predicts independent noise components instead",
      explanation: "When multiple valid completions exist, MSE loss mathematically averages them, producing blur. Diffusion avoids this by targeting independent Gaussian noise (whose components are uncorrelated) rather than correlated pixel values, enabling precise generation through iterated denoising.",
    },
    {
      question: "What is the score function in diffusion models, and what does Tweedie's formula reveal about its relationship to noise prediction?",
      choices: ["The loss function used for training; it is independent of noise prediction", "The gradient of log-probability $\\nabla_{\\mathbf{x}} \\log p(\\mathbf{x})$; predicting noise is mathematically equivalent to learning the score function", "The probability of an image being real; it requires a separate classifier", "The reconstruction error; noise prediction and score learning are competing objectives"],
      answer: "The gradient of log-probability $\\nabla_{\\mathbf{x}} \\log p(\\mathbf{x})$; predicting noise is mathematically equivalent to learning the score function",
      explanation: "The score function points toward high-probability regions in data space. Tweedie's formula shows that $\\nabla_{\\mathbf{x}_t} \\log p_t(\\mathbf{x}_t) = -\\frac{1}{\\sqrt{1-\\bar{\\alpha}_t}} \\mathbb{E}[\\boldsymbol{\\epsilon} \\mid \\mathbf{x}_t]$, meaning noise prediction directly provides the score needed for sampling via Langevin dynamics.",
    },
    {
      question: "What is the key architectural difference between a standard autoencoder and a VAE, and what problem does it solve?",
      choices: ["VAEs use deeper networks; this improves reconstruction quality", "VAEs encode data as probability distributions rather than fixed points; this enables sampling and a well-structured latent space", "VAEs use convolutional layers; this reduces computational cost", "VAEs require labeled data; this enables supervised learning"],
      answer: "VAEs encode data as probability distributions rather than fixed points; this enables sampling and a well-structured latent space",
      explanation: "Standard autoencoders map inputs to fixed latent vectors; VAEs map inputs to distributions (mean and variance), then sample $\\mathbf{z} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\boldsymbol{\\sigma}^2)$. The KL regularization forces the latent space near $\\mathcal{N}(0,I)$, enabling generation by sampling from the prior without the encoder.",
    },
    {
      question: "In GANs, what does a discriminator output of 0.5 for all inputs signify about training equilibrium?",
      choices: ["The discriminator has failed to learn meaningful features", "The generator has reached Nash equilibrium—generated samples are indistinguishable from real data", "The training is unstable and will diverge", "The batch size is too small for convergence"],
      answer: "The generator has reached Nash equilibrium—generated samples are indistinguishable from real data",
      explanation: "When $D(\\mathbf{x})=0.5$ everywhere, the discriminator cannot distinguish real from fake, meaning it has been reduced to random guessing. This occurs at the Nash equilibrium where generator and discriminator strategies are balanced and neither can improve unilaterally.",
    },
  ],
}
