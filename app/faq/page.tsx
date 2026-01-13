"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Clock } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "Course Structure",
    questions: [
      {
        question: "How is this course organized?",
        answer:
          "The course has 12 modules, each following the same structure: pre-class preparation, lectures, quiz, live session, practice, and assignment. All materials are on this website, while Canvas handles quizzes, assignments, and progress tracking.",
      },
      {
        question: "Can I access materials after the course ends?",
        answer:
          "Yes! All course materials on this GitHub Pages site remain accessible indefinitely. You can bookmark and return to any content for future reference.",
      },
      {
        question: "What's the difference between this site and Canvas?",
        answer:
          "This site contains all learning materials (videos, readings, code). Canvas handles course management (quizzes, assignments, grades, deadlines).",
      },
    ],
  },
  {
    category: "Technical Setup",
    questions: [
      {
        question: "Do I need a powerful computer for this course?",
        answer:
          "Not necessarily! You can use Google Colab for free GPU access. For local development, any modern computer works, though a GPU helps with larger models.",
      },
      {
        question: "Can I use TensorFlow instead of PyTorch?",
        answer:
          "The course will be taught using PyTorch.",
      },
      {
        question: "What if I can't install the required software?",
        answer:
          "Use Google Colab as a backup - it requires no installation. Check the setup guide for troubleshooting, or email the instructor.",
      },
    ],
  },
  {
    category: "Assignments & Grading",
    questions: [
      {
        question: "How are assignments submitted?",
        answer:
          "All assignments are submitted through Canvas. You'll typically submit Jupyter notebooks or Python files, along with a brief report.",
      },
      {
        question: "Can I work in groups?",
        answer:
          "Individual assignments must be completed alone, but you're encouraged to discuss concepts with classmates. The final project may have a group option.",
      },
      {
        question: "What if I miss a deadline?",
        answer:
          "Check the Canvas syllabus for late submission policies. Contact the instructor immediately if you have extenuating circumstances.",
      },
    ],
  },
  {
    category: "Getting Help",
    questions: [
      {
        question: "Where should I ask questions?",
        answer:
          "Use the Canvas discussion forums for course-related questions so everyone can benefit. Email the instructor for private matters or urgent issues.",
      },
      {
        question: "Are there office hours?",
        answer:
          "Yes! Check Canvas for the current office hours schedule. Both in-person and virtual options are typically available.",
      },
      {
        question: "How quickly will I get help?",
        answer:
          "Discussion forum posts are usually answered within 24 hours. Email responses within 48 hours. Urgent issues are prioritized.",
      },
    ],
  },
]

const contactInfo = {
  instructor: {
    name: "Dr. Heman Shakeri",
    email: "hs9hd@virginia.edu",
    officeHours: "See Canvas for schedule.",
  },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Common questions about the Deep Learning Mastery course. Can't find what you're looking for? Use the Canvas
            discussion forums or contact us directly.
          </p>
        </div>

        {/* Canvas Integration */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <MessageCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900">Canvas Students</h3>
              <p className="text-blue-800 text-sm mb-3">
                For course-specific questions, use the Canvas discussion forums where classmates and instructors can
                help.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>Instructor</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">{contactInfo.instructor.name}</p>
                  <p className="text-sm text-gray-600">{contactInfo.instructor.email}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{contactInfo.instructor.officeHours}</span>
                  </div>
                </div>
                <Button asChild className="mt-4" size="sm">
                  <a href={`mailto:${contactInfo.instructor.email}`}>Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Help */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-2">Quick Help Resources</h3>
          <p className="text-green-800 mb-4">Before reaching out, try these self-help resources:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button asChild variant="outline" className="justify-start">
              <Link href="/setup">
                <span>Setup Guide</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/resources">
                <span>Additional Resources</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-8 text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't hesitate to reach out! We're here to help you succeed in your deep learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href={`mailto:hs9hd@virginia.edu,jgh2xh@virginia.edu,tsl2b@virginia.edu`}>
                Email Teaching Team
                <Mail className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
