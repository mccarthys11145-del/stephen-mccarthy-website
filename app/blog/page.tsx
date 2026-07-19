
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, ArrowRight, Brain, Heart, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Read Stephen McCarthy PA-C\'s thoughts and insights on healthcare, mental wellness, psychiatric care, and professional development in the medical field.',
}

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Mental Health in Overall Wellness",
    excerpt: "Understanding the critical connection between mental health and physical well-being, and why comprehensive care matters more than ever.",
    category: "Mental Health",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "mental-health-overall-wellness",
    featured: true
  },
  {
    id: 2,
    title: "Breaking Down Barriers to Psychiatric Care",
    excerpt: "Addressing stigma and accessibility challenges in mental healthcare, and how we can create more inclusive treatment environments.",
    category: "Healthcare Access",
    date: "2024-01-08",
    readTime: "7 min read",
    slug: "breaking-barriers-psychiatric-care"
  },
  {
    id: 3,
    title: "Telehealth Revolution in Mental Health Services",
    excerpt: "How digital healthcare delivery is transforming access to psychiatric services and improving patient outcomes.",
    category: "Healthcare Technology",
    date: "2024-01-02",
    readTime: "6 min read",
    slug: "telehealth-mental-health-services"
  },
  {
    id: 4,
    title: "Supporting Families Through Addiction Recovery",
    excerpt: "The role of family support systems in addiction treatment and how healthcare providers can facilitate healing relationships.",
    category: "Addiction Medicine",
    date: "2023-12-25",
    readTime: "8 min read",
    slug: "supporting-families-addiction-recovery"
  },
  {
    id: 5,
    title: "Child and Adolescent Mental Health: Early Intervention Matters",
    excerpt: "Recognizing signs of mental health challenges in young people and the importance of timely, age-appropriate treatment.",
    category: "Pediatric Care",
    date: "2023-12-18",
    readTime: "6 min read",
    slug: "child-adolescent-mental-health"
  },
  {
    id: 6,
    title: "The Evolution of Psychiatric Practice: A PA's Perspective",
    excerpt: "Reflecting on changes in psychiatric care delivery and the expanding role of physician assistants in mental health.",
    category: "Professional Development",
    date: "2023-12-11",
    readTime: "9 min read",
    slug: "evolution-psychiatric-practice"
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Mental Health":
        return <Brain className="h-4 w-4" />
      case "Healthcare Access":
        return <Heart className="h-4 w-4" />
      case "Addiction Medicine":
        return <Stethoscope className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mental Health":
        return "bg-blue-100 text-blue-800"
      case "Healthcare Access":
        return "bg-green-100 text-green-800"
      case "Healthcare Technology":
        return "bg-purple-100 text-purple-800"
      case "Addiction Medicine":
        return "bg-red-100 text-red-800"
      case "Pediatric Care":
        return "bg-yellow-100 text-yellow-800"
      case "Professional Development":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Sharing thoughts on healthcare, mental wellness, and professional development to support better patient outcomes and community health
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
              <p className="text-lg text-gray-600">Latest insights and professional perspectives</p>
            </div>

            <Card className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-square relative bg-gradient-to-br from-indigo-100 to-indigo-200">
                  <Image
                    src="https://cdn.abacus.ai/images/c6b2df96-ec74-411a-a499-50049d9725fd.png"
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    {getCategoryIcon(featuredPost.category)}
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">Professional insights and healthcare perspectives</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="https://cdn.abacus.ai/images/c6b2df96-ec74-411a-a499-50049d9725fd.png"
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(post.category)}
                    <Badge className={getCategoryColor(post.category)} variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-indigo-50 group-hover:border-indigo-200">
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRight className="h-3 w-3 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Topics */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Professional Focus</h2>
            <p className="text-lg text-gray-600">Topics I regularly write about and discuss</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Mental Health & Psychiatry</h3>
                <p className="text-gray-600 text-sm">
                  Clinical insights, treatment approaches, and mental health advocacy
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Healthcare Access</h3>
                <p className="text-gray-600 text-sm">
                  Improving care delivery, reducing barriers, and community health
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Professional Development</h3>
                <p className="text-gray-600 text-sm">
                  PA practice evolution, clinical excellence, and healthcare innovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow my professional insights and stay updated on healthcare topics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Connect Professionally
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/testimonials">
                  Read Patient Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
