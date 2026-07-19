import type { Metadata } from 'next'
import { ExternalLink, MailWarning } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Where to send professional-profile corrections and where to direct practice inquiries.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-5 text-4xl font-bold text-slate-950 md:text-5xl">Contact and corrections</h1>
        <p className="mb-10 max-w-3xl text-xl leading-relaxed text-slate-700">
          This website does not accept appointment requests, medical questions, health records, or other
          patient information.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">Practice inquiries</h2>
            <p className="mb-5 leading-relaxed text-slate-700">
              Contact {profile.practice.name} through its official practice channels. Do not send protected
              health information by ordinary email or through this website.
            </p>
            <address className="mb-5 space-y-1 not-italic leading-relaxed text-slate-700">
              <div>{profile.practice.name}</div>
              <div>{profile.practice.address.streetAddress}</div>
              <div>
                {profile.practice.address.addressLocality}, {profile.practice.address.addressRegion}{' '}
                {profile.practice.address.postalCode}
              </div>
              <div>
                <a className="font-semibold text-blue-700 hover:underline" href={`tel:${profile.practice.telephone}`}>
                  {profile.practice.phone}
                </a>
              </div>
              <div>Hours: {profile.practice.hours.display}</div>
            </address>
            <a href={profile.links.practice} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:underline">
              Visit {profile.practice.name} website <ExternalLink className="h-4 w-4" />
            </a>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold text-slate-950">Profile corrections</h2>
            <p className="mb-5 leading-relaxed text-slate-700">
              For a correction to this professional profile, send a concise note through the public
              LinkedIn profile. Include the page URL and a source that supports the requested change.
            </p>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:underline">
              Open LinkedIn profile <ExternalLink className="h-4 w-4" />
            </a>
          </section>
        </div>
        <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
          <MailWarning className="mt-0.5 h-6 w-6 shrink-0" />
          <p className="leading-relaxed">
            Do not send diagnoses, treatment details, dates of birth, insurance information, or any other
            protected health information through LinkedIn or this website.
          </p>
        </div>
      </div>
    </div>
  )
}
