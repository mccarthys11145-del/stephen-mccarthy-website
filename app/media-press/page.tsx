import type { Metadata } from 'next'
import { ExternalLink, FileText, Landmark, UserRoundCheck } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Profiles & Sources',
  description: 'Official registries, public records, and professional profile links for Stephen McCarthy.',
  alternates: { canonical: '/media-press' },
}

const groups = [
  {
    icon: Landmark,
    title: 'Official verification',
    links: [
      { label: 'Pennsylvania PALS', href: profile.links.paLicense },
      { label: 'NCCPA verification', href: profile.links.nccpa },
      { label: `NPI Registry — ${profile.npi}`, href: profile.links.npi },
    ],
  },
  {
    icon: FileText,
    title: 'Controlling public records',
    links: [
      { label: 'DEA Decision and Order (2024)', href: profile.links.federalRegister },
      { label: 'Third Circuit disposition (2025)', href: profile.links.thirdCircuit },
    ],
  },
  {
    icon: UserRoundCheck,
    title: 'Professional profiles',
    links: [
      { label: 'LinkedIn', href: profile.links.linkedin },
      { label: 'Doximity', href: profile.links.doximity },
      { label: 'Practice website', href: profile.links.practice },
    ],
  },
]

export default function ProfilesSourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Reference directory</p>
          <h1 className="mb-5 text-4xl font-bold md:text-5xl">Profiles and sources</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-200">
            Direct links help distinguish authoritative records from copied or outdated directory data.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {groups.map(({ icon: Icon, title, links }) => (
            <section key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Icon className="mb-4 h-8 w-8 text-blue-700" />
              <h2 className="mb-5 text-xl font-semibold text-slate-950">{title}</h2>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2 font-medium text-blue-700 hover:underline">
                      {link.label} <ExternalLink className="mt-1 h-4 w-4 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
