import type { Metadata } from 'next'
import Script from 'next/script'
import { getSoftwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Features – AI-Powered Hourly Parking Platform',
  description: 'Discover EzParkk\'s features for drivers, hosts, and cities: real-time availability, secure payments, host dashboards, and smart parking insights.',
  openGraph: {
    title: 'Features – AI-Powered Hourly Parking Platform | EzParkk',
    description: 'Discover EzParkk\'s features for drivers, hosts, and cities: real-time availability, secure payments, host dashboards, and smart parking insights.',
    url: 'https://ezparkk.com/features',
  },
  twitter: {
    title: 'Features – AI-Powered Hourly Parking Platform | EzParkk',
    description: 'Discover EzParkk\'s features for drivers, hosts, and cities: real-time availability, secure payments, and smart parking insights.',
  },
  alternates: {
    canonical: 'https://ezparkk.com/features',
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const softwareSchema = getSoftwareApplicationSchema()
  
  return (
    <>
      <Script
        id="software-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
    </>
  )
}

