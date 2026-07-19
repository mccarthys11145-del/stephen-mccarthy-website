
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, Star, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Lehigh Valley, PA",
    rating: 5,
    testimonial: "Stephen McCarthy PA-C provided exceptional care during a very difficult time in my life. His compassionate approach and thorough understanding of mental health issues made all the difference in my recovery journey.",
    category: "Mental Health Care"
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Bethlehem, PA", 
    rating: 5,
    testimonial: "As someone who was hesitant about seeking mental health care, Stephen's welcoming and professional demeanor immediately put me at ease. His expertise in psychiatry is evident in every interaction.",
    category: "Professional Excellence"
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Allentown, PA",
    rating: 5,
    testimonial: "The telehealth services offered by Stephen have been a game-changer for our family. His flexibility with scheduling and genuine care for his patients' well-being is remarkable.",
    category: "Accessible Care"
  }
]

export default function PatientTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Patients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who have found hope, healing, and professional excellence in their healthcare journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-blue-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-blue-600 font-medium">{testimonial.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5/5</div>
              <p className="text-gray-700 font-medium">Patient Rating</p>
              <p className="text-gray-600 text-sm">US News & World Report</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">Recommend Rate</p>
              <p className="text-gray-600 text-sm">Patient satisfaction surveys</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
              <p className="text-gray-700 font-medium">Patients Served</p>
              <p className="text-gray-600 text-sm">Throughout career</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Experience Compassionate Care?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join the many patients who have found hope, healing, and professional excellence at Lehigh Valley Wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/testimonials">
                Read More Testimonials
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
