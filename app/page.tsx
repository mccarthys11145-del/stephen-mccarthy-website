import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, FileCheck2, Scale, ShieldCheck } from 'lucide-react'
import { profile } from '@/lib/profile'

export const metadata: Metadata = {
  title: { absolute: 'Stephen McCarthy | Professional Profile & Public Record' },
  description:
    'Source-backed identity, credential-verification links, and public-record information for Stephen Thomas McCarthy in Pennsylvania.',
  alternates: { canonical: '/' },
}

const cards = [
  {
    icon: FileCheck2,
    title: 'Identity record',
    text: `NPI ${profile.npi} identifies Stephen Thomas McCarthy in the federal provider registry. An NPI does not, by itself, confirm current licensure or certification.`,
    href: profile.links.npi,
    label: 'View NPI record',
  },
  {
    icon: ShieldCheck,
    title: 'Credential verification',
    text: 'Use Pennsylvania PALS and the NCCPA verification portal for real-time license and board-certification information.',
    href: '/professional-record',
    label: 'Open verification guide',
  },
  {
    icon: Scale,
    title: 'Public-record context',
    text: 'The professional-record page links the controlling regulatory and appellate documents with a plain-language scope statement.',
    href: '/professional-record#regulatory-record',
    label: 'Read the public record',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Professional profile and public information
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">Stephen McCarthy</h1>
            <p className="mb-5 max-w-3xl text-xl leading-relaxed text-slate-200">
              Public records identify Stephen Thomas McCarthy as a physician assistant in Pennsylvania.
              This site organizes identity, credential-verification, and public-record sources in one place.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-300">
              Current licensure, certification, practice affiliation, and clinical authority should be
              confirmed through the official registries and organizations linked here.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/professional-record"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Verify professional information <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={profile.links.practice}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-500 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Lehigh Valley Wellness website <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image
                src="/stephen-mccarthy-professional.jpg"
                alt="Stephen McCarthy"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 384px"
                className="object-cover object-[100%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
              Verified-source approach
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">
              Check current facts at their authoritative source
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Directory listings can be stale, duplicated, or inconsistent. The links below separate
              identity data, current credentials, and regulatory history so each can be checked directly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, text, href, label }) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <Icon className="mb-4 h-8 w-8 text-blue-700" />
                <h3 className="mb-3 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mb-5 leading-relaxed text-slate-600">{text}</p>
                {href.startsWith('http') ? (
                  <a className="font-semibold text-blue-700 hover:underline" href={href} target="_blank" rel="noreferrer">
                    {label} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link className="font-semibold text-blue-700 hover:underline" href={href}>
                    {label} <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-blue-50 py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-900">Factual-review standard</p>
          <p className="mt-2 max-w-4xl leading-relaxed text-slate-800">
            Information on this site is limited to claims that can be tied to a named source. Real-time
            professional status should always be confirmed with the responsible licensing or certifying
            organization. Last factual review: {profile.lastReviewed}.
          </p>
        </div>
      </section>
    </div>
  )
}
