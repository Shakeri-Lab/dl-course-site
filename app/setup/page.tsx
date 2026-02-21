"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, Code, AlertCircle } from "lucide-react"

const setupSteps = [
  {
    id: 1, title: "Python Environment Setup", description: "Install Python and essential packages", difficulty: "Beginner", estimatedTime: "15-20 minutes",
    steps: ["Install Python 3.8+ from python.org or use Anaconda", "Create a virtual environment: `python -m venv dl-course`", "Activate the environment: `source dl-course/bin/activate` (Linux/Mac) or `dl-course\\Scripts\\activate` (Windows)", "Install required packages: `pip install -r requirements.txt`"],
    resources: [{ title: "Python Installation Guide", url: "https://python.org/downloads/" }, { title: "Virtual Environments Tutorial", url: "https://docs.python.org/3/tutorial/venv.html" }],
  },
  {
    id: 2, title: "Deep Learning Frameworks", description: "Install PyTorch and TensorFlow", difficulty: "Beginner", estimatedTime: "10-15 minutes",
    steps: ["Install PyTorch: Visit pytorch.org and select your configuration", "Install TensorFlow: `pip install tensorflow`", "Verify installations by importing both libraries", "Test GPU support (if available): `torch.cuda.is_available()`"],
    resources: [{ title: "PyTorch Installation", url: "https://pytorch.org/get-started/locally/" }, { title: "TensorFlow Installation", url: "https://tensorflow.org/install" }],
  },
  {
    id: 3, title: "Jupyter Notebook Setup", description: "Configure Jupyter for interactive development", difficulty: "Beginner", estimatedTime: "10 minutes",
    steps: ["Install Jupyter: `pip install jupyter`", "Install JupyterLab (optional): `pip install jupyterlab`", "Start Jupyter: `jupyter notebook` or `jupyter lab`", "Install useful extensions: `pip install jupyter_contrib_nbextensions`"],
    resources: [{ title: "Jupyter Documentation", url: "https://jupyter.org/documentation" }, { title: "JupyterLab Guide", url: "https://jupyterlab.readthedocs.io/" }],
  },
  {
    id: 4, title: "Google Colab Setup", description: "Alternative cloud-based environment", difficulty: "Beginner", estimatedTime: "5 minutes",
    steps: ["Go to colab.research.google.com", "Sign in with your Google account", "Test GPU access: Runtime \u2192 Change runtime type \u2192 GPU", "Mount Google Drive for file storage (optional)"],
    resources: [{ title: "Google Colab", url: "https://colab.research.google.com/" }, { title: "Colab FAQ", url: "https://research.google.com/colaboratory/faq.html" }],
  },
  {
    id: 5, title: "Git and GitHub", description: "Version control for your projects", difficulty: "Intermediate", estimatedTime: "20 minutes",
    steps: ["Install Git from git-scm.com", "Create a GitHub account at github.com", "Configure Git: `git config --global user.name 'Your Name'`", "Clone the course repository: `git clone https://github.com/course/materials.git`"],
    resources: [{ title: "Git Installation", url: "https://git-scm.com/downloads" }, { title: "GitHub Guides", url: "https://guides.github.com/" }],
  },
]

const troubleshooting = [
  { problem: "ImportError: No module named 'torch'", solution: "PyTorch not installed correctly. Try reinstalling with the correct command from pytorch.org", category: "Installation" },
  { problem: "CUDA out of memory", solution: "Reduce batch size or use a smaller model. Consider using Google Colab for more GPU memory.", category: "GPU" },
  { problem: "Jupyter kernel keeps dying", solution: "Usually a memory issue. Restart the kernel and reduce data size or model complexity.", category: "Jupyter" },
  { problem: "Package conflicts", solution: "Create a fresh virtual environment and install packages one by one to identify conflicts.", category: "Dependencies" },
]

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
    case "Intermediate": return "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
    case "Advanced": return "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800"
    default: return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
  }
}

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Development Environment Setup</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get your machine ready for deep learning development. Follow these steps to set up your environment.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-200">Canvas Students</h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                Complete this setup before Module 1. If you encounter issues, contact the instructor or attend office hours for help.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="dark:border-white/10 dark:bg-gray-900/70">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span>Local Development</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-400">Install everything on your own machine for full control and offline access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {["Full control over environment", "Works offline", "Use your own GPU"].map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-sm dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full"><a href="#local-setup">Follow Local Setup Guide</a></Button>
            </CardContent>
          </Card>

          <Card className="dark:border-white/10 dark:bg-gray-900/70">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 dark:text-white">
                <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span>Google Colab</span>
              </CardTitle>
              <CardDescription className="dark:text-gray-400">Use Google&apos;s free cloud environment with GPU access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {["No installation required", "Free GPU access", "Works on any device"].map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-sm dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">Open Google Colab<ExternalLink className="h-4 w-4 ml-2" /></a>
                </Button>
                <Button asChild className="w-full">
                  <a href="https://services.sheerid.com/verify/67a3f0217c740a497f6b4af3/?externalUserId=e4ae4d51-a65a-41f5-838e-969523ee9d96" target="_blank" rel="noopener noreferrer">Apply for Colab Pro (student verification)<ExternalLink className="h-4 w-4 ml-2" /></a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div id="local-setup" className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Local Setup Guide</h2>
          {setupSteps.map((step) => (
            <Card key={step.id} className="dark:border-white/10 dark:bg-gray-900/70">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold text-sm">{step.id}</div>
                    <div>
                      <CardTitle className="text-xl dark:text-white">{step.title}</CardTitle>
                      <CardDescription className="mt-1 dark:text-gray-400">{step.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(step.difficulty)}>{step.difficulty}</Badge>
                    <Badge variant="outline">{step.estimatedTime}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Steps:</h4>
                    <ol className="space-y-2">
                      {step.steps.map((stepItem, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium mt-0.5">{index + 1}</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{stepItem}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  {step.resources.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Resources:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.resources.map((resource, index) => (
                          <Button key={index} asChild size="sm" variant="outline">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}<ExternalLink className="h-3 w-3 ml-1" /></a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Common Issues & Solutions</h2>
          <div className="grid gap-4">
            {troubleshooting.map((item, index) => (
              <Card key={index} className="dark:border-white/10 dark:bg-gray-900/70">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-orange-500 dark:text-orange-400 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.problem}</h4>
                        <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Need Help?</h3>
          <p className="text-green-800 dark:text-green-300 mb-4">If you&apos;re stuck with setup, don&apos;t worry! Here are ways to get help:</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline"><a href="mailto:hs9hd@virginia.edu">Email Instructor</a></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
