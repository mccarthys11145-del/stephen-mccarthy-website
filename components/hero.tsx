
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Star, ArrowRight } from 'lucide-react'
import AnimatedCounter from './animated-counter'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                <Award className="h-3 w-3 mr-1" />
                Patients' Top Choice
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-3 py-1">
                <Star className="h-3 w-3 mr-1" />
                5/5 Rating
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-1">
                <Users className="h-3 w-3 mr-1" />
                8+ Years Experience
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Stephen McCarthy
                <span className="block text-blue-600">PA-C</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Experienced Physician Assistant & Clinical Director specializing in{' '}
                <span className="text-blue-600 font-semibold">comprehensive psychiatric care</span>{' '}
                and community wellness
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Owner & Clinical Director of Lehigh Valley Wellness</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Specializing in general, child/adolescent, and geriatric psychiatry</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Bilingual services (English/Spanish) with telehealth options</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  <AnimatedCounter end={2000} suffix="+" />
                </div>
                <p className="text-gray-600 text-sm">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  <AnimatedCounter end={5} suffix="/5" />
                </div>
                <p className="text-gray-600 text-sm">Patient Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200">
              <Image
                src="/stephen-mccarthy-professional.jpg"
                alt="Stephen McCarthy PA-C - Professional Portrait"
                fill
                className="object-cover"
                priority
              />
              {/* Floating Achievement Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-xs font-semibold">Patients' Top Choice</p>
                    <p className="text-xs text-gray-600">Award Winner</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-xs font-semibold">5/5 Rating</p>
                    <p className="text-xs text-gray-600">US News</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Accent */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
