
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

export default function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Take the First Step Toward Better Health
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're seeking mental health support, exploring treatment options, or looking for professional collaboration, 
            I'm here to help you find the care and solutions you need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comprehensive Mental Health & Wellness Care
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Lehigh Valley Wellness, we provide personalized, compassionate care that addresses your unique needs. 
                From general psychiatry to specialized addiction medicine, our services are designed to support your journey 
                toward better mental health and overall wellness.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">In-person and telehealth options available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Evening appointments for your convenience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Bilingual services (English/Spanish)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">Major insurance plans accepted</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About My Approach
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/c6b2df96-ec74-411a-a499-50049d9725fd.png"
                alt="Mental Health and Wellness Support - Compassionate Care"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Quick Response</p>
                  <p className="text-gray-600 text-xs">Within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Professional Inquiries</h4>
              <p className="text-gray-600 text-sm mb-4">
                Contact for healthcare consultations, media requests, or professional collaboration
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/contact">Send Message</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Schedule Appointment</h4>
              <p className="text-gray-600 text-sm mb-4">
                Book your consultation with flexible scheduling options including evenings
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Direct Practice Contact</h4>
              <p className="text-gray-600 text-sm mb-4">
                Connect directly with Lehigh Valley Wellness for immediate assistance
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/contact">Practice Information</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Your Health and Well-being Matter
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
              "Every patient deserves compassionate, comprehensive care that addresses their unique needs and circumstances. 
              I'm committed to providing exactly that - professional excellence delivered with empathy and understanding."
            </p>
            <p className="text-blue-200 mt-4 font-medium">- Stephen McCarthy PA-C</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
