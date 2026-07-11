# Quiz ↔ Lecture-Transcript Alignment Review

*The detailed alignment below was generated for the original 48-question bank by
comparing Modules 1–10 against auto-caption transcripts. The current bank contains
67 questions: 57 across Modules 1–10 and 10 slide-aligned questions in Modules 11–12.*

## Method & caveat

Transcripts cover **only the videos**. The quizzes (drawn from the LaTeX quiz bank)
test the **whole module**: video, assigned course-book or alternative reading, and
slides. In the original audit, D2L was the assigned text, so each apparent gap was
cross-checked against those then-current sections.

## Verdict

**The original 48-question bank was strongly aligned:** 38 questions were squarely
covered by video, 6 partially covered, and 4 absent from video. After the assigned
readings were checked, only 2 of those 48 were absent from both video and reading; no
keyed answer contradicted a lecture. Nine later questions were added to Modules 1–10
from the high-value gaps listed below, and Modules 11–12 gained five questions each
from their published slides. The table therefore documents the original audit rather
than pretending its per-question symbols cover all 67 current questions.

| Module | Alignment | Per-question coverage | Answer consistent? |
|---|---|---|---|
| M1 | moderate | ✓ ~ ✓ ✓ ✗ | ✓ ? ✓ ✓ ✗ |
| M2 | moderate | ✓ ✓ ✓ ✓ ✗ | ✓ ✓ ✓ ✓ ? |
| M3 | moderate | ✓ ✓ ✗ ✓ ~ | ✓ ✓ ? ✓ ✓ |
| M4 | strong | ✓ ✓ ✓ ~ | ✓ ✓ ✓ ✓ |
| M5 | strong | ✓ ✓ ~ ✓ | ✓ ✓ ✓ ✓ |
| M6 | strong | ✓ ✓ ✓ ✓ ✓ | ✓ ✓ ✓ ✓ ✓ |
| M7 | strong | ✓ ✓ ✓ ✓ ✓ | ✓ ✓ ✓ ✓ ✓ |
| M8 | strong | ✓ ✓ ~ ✓ ✓ | ✓ ✓ ? ✓ ✓ |
| M9 | moderate | ✓ ✗ ✓ ✓ ✓ | ✓ ? ✓ ✓ ✓ |
| M10 | moderate | ✓ ✓ ✓ ~ ✓ | ✓ ✓ ✓ ? ✓ |

<sub>✓ covered · ~ partial · ✗ not in video · (answer) ✓ confirmed · ? lecture silent · ✗ contradicted</sub>

## Changes made after the original audit

- The softmax-plus-cross-entropy item moved from Module 2 to Module 1, where both the lecture sequence and the assigned book chapters support it.
- The tangential Module 3 training-memory item was removed and replaced with a direct ablation-methodology check.
- Later additions now cover ReLU and batch normalization in Module 2; initialization, residual learning, ablation design, and batch normalization in Module 3; MobileNet factorization in Module 5; TBPTT in Module 7; and knowledge distillation plus compute-optimal scaling in Module 10.
- Several keyed explanations were narrowed during the book-integration review: pooling gives local shift tolerance rather than exact invariance, residual paths help gradient flow without guaranteeing it, a bottleneck encourages rather than guarantees useful representations, and scaling laws are empirical fitted relationships rather than a universal product formula.

These repairs resolve the two genuine misalignments in the original bank. The symbols in the table above remain a historical record; they should not be read as an audit of the later questions.

## Reading-supported or deliberately adjacent items

- **M1 universal approximation** is now reinforced by the compact-bump construction in course-book Chapter 3.
- **M8 causal masking** is a deliberate preview of the decoder material formalized in the following module and course-book Chapter 11.
- **M9 $\sqrt{d_k}$ scaling** is derived in the preceding attention lecture and revisited in the assigned material.
- **M10 T5 prefixes** assess the taught text-to-text principle; the prefixes are examples of task conditioning rather than a fixed vocabulary.

## Remaining high-value opportunities

The current bank is broader than the original 48 questions, but a short self-check cannot sample every important idea. If more questions are added, prioritize:

- **M1** — SGD noise, learning-rate and batch-size trade-offs, momentum, and adaptive optimizers.
- **M3** — regularization, early stopping, dropout, and when layer normalization is preferable to batch normalization.
- **M4** — weight sharing, translation equivariance, and multi-channel convolution mechanics.
- **M5** — Inception's parallel scales and the role of $1\times1$ convolutions.
- **M6** — convolutional autoencoders, curved-manifold representations, and downstream evaluation of learned features.
- **M7** — sequence padding and masking, plus recurrent initialization choices.
- **M8** — kernel-regression views of attention and the effect of layer normalization.
- **M9** — causal masks, residual paths, and layer normalization inside a complete Transformer block.

These are coverage opportunities, not known correctness defects in the present bank.
