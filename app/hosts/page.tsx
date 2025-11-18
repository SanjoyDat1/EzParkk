'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { DollarSign, TrendingUp, Clock, Shield, BarChart3, ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hosts() {
  const { scrollY } = useScroll()
  
  const earnings = [
    {
      label: 'Per Spot (Monthly)',
      value: '$100–$350',
      description: 'Average earnings per parking spot',
      icon: DollarSign,
    },
    {
      label: 'Hourly Rates',
      value: '$2–$8/hr',
      description: 'Set your own competitive rates',
      icon: Clock,
    },
    {
      label: 'Peak Times',
      value: '2–3x',
      description: 'Surge pricing during high demand',
      icon: TrendingUp,
    },
  ]

  const features = [
    {
      title: 'Flexible Scheduling',
      description:
        'Control when your space is available. Block dates, set recurring schedules, or make it available 24/7.',
      icon: Clock,
    },
    {
      title: 'Real-Time Analytics',
      description:
        'Track bookings, earnings, and performance metrics in real-time. Make data-driven decisions.',
      icon: BarChart3,
    },
    {
      title: 'Secure & Protected',
      description:
        'Verified drivers, insurance coverage, and secure payments. Your space is protected.',
      icon: Shield,
    },
  ]

  const testimonials = [
    {
      quote:
        'I live near the beach in Newport and my driveway was just sitting empty. Now I make $300+ a month from tourists and locals who need parking. It\'s been a game-changer.',
      author: 'Homeowner',
      location: 'Newport Beach, CA',
      type: 'host',
    },
    {
      quote:
        'The platform is incredibly easy to use. I listed my space in 5 minutes and had my first booking within a week. Perfect for my condo in LA.',
      author: 'Homeowner',
      location: 'Los Angeles, CA',
      type: 'host',
    },
    {
      quote:
        'Finding parking near the beach used to be a nightmare. Now I book a spot in seconds and walk right to the sand. Worth every penny.',
      author: 'Driver',
      location: 'Newport Beach, CA',
      type: 'driver',
    },
    {
      quote:
        'I work in downtown LA and parking costs me $30 a day. With EzParkk, I found a spot two blocks away for half the price. This app saved me hundreds already.',
      author: 'Driver',
      location: 'Los Angeles, CA',
      type: 'driver',
    },
  ]

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
                  <Image src={tech.logo} alt={`${tech.name} technology logo`} width={32} height={32} className="w-full h-full object-contain" unoptimized={tech.name === 'Stripe' || tech.name === 'Google Maps'} />
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
            <span className="text-box mb-4 inline-block">For Hosts</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              For Hosts{' '}
              <span className="text-cyan">(New Revenue Streams)</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Turn your unused parking space into a passive income stream. Join
              thousands of hosts already earning with EzParkk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Earning potential{' '}
              <span className="text-cyan">(real numbers)</span>
            </h2>
            <p className="text-xl text-gray-400">
              See how much you can earn with your parking space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {earnings.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative glass rounded-3xl p-8 text-center hover:scale-105 transition-transform"
              >
                <item.icon className="w-16 h-16 text-cyan mx-auto mb-6" />
                <div className="font-display text-4xl font-bold text-cyan mb-2">
                  {item.value}
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-gray-400">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Experience Section */}
      <section className="relative py-20 border-y border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Host experience{' '}
              <span className="text-cyan">(made simple)</span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to manage your parking space
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative glass rounded-3xl p-8 hover:scale-105 transition-transform group"
              >
                <div className="absolute top-4 right-4 w-24 h-24 overlay-shape opacity-20" />
                <feature.icon className="w-16 h-16 text-purple mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-cyan/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What hosts and drivers are saying{' '}
              <span className="text-cyan">(real stories)</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative glass-strong rounded-3xl p-8 hover:scale-105 transition-transform"
              >
                <Quote className="w-12 h-12 text-cyan mb-4 opacity-50" />
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-12"
          >
            <h2 className="font-display text-4xl font-bold mb-6">
              Ready to start earning?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our host community and start monetizing your parking space
              today. No upfront costs, no commitments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-white rounded-full font-semibold text-lg hover:bg-cyan-dark transition-all hover:scale-105"
            >
              Become a Host
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
