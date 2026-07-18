import type { Metadata } from 'next'
import { ExternalLink, Info, Scale, ShieldCheck } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: 'Professional Record & Credential Verification',
  description:
    'Official credential-verification links and regulatory public-record information for Stephen Thomas McCarthy in Pennsylvania.',
  alternates: { canonical: '/professional-record' },
}

const verificationLinks = [
  {
    title: 'Pennsylvania professional license',
    href: profile.links.paLicense,
    detail: 'Search Pennsylvania PALS by name or license number for current status and board actions.',
  },
  {
    title: 'NCCPA board certification',
    href: profile.links.nccpa,
    detail: 'Use the NCCPA real-time verification portal before relying on the PA-C designation.',
  },
  {
    title: 'National Provider Identifier',
    href: profile.links.npi,
    detail: `NPI ${profile.npi}. CMS notes that issuance of an NPI does not validate licensure or credentials.`,
  },
]

export default function ProfessionalRecordPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Last reviewed {profile.lastReviewed}
          </p>
          <h1 className="mb-5 text-4xl font-bold md:text-5xl">Professional record and verification</h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-200">
            This page distinguishes identity records, current credentials, and controlled-substance
            registration. Each item should be checked at the authoritative source.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 rounded-xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex gap-4">
              <Info className="mt-1 h-6 w-6 shrink-0 text-blue-700" />
              <div>
                <h2 className="mb-2 text-xl font-semibold text-slate-950">Current-status policy</h2>
                <p className="leading-relaxed text-slate-700">
                  This site does not independently certify an active license, current NCCPA certification,
                  a current employer, or authority to prescribe. Use the real-time sources below and contact
                  the relevant organization directly.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-6 text-3xl font-bold text-slate-950">Credential checks</h2>
          <div className="mb-16 grid gap-5 md:grid-cols-3">
            {verificationLinks.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <ShieldCheck className="mb-4 h-7 w-7 text-blue-700" />
                <h3 className="mb-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:underline">
                  Open official source <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <section id="regulatory-record" className="scroll-mt-24 rounded-xl border border-slate-300 bg-white p-7 shadow-sm">
            <div className="flex gap-4">
              <Scale className="mt-1 h-8 w-8 shrink-0 text-slate-800" />
              <div>
                <h2 className="mb-4 text-3xl font-bold text-slate-950">Controlled-substance registration disclosure</h2>
                <p className="mb-4 leading-relaxed text-slate-700">
                  The Drug Enforcement Administration published a Decision and Order on September 3, 2024,
                  revoking DEA Certificate of Registration MM3329578 effective October 3, 2024. The United
                  States Court of Appeals for the Third Circuit denied the petition for review on July 21, 2025.
                </p>
                <p className="mb-6 leading-relaxed text-slate-700">
                  Accordingly, this website does not state or imply that Stephen currently holds a DEA
                  controlled-substance registration or may prescribe controlled substances. The linked
                  documents are the controlling sources.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href={profile.links.federalRegister} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 font-semibold text-white hover:bg-slate-800">
                    DEA Decision and Order <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href={profile.links.thirdCircuit} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 font-semibold text-slate-900 hover:bg-slate-50">
                    Third Circuit opinion <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
