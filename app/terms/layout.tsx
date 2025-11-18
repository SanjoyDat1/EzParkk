import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service – EzParkk',
  description: 'Terms of Service for EzParkk. Learn about the terms and conditions for using our parking platform.',
  openGraph: {
    title: 'Terms of Service – EzParkk',
    description: 'Terms of Service for EzParkk. Learn about the terms and conditions for using our parking platform.',
    url: 'https://ezparkk.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ezparkk.com/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

