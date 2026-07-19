
import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Award, Stethoscope } from 'lucide-react'
import AnimatedCounter from '@/components/animated-counter'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about Stephen McCarthy PA-C\'s personal story, values, and what drives him as a healthcare professional dedicated to patient care and community service.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Stephen McCarthy PA-C
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Dedicated to compassionate healthcare, professional excellence, and making a positive impact in my community.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={8} suffix="+" />
                  </div>
                  <p className="text-blue-200">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter end={5} suffix="/5" />
                  </div>
                  <p className="text-blue-200">Patient Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/stephen-mccarthy-professional.jpg"
                  alt="Stephen McCarthy PA-C Professional Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Personal Story
            </h2>
            <p className="text-xl text-gray-600">
              A journey of dedication, learning, and service to healthcare
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              My path to becoming a physician assistant began with a deep-seated passion for helping others and making a tangible difference in people's lives. From my early education at DeSales University to establishing Lehigh Valley Wellness, every step has been guided by a commitment to compassionate, comprehensive healthcare.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <Card className="shadow-lg border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">My Why</h3>
                  <p>
                    Healthcare is more than a profession—it's a calling to serve others during their most vulnerable moments. I believe in treating each patient with dignity, respect, and the highest standard of care.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                  <p>
                    My work extends beyond individual patient care to improving community health outcomes through accessible, quality mental health and wellness services in the Lehigh Valley region.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg mb-6">
              Throughout my career, I've been fortunate to specialize in psychiatry and mental health, areas where I can make a profound impact on patients' overall well-being. My dual expertise in general, child/adolescent, and geriatric psychiatry allows me to serve diverse populations with tailored, age-appropriate care.
            </p>

            <p className="text-lg">
              Beyond clinical practice, I'm passionate about advancing healthcare accessibility through modern delivery methods, including telehealth services and flexible scheduling. This commitment to innovation ensures that quality healthcare remains within reach for all members of our community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Values That Guide My Practice
            </h2>
            <p className="text-xl text-gray-600">
              The principles that shape every patient interaction and clinical decision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Compassion</h3>
                <p className="text-gray-600">
                  Every patient deserves empathetic, understanding care that acknowledges their unique circumstances and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Commitment to the highest standards of clinical practice, continuous learning, and professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Healthcare should be available to all, offering flexible scheduling, telehealth options, and culturally competent care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Drives My Practice
            </h2>
            <p className="text-xl text-gray-600">
              The motivation behind every clinical decision and patient interaction
            </p>
          </div>

          <Card className="shadow-xl border-t-4 border-t-blue-500">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Patient-Centered Care Philosophy</h3>
                  <div className="prose prose-lg text-gray-700">
                    <p className="mb-4">
                      My approach to healthcare is fundamentally patient-centered, recognizing that each individual brings unique experiences, challenges, and goals to their healthcare journey. I believe in collaborative care that empowers patients to be active participants in their treatment plans.
                    </p>
                    <p className="mb-4">
                      In my practice at Lehigh Valley Wellness, I've seen firsthand how comprehensive, holistic care can transform lives. Whether working with children, adults, or elderly patients, I strive to address not just symptoms, but the underlying factors that contribute to overall health and well-being.
                    </p>
                    <p>
                      My commitment extends beyond individual patient encounters to improving healthcare delivery systems, advocating for mental health awareness, and contributing to a healthcare environment where every person feels valued, heard, and cared for.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recognition & Badges */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Awards and achievements that reflect my commitment to excellence
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800">
              Patients' Top Choice Award
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-green-100 text-green-800">
              Patients Recommend Award
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-yellow-100 text-yellow-800">
              5/5 Patient Rating - US News
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-purple-100 text-purple-800">
              NCCPA Certified
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-red-100 text-red-800">
              ACLS Certified
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-indigo-100 text-indigo-800">
              BLS Certified
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
