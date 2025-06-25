import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Module 1 – Introduction to Deep Learning",
  description: "Lecture video and assignments for Module 1 of the Deep Learning course by DYNAMO Lab."
}

export default function ModuleOnePage() {
  const githubRoot = "https://github.com/Shakeri-Lab/dl-course-site/tree/main/assignments/module1"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Modules
          </Link>
        </div>

        {/* Lecture Video */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Lecture 1 – From Linear Regression to Neural Networks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/bpvleOXJrk8"
                  title="From Linear Regression to Neural Networks – Lecture 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lecture Notes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Lecture Notes</CardTitle>
            <CardDescription>Key definitions & takeaway points.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Historical milestones of neural networks and deep learning.</li>
              <li>Difference between traditional machine learning and representation learning.</li>
              <li>Definition of a perceptron and the concept of activation functions.</li>
              <li>Training via empirical risk minimisation.</li>
              <li>Preview of optimisation algorithms (GD, SGD).</li>
            </ul>
          </CardContent>
        </Card>

        {/* Further Reading */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              📖 Further Reading
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-2">
              For a deeper treatment, you can read <a href="https://d2l.ai/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">D2L Online Book</a> until end of <strong>5.2. Implementation of Multilayer Perceptrons</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Consolidated Homework Section */}
        <Card className="mb-12">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">Homework 1</CardTitle>
              <div className="flex space-x-2">
                <Button asChild variant="outline" size="sm">
                  <a href={`${githubRoot}/homework1.ipynb`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Notebook
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href="https://gradescope.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Submit on Gradescope
                  </a>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Part 1 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">1 – From Maximum Likelihood to Cross-Entropy Loss</h3>
              <p className="text-gray-700 mb-2">6 Parts + Bonus (complete sequentially).</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Derive binary cross-entropy from maximum likelihood (include gradient).</li>
                <li>Extend derivation to multi-class softmax.</li>
                <li>Code binary & multi-class cross-entropy from scratch.</li>
                <li>Verify numerically vs. scikit-learn logistic regression.</li>
                <li>Explore effect of label smoothing.</li>
                <li>Analyse gradient behaviour near saturation.</li>
                <li><strong>Bonus:</strong> Implement focal loss and compare on an imbalanced dataset.</li>
              </ol>
            </div>

            {/* Part 2 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">2 – Normal Equations vs. Gradient Descent</h3>
              <p className="text-gray-700">
                Understand computational trade-offs between analytical and iterative solutions. Implement both methods, measure runtime, accuracy, memory usage and conditioning effects. See the template function <code className="bg-gray-100 px-1 rounded">compare_methods</code> in the starter notebook.
              </p>
            </div>

            {/* Part 3 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">3 – SGD Exploration: Escaping Local Minima</h3>
              <p className="text-gray-700">
                Reproduce the two-hole landscape, perform a systematic hyper-parameter study and design your own complex loss landscape.
              </p>
            </div>

            {/* Part 4 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">4 – Modern Optimizers Showdown (PyTorch)</h3>
              <p className="text-gray-700">
                Compare SGD, Momentum, Adam, AdaGrad and RMSProp on challenging optimisation problems including the Rosenbrock function and your two-hole landscape.
              </p>
            </div>

            {/* Part 5 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">5 – Hebbian Learning: "Neurons That Fire Together, Wire Together"</h3>
              <p className="text-gray-700">
                Implement pure Hebbian learning, Oja's rule and analyse their limitations using a pattern association task.
              </p>
            </div>

            {/* Part 6 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">6 – The XOR Challenge</h3>
              <p className="text-gray-700">
                Build and train a minimal neural network that solves the XOR problem to solidify your understanding of non-linear activation functions.
              </p>
            </div>

            {/* Bonus */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Bonus – Bias-Variance Decomposition in Practice</h3>
              <p className="text-gray-700">
                Conduct an empirical study of the bias-variance trade-off across model complexities using bootstrap sampling.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}