import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Hosts – Earn from Unused Parking Spaces',
  description: 'Turn unused parking spaces into income. EzParkk helps hosts list, price, and manage hourly parking with secure bookings and payouts.',
  openGraph: {
    title: 'For Hosts – Earn from Unused Parking Spaces | EzParkk',
    description: 'Turn unused parking spaces into income. EzParkk helps hosts list, price, and manage hourly parking with secure bookings and payouts.',
    url: 'https://ezparkk.com/hosts',
  },
  twitter: {
    title: 'For Hosts – Earn from Unused Parking Spaces | EzParkk',
    description: 'Turn unused parking spaces into income. List your parking spot and start earning today.',
  },
  alternates: {
    canonical: 'https://ezparkk.com/hosts',
  },
}

export default function HostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

