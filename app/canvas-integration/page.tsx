"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Copy, Settings, LinkIcon } from "lucide-react"
import Link from "next/link"

const integrationSteps = [
  {
    id: 1,
    title: "Canvas Module Setup",
    description: "Create modules in Canvas that link to GitHub Pages content",
    steps: [
      "Navigate to your Canvas course and go to Modules",
      "Create a new module for each course module (1-12)",
      "Set module prerequisites (Module 2 requires Module 1 completion, etc.)",
      "Configure module requirements (view all items, complete quiz, etc.)",
    ],
    code: null,
  },
  {
    id: 2,
    title: "External Tool Configuration",
    description: "Set up External Tool (LTI) integration for seamless embedding",
    steps: [
      "Go to Settings → Apps → View App Configurations",
      "Click '+ App' to add a new external tool",
      "Configure the external tool with GitHub Pages URL",
      "Set launch URL to your GitHub Pages domain",
    ],
    code: {
      title: "External Tool Configuration",
      content: `Name: Deep Learning Course Materials
Consumer Key: dl-course-materials
Shared Secret: [generate-secure-key]
Launch URL: https://your-username.github.io/dl-course-materials
Domain: your-username.github.io
Privacy: Public`,
    },
  },
  {
    id: 3,
    title: "Module Page Structure",
    description: "Template for each Canvas module page",
    steps: [
      "Create a Page for each module overview",
      "Add External Tool link to GitHub materials",
      "Include quiz and assignment items",
      "Set up discussion forum for each module",
    ],
    code: {
      title: "Canvas Module Page Template",
      content: `<h2>Module [X]: [Title]</h2>

<div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 15px 0;">
  <h3>📚 Course Materials</h3>
  <p>Review the lecture videos, readings, and code examples before taking the quiz.</p>
  <a href="[GitHub-Pages-Module-URL]" target="_blank" class="btn btn-primary">
    Open Course Materials
  </a>
</div>

<h3>Module Requirements</h3>
<ul>
  <li>✅ Review all course materials</li>
  <li>✅ Complete knowledge check quiz (due before class)</li>
  <li>✅ Attend live session</li>
  <li>✅ Submit assignment</li>
</ul>`,
    },
  },
  {
    id: 4,
    title: "Quiz Configuration",
    description: "Set up knowledge check quizzes with proper timing",
    steps: [
      "Create quiz for each module in Canvas",
      "Set quiz to be available after materials are reviewed",
      "Configure due date before live session",
      "Set attempts and time limits as needed",
    ],
    code: {
      title: "Quiz Settings Template",
      content: `Quiz Type: Graded Quiz
Points: 10-20 points
Time Limit: 15-30 minutes
Attempts: 2 attempts allowed
Due Date: Day of live session at class start time
Available From: When module opens
Available Until: 30 minutes before class`,
    },
  },
  {
    id: 5,
    title: "Assignment Setup",
    description: "Configure assignments with GitHub integration",
    steps: [
      "Create assignment for each module",
      "Link to GitHub repository for starter code",
      "Set up file upload for submissions",
      "Configure rubric for grading",
    ],
    code: {
      title: "Assignment Instructions Template",
      content: `<h3>Assignment: Module [X] - [Title]</h3>

<p><strong>Objective:</strong> [Learning objective for this assignment]</p>

<h4>Getting Started</h4>
<ol>
  <li>Download the starter code from GitHub: 
      <a href="[GitHub-Repo-Link]" target="_blank">Module [X] Starter Code</a></li>
  <li>Complete the exercises in the Jupyter notebook</li>
  <li>Test your implementation with the provided test cases</li>
</ol>

<h4>Submission Requirements</h4>
<ul>
  <li>Completed Jupyter notebook (.ipynb file)</li>
  <li>Brief report (1-2 pages) explaining your approach</li>
  <li>Any additional Python files if created</li>
</ul>

<p><strong>Due Date:</strong> [Date] at 11:59 PM</p>`,
    },
  },
]

const iframeExample = `<!-- Canvas Page HTML for embedding GitHub content -->
<div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <div style="background: #f8f9fa; padding: 10px; border-bottom: 1px solid #ddd;">
    <strong>📚 Module Materials</strong>
    <a href="https://your-username.github.io/dl-course-materials/module/1" 
       target="_blank" style="float: right; color: #007bff;">
      Open in New Tab ↗
    </a>
  </div>
  <iframe 
    src="https://your-username.github.io/dl-course-materials/module/1"
    width="100%" 
    height="800px" 
    frameborder="0"
    style="display: block;">
  </iframe>
</div>`

export default function CanvasIntegrationPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Canvas Integration Guide</h1>
          <p className="text-lg text-gray-600">
            Step-by-step instructions for integrating GitHub Pages course materials with Canvas LMS
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Integration Overview</CardTitle>
            <CardDescription>How GitHub Pages and Canvas work together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📄 GitHub Pages Handles:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Course content delivery</li>
                  <li>• Video lectures and materials</li>
                  <li>• Code examples and notebooks</li>
                  <li>• Resource libraries</li>
                  <li>• Static content hosting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🎓 Canvas Handles:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Student authentication</li>
                  <li>• Progress tracking</li>
                  <li>• Quiz delivery and grading</li>
                  <li>• Assignment submissions</li>
                  <li>• Gradebook management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Steps */}
        <div className="space-y-8">
          {integrationSteps.map((step) => (
            <Card key={step.id}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                    {step.id}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
                    <ol className="space-y-2">
                      {step.steps.map((stepItem, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{stepItem}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {step.code && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{step.code.title}:</h4>
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard(step.code!.content)}>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                      </div>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap">
                        {step.code.content}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Iframe Embedding Example */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LinkIcon className="h-5 w-5" />
              <span>Iframe Embedding (Alternative Method)</span>
            </CardTitle>
            <CardDescription>
              If External Tools aren't available, you can embed GitHub Pages content using iframes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">Canvas Page HTML:</h4>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(iframeExample)}>
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap">
                  {iframeExample}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Iframe Considerations:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Some browsers may block iframes for security reasons</li>
                  <li>• Mobile experience may be less optimal</li>
                  <li>• External Tool (LTI) integration is preferred when available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Best Practices</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✅ Do:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Test all links before course launch</li>
                  <li>• Set clear module prerequisites</li>
                  <li>• Use consistent naming conventions</li>
                  <li>• Provide clear instructions for students</li>
                  <li>• Set up discussion forums for each module</li>
                  <li>• Configure proper due dates and availability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">❌ Avoid:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Broken or outdated links</li>
                  <li>• Inconsistent module structures</li>
                  <li>• Missing return paths to Canvas</li>
                  <li>• Unclear assignment instructions</li>
                  <li>• Overly complex navigation</li>
                  <li>• Missing mobile optimization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help with Integration?</h3>
          <p className="text-blue-800 mb-4">
            Contact your institution's Canvas administrator or instructional design team for assistance with:
          </p>
          <ul className="text-blue-800 text-sm space-y-1 mb-4">
            <li>• External Tool (LTI) configuration</li>
            <li>• Canvas permissions and settings</li>
            <li>• Institution-specific integration requirements</li>
          </ul>
          <Button asChild variant="outline">
            <Link href="/faq">View FAQ for Common Issues</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
