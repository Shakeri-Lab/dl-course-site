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
            <CardTitle className="text-2xl">Lecture 1 – What is Deep Learning?</CardTitle>
            <CardDescription>Watch the full lecture directly on this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src="https://www.youtube.com/embed/bpvleOXJrk8"
                title="Introduction to Deep Learning – Lecture 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Assignments */}
        <div className="space-y-10">
          {/* Assignment 1 */}
          <Card id="assignment-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <span>Assignment 1 – From Maximum Likelihood to Cross-Entropy Loss</span>
                <Badge variant="secondary">6 Parts</Badge>
              </CardTitle>
              <CardDescription>
                Connect probability theory to loss functions, understand why cross-entropy emerges naturally.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Binary classification loss derivation and gradient.</li>
                <li>Extend derivation to multi-class with softmax.</li>
                <li>Implement binary & multi-class cross-entropy from scratch.</li>
                <li>Compare with <code>sklearn.linear_model.LogisticRegression</code>.</li>
              </ol>
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <a href={`${githubRoot}/assignment1`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Starter Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href="https://canvas.instructure.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Submit on Canvas
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Assignment 2 */}
          <Card id="assignment-2">
            <CardHeader>
              <CardTitle>Assignment 2 – Normal Equations vs. Gradient Descent</CardTitle>
              <CardDescription>
                Understand computational trade-offs between analytical and iterative solutions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Implement both methods, measure runtime, accuracy, memory usage and conditioning effects. See the template
                function <code>compare_methods</code> in the starter notebook.
              </p>
              <div className="flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <a href={`${githubRoot}/assignment2`} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Starter Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Assignment 3 */}
          <Card id="assignment-3">
            <CardHeader>
              <CardTitle>Assignment 3 – SGD Exploration: Escaping Local Minima</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Reproduce the two-hole landscape, perform a systematic hyper-parameter study and design your own complex
                loss landscape.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href={`${githubRoot}/assignment3`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Starter Code
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Assignment 4 */}
          <Card id="assignment-4">
            <CardHeader>
              <CardTitle>Assignment 4 – Modern Optimizers Showdown (PyTorch)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Compare SGD, Momentum, Adam, AdaGrad and RMSProp on challenging optimisation problems including the
                Rosenbrock function and your two-hole landscape.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href={`${githubRoot}/assignment4`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Starter Code
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Assignment 5 */}
          <Card id="assignment-5">
            <CardHeader>
              <CardTitle>Assignment 5 – Hebbian Learning: "Neurons That Fire Together, Wire Together"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Implement pure Hebbian learning, Oja's rule and analyse their limitations using a pattern association
                task.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href={`${githubRoot}/assignment5`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Starter Code
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Assignment 6 */}
          <Card id="assignment-6">
            <CardHeader>
              <CardTitle>Assignment 6 – The XOR Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Build and train a minimal neural network that solves the XOR problem to solidify your understanding of
                non-linear activation functions.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href={`${githubRoot}/assignment6`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Starter Code
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Bonus */}
          <Card id="bonus-assignment">
            <CardHeader>
              <CardTitle>Bonus – Bias-Variance Decomposition in Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Conduct an empirical study of the bias-variance trade-off across model complexities using bootstrap
                sampling.
              </p>
              <Button asChild variant="outline" size="sm">
                <a href={`${githubRoot}/bonus`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Starter Code
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 