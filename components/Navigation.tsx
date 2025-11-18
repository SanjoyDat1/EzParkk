'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/hosts', label: 'For Hosts' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong border-b border-glass-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="EzParkk Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-display text-2xl font-bold text-white">
              EzParkk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-cyan text-white rounded-full font-medium hover:bg-cyan-dark transition-colors"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-glass-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'text-cyan bg-cyan/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-cyan text-white rounded-full font-medium hover:bg-cyan-dark transition-all"
                >
                  Join Waitlist
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
