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
      question: "When three ReLU hinges combine to create a compact triangular 'bump' in the input space, this illustrates the intuition behind what theoretical guarantee?",
      choices: ["The Normal Equation for solving linear regression analytically.", "The Universal Approximation Theorem.", "The bias-variance trade-off.", "The central limit theorem for error estimation."],
      answer: "The Universal Approximation Theorem.",
      explanation: "Three hinges can start a rise, reverse its slope, and cancel it back to zero. Creating and summing many such localized pieces gives the intuition behind uniform approximation of continuous functions on compact domains.",
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
      choices: ["An active ReLU contributes an activation derivative of 1 instead of an additional factor below 1, whereas sigmoid derivatives are at most 0.25 and shrink in saturation", "ReLU uses a larger learning rate internally, which prevents gradient shrinkage compared to sigmoid", "ReLU is faster to compute, so the backpropagation pass completes before gradients can vanish", "ReLU normalizes the input data automatically, whereas sigmoid requires manual normalization to prevent vanishing gradients"],
      answer: "An active ReLU contributes an activation derivative of 1 instead of an additional factor below 1, whereas sigmoid derivatives are at most 0.25 and shrink in saturation",
      explanation: "Sigmoid's derivative peaks at 0.25 and approaches zero in its saturated tails, so repeated activation factors can strongly attenuate blame. An active ReLU contributes a factor of 1 at that gate. The complete gradient can still shrink, grow, or cancel through weight matrices and other operations; ReLU removes one common source of attenuation rather than guaranteeing unchanged flow through the network.",
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
      explanation: "For a residual block, the input Jacobian contains an additive identity term as well as the learned branch. That direct route usually improves conditioning and makes the identity function easy to represent. It is not attenuation-proof: the learned Jacobian can reinforce or partly cancel the identity contribution, and successful depth still depends on normalization, initialization, optimization, and architecture.",
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
      question: "Why is batch normalization usually omitted from the final classification logits?",
      choices: ["It makes each example's scores depend on batch statistics and introduces a train/eval statistic shift where stable, independently interpretable logits are preferred", "It is too expensive for a small output layer", "Cross-entropy cannot differentiate through normalization", "Batch normalization only works after convolution"],
      answer: "It makes each example's scores depend on batch statistics and introduces a train/eval statistic shift where stable, independently interpretable logits are preferred",
      explanation: "Cross-entropy accepts any real logits, so normalization is not mathematically forbidden. The practical concern is that output BN couples one example's scores to the other examples in its batch and changes behavior between batch and running statistics, which can complicate calibration and interpretation. Hidden layers often benefit from that normalization; the final score layer usually does not need it.",
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
      choices: ["To increase the number of parameters", "To add non-linearity to the network", "To reduce spatial dimensions and add local tolerance to small translations", "To normalize the activations"],
      answer: "To reduce spatial dimensions and add local tolerance to small translations",
      explanation: "Pooling downsamples feature maps and can make a response insensitive to a shift that stays within the same pooling neighborhood. It does not make the complete CNN exactly translation-invariant: window boundaries, stride, padding, clipping, and later position-sensitive layers still matter.",
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
      question: "Why do skip connections in ResNet usually make very deep networks easier to optimize?",
      choices: ["They reduce the number of parameters", "They add an identity route for activations and gradients and make the identity mapping easy to represent", "They eliminate the need for batch normalization", "They automatically tune learning rates"],
      answer: "They add an identity route for activations and gradients and make the identity mapping easy to represent",
      explanation: "A residual block has Jacobian $I + \\partial F/\\partial x$, so incoming blame has a direct additive identity term as well as the learned branch. This strongly improves gradient flow and makes doing nothing as simple as learning $F=0$, although it is not a mathematical guarantee against every cancellation or poorly conditioned network.",
    },
    {
      question: "In which small-data regime is transfer learning most likely to beat a well-tuned scratch model?",
      choices: ["Whenever the target dataset is small, regardless of task", "When labels are scarce, the task needs rich features, and source coverage and input scale match the target", "Only when the pretrained model has more parameters", "Whenever the target images are grayscale"],
      answer: "When labels are scarce, the task needs rich features, and source coverage and input scale match the target",
      explanation: "Scarce labels alone are not enough. Transfer pays when the source model learned features the target genuinely needs and those features survive the domain and resolution change. At tiny 28-pixel scale, the course experiment found scratch tied or beat imported features; that honest null result is part of the decision rule.",
    },
    {
      question: "In MobileNets, how does depthwise-separable convolution reduce parameters compared to standard convolution?",
      choices: ["By applying 1×1 convolutions before spatial convolutions to reduce channel dimensions first", "By performing spatial convolution separately on each input channel, then mixing channels separately using 1×1 convolutions", "By replacing all convolutions with fully connected layers", "By removing batch normalization between convolution layers"],
      answer: "By performing spatial convolution separately on each input channel, then mixing channels separately using 1×1 convolutions",
      explanation: "Depthwise-separable convolution splits standard convolution into two steps: (1) apply a K×K filter independently to each input channel, then (2) mix channels with 1×1 convolutions. Its per-layer parameter ratio relative to a dense convolution is roughly $1/C_{out} + 1/K^2$; summing those savings across a network can be substantial, but the savings do not grow exponentially with depth.",
    },
  ],
  6: [
    {
      question: "Why can a low-dimensional bottleneck encourage an autoencoder to learn useful structure?",
      choices: ["Because the encoder has more parameters than the input", "Because $k \\ll d$ limits the information that can pass directly through the latent code", "Because the decoder uses different weights than the encoder", "Because autoencoders only work on labeled data"],
      answer: "Because $k \\ll d$ limits the information that can pass directly through the latent code",
      explanation: "A narrow bottleneck creates pressure to compress recurring structure instead of copying every coordinate directly. It is an inductive bias, not a guarantee: an expressive network can still memorize a finite training set, so generalization must be checked on held-out data.",
    },
    {
      question: "Under what conditions does a linear autoencoder recover the PCA principal subspace?",
      choices: ["For any nonlinear decoder", "For centered data, an undercomplete linear encoder-decoder, squared reconstruction loss, and a global optimum", "Only when the data already has zero reconstruction error", "Only with classification labels"],
      answer: "For centered data, an undercomplete linear encoder-decoder, squared reconstruction loss, and a global optimum",
      explanation: "Under those conditions, the optimal reconstruction projects onto the same leading principal subspace as PCA. Individual encoder coordinates need not equal the uniquely ordered PCA vectors: invertible changes of basis inside the latent space can represent the same projection.",
    },
    {
      question: "In PCA viewed as an encoder-decoder, what is the encoding step?",
      choices: ["$\\mathbf{z} = \\mathbf{x} + \\mathbf{V}_k$", "$\\mathbf{z} = \\mathbf{V}_k \\mathbf{x}$", "$\\mathbf{z} = \\mathbf{V}_k^T \\mathbf{x}$", "$\\mathbf{z} = \\mathbf{x} \\mathbf{V}_k^T$"],
      answer: "$\\mathbf{z} = \\mathbf{V}_k^T \\mathbf{x}$",
      explanation: "The transpose projects the input onto the principal component directions. Reconstruction then uses $\\hat{\\mathbf{x}} = \\mathbf{V}_k \\mathbf{z}$, recovering data in the original space.",
    },
    {
      question: "What is the most defensible claim about an autoencoder bottleneck?",
      choices: ["It guarantees semantic features", "It encourages selective compression, whose usefulness must be evaluated", "It prevents memorization in every architecture", "It always removes noise"],
      answer: "It encourages selective compression, whose usefulness must be evaluated",
      explanation: "The bottleneck constrains the representation, but the reconstruction objective does not specify which information is semantically useful. Inspect reconstructions and test the representation on held-out or downstream tasks before making that claim.",
    },
    {
      question: "Why is the standard autoencoder reconstruction objective called self-supervised?",
      choices: ["The input itself supplies the reconstruction target", "A pretrained classifier supplies semantic labels", "The decoder is never trained", "The method can only use perfectly clean data"],
      answer: "The input itself supplies the reconstruction target",
      explanation: "The training pair is constructed automatically as $(x,x)$: no external semantic annotation is required. Autoencoders are often grouped under unsupervised representation learning, while self-supervised names the more precise mechanism that creates their target.",
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
      question: "What trade-off does truncated backpropagation through time (TBPTT) make?",
      choices: ["It deletes all context before each chunk", "It carries recurrent-state values across contiguous chunks but detaches the graph, bounding memory and compute while preventing credit assignment across the boundary", "It is exact BPTT implemented in smaller batches", "It guarantees that dependencies beyond 50 tokens never matter"],
      answer: "It carries recurrent-state values across contiguous chunks but detaches the graph, bounding memory and compute while preventing credit assignment across the boundary",
      explanation: "TBPTT preserves running context by carrying the state value forward, then detaches that value so the backward graph has a finite horizon. The benefit is bounded memory and compute; the cost is that the loss cannot assign gradient credit beyond the chosen horizon. There is no universal 20–50-token cutoff—the right horizon depends on the task and architecture.",
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
      explanation: "Cross-attention connects the decoder to the already-available encoder memory, so it needs no future-token causal mask over source positions. It may still use padding or task-specific visibility masks. Encoder self-attention is likewise non-causal in the standard encoder, while decoder self-attention uses a causal mask.",
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
      question: "Why is scaled dot-product attention usually more accelerator-friendly than additive (Bahdanau) attention?",
      choices: ["Additive attention cannot be vectorized over query–key pairs", "Dot-product scoring reduces the pairwise core to large matrix multiplications, while additive scoring needs broadcasted sums, a nonlinear activation, and a reduction for every pair", "Dot-product attention never uses softmax", "Additive attention cannot process batches"],
      answer: "Dot-product scoring reduces the pairwise core to large matrix multiplications, while additive scoring needs broadcasted sums, a nonlinear activation, and a reduction for every pair",
      explanation: "Both mechanisms can be batched and vectorized. The difference is the computational shape: dot-product scores are one GEMM followed by scaling and softmax, whereas additive attention materializes or fuses pairwise projected sums, applies tanh, and reduces with another vector. That extra elementwise work and memory traffic is generally less friendly to dense-matrix hardware.",
    },
  ],
  9: [
    {
      question: "What is the computational complexity of self-attention with respect to sequence length $n$ and embedding dimension $d$?",
      choices: ["$O(nd^2)$", "$O(n^2d)$", "$O(nd)$", "$O(n^2d^2)$"],
      answer: "$O(n^2d)$",
      explanation: "Computing $QK^T$ requires an $(n \\times d)(d \\times n)$ multiplication, giving $O(n^2d)$ work and an $n \\times n$ attention matrix. That quadratic pressure makes long contexts costly, although sparse, fused, and memory-efficient implementations can extend practical context lengths substantially.",
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
      answer: "Transformers lack some useful CNN inductive biases, especially locality and translation equivariance, which can help CNNs generalize with limited data. With enough data and compute, a Transformer's weaker spatial prior can instead offer useful flexibility.",
      explanation: "CNN locality and translation equivariance can improve sample efficiency, while a weaker spatial prior can become flexible at scale. Dataset size is one important axis, but compute, augmentation, pretraining, architecture, and optimization recipe also affect the comparison; no single threshold determines the winner.",
    },
    {
      question: "How do BERT and GPT differ in their pretraining objectives, and why does this difference affect what attention patterns they can use?",
      answer: "BERT uses masked language modeling (predicting masked tokens with bidirectional context), allowing it to use bidirectional attention. GPT uses autoregressive language modeling (predicting the next token), requiring causal masking to prevent attending to future tokens.",
      explanation: "The pretraining objective determines the permissible attention pattern. Masking creates a denoising problem where context can flow both directions, while autoregressive generation requires left-to-right causality. This architectural choice directly follows from the training objective.",
    },
    {
      question: "What architectural role does the `<cls>` token play in both ViT and BERT, and why is this design useful?",
      answer: "In both architectures, `<cls>` is prepended to the input (patches in ViT, tokens in BERT), and its representation after the Transformer is used for classification. Through self-attention, it aggregates information from all inputs and serves as a learnable global representation.",
      explanation: "A dedicated pooling token gives the objective an explicit location whose representation can learn to aggregate the sequence. It has direct attention paths to all inputs, but it is a design choice rather than inherently superior: mean pooling, attention pooling, or a designated final token can also work when the architecture and objective support them.",
    },
    {
      question: "How does T5 unify diverse NLP tasks (classification, summarization, translation) into a single framework, and what advantage does this provide?",
      answer: "T5 converts all tasks to text-to-text format by adding task description prefixes (e.g., \"Summarize:\", \"Translate English to German:\") and generating the target as text. This enables a single model and objective to handle multiple task types and allows multitask learning.",
      explanation: "The unified framework is powerful because it eliminates task-specific architectures and loss functions. The same encoder-decoder model with the same objective handles generation, classification, and structured prediction. This also enables zero-shot transfer and efficient multitask training.",
    },
    {
      question: "According to the textbook, Transformer language models exhibit power-law scaling relationships. What does this mean, and why is it important?",
      answer: "In controlled empirical studies, loss often follows an approximately linear trend on log-log plots as model size, data, or compute is varied. Because compute couples model size and training tokens rather than forming an independent multiplicative factor, fitted scaling laws can be used to estimate a compute-efficient frontier instead of simply maximizing one quantity.",
      explanation: "These are empirical regularities over measured regimes, not a universal product formula. Their practical value is comparative: under an explicit compute budget and training recipe, they help estimate how to divide resources between parameters and data and where extrapolation becomes risky.",
    },
    {
      question: "What does using separate classification and distillation tokens and heads provide in a distilled ViT?",
      choices: ["It prevents all gradient interaction between the two objectives", "It gives the label and teacher objectives separate readout pathways that can specialize, while both still train the shared trunk", "It doubles the model's parameter count", "It guarantees the student will outperform the teacher"],
      answer: "It gives the label and teacher objectives separate readout pathways that can specialize, while both still train the shared trunk",
      explanation: "The classification head reads a token trained toward ground-truth labels, while the distillation head reads a token trained toward teacher targets. Separate readouts reduce direct competition for one summary vector and let the two tokens specialize. They do not make the objectives independent: both losses backpropagate through shared Transformer parameters, where their gradients can still agree or conflict.",
    },
    {
      question: "What practical principle did the Chinchilla study add to earlier language-model scaling practice?",
      choices: ["Make models as large as possible regardless of training data", "Scale parameters and training tokens together under a compute budget; its fitted regime suggested roughly 20 training tokens per parameter", "Spend all compute on data and never increase model size", "Use one universal token-to-parameter ratio for every architecture and dataset"],
      answer: "Scale parameters and training tokens together under a compute budget; its fitted regime suggested roughly 20 training tokens per parameter",
      explanation: "The study found that several earlier large models were undertrained for their size. In its measured regime, allocating compute to both model size and more training tokens produced a smaller, more thoroughly trained Chinchilla model that outperformed the larger Gopher on many evaluations. The roughly 20:1 figure is an empirical rule from that setup, not a universal constant.",
    },
    {
      question: "Why must exact softmax attention keep a KV cache while a fixed-state SSM does not? Answer in regression vocabulary.",
      choices: ["Attention is a query-local nonparametric regressor that retains its observed key/value pairs as the dataset; a fixed-state SSM compresses the prefix into bounded state", "Attention stores optimizer gradients, while an SSM recomputes every past token", "The KV cache stores model parameters, while an SSM has no parameters", "An SSM always recalls every past value exactly, so it needs no dataset"],
      answer: "Attention is a query-local nonparametric regressor that retains its observed key/value pairs as the dataset; a fixed-state SSM compresses the prefix into bounded state",
      explanation: "For exact softmax attention, the projected keys and values are the data traversed by each new query. Caching them avoids recomputing earlier projections, but the dataset still grows with the prefix. A fixed-state SSM chooses a different statistical contract: it updates a bounded summary, gaining constant state size while generally accepting lossy compression. Keeping every K/V row does not by itself guarantee exact numeric recall; the query-dependent weighted average still matters.",
    },
    {
      question: "Which dial of the shared regression objective does Mamba-style selectivity most naturally turn?",
      choices: ["Token-dependent retention and input injection, interpretable as a learned forgetting and update schedule", "The local-constant constraint that makes softmax a weighted average", "The choice to retain every key/value pair losslessly", "Only the output vocabulary and tokenizer"],
      answer: "Token-dependent retention and input injection, interpretable as a learned forgetting and update schedule",
      explanation: "Selectivity lets the recurrence retain or inject information differently for different tokens. In regression language, that plays a role analogous to learning which history to weight and how strongly to update. This is an interpretive bridge, not an exact derivation of Mamba from one least-squares objective, and it says nothing about selective-scan implementation details.",
    },
    {
      question: "Which claim requires the local-constant qualification before we say ‘attention is regression,’ and why?",
      choices: ["The claim that unrestricted $M$ with $w=1$ and no regularizer directly yields the softmax weighted average, because such a function can interpolate the observed pairs instead", "The claim that the softmax weights are nonnegative and sum to one, because softmax can produce negative weights", "The claim that queries and keys are learned views, because they must always share one projection", "The claim that attention uses values, because values are used only during training"],
      answer: "The claim that unrestricted $M$ with $w=1$ and no regularizer directly yields the softmax weighted average, because such a function can interpolate the observed pairs instead",
      explanation: "The exact statement fixes one constant prediction $c$ at query $q$ and minimizes $\\frac12\\sum_\\tau\\kappa(q,k_\\tau)\\lVert c-v_\\tau\\rVert^2$. Stationarity gives $\\sum_\\tau\\kappa(q,k_\\tau)(c-v_\\tau)=0$, so $c$ is the normalized kernel-weighted average. The kernel supplies the weights; the local-constant fit supplies the average.",
    },
    {
      question: "If a kernel factors as $\\kappa(q,k)=\\phi(q)^\\top\\phi(k)$, which running state exactly reproduces the normalized kernel traversal?",
      choices: ["$S_t$ alone", "$z_t$ alone", "The pair $(S_t,z_t)$, where $S_t=\\sum_{\\tau\\le t}\\phi(k_\\tau)v_\\tau^\\top$ and $z_t=\\sum_{\\tau\\le t}\\phi(k_\\tau)$", "The final key/value pair only"],
      answer: "The pair $(S_t,z_t)$, where $S_t=\\sum_{\\tau\\le t}\\phi(k_\\tau)v_\\tau^\\top$ and $z_t=\\sum_{\\tau\\le t}\\phi(k_\\tau)$",
      explanation: "$S_t$ supplies the weighted numerator and $z_t$ supplies the normalizing denominator: $\\phi(q)^\\top S_t/(\\phi(q)^\\top z_t)$. Both are sufficient statistics for that factorized kernel. This exact recurrence does not make ordinary softmax attention a fixed-state method unless its kernel is replaced by, or represented with, an appropriate factorization.",
    },
    {
      question: "Wang et al. report comparable added parameters in Table 2 and a shared chain-of-thought protocol in §E.2. What matched-comparison conclusion is justified?",
      choices: ["The comparison is automatically matched for total inference compute", "Some architecture and prompting confounds are controlled, but horizon-dependent internal planning work is not matched by counting generated tokens alone", "Parameter matching makes the choice of hardware irrelevant", "The results establish a universal ranking of memory and control architectures"],
      answer: "Some architecture and prompting confounds are controlled, but horizon-dependent internal planning work is not matched by counting generated tokens alone",
      explanation: "Comparable added parameter counts and a shared prompting/sampling recipe are useful controls, but they do not equalize total per-example inference work. A compute-matched rematch would fix the backbone, data, prompt, sampling, hardware, and output cap; include the planner's internal horizon work; allocate equal measured FLOPs or wall time; and report accuracy versus compute with uncertainty and a memory-only baseline. That would be a rematch, not a referendum.",
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
      choices: ["MSE is computationally expensive; diffusion uses faster gradient descent", "A one-shot MSE predictor averages competing completions; diffusion learns denoising information across noise levels and samples through repeated refinement", "MSE cannot handle color images; diffusion learns in latent space", "MSE requires too much training data; diffusion uses smaller datasets"],
      answer: "A one-shot MSE predictor averages competing completions; diffusion learns denoising information across noise levels and samples through repeated refinement",
      explanation: "When several completions are plausible, a deterministic one-shot squared-error prediction tends toward their conditional mean, which can look blurry. A diffusion model learns a denoising or score field at many noise levels and follows a stochastic reverse process, so separate runs can realize different plausible modes.",
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
      question: "At the theoretical optimum of the original GAN objective, what happens when $p_g=p_{data}$?",
      choices: ["The optimal discriminator outputs 0.5 wherever either distribution has support", "The discriminator memorizes every training image", "The generator's loss must be zero", "The batch size becomes irrelevant"],
      answer: "The optimal discriminator outputs 0.5 wherever either distribution has support",
      explanation: "For the original minimax objective and an optimal discriminator, matching the generated and data distributions makes the density ratio equal, so $D^*(x)=1/2$. Observing a value near 0.5 in an actual run is not by itself proof of equilibrium: the discriminator could also be undertrained or otherwise ineffective.",
    },
  ],
}
