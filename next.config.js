/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        // Apply CSP headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            // VERY PERMISSIVE CSP for Firebase - allows all necessary Firebase operations
            value: [
              "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: data: blob:",
              "connect-src 'self' https: http: ws: wss:",
              "style-src 'self' 'unsafe-inline' https:",
              "img-src 'self' blob: data: https: http:",
              "font-src 'self' data: https:",
              "frame-src 'self' https: http:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

