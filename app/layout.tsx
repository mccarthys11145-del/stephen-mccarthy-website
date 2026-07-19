import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { PersonJsonLd } from '@/components/seo/person-json-ld'
import { profile, siteUrl } from '@/lib/profile'

export const metadata: Metadata = {
  title: {
    default: 'Stephen McCarthy | Professional Profile & Public Record',
    template: '%s | Stephen McCarthy',
  },
  description:
    'Source-backed professional profile and public-record information for Stephen Thomas McCarthy in Pennsylvania.',
  keywords: [
    'Stephen McCarthy PA',
    'Stephen McCarthy physician assistant',
    'Stephen Thomas McCarthy',
    'NPI 1912308743',
    'Pennsylvania physician assistant verification',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Stephen McCarthy | Professional Profile & Public Record',
    description:
      'Source-backed professional profile and public-record information for Stephen Thomas McCarthy in Pennsylvania.',
    siteName: 'Stephen McCarthy',
    images: [{ url: '/stephen-mccarthy-professional.jpg', alt: 'Stephen McCarthy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen McCarthy | Professional Profile & Public Record',
    description:
      'Source-backed professional profile and public-record information for Stephen Thomas McCarthy in Pennsylvania.',
    images: ['/stephen-mccarthy-professional.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <PersonJsonLd />
      </head>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
