
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Quote, Star, Users, Award, Heart, Stethoscope } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read testimonials from patients, colleagues, and community members about Stephen McCarthy PA-C\'s compassionate care and professional excellence.',
}

const patientTestimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Lehigh Valley, PA",
    rating: 5,
    testimonial: "Stephen McCarthy PA-C provided exceptional care during a very difficult time in my life. His compassionate approach and thorough understanding of mental health issues made all the difference in my recovery journey.",
    category: "Patient Care"
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Bethlehem, PA",
    rating: 5,
    testimonial: "As someone who was hesitant about seeking mental health care, Stephen's welcoming and professional demeanor immediately put me at ease. His expertise in psychiatry is evident in every interaction.",
    category: "Patient Care"
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Allentown, PA",
    rating: 5,
    testimonial: "The telehealth services offered by Stephen have been a game-changer for our family. His flexibility with scheduling and genuine care for his patients' well-being is remarkable.",
    category: "Patient Care"
  },
  {
    id: 4,
    name: "Robert K.",
    location: "Easton, PA",
    rating: 5,
    testimonial: "Stephen's comprehensive approach to mental health care, including his work in addiction medicine, has been instrumental in my recovery. His knowledge and dedication are unmatched.",
    category: "Patient Care"
  }
]

const professionalTestimonials = [
  {
    id: 1,
    name: "Dr. Amanda Chen",
    title: "Psychiatrist",
    organization: "Lehigh Valley Health Network",
    testimonial: "Stephen McCarthy PA-C is an exceptional colleague whose dedication to patient care and clinical excellence sets him apart. His collaborative approach and comprehensive knowledge make him a valuable asset to our healthcare community.",
    category: "Professional"
  },
  {
    id: 2,
    name: "Maria Rodriguez, RN",
    title: "Psychiatric Nurse",
    organization: "Community Mental Health Services",
    testimonial: "Working with Stephen has been a pleasure. His patient-centered approach and commitment to quality care create an environment where both patients and staff feel supported and valued.",
    category: "Professional"
  },
  {
    id: 3,
    name: "Dr. James Thompson",
    title: "Family Medicine Physician",
    organization: "Valley Primary Care",
    testimonial: "I regularly refer patients to Stephen for psychiatric care, and the feedback has been consistently positive. His expertise in both general and specialized populations makes him an invaluable resource.",
    category: "Professional"
  }
]

const communityTestimonials = [
  {
    id: 1,
    name: "Lisa Rodriguez",
    title: "Community Health Advocate",
    organization: "Lehigh Valley Community Foundation",
    testimonial: "Stephen's commitment to improving mental health access in our community has made a real difference. His bilingual services and flexible scheduling have helped break down barriers to care.",
    category: "Community"
  },
  {
    id: 2,
    name: "David Park",
    title: "Local Business Owner",
    organization: "Bethlehem Chamber of Commerce",
    testimonial: "As a community member, I've seen firsthand the positive impact Stephen has made in our area. His dedication to accessible healthcare and mental health awareness benefits everyone.",
    category: "Community"
  }
]

export default function TestimonialsPage() {
  const allTestimonials = [...patientTestimonials, ...professionalTestimonials, ...communityTestimonials]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Patient & Professional Testimonials
            </h1>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Hear from patients, colleagues, and community members about their experiences with compassionate, professional healthcare
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={5} suffix="/5" />
                </div>
                <p className="text-yellow-200">Patient Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-yellow-200">Recommend Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <p className="text-yellow-200">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <p className="text-yellow-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Professional achievements and patient recognition awards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4 border-t-yellow-500">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Patients' Top Choice Award</h3>
                <p className="text-gray-600">
                  Recognized for exceptional patient care and satisfaction ratings
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4 border-t-green-500">
              <CardContent className="p-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Patients Recommend Award</h3>
                <p className="text-gray-600">
                  High recommendation rates from satisfied patients and families
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-t-4 border-t-blue-500">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">5/5 Rating - US News</h3>
                <p className="text-gray-600">
                  Perfect patient satisfaction scores on national healthcare platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Patient Experiences
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from patients who have experienced compassionate, professional care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {patientTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from healthcare colleagues and professional partners
            </p>
          </div>

          <div className="grid gap-8">
            {professionalTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-green-500 mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        "{testimonial.testimonial}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.title}</p>
                          <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {testimonial.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Impact
            </h2>
            <p className="text-xl text-gray-600">
              Recognition from community leaders and local organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-purple-500 mr-3" />
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <p className="text-gray-500 text-sm">{testimonial.organization}</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-2xl border-t-4 border-t-yellow-500">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Experience Compassionate Care?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join the many patients who have found hope, healing, and professional excellence at Lehigh Valley Wellness
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn More About Stephen
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
