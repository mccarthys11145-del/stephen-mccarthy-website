
import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, MapPin, Clock, Award, Stethoscope } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Community Involvement',
  description: 'Discover Stephen McCarthy PA-C\'s community involvement, volunteer work, charitable activities, and commitment to improving local healthcare access.',
}

export default function CommunityInvolvementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Involvement
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Dedicated to improving healthcare access, mental health awareness, and community well-being in the Lehigh Valley region
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <p className="text-green-200">Years Serving Community</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <p className="text-green-200">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={5} suffix="/5" />
                </div>
                <p className="text-green-200">Community Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-green-200">Commitment Level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Access Initiative */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Healthcare Access Initiative
            </h2>
            <p className="text-xl text-gray-600">
              Making quality healthcare accessible to all community members
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-xl border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-green-600" />
                    Comprehensive Wellness Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Through Lehigh Valley Wellness, I've established a comprehensive healthcare practice that serves diverse populations with flexible, accessible care options.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span>Evening appointments for working families</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span>Bilingual services (English/Spanish)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>Telehealth options for remote access</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://cdn.abacus.ai/images/c6b2df96-ec74-411a-a499-50049d9725fd.png"
                alt="Community Health and Wellness Support Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Advocacy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mental Health Advocacy
            </h2>
            <p className="text-xl text-gray-600">
              Breaking down barriers and reducing stigma around mental healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  Community Education
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Promoting mental health awareness through patient education, community outreach, and destigmatization efforts.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Mental Health Awareness</Badge>
                    <Badge variant="outline">Patient Education</Badge>
                    <Badge variant="outline">Stigma Reduction</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-purple-600" />
                  Addiction Recovery Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Specialized addiction medicine services and dual diagnosis treatment, supporting individuals and families affected by substance use disorders.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Addiction Medicine</Badge>
                    <Badge variant="outline">Dual Diagnosis</Badge>
                    <Badge variant="outline">Family Support</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-green-600" />
                  Specialized Care Access
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Providing specialized psychiatric care for children, adolescents, and elderly populations who often face barriers to accessing mental health services.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Child/Adolescent</Badge>
                    <Badge variant="outline">Geriatric Care</Badge>
                    <Badge variant="outline">Specialized Treatment</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Engagement */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Local Community Engagement
            </h2>
            <p className="text-xl text-gray-600">
              Active participation in improving Lehigh Valley's healthcare landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  Lehigh Valley Healthcare Network
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Active member of the local healthcare community, collaborating with other providers to ensure comprehensive care coordination and improved patient outcomes.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provider network collaboration</li>
                    <li>• Care coordination initiatives</li>
                    <li>• Professional development participation</li>
                    <li>• Healthcare quality improvement efforts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-red-600" />
                  Community Health Initiatives
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Supporting community health through accessible care delivery, preventive health measures, and wellness education programs.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Preventive care programs</li>
                    <li>• Health education workshops</li>
                    <li>• Community wellness screenings</li>
                    <li>• Public health advocacy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Service & Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Contributing to the advancement of healthcare through professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Clinical Leadership</h3>
                <p className="text-gray-600">
                  Owner and Clinical Director of Lehigh Valley Wellness, leading clinical operations and ensuring quality patient care standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Staff Development</h3>
                <p className="text-gray-600">
                  Mentoring healthcare professionals and fostering a culture of continuous learning and professional growth.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Innovation in Care</h3>
                <p className="text-gray-600">
                  Implementing innovative care delivery models including telehealth services and flexible scheduling options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Impact Statement
            </h2>
          </div>

          <Card className="shadow-xl border-t-4 border-t-green-500">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-green-600" />
                </div>
                <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                  "My commitment to the Lehigh Valley community extends beyond individual patient encounters. Through comprehensive psychiatric and wellness services, innovative care delivery, and advocacy for mental health awareness, I strive to create lasting positive change in our community's overall health and well-being. Every patient served, every barrier removed, and every stigma reduced contributes to a healthier, more supportive community for all."
                </blockquote>
                <p className="text-gray-600 font-semibold">- Stephen McCarthy PA-C</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
