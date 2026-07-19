import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquareQuote, ShieldCheck } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Reviews & Feedback Policy',
  description: 'Review and testimonial publication policy for this Stephen McCarthy professional profile.',
  alternates: { canonical: '/testimonials' },
}

export default function ReviewsPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <MessageSquareQuote className="mb-5 h-10 w-10 text-blue-700" />
          <h1 className="mb-5 text-4xl font-bold text-slate-950">Reviews and feedback policy</h1>
          <p className="mb-6 text-lg leading-relaxed text-slate-700">
            This site does not publish patient testimonials, star-rating summaries, or attributed quotes
            without a verifiable source and appropriate permission. Third-party review sites are independent,
            can change over time, and are not controlled by this website.
          </p>
          <div className="mb-7 flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-5 text-slate-800">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" />
            <p className="leading-relaxed">
              Do not submit protected health information through this website. Questions about care,
              records, appointments, or billing should go through the practice&apos;s official channels.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="rounded-md bg-slate-900 px-5 py-3 text-center font-semibold text-white hover:bg-slate-800" href={profile.links.practice} target="_blank" rel="noreferrer">
              Practice website ↗
            </a>
            <Link className="rounded-md border border-slate-300 px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-50" href="/contact">
              Website corrections
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
