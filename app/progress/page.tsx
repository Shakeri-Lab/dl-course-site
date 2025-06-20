"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Trophy, Target, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"

const progressData = {
  overallProgress: 25, // 3 out of 12 modules completed
  completedModules: 3,
  totalModules: 12,
  currentStreak: 5,
  totalStudyTime: 28.5,
  averageQuizScore: 87,
  upcomingDeadlines: [
    { module: 3, title: "Optimization and Training", date: "2024-01-29", type: "Quiz" },
    { module: 3, title: "Optimization and Training", date: "2024-01-29", type: "Assignment" },
    { module: 4, title: "Convolutional Neural Networks", date: "2024-02-05", type: "Module" },
  ],
  recentActivity: [
    { date: "2024-01-20", activity: "Completed Module 2 Assignment", score: "92%" },
    { date: "2024-01-19", activity: "Attended Live Session - Neural Networks", duration: "60 min" },
    { date: "2024-01-18", activity: "Completed Module 2 Quiz", score: "88%" },
    { date: "2024-01-17", activity: "Finished Neural Network Fundamentals", duration: "4.5 hours" },
  ],
  moduleProgress: [
    { id: 1, title: "Introduction to Deep Learning", progress: 100, status: "completed", score: 85 },
    { id: 2, title: "Neural Network Fundamentals", progress: 100, status: "completed", score: 92 },
    { id: 3, title: "Optimization and Training", progress: 60, status: "current", score: null },
    { id: 4, title: "Convolutional Neural Networks", progress: 0, status: "locked", score: null },
    { id: 5, title: "Advanced CNN Architectures", progress: 0, status: "locked", score: null },
  ],
}

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Learning Progress</h1>
          <p className="text-lg text-gray-600">Track your journey through the Deep Learning Mastery course</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Overall Progress</CardTitle>
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900">{progressData.overallProgress}%</div>
                <Progress value={progressData.overallProgress} className="h-2" />
                <p className="text-xs text-gray-600">
                  {progressData.completedModules} of {progressData.totalModules} modules
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Study Streak</CardTitle>
                <Target className="h-5 w-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{progressData.currentStreak} days</div>
              <p className="text-xs text-gray-600">Keep it up!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Total Study Time</CardTitle>
                <Clock className="h-5 w-5 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{progressData.totalStudyTime}h</div>
              <p className="text-xs text-gray-600">Across all modules</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Average Quiz Score</CardTitle>
                <TrendingUp className="h-5 w-5 text-purple-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{progressData.averageQuizScore}%</div>
              <p className="text-xs text-gray-600">Great performance!</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Module Progress</CardTitle>
              <CardDescription>Your progress through each course module</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {progressData.moduleProgress.map((module) => (
                  <div key={module.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">Module {module.id}</span>
                        {module.status === "completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {module.status === "current" && (
                          <Badge className="bg-blue-100 text-blue-800 text-xs">Current</Badge>
                        )}
                        {module.status === "locked" && (
                          <Badge variant="secondary" className="text-xs">
                            Locked
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {module.progress}%
                        {module.score && <span className="ml-2 text-green-600">Score: {module.score}%</span>}
                      </div>
                    </div>
                    <div>
                      <Progress value={module.progress} className="h-2" />
                      <p className="text-xs text-gray-600 mt-1">{module.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Deadlines</span>
                </CardTitle>
                <CardDescription>Stay on track with your assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {progressData.upcomingDeadlines.map((deadline, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          Module {deadline.module}: {deadline.type}
                        </p>
                        <p className="text-sm text-gray-600">{deadline.title}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-orange-600">
                          {new Date(deadline.date).toLocaleDateString()}
                        </p>
                        <Link href={`/module/${deadline.module}`} className="text-xs text-blue-600 hover:text-blue-800">
                          Go to module →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {progressData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.activity}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-xs text-gray-600">{new Date(activity.date).toLocaleDateString()}</p>
                          {activity.score && (
                            <Badge variant="outline" className="text-xs">
                              {activity.score}
                            </Badge>
                          )}
                          {activity.duration && (
                            <Badge variant="outline" className="text-xs">
                              {activity.duration}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
