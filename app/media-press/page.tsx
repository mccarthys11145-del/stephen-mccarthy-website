
import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink, Award, Newspaper, Star, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media & Press',
  description: 'Read about Stephen McCarthy PA-C\'s professional recognition, media coverage, and positive contributions to healthcare in the Lehigh Valley region.',
}

const pressReleases = [
  {
    id: 1,
    title: "Lehigh Valley Wellness Expands Mental Health Services",
    publication: "Valley Health News",
    date: "2024-01-15",
    excerpt: "Local healthcare practice under the leadership of Stephen McCarthy PA-C announces expansion of comprehensive psychiatric services to meet growing community demand.",
    category: "Practice News",
    featured: true
  },
  {
    id: 2,
    title: "Telehealth Innovation in Mental Healthcare",
    publication: "Pennsylvania Healthcare Journal",
    date: "2023-12-08",
    excerpt: "How physician assistants like Stephen McCarthy are revolutionizing mental health access through innovative telehealth delivery models.",
    category: "Healthcare Innovation"
  },
  {
    id: 3,
    title: "Community Leader Spotlight: Accessible Mental Health",
    publication: "Lehigh Valley Business",
    date: "2023-11-22",
    excerpt: "Stephen McCarthy PA-C recognized for commitment to breaking down barriers to mental health care in the Lehigh Valley region.",
    category: "Community Recognition"
  }
]

const awards = [
  {
    id: 1,
    title: "Patients' Top Choice Award",
    organization: "Healthcare Excellence Network",
    year: "2023",
    description: "Recognized for outstanding patient satisfaction and quality of care in psychiatric services",
    category: "Patient Care Excellence"
  },
  {
    id: 2,
    title: "Patients Recommend Award",
    organization: "Patient Advocacy Group",
    year: "2023",
    description: "High recommendation rates from patients and families served at Lehigh Valley Wellness",
    category: "Patient Satisfaction"
  },
  {
    id: 3,
    title: "5-Star Provider Rating",
    organization: "US News & World Report",
    year: "2023",
    description: "Perfect patient rating for clinical expertise, bedside manner, and overall patient experience",
    category: "Professional Recognition"
  }
]

const mediaHighlights = [
  {
    id: 1,
    title: "Breaking Mental Health Stigma",
    type: "Interview",
    publication: "Valley Morning Show",
    date: "2023-12-15",
    description: "Discussion on mental health awareness and reducing barriers to psychiatric care in local communities"
  },
  {
    id: 2,
    title: "The Future of Psychiatric Care",
    type: "Expert Commentary",
    publication: "Healthcare Today Podcast",
    date: "2023-11-30",
    description: "Expert insights on evolving psychiatric practice and the role of physician assistants in mental healthcare"
  },
  {
    id: 3,
    title: "Community Health Champion",
    type: "Feature Article",
    publication: "Lehigh Valley Life Magazine",
    date: "2023-10-18",
    description: "Profile highlighting commitment to accessible mental health services and community wellness initiatives"
  }
]

export default function MediaPressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media & Press Coverage
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Professional recognition, media coverage, and positive contributions to healthcare in the Lehigh Valley region
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Awards & Professional Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Acknowledgments of excellence in patient care and professional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <Card key={award.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {award.year}
                    </Badge>
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p className="font-semibold text-purple-700">{award.organization}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {award.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Press Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Newspaper className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recent Press Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Positive media coverage highlighting professional achievements and community impact
            </p>
          </div>

          {/* Featured Article */}
          {pressReleases.find(article => article.featured) && (
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-12 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-square relative bg-gradient-to-br from-blue-100 to-blue-200">
                  <Image
                    src="https://cdn.abacus.ai/images/4c569754-3f1b-4bef-9c84-26ee7ba2e4ee.png"
                    alt="Healthcare Practice Environment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-blue-100 text-blue-800">Featured</Badge>
                    <Badge variant="outline">
                      {pressReleases.find(article => article.featured)?.category}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {pressReleases.find(article => article.featured)?.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pressReleases.find(article => article.featured)?.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(pressReleases.find(article => article.featured)?.date || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <span>•</span>
                    <span>{pressReleases.find(article => article.featured)?.publication}</span>
                  </div>
                  <Button className="w-fit">
                    Read Full Article
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Other Press Coverage */}
          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-blue-600">{article.publication}</p>
                      <Button variant="outline" size="sm">
                        Read More
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Media Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Interviews, expert commentary, and feature stories
            </p>
          </div>

          <div className="grid gap-6">
            {mediaHighlights.map((highlight) => (
              <Card key={highlight.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {highlight.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(highlight.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">{highlight.description}</p>
                      <p className="text-sm font-medium text-green-600">{highlight.publication}</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-4">
                      View
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Environment
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into the modern, welcoming healthcare environment at Lehigh Valley Wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://cdn.abacus.ai/images/56a403dd-9e8b-416c-b38f-6edcda039ca2.png"
                alt="Stephen McCarthy PA-C Professional Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://cdn.abacus.ai/images/4c569754-3f1b-4bef-9c84-26ee7ba2e4ee.png"
                alt="Modern Medical Office Environment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl border-t-4 border-t-purple-500">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Media & Professional Inquiries
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                For interviews, expert commentary, or professional collaboration opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Media Contact
                </Button>
                <Button variant="outline" size="lg">
                  Professional Networking
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
