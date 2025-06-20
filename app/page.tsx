"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const courseModules = [
  {
    id: 1,
    title: "Introduction to Deep Learning",
    description: "Foundations, history, and key concepts",
    estimatedTime: "3-4 hours",
    topics: ["Neural Networks Basics", "Perceptrons", "History of AI"],
  },
  {
    id: 2,
    title: "Neural Network Fundamentals",
    description: "Architecture, forward/backward propagation",
    estimatedTime: "4-5 hours",
    topics: ["Backpropagation", "Gradient Descent", "Activation Functions"],
  },
  {
    id: 3,
    title: "Optimization and Training",
    description: "SGD, Adam, learning rates, and regularization",
    estimatedTime: "4-5 hours",
    topics: ["Optimizers", "Learning Rate Scheduling", "Regularization"],
  },
  {
    id: 4,
    title: "Convolutional Neural Networks",
    description: "CNNs for computer vision applications",
    estimatedTime: "5-6 hours",
    topics: ["Convolution", "Pooling", "CNN Architectures"],
  },
  {
    id: 5,
    title: "Advanced CNN Architectures",
    description: "ResNet, DenseNet, and modern architectures",
    estimatedTime: "4-5 hours",
    topics: ["ResNet", "DenseNet", "EfficientNet"],
  },
  {
    id: 6,
    title: "Recurrent Neural Networks",
    description: "RNNs, LSTMs, and sequence modeling",
    estimatedTime: "5-6 hours",
    topics: ["RNN Basics", "LSTM", "GRU"],
  },
  {
    id: 7,
    title: "Attention and Transformers",
    description: "Self-attention, transformers, and BERT",
    estimatedTime: "6-7 hours",
    topics: ["Attention Mechanism", "Transformers", "BERT"],
  },
  {
    id: 8,
    title: "Generative Models",
    description: "GANs, VAEs, and generative techniques",
    estimatedTime: "5-6 hours",
    topics: ["GANs", "VAEs", "Diffusion Models"],
  },
  {
    id: 9,
    title: "Reinforcement Learning",
    description: "Q-learning, policy gradients, and RL applications",
    estimatedTime: "6-7 hours",
    topics: ["Q-Learning", "Policy Gradients", "Actor-Critic"],
  },
  {
    id: 10,
    title: "Deep Learning for NLP",
    description: "Language models, embeddings, and text processing",
    estimatedTime: "5-6 hours",
    topics: ["Word Embeddings", "Language Models", "Text Classification"],
  },
  {
    id: 11,
    title: "Model Deployment and MLOps",
    description: "Production deployment, monitoring, and scaling",
    estimatedTime: "4-5 hours",
    topics: ["Model Serving", "Monitoring", "CI/CD for ML"],
  },
  {
    id: 12,
    title: "Final Project and Presentations",
    description: "Capstone project development and peer review",
    estimatedTime: "8-10 hours",
    topics: ["Project Planning", "Implementation", "Presentation"],
  },
]

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Deep Learning Mastery</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive journey through the fundamentals and applications of deep learning. From neural network
            basics to cutting-edge architectures.
          </p>
        </div>

        {/* Course Overview */}
        <Card className="mb-12 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Course Overview</CardTitle>
            <CardDescription>What you'll learn in this comprehensive deep learning course</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Learning Objectives</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Master fundamental concepts of neural networks and deep learning
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Implement modern architectures (CNNs, RNNs, Transformers) from scratch
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Apply deep learning to computer vision, NLP, and reinforcement learning
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Deploy models to production with MLOps best practices</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🛠️ Prerequisites</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Python programming experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basic linear algebra and calculus</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Familiarity with NumPy and basic machine learning concepts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📚 Course Structure</h4>
                <p className="text-gray-700">
                  Each module follows a consistent structure: pre-class preparation, interactive lectures, knowledge
                  check quizzes, live sessions, hands-on practice, and assignments.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Library */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Course Modules</h2>
            <p className="text-lg text-gray-600">
              Explore the complete curriculum with hands-on exercises and real-world applications
            </p>
          </div>

          <div className="grid gap-4">
            {courseModules.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                        {module.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{module.title}</h3>
                        <p className="text-gray-600 mb-3">{module.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {module.topics.slice(0, 3).map((topic, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          {module.estimatedTime}
                        </div>
                        <Link href={`/module/${module.id}`}>
                          <Button>
                            Explore Module
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
