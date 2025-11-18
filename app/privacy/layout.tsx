import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – EzParkk',
  description: 'Privacy Policy for EzParkk. Learn how we protect your personal information and data privacy.',
  openGraph: {
    title: 'Privacy Policy – EzParkk',
    description: 'Privacy Policy for EzParkk. Learn how we protect your personal information and data privacy.',
    url: 'https://ezparkk.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ezparkk.com/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

