import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact EzParkk – Partner, Launch, or Get Support',
  description: 'Get in touch with the EzParkk team for partnerships, host onboarding, city deployments, or general questions.',
  openGraph: {
    title: 'Contact EzParkk – Partner, Launch, or Get Support',
    description: 'Get in touch with the EzParkk team for partnerships, host onboarding, city deployments, or general questions.',
    url: 'https://ezparkk.com/contact',
  },
  twitter: {
    title: 'Contact EzParkk – Partner, Launch, or Get Support',
    description: 'Get in touch with the EzParkk team for partnerships, host onboarding, or general questions.',
  },
  alternates: {
    canonical: 'https://ezparkk.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

