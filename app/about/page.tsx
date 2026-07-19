import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Stephen Thomas McCarthy and the source standard used on this professional profile.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">About this profile</p>
          <h1 className="mb-5 text-4xl font-bold md:text-5xl">Stephen Thomas McCarthy</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-200">
            A source-backed professional identity page for Stephen McCarthy in the Lehigh Valley,
            Pennsylvania.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-slate-950">What this site verifies</h2>
            <p className="mb-5 leading-relaxed text-slate-700">
              The federal National Plan and Provider Enumeration System identifies Stephen Thomas
              McCarthy under NPI {profile.npi}. The registry is an identity and enumeration source; it
              is not proof of an active professional license, board certification, employer, or scope of
              practice.
            </p>
            <p className="mb-7 leading-relaxed text-slate-700">
              Those time-sensitive facts are deliberately routed to Pennsylvania PALS, the NCCPA
              verification portal, and the relevant organization. The public-record section separately
              identifies the controlling regulatory and appellate documents.
            </p>
            <a
              href={profile.links.npi}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:underline"
            >
              View the NPI record <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-slate-950">Publication standard</h2>
            <ul className="space-y-4 text-sm leading-relaxed text-slate-700">
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />Named, accessible sources</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />Clear separation of current status and historical records</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />Dated factual reviews and correction path</li>
            </ul>
            <Link href="/professional-record" className="mt-6 inline-block font-semibold text-blue-700 hover:underline">
              Professional record →
            </Link>
          </aside>
        </div>
      </section>
    </div>
  )
}
