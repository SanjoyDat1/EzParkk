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
            <div className="flex space-x-4">
              <a
                href="mailto:hello@ezparkk.com"
                className="text-gray-400 hover:text-cyan transition-colors"
              >
                hello@ezparkk.com
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
