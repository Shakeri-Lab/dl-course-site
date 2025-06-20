"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, ExternalLink, Github, Settings } from "lucide-react"
import { useState } from "react"

const implementationTasks = [
  {
    category: "GitHub Pages Setup",
    tasks: [
      {
        id: "repo-create",
        title: "Create GitHub repository",
        description: "Set up repository with course materials",
        completed: false,
      },
      {
        id: "pages-enable",
        title: "Enable GitHub Pages",
        description: "Configure Pages to deploy from main branch",
        completed: false,
      },
      {
        id: "domain-config",
        title: "Configure custom domain (optional)",
        description: "Set up custom domain for professional appearance",
        completed: false,
      },
      {
        id: "content-upload",
        title: "Upload course content",
        description: "Add videos, readings, notebooks, and resources",
        completed: false,
      },
    ],
  },
  {
    category: "Canvas Configuration",
    tasks: [
      {
        id: "modules-create",
        title: "Create Canvas modules",
        description: "Set up 12 modules with proper structure",
        completed: false,
      },
      {
        id: "external-tool",
        title: "Configure External Tool",
        description: "Set up LTI integration with GitHub Pages",
        completed: false,
      },
      {
        id: "quizzes-setup",
        title: "Create knowledge check quizzes",
        description: "Build quizzes for each module",
        completed: false,
      },
      {
        id: "assignments-create",
        title: "Set up assignments",
        description: "Create assignment templates and rubrics",
        completed: false,
      },
      {
        id: "discussions-setup",
        title: "Create discussion forums",
        description: "Set up module-specific discussion areas",
        completed: false,
      },
    ],
  },
  {
    category: "Content Integration",
    tasks: [
      {
        id: "links-update",
        title: "Update all Canvas links",
        description: "Point Canvas modules to GitHub Pages content",
        completed: false,
      },
      {
        id: "navigation-test",
        title: "Test navigation flow",
        description: "Ensure smooth transitions between Canvas and GitHub",
        completed: false,
      },
      {
        id: "mobile-test",
        title: "Test mobile experience",
        description: "Verify content works well on mobile devices",
        completed: false,
      },
      {
        id: "accessibility-check",
        title: "Accessibility review",
        description: "Ensure content meets accessibility standards",
        completed: false,
      },
    ],
  },
  {
    category: "Launch Preparation",
    tasks: [
      {
        id: "student-test",
        title: "Student experience testing",
        description: "Test complete student journey through a module",
        completed: false,
      },
      {
        id: "backup-plan",
        title: "Create backup plan",
        description: "Prepare alternative access methods if needed",
        completed: false,
      },
      {
        id: "support-docs",
        title: "Prepare support documentation",
        description: "Create help guides for students",
        completed: false,
      },
      {
        id: "launch-announce",
        title: "Course launch announcement",
        description: "Communicate new structure to students",
        completed: false,
      },
    ],
  },
]

export default function ImplementationPage() {
  const [tasks, setTasks] = useState(implementationTasks)

  const toggleTask = (categoryIndex: number, taskIndex: number) => {
    const newTasks = [...tasks]
    newTasks[categoryIndex].tasks[taskIndex].completed = !newTasks[categoryIndex].tasks[taskIndex].completed
    setTasks(newTasks)
  }

  const getCompletionStats = () => {
    const totalTasks = tasks.reduce((sum, category) => sum + category.tasks.length, 0)
    const completedTasks = tasks.reduce(
      (sum, category) => sum + category.tasks.filter((task) => task.completed).length,
      0,
    )
    return { total: totalTasks, completed: completedTasks, percentage: (completedTasks / totalTasks) * 100 }
  }

  const stats = getCompletionStats()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Implementation Checklist</h1>
          <p className="text-lg text-gray-600">
            Complete these tasks to set up your GitHub Pages + Canvas hybrid course
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation Progress</CardTitle>
            <CardDescription>Track your setup progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>
                    {stats.completed} of {stats.total} tasks completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${stats.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{Math.round(stats.percentage)}%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Task Categories */}
        <div className="space-y-8">
          {tasks.map((category, categoryIndex) => (
            <Card key={category.category}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                  <Badge variant="outline">
                    {category.tasks.filter((task) => task.completed).length} / {category.tasks.length}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {category.tasks.map((task, taskIndex) => (
                    <div
                      key={task.id}
                      className={`flex items-start space-x-3 p-3 rounded-lg border transition-colors ${
                        task.completed ? "bg-green-50 border-green-200" : "bg-white border-gray-200"
                      }`}
                    >
                      <button onClick={() => toggleTask(categoryIndex, taskIndex)} className="mt-0.5 flex-shrink-0">
                        {task.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                      <div className="flex-1">
                        <h4
                          className={`font-medium ${task.completed ? "text-green-900 line-through" : "text-gray-900"}`}
                        >
                          {task.title}
                        </h4>
                        <p className={`text-sm ${task.completed ? "text-green-700" : "text-gray-600"}`}>
                          {task.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference Links</CardTitle>
            <CardDescription>Helpful resources for implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="justify-start h-auto p-4">
                <a href="/canvas-integration">
                  <Settings className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Canvas Integration</div>
                    <div className="text-xs text-gray-600">Setup instructions</div>
                  </div>
                </a>
              </Button>

              <Button asChild variant="outline" className="justify-start h-auto p-4">
                <a href="https://docs.github.com/en/pages" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">GitHub Pages Docs</div>
                    <div className="text-xs text-gray-600">Official documentation</div>
                  </div>
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </a>
              </Button>

              <Button asChild variant="outline" className="justify-start h-auto p-4">
                <a href="/setup">
                  <Settings className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Setup Guide</div>
                    <div className="text-xs text-gray-600">Student setup instructions</div>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Completion Message */}
        {stats.percentage === 100 && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-900 mb-2">🎉 Implementation Complete!</h3>
            <p className="text-green-800 mb-4">
              Congratulations! You've successfully set up your GitHub Pages + Canvas hybrid course. Your students now
              have access to beautiful, integrated learning materials.
            </p>
            <Button asChild>
              <a href="/">View Your Course Site</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
