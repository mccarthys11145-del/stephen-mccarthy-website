import type { Metadata } from 'next'
import Link from 'next/link'
import { FileSearch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Articles Under Review',
  description: 'Previously published articles are undergoing factual and source review.',
  robots: { index: false, follow: true },
}

export default function BlogReviewPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <FileSearch className="mx-auto mb-5 h-12 w-12 text-blue-700" />
        <h1 className="mb-5 text-4xl font-bold text-slate-950">Articles under factual review</h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-700">
          Previously published health articles are temporarily unavailable while authorship, clinical
          claims, dates, and source citations are reviewed.
        </p>
        <Link href="/" className="font-semibold text-blue-700 hover:underline">Return to the professional profile →</Link>
      </div>
    </div>
  )
}
