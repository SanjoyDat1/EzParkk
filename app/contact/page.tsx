'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Clock, MapPin, Send, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { addToWaitlist } from '@/lib/firestore'

export default function Contact() {
  const { scrollY } = useScroll()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await addToWaitlist(formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        role: '',
        message: '',
      })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err: any) {
      setError(err.message || 'Failed to submit. Please try again.')
      console.error('Submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg" />
        
        {/* Tech Stack Logos Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { name: 'Stripe', logo: '/stripe.png', position: 'top-24 left-[10%]', y: useTransform(scrollY, [0, 800], [0, 100]) },
            { name: 'Firebase', logo: '/firebase-logo.svg', position: 'top-32 right-[12%]', y: useTransform(scrollY, [0, 800], [0, -80]) },
            { name: 'Swift', logo: '/swift-logo.svg', position: 'bottom-32 left-[15%]', y: useTransform(scrollY, [0, 800], [0, 60]) },
            { name: 'Node.js', logo: '/nodejs-logo.svg', position: 'bottom-24 right-[10%]', y: useTransform(scrollY, [0, 800], [0, -50]) },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              style={{
                y: tech.y,
                opacity: useTransform(scrollY, [0, 600], [0.1, 0.03])
              }}
              className={`absolute ${tech.position} w-20 h-20`}
            >
              <div className="flex flex-col items-center gap-1.5 text-gray-400/20">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <Image src={tech.logo} alt={`${tech.name} technology logo`} width={32} height={32} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-box mb-4 inline-block">Get in Touch</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Join the revolution{' '}
              <span className="text-cyan">(let's talk)</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'hello@ezparkk.com',
                link: 'mailto:hello@ezparkk.com',
              },
              {
                icon: Clock,
                title: 'Response Time',
                content: 'Within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Launch State',
                content: 'All of California',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative glass rounded-3xl p-8 text-center hover:scale-105 transition-transform"
              >
                <div className="absolute top-4 right-4 w-20 h-20 overlay-shape opacity-20" />
                <item.icon className="w-16 h-16 text-cyan mx-auto mb-6" />
                <h3 className="font-display text-xl font-bold mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-cyan transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 border-y border-glass-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 md:p-12"
          >
            <h2 className="font-display text-3xl font-bold mb-8 text-center">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="driver">Driver</option>
                  <option value="host">Host</option>
                  <option value="city-official">City Official</option>
                  <option value="partner">Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={!loading && !submitted ? { scale: 1.05 } : {}}
                whileTap={!loading && !submitted ? { scale: 0.95 } : {}}
                className={`w-full px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-500 text-white cursor-not-allowed'
                    : loading
                    ? 'bg-cyan/70 text-white cursor-not-allowed'
                    : 'bg-cyan text-white hover:bg-cyan-dark'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Secondary CTAs */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="font-display text-2xl font-bold mb-4">
                Join the Waitlist
              </h3>
              <p className="text-gray-400 mb-6">
                Be among the first to experience the future of parking
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-white rounded-full font-semibold hover:bg-cyan-dark transition-all"
              >
                Sign Up
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="font-display text-2xl font-bold mb-4">
                Partnership Inquiry
              </h3>
              <p className="text-gray-400 mb-6">
                Interested in partnering with us? Let's explore opportunities
              </p>
              <Link
                href="mailto:partnerships@ezparkk.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan text-cyan rounded-full font-semibold hover:bg-cyan/10 transition-all"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
