"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Video, Code, ExternalLink, Search, Star } from "lucide-react"
import { useState } from "react"

const resources = [
  { id: 1, title: "Deep Learning Textbook", description: "Comprehensive textbook by Ian Goodfellow, Yoshua Bengio, and Aaron Courville", type: "book", category: "Fundamentals", difficulty: "Intermediate", rating: 4.8, url: "https://www.deeplearningbook.org/", tags: ["Theory", "Mathematics", "Comprehensive"] },
  { id: 2, title: "Neural Networks and Deep Learning", description: "Online course by Michael Nielsen with interactive explanations", type: "course", category: "Fundamentals", difficulty: "Beginner", rating: 4.7, url: "http://neuralnetworksanddeeplearning.com/", tags: ["Interactive", "Beginner-friendly", "Visual"] },
  { id: 3, title: "PyTorch Tutorials", description: "Official PyTorch tutorials and documentation", type: "tutorial", category: "Implementation", difficulty: "Intermediate", rating: 4.6, url: "https://pytorch.org/tutorials/", tags: ["PyTorch", "Hands-on", "Official"] },
  { id: 4, title: "Essence of Linear Algebra (3Blue1Brown)", description: "Visual, intuitive introduction to core linear algebra concepts", type: "video", category: "Visualization", difficulty: "Beginner", rating: 4.9, url: "https://www.3blue1brown.com/topics/linear-algebra", tags: ["Visual", "Intuitive", "Mathematics"] },
  { id: 5, title: "Papers With Code", description: "Latest research papers with code implementations", type: "research", category: "Research", difficulty: "Advanced", rating: 4.5, url: "https://paperswithcode.com/", tags: ["Research", "State-of-art", "Code"] },
  { id: 6, title: "Distill.pub", description: "Interactive machine learning research explanations", type: "article", category: "Research", difficulty: "Intermediate", rating: 4.8, url: "https://distill.pub/", tags: ["Interactive", "Research", "Visual"] },
  { id: 7, title: "Kaggle Learn", description: "Free micro-courses on machine learning and deep learning", type: "course", category: "Practice", difficulty: "Beginner", rating: 4.4, url: "https://www.kaggle.com/learn", tags: ["Practical", "Free", "Certificates"] },
  { id: 8, title: "Deep Learning Specialization", description: "Andrew Ng's comprehensive deep learning course series", type: "course", category: "Fundamentals", difficulty: "Intermediate", rating: 4.7, url: "https://www.coursera.org/specializations/deep-learning", tags: ["Comprehensive", "Andrew Ng", "Certificates"] },
  { id: 9, title: "Homework 1 Colab Notebook", description: "Colab notebook for Homework 1 (Module 1)", type: "tutorial", category: "Practice", difficulty: "Beginner", rating: 5.0, url: "https://colab.research.google.com/drive/1JUuiHRj0CcYkMIBFVq6W9TKWm7AsvpiL?usp=sharing", tags: ["Homework", "Colab", "Module 1"] },
]

const categories = ["All", "Fundamentals", "Implementation", "Visualization", "Research", "Practice"]
const types = ["All", "book", "course", "tutorial", "video", "research", "article"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

function getTypeIcon(type: string) {
  switch (type) {
    case "book": return <BookOpen className="h-5 w-5" />
    case "video": return <Video className="h-5 w-5" />
    case "course": return <BookOpen className="h-5 w-5" />
    case "tutorial": return <Code className="h-5 w-5" />
    case "research": return <Star className="h-5 w-5" />
    case "article": return <BookOpen className="h-5 w-5" />
    default: return <BookOpen className="h-5 w-5" />
  }
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
    case "Intermediate": return "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
    case "Advanced": return "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800"
    default: return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
  }
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || resource.description.toLowerCase().includes(searchTerm.toLowerCase()) || resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory
    const matchesType = selectedType === "All" || resource.type === selectedType
    const matchesDifficulty = selectedDifficulty === "All" || resource.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesType && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Learning Resources</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Curated collection of books, courses, tutorials, and research papers to deepen your understanding</p>
        </div>

        <Card className="mb-8 dark:border-white/10 dark:bg-gray-900/70">
          <CardHeader>
            <CardTitle className="dark:text-white">Find Resources</CardTitle>
            <CardDescription className="dark:text-gray-400">Filter and search through our curated collection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search resources, topics, or tags..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button key={category} variant={selectedCategory === category ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category)}>{category}</Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <Button key={type} variant={selectedType === type ? "default" : "outline"} size="sm" onClick={() => setSelectedType(type)}>{type === "All" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}</Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Difficulty</label>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((difficulty) => (
                      <Button key={difficulty} variant={selectedDifficulty === difficulty ? "default" : "outline"} size="sm" onClick={() => setSelectedDifficulty(difficulty)}>{difficulty}</Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Showing {filteredResources.length} of {resources.length} resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-200 dark:border-white/10 dark:bg-gray-900/70">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2 dark:text-gray-300">
                    {getTypeIcon(resource.type)}
                    <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                  </div>
                </div>
                <CardTitle className="text-lg dark:text-white">{resource.title}</CardTitle>
                <CardDescription className="text-sm dark:text-gray-400">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Badge className={getDifficultyColor(resource.difficulty)}>{resource.difficulty}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">Access Resource<ExternalLink className="h-4 w-4 ml-2" /></a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">No resources found matching your criteria.</p>
            <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); setSelectedType("All"); setSelectedDifficulty("All") }}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  )
}
