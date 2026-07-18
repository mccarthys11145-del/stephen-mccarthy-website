import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Article Under Review',
  robots: { index: false, follow: true },
}

export default function ArchivedArticlePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <h1 className="mb-4 text-4xl font-bold text-slate-950">This article is under review</h1>
          <p className="mb-7 text-lg leading-relaxed text-slate-700">
            The prior version is unavailable while its authorship, clinical statements, and cited sources
            are checked. It should not be relied on for medical guidance.
          </p>
          <Link href="/blog" className="font-semibold text-blue-700 hover:underline">Article review notice →</Link>
        </div>
      </div>
    </div>
  )
}
