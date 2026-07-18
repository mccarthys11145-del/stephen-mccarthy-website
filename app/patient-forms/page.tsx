import type { Metadata } from 'next'
import { ExternalLink, ShieldAlert } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Patient Forms',
  description: 'Patient communications are handled through the practice website.',
  robots: { index: false, follow: true },
}

export default function PatientFormsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <ShieldAlert className="mb-5 h-10 w-10 text-blue-700" />
          <h1 className="mb-4 text-4xl font-bold text-slate-950">Use the practice&apos;s official process</h1>
          <p className="mb-5 text-lg leading-relaxed text-slate-700">
            Patient forms and health information are not collected on this professional-profile website.
            Use the practice&apos;s official website for its current, authorized process.
          </p>
          <p className="mb-7 leading-relaxed text-slate-700">
            Do not send protected health information through a general web form, social media, or email.
          </p>
          <a href={profile.links.practice} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">
            Visit practice website <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
