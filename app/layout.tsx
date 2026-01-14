import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ezparkk.com'),
  title: {
    default: 'EzParkk – Smart Hourly Parking Marketplace for Drivers & Hosts',
    template: '%s | EzParkk',
  },
  description: 'EzParkk is an AI-driven parking marketplace that connects drivers, hosts, and cities. Find hourly parking or earn from your unused spaces with secure, real-time bookings.',
  keywords: ['hourly parking app', 'smart parking marketplace', 'AI parking solution', 'parking app for drivers and hosts', 'rent out parking space', 'list your parking spot', 'smart city parking network'],
  authors: [{ name: 'EzParkk' }],
  creator: 'EzParkk',
  publisher: 'EzParkk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ezparkk.com',
    siteName: 'EzParkk',
    title: 'EzParkk – Smart Hourly Parking Marketplace for Drivers & Hosts',
    description: 'AI-driven parking solutions for drivers, hosts, and cities. Find hourly parking or earn from unused spaces.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EzParkk - Smart Hourly Parking Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EzParkk – Smart Hourly Parking Marketplace',
    description: 'AI-driven hourly parking for drivers, hosts, and cities.',
    images: ['/og-image.png'],
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebSiteSchema()

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="canonical" href="https://ezparkk.com" />
        {/* CSP is set in next.config.js headers() - do not add meta tag here as it overrides headers */}
      </head>
      <body className="font-body bg-dark-bg text-white antialiased">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navigation />
        <main className="page-transition">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
