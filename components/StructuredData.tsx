'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data: object | object[]
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // Structured data is handled via next/head in Next.js 13+ app directory
    // This component is for client-side injection if needed
  }, [data])

  const jsonLd = Array.isArray(data) ? data : [data]

  return (
    <>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  )
}

