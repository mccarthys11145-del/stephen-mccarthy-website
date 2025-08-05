
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Star, Users, Stethoscope, Heart, Trophy } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: "Patients' Top Choice Award",
    description: "Recognized for exceptional patient care and satisfaction",
    category: "Patient Excellence",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: Star,
    title: "Perfect 5/5 Patient Rating",
    description: "Consistently high ratings on US News & World Report",
    category: "Quality Recognition",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Users,
    title: "Patients Recommend Award",
    description: "High recommendation rates from satisfied patients",
    category: "Trust & Reliability",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Stethoscope,
    title: "Clinical Director & Owner",
    description: "Leading Lehigh Valley Wellness with 8+ years experience",
    category: "Leadership",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Heart,
    title: "Comprehensive Care Specialist",
    description: "Expert in general, child/adolescent, and geriatric psychiatry",
    category: "Clinical Expertise",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    icon: Award,
    title: "Professional Certifications",
    description: "NCCPA, ACLS, and BLS certified healthcare professional",
    category: "Credentials",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  }
]

export default function KeyAchievements() {
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
            Professional Recognition & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Awards, certifications, and recognitions that reflect a commitment to excellence in healthcare delivery and patient satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`${achievement.bgColor} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs mb-2">
                          {achievement.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              These achievements reflect not just professional recognition, but a dedication to providing compassionate, 
              high-quality healthcare that makes a meaningful difference in patients' lives and the broader community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
