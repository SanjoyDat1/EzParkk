import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers – Join the EzParkk Team',
  description: 'Join EzParkk and help build the future of smart parking. We\'re hiring talented interns in engineering, marketing, and operations.',
  openGraph: {
    title: 'Careers – Join the EzParkk Team',
    description: 'Join EzParkk and help build the future of smart parking. We\'re hiring talented interns in engineering, marketing, and operations.',
    url: 'https://ezparkk.com/careers',
  },
  twitter: {
    title: 'Careers – Join the EzParkk Team',
    description: 'Join EzParkk and help build the future of smart parking.',
  },
  alternates: {
    canonical: 'https://ezparkk.com/careers',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

