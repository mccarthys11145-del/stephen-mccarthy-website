
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Brain, Users, Heart, Stethoscope, Clock, Globe, ArrowRight } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: "General Psychiatry",
    description: "Comprehensive mental health assessment, diagnosis, and treatment for adults",
    services: ["Psychiatric evaluation", "Medication management", "Treatment planning", "Crisis intervention"]
  },
  {
    icon: Users,
    title: "Child & Adolescent Care",
    description: "Specialized psychiatric services for young people and their families",
    services: ["Developmental assessments", "Family therapy", "School collaboration", "Behavioral interventions"]
  },
  {
    icon: Heart,
    title: "Geriatric Psychiatry",
    description: "Mental health care tailored to the unique needs of older adults",
    services: ["Cognitive assessments", "Depression treatment", "Anxiety management", "Family support"]
  },
  {
    icon: Stethoscope,
    title: "Addiction Medicine",
    description: "Evidence-based treatment for substance use disorders and dual diagnosis",
    services: ["Addiction assessment", "Dual diagnosis care", "Recovery planning", "Family counseling"]
  }
]

const serviceFeatures = [
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Evening appointments available to accommodate busy schedules"
  },
  {
    icon: Globe,
    title: "Telehealth Services",
    description: "Secure, convenient virtual consultations for accessible care"
  },
  {
    icon: Users,
    title: "Bilingual Services",
    description: "Comprehensive care available in English and Spanish"
  }
]

export default function ExpertiseOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Areas of Clinical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive psychiatric and wellness services designed to meet the diverse needs of individuals and families across all age groups
          </p>
        </motion.div>

        {/* Main Expertise Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800 text-sm">Key Services:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Modern Healthcare Delivery
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceFeatures.map((feature, index) => (
              <Card key={feature.title} className="shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Professional Environment Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Comprehensive Wellness Environment
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Lehigh Valley Wellness, we've created a modern, welcoming environment where patients feel comfortable 
              seeking the mental health care they deserve. Our comprehensive approach combines clinical excellence with 
              compassionate, personalized care.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Insurance Accepted
                </Badge>
                <span className="text-gray-600 text-sm">Major insurance plans welcomed</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Holistic Care
                </Badge>
                <span className="text-gray-600 text-sm">Comprehensive wellness services</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Patient-Centered
                </Badge>
                <span className="text-gray-600 text-sm">Individualized treatment plans</span>
              </div>
            </div>

            <Button asChild className="group">
              <Link href="/professional-journey">
                Learn More About My Approach
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://cdn.abacus.ai/images/4c569754-3f1b-4bef-9c84-26ee7ba2e4ee.png"
              alt="Modern Welcoming Medical Office Environment at Lehigh Valley Wellness"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
