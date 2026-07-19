
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { PersonJsonLd } from '@/components/seo/person-json-ld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Stephen McCarthy PA-C | Experienced Physician Assistant & Healthcare Professional',
    template: '%s | Stephen McCarthy PA-C'
  },
  description: 'Stephen McCarthy PA-C is an experienced physician assistant and clinical director specializing in psychiatry, wellness care, and community health services in the Lehigh Valley region.',
  keywords: [
    'Stephen McCarthy PA-C',
    'Stephen McCarthy PA',
    'Stephen McCarthy Physician Assistant',
    'Lehigh Valley Wellness',
    'Psychiatry PA',
    'Mental Health Professional',
    'Healthcare Pennsylvania',
    'Clinical Director PA',
    'Physician Assistant Psychiatry'
  ],
  authors: [{ name: 'Stephen McCarthy PA-C' }],
  creator: 'Stephen McCarthy PA-C',
  publisher: 'Stephen McCarthy PA-C',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stephenmccarthypa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stephenmccarthypa.com',
    title: 'Stephen McCarthy PA-C | Experienced Physician Assistant & Healthcare Professional',
    description: 'Stephen McCarthy PA-C is an experienced physician assistant and clinical director specializing in psychiatry, wellness care, and community health services.',
    siteName: 'Stephen McCarthy PA-C',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephen McCarthy PA-C | Experienced Physician Assistant & Healthcare Professional',
    description: 'Experienced physician assistant specializing in psychiatry, wellness care, and community health services.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
