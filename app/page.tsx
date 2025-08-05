
import { Metadata } from 'next'
import Hero from '@/components/hero'
import KeyAchievements from '@/components/key-achievements'
import ExpertiseOverview from '@/components/expertise-overview'
import PatientTestimonials from '@/components/patient-testimonials'
import CallToAction from '@/components/call-to-action'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Stephen McCarthy PA-C - Experienced physician assistant and clinical director at Lehigh Valley Wellness, specializing in psychiatry, mental health, and comprehensive patient care.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <KeyAchievements />
      <ExpertiseOverview />
      <PatientTestimonials />
      <CallToAction />
    </div>
  )
}
