
import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Briefcase, MapPin, Calendar, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Professional Journey',
  description: 'Explore Stephen McCarthy PA-C\'s career milestones, education, certifications, and professional achievements in healthcare and psychiatry.',
}

export default function ProfessionalJourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              A career built on education, experience, and unwavering commitment to healthcare excellence
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <GraduationCap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Educational Foundation
            </h2>
            <p className="text-xl text-gray-600">
              Academic excellence that laid the groundwork for clinical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100">
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-emerald-600" />
                  Master of Science Degree
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <p className="font-semibold text-emerald-700">DeSales University</p>
                  <p className="text-gray-600">Advanced graduate education providing comprehensive preparation for physician assistant practice</p>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    Graduate Degree
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  Bachelor's Degree
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <p className="font-semibold text-blue-700">DeSales University</p>
                  <p className="text-gray-600">Undergraduate foundation in healthcare sciences and liberal arts education</p>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Undergraduate Degree
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Maintaining the highest standards of clinical competency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">NCCPA Certified</h3>
                <p className="text-gray-600 mb-4">National Commission on Certification of Physician Assistants</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">Active</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-red-500">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">ACLS Certified</h3>
                <p className="text-gray-600 mb-4">Advanced Cardiovascular Life Support</p>
                <Badge variant="secondary" className="bg-red-100 text-red-800">Active</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">BLS Certified</h3>
                <p className="text-gray-600 mb-4">Basic Life Support</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Career Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Key achievements and positions that define my professional growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-purple-300 hidden md:block"></div>

            <div className="space-y-12">
              {/* Current Position */}
              <div className="relative">
                <div className="md:ml-20">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <Briefcase className="h-6 w-6 text-purple-600" />
                          Owner & Clinical Director
                        </CardTitle>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                          Current
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>Lehigh Valley Wellness</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>8+ Years Experience</span>
                        </div>
                        <p className="text-gray-700">
                          Leading comprehensive wellness practice specializing in psychiatry, mental health services, and holistic patient care. Overseeing clinical operations, staff development, and ensuring the highest standards of patient care.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Clinical Leadership</Badge>
                          <Badge variant="outline">Practice Management</Badge>
                          <Badge variant="outline">Team Development</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              </div>

              {/* Clinical Specialization */}
              <div className="relative">
                <div className="md:ml-20">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                      <CardTitle className="flex items-center gap-3">
                        <Star className="h-6 w-6 text-blue-600" />
                        Psychiatry Specialization
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Developed expertise in comprehensive psychiatric care across multiple populations, including general, child/adolescent, and geriatric psychiatry. Specialized in addiction medicine and dual diagnosis treatment.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">General Psychiatry</Badge>
                          <Badge variant="outline">Child/Adolescent</Badge>
                          <Badge variant="outline">Geriatric Psychiatry</Badge>
                          <Badge variant="outline">Addiction Medicine</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Areas of Clinical Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Specialized knowledge and skills developed through years of dedicated practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Psychiatric Care</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• General psychiatry assessment and treatment</li>
                  <li>• Medication management</li>
                  <li>• Crisis intervention</li>
                  <li>• Treatment planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Specialized Populations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Child and adolescent psychiatry</li>
                  <li>• Geriatric mental health</li>
                  <li>• Adult psychiatric services</li>
                  <li>• Family-centered care</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Comprehensive Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Addiction medicine</li>
                  <li>• Dual diagnosis treatment</li>
                  <li>• Hormone therapy</li>
                  <li>• Weight management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Modern Care Delivery</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Telehealth services</li>
                  <li>• In-person consultations</li>
                  <li>• Flexible scheduling</li>
                  <li>• Evening appointments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Cultural Competency</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bilingual services (English/Spanish)</li>
                  <li>• Culturally sensitive care</li>
                  <li>• Diverse community outreach</li>
                  <li>• Inclusive treatment approaches</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Insurance & Accessibility</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Major insurance acceptance</li>
                  <li>• Affordable care options</li>
                  <li>• Community accessibility</li>
                  <li>• Patient-centered billing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl mb-8">
              <Image
                src="https://cdn.abacus.ai/images/4c569754-3f1b-4bef-9c84-26ee7ba2e4ee.png"
                alt="Modern Medical Office Environment - Lehigh Valley Wellness"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg text-gray-600 italic">
              "Excellence in healthcare comes from continuous learning, compassionate care, and unwavering commitment to patient well-being."
            </p>
            <p className="text-gray-500 mt-2">- Stephen McCarthy PA-C</p>
          </div>
        </div>
      </section>
    </div>
  )
}
