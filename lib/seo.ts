// SEO utility functions and structured data schemas

export const siteConfig = {
  name: 'EzParkk',
  url: 'https://ezparkk.com',
  description: 'AI-driven smart hourly parking marketplace connecting drivers, hosts, and cities. Find parking or earn from unused spaces.',
  ogImage: '/og-image.png', // You'll need to create this
}

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EzParkk',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      // Add social media URLs when available
      // 'https://www.linkedin.com/company/ezparkk',
      // 'https://twitter.com/ezparkk',
    ],
  }
}

// WebSite Schema
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EzParkk',
    url: siteConfig.url,
    description: siteConfig.description,
  }
}

// SoftwareApplication Schema (for the app/product)
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EzParkk',
    applicationCategory: 'ParkingApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'AI-driven smart hourly parking marketplace app for drivers, hosts, and cities.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1',
    },
  }
}

// Product Schema (alternative to SoftwareApplication)
export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'EzParkk Smart Parking Marketplace',
    description: 'AI-driven hourly parking marketplace connecting drivers with parking space hosts',
    brand: {
      '@type': 'Brand',
      name: 'EzParkk',
    },
    category: 'Parking Services',
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '1',
      lowPrice: '0',
      highPrice: '0',
      priceCurrency: 'USD',
    },
  }
}

