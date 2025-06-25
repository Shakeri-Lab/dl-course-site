import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, BookOpen, Clock, ExternalLink, Play, FileText, Code, Github } from "lucide-react"
import Link from "next/link"

// Type definitions
interface ContentItem {
  type: string
  title: string
  url: string
  description: string
  duration?: string
  github?: string
}

interface Section {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  content: ContentItem[]
}

interface Module {
  id: number
  title: string
  description: string
  estimatedTime: string
  learningObjectives: string[]
  sections: Section[]
}

// Generate all module IDs for static generation
export function generateStaticParams() {
  // Module 1 has its own dedicated page (app/module/1), so exclude it here to prevent route conflict
  return Array.from({ length: 11 }, (_, i) => ({
    id: (i + 2).toString(), // generates 2..12
  }))
}

// Simplified module data - you can expand this with real content
function getModuleData(id: number): Module | null {
  const modules: Record<number, Module> = {
    1: {
      id: 1,
      title: "Introduction to Deep Learning",
      description: "Foundations, history, and key concepts of deep learning",
      estimatedTime: "3-4 hours",
      learningObjectives: [
        "Understand the history and evolution of artificial intelligence",
        "Distinguish between traditional ML and deep learning approaches",
        "Identify key applications of deep learning in various domains",
        "Recognize the basic structure of neural networks",
      ],
      sections: [
        {
          id: "lectures",
          title: "Lecture Materials",
          icon: <Play className="h-5 w-5" />,
          description: "Core video lectures and presentations",
          content: [
            {
              type: "video",
              title: "History of Neural Networks",
              duration: "25 min",
              url: "https://youtube.com/watch?v=example1",
              description: "Journey through the evolution of neural networks from perceptrons to modern deep learning.",
            },
            {
              type: "video",
              title: "Deep Learning vs Traditional ML",
              duration: "20 min",
              url: "https://youtube.com/watch?v=example2",
              description: "Understanding the key differences and when to use each approach.",
            },
            {
              type: "slides",
              title: "Introduction to Neural Networks",
              url: "/slides/module1-intro.pdf",
              description: "Comprehensive slide deck covering neural network fundamentals.",
            },
          ],
        },
        {
          id: "readings",
          title: "Required Readings",
          icon: <FileText className="h-5 w-5" />,
          description: "Essential texts and articles",
          content: [
            {
              type: "reading",
              title: "Deep Learning Book - Chapter 1",
              url: "https://www.deeplearningbook.org/contents/intro.html",
              duration: "30 min",
              description: "Introduction chapter from the definitive deep learning textbook.",
            },
            {
              type: "article",
              title: "The Unreasonable Effectiveness of Deep Learning",
              url: "https://example.com/article",
              duration: "15 min",
              description: "Exploring why deep learning works so well across diverse domains.",
            },
          ],
        },
        {
          id: "code",
          title: "Code Examples & Notebooks",
          icon: <Code className="h-5 w-5" />,
          description: "Hands-on programming exercises",
          content: [
            {
              type: "notebook",
              title: "Your First Neural Network",
              url: "https://colab.research.google.com/drive/example1",
              description: "Build a simple perceptron from scratch using NumPy.",
              github: "https://github.com/course/module1/notebook1.ipynb",
            },
            {
              type: "notebook",
              title: "Visualizing Neural Networks",
              url: "https://colab.research.google.com/drive/example2",
              description: "Interactive visualizations of how neural networks learn.",
              github: "https://github.com/course/module1/notebook2.ipynb",
            },
          ],
        },
        {
          id: "resources",
          title: "Additional Resources",
          icon: <BookOpen className="h-5 w-5" />,
          description: "Supplementary materials for deeper learning",
          content: [
            {
              type: "resource",
              title: "3Blue1Brown Neural Networks Series",
              url: "https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
              description: "Beautiful visual explanations of neural network concepts.",
            },
            {
              type: "resource",
              title: "Neural Networks Playground",
              url: "https://playground.tensorflow.org/",
              description: "Interactive tool to experiment with neural network architectures.",
            },
          ],
        },
      ],
    },
    2: {
      id: 2,
      title: "Neural Network Fundamentals",
      description: "Perceptrons, feedforward networks, and backpropagation",
      estimatedTime: "4-5 hours",
      learningObjectives: [
        "Understand the mathematical foundations of neural networks",
        "Implement backpropagation from scratch",
        "Design and train feedforward networks",
        "Analyze activation functions and their properties",
      ],
      sections: [
        {
          id: "lectures",
          title: "Lecture Materials",
          icon: <Play className="h-5 w-5" />,
          description: "Core concepts and mathematical foundations",
          content: [
            {
              type: "video",
              title: "The Perceptron Algorithm",
              duration: "30 min",
              url: "https://youtube.com/watch?v=example",
              description: "Understanding the building block of neural networks.",
            },
          ],
        },
        {
          id: "readings",
          title: "Required Readings",
          icon: <FileText className="h-5 w-5" />,
          description: "Essential texts and research papers",
          content: [
            {
              type: "reading",
              title: "Deep Learning Book - Chapter 6",
              url: "https://www.deeplearningbook.org/contents/mlp.html",
              duration: "45 min",
              description: "Deep feedforward networks chapter.",
            },
          ],
        },
        {
          id: "code",
          title: "Code Examples & Notebooks",
          icon: <Code className="h-5 w-5" />,
          description: "Implementation exercises",
          content: [
            {
              type: "notebook",
              title: "Backpropagation from Scratch",
              url: "https://colab.research.google.com/drive/example",
              description: "Implement backpropagation algorithm step by step.",
              github: "https://github.com/course/module2/backprop.ipynb",
            },
          ],
        },
        {
          id: "resources",
          title: "Additional Resources",
          icon: <BookOpen className="h-5 w-5" />,
          description: "Supplementary materials",
          content: [
            {
              type: "resource",
              title: "Backpropagation Visualization",
              url: "https://example.com/backprop-viz",
              description: "Interactive visualization of backpropagation.",
            },
          ],
        },
      ],
    },
    3: {
      id: 3,
      title: "Optimization and Training",
      description: "SGD, Adam, learning rates, and regularization techniques",
      estimatedTime: "4-5 hours",
      learningObjectives: [
        "Master gradient descent and its variants (SGD, Adam, RMSprop)",
        "Understand learning rate scheduling strategies",
        "Apply regularization techniques to prevent overfitting",
        "Implement optimization algorithms from scratch",
      ],
      sections: [
        {
          id: "lectures",
          title: "Lecture Materials",
          icon: <Play className="h-5 w-5" />,
          description: "Core optimization concepts and algorithms",
          content: [
            {
              type: "video",
              title: "Gradient Descent Deep Dive",
              duration: "35 min",
              url: "https://youtube.com/watch?v=example3",
              description: "Mathematical foundations and intuitions behind gradient descent.",
            },
            {
              type: "video",
              title: "Advanced Optimizers: Adam, RMSprop, and Beyond",
              duration: "30 min",
              url: "https://youtube.com/watch?v=example4",
              description: "Modern optimization algorithms that power state-of-the-art models.",
            },
          ],
        },
        {
          id: "readings",
          title: "Required Readings",
          icon: <FileText className="h-5 w-5" />,
          description: "Theoretical foundations and research papers",
          content: [
            {
              type: "reading",
              title: "Adam: A Method for Stochastic Optimization",
              url: "https://arxiv.org/abs/1412.6980",
              duration: "45 min",
              description: "The original Adam optimizer paper - essential reading.",
            },
          ],
        },
        {
          id: "code",
          title: "Code Examples & Notebooks",
          icon: <Code className="h-5 w-5" />,
          description: "Implement optimizers and training loops",
          content: [
            {
              type: "notebook",
              title: "Implementing Adam from Scratch",
              url: "https://colab.research.google.com/drive/example3",
              description: "Build the Adam optimizer step by step.",
              github: "https://github.com/course/module3/adam-optimizer.ipynb",
            },
          ],
        },
        {
          id: "resources",
          title: "Additional Resources",
          icon: <BookOpen className="h-5 w-5" />,
          description: "Tools and references for optimization",
          content: [
            {
              type: "resource",
              title: "Optimizer Visualization Tool",
              url: "https://vis.ensmallen.org/",
              description: "Interactive visualizations of different optimization algorithms.",
            },
          ],
        },
      ],
    },
  }

  // For modules 4-12, return a template structure
  if (id >= 4 && id <= 12) {
    const moduleTopics = {
      4: "Convolutional Neural Networks",
      5: "Recurrent Neural Networks",
      6: "Attention and Transformers",
      7: "Generative Models",
      8: "Computer Vision Applications",
      9: "Natural Language Processing",
      10: "Reinforcement Learning",
      11: "Advanced Topics",
      12: "Final Projects and Deployment"
    }

    return {
      id,
      title: moduleTopics[id as keyof typeof moduleTopics] || `Module ${id}`,
      description: `Advanced topics in deep learning - Module ${id}`,
      estimatedTime: "4-5 hours",
      learningObjectives: [
        `Understand the core concepts of ${moduleTopics[id as keyof typeof moduleTopics]}`,
        "Apply theoretical knowledge to practical problems",
        "Implement key algorithms and architectures",
        "Analyze performance and optimization strategies",
      ],
      sections: [
        {
          id: "lectures",
          title: "Lecture Materials",
          icon: <Play className="h-5 w-5" />,
          description: "Core video lectures and presentations",
          content: [
            {
              type: "video",
              title: `Introduction to ${moduleTopics[id as keyof typeof moduleTopics]}`,
              duration: "30 min",
              url: `https://youtube.com/watch?v=module${id}`,
              description: `Comprehensive introduction to the key concepts of Module ${id}.`,
            },
          ],
        },
        {
          id: "readings",
          title: "Required Readings",
          icon: <FileText className="h-5 w-5" />,
          description: "Essential texts and research papers",
          content: [
            {
              type: "reading",
              title: `Research Papers - Module ${id}`,
              url: `https://example.com/module${id}-papers`,
              duration: "45 min",
              description: `Key research papers for Module ${id}.`,
            },
          ],
        },
        {
          id: "code",
          title: "Code Examples & Notebooks",
          icon: <Code className="h-5 w-5" />,
          description: "Hands-on programming exercises",
          content: [
            {
              type: "notebook",
              title: `Module ${id} Implementation`,
              url: `https://colab.research.google.com/drive/module${id}`,
              description: `Practical implementation exercises for Module ${id}.`,
              github: `https://github.com/course/module${id}/exercises.ipynb`,
            },
          ],
        },
        {
          id: "resources",
          title: "Additional Resources",
          icon: <BookOpen className="h-5 w-5" />,
          description: "Supplementary materials for deeper learning",
          content: [
            {
              type: "resource",
              title: `Module ${id} Resources`,
              url: `https://example.com/module${id}-resources`,
              description: `Additional learning resources for Module ${id}.`,
            },
          ],
        },
      ],
    }
  }

  return modules[id] || null
}

