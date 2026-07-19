import Link from 'next/link'
import { profile } from '@/lib/profile'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 text-lg font-bold">Stephen McCarthy</div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Source-backed professional information with links to official credential and public-record sources.
            </p>
          </div>
          <div>
            <h2 className="mb-3 font-semibold">Site links</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link className="hover:text-white" href="/about">About</Link></li>
              <li><Link className="hover:text-white" href="/professional-record">Professional record</Link></li>
              <li><Link className="hover:text-white" href="/media-press">Profiles and sources</Link></li>
              <li><Link className="hover:text-white" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 font-semibold">Verification</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a className="hover:text-white" href={profile.links.paLicense} target="_blank" rel="noreferrer">Pennsylvania PALS ↗</a></li>
              <li><a className="hover:text-white" href={profile.links.nccpa} target="_blank" rel="noreferrer">NCCPA verification ↗</a></li>
              <li><a className="hover:text-white" href={profile.links.npi} target="_blank" rel="noreferrer">NPI Registry ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Stephen McCarthy. Last factual review: {profile.lastReviewed}.
        </div>
      </div>
    </footer>
  )
}
