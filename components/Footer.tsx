import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border bg-dark-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">EzParkk</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-driven, modern parking solutions for drivers, hosts, and cities.
              The parking revolution starts here.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@ezparkk.com"
                className="text-gray-400 hover:text-cyan transition-colors"
              >
                hello@ezparkk.com
              </a>
              <a
                href="https://apps.apple.com/us/app/ezparkk/id6757027658"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download on App Store
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-cyan transition-colors"
                >
                  Parking App Features
                </Link>
              </li>
              <li>
                <Link
                  href="/hosts"
                  className="text-gray-400 hover:text-cyan transition-colors"
                >
                  List Your Parking Spot
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-cyan transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-cyan transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-cyan transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-glass-border text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EzParkk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