function getContentIcon(type: string) {
  switch (type) {
    case "video":
      return <Play className="h-4 w-4 text-red-500" />
    case "reading":
      return <FileText className="h-4 w-4 text-blue-500" />
    case "notebook":
      return <Code className="h-4 w-4 text-green-500" />
    case "slides":
      return <FileText className="h-4 w-4 text-purple-500" />
    case "resource":
      return <ExternalLink className="h-4 w-4 text-orange-500" />
    default:
      return <BookOpen className="h-4 w-4 text-gray-500" />
  }
}

interface ModulePageProps {
  params: {
    id: string
  }
}

export default function ModulePage({ params }: ModulePageProps) {
  const moduleId = Number.parseInt(params.id)
  const module = getModuleData(moduleId)

  if (!module) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Course Home
          </Link>
        </div>

        {/* Module Header */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Module {module.id}: {module.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{module.description}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.estimatedTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Learning Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {module.learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module Content Sections */}
        <div className="space-y-8">
          {module.sections.map((section) => (
            <Card key={section.id}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">{section.icon}</div>
                  <div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {section.content.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {getContentIcon(item.type)}
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>

                            <div className="flex items-center space-x-4">
                              {item.duration && (
                                <Badge variant="outline" className="text-xs">
                                  {item.duration}
                                </Badge>
                              )}

                              <div className="flex space-x-2">
                                <Button asChild size="sm">
                                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.type === "video"
                                      ? "Watch"
                                      : item.type === "notebook"
                                        ? "Open in Colab"
                                        : item.type === "reading"
                                          ? "Read"
                                          : "View"}
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>

                                {item.github && (
                                  <Button asChild size="sm" variant="outline">
                                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                                      <Github className="h-3 w-3 mr-1" />
                                      Code
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Canvas Return - Subtle Integration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm border">
            <span className="text-gray-600">Ready to continue your learning journey?</span>
            <Button asChild>
              <Link href="/">Return to Course</Link>
            </Button>
          </div>
        </div>

        {/* Module Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <div>
            {moduleId > 1 && (
              <Link href={`/module/${moduleId - 1}`}>
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Module
                </Button>
              </Link>
            )}
          </div>

          <Link href="/">
            <Button variant="outline">All Modules</Button>
          </Link>

          <div>
            {moduleId < 12 && (
              <Link href={`/module/${moduleId + 1}`}>
                <Button variant="outline">
                  Next Module
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
