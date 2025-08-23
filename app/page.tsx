"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, ExternalLink } from "lucide-react"
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
    title: "Backpropagation",
    description: "The algorithm that powers deep learning",
    estimatedTime: "4-5 hours",
    topics: ["Backpropagation", "Gradient Descent", "Activation Functions"],
  },
  {
    id: 3,
    title: "Optimization Foundations & Ablation Methodology",
    description: "Optimization algorithms and experimental design",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Module Library */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Course Modules</h2>
            <p className="text-lg text-gray-600">
              Explore the complete curriculum with hands-on exercises and real-world applications
            </p>
            <div className="mt-4 flex justify-center">
              <Button asChild variant="outline">
                <a href="/syllabus.pdf" target="_blank" rel="noopener noreferrer">
                  Course Syllabus (PDF)
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {courseModules.map((module) => (
              <Card key={module.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 flex-1">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                        {module.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{module.title}</h3>
                        <p className="text-gray-600 mb-4 text-lg leading-relaxed">{module.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {module.topics.slice(0, 3).map((topic, index) => (
                            <Badge key={index} variant="secondary" className="text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="font-medium">{module.estimatedTime}</span>
                        </div>
                        <Link href={`/module/${module.id}`}>
                          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2">
                            Explore Module
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
