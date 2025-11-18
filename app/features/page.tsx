'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Shield, CreditCard, Smartphone, ArrowRight, Car, Home, Building2, Code, Database, Map } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AppDemoSection from '@/components/AppDemoSection'

export default function Features() {
  const { scrollY } = useScroll()
  
  const features = [
    {
      title: 'Lightning-Fast Booking',
      description:
        'Book parking spots in seconds with our AI-driven matching algorithm. Real-time availability and instant confirmation.',
      icon: Zap,
      colorClass: 'text-cyan',
    },
    {
      title: 'Trusted Community',
      description:
        'Verified hosts and drivers with ratings, reviews, and secure transactions. Build trust through transparency.',
      icon: Shield,
      colorClass: 'text-purple',
    },
    {
      title: 'Frictionless Payments',
      description:
        'Seamless payment processing with automatic billing, receipts, and flexible payment options. No hassle, just park.',
      icon: CreditCard,
      colorClass: 'text-cyan',
    },
    {
      title: 'Next-Gen Mobile Experience',
      subtitle: '(iOS & Android)',
      description:
        'Beautiful, intuitive mobile apps designed for speed and ease. Find, book, and pay all from your phone.',
      icon: Smartphone,
      colorClass: 'text-purple',
    },
  ]

  const userFlows = [
    {
      title: 'For Drivers',
      subtitle: '(Instant Parking)',
      steps: [
        'Open the app and search for nearby spots',
        'View real-time availability and pricing',
        'Book instantly with one tap',
        'Navigate to your spot with turn-by-turn directions',
        'Park and pay automatically',
      ],
      icon: Car,
      gradient: 'from-cyan/20 to-cyan/5',
    },
    {
      title: 'For Hosts',
      subtitle: '(New Revenue Streams)',
      steps: [
        'List your parking space in minutes',
        'Set your own rates and availability',
        'Get matched with drivers automatically',
        'Track earnings in real-time',
        'Manage everything from your dashboard',
      ],
      icon: Home,
      gradient: 'from-purple/20 to-purple/5',
    },
    {
      title: 'For Cities',
      subtitle: '(Smarter Mobility)',
      steps: [
        'Access city-wide parking data',
        'Reduce congestion with smart routing',
        'Optimize parking utilization',
        'Generate revenue from public spaces',
        'Improve urban mobility',
      ],
      icon: Building2,
      gradient: 'from-cyan/20 to-purple/5',
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-box mb-4 inline-block">Revolutionary Features</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Revolutionary features{' '}
              <span className="text-cyan">(launching soon)</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge technology to transform how we park
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
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
                <feature.icon
                  className={`w-16 h-16 ${feature.colorClass} mb-6 group-hover:scale-110 transition-transform`}
                />
                <h3 className="font-display text-2xl font-bold mb-3">
                  {feature.title}
                  {feature.subtitle && (
                    <span className="text-gray-400 ml-2">{feature.subtitle}</span>
                  )}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flows */}
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
              How it works{' '}
              <span className="text-cyan">(for everyone)</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {userFlows.map((flow, flowIndex) => (
              <motion.div
                key={flow.title}
                initial={{ opacity: 0, x: flowIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: flowIndex * 0.2 }}
                className={`relative glass rounded-3xl p-8 md:p-12 bg-gradient-to-br ${flow.gradient}`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <flow.icon className="w-20 h-20 text-cyan mb-4" />
                    <h3 className="font-display text-3xl font-bold mb-2">
                      {flow.title}
                    </h3>
                    <p className="text-gray-400 text-lg">{flow.subtitle}</p>
                  </div>
                  <div className="flex-1">
                    <div className="space-y-4">
                      {flow.steps.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-bold">
                            {stepIndex + 1}
                          </div>
                          <p className="text-gray-300 text-lg pt-1">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive App Demo Section */}
      <AppDemoSection />

      {/* Tech Stack Showcase Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg" />
        
        {/* Animated Tech Stack Logos Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { name: 'Stripe', logo: '/stripe.png', position: 'top-20 left-[8%]', y: useTransform(scrollY, [0, 1500], [0, 200]) },
            { name: 'Firebase', logo: '/firebase-logo.svg', position: 'top-32 right-[10%]', y: useTransform(scrollY, [0, 1500], [0, -150]) },
            { name: 'Swift', logo: '/swift-logo.svg', position: 'bottom-32 left-[12%]', y: useTransform(scrollY, [0, 1500], [0, 180]) },
            { name: 'Node.js', logo: '/nodejs-logo.svg', position: 'bottom-24 right-[8%]', y: useTransform(scrollY, [0, 1500], [0, -120]) },
            { name: 'TypeScript', logo: '/typescript-logo.svg', position: 'top-1/2 left-[5%]', y: useTransform(scrollY, [0, 1500], [0, 100]) },
            { name: 'Google Maps', logo: '/google_maps.png', position: 'top-1/2 right-[5%]', y: useTransform(scrollY, [0, 1500], [0, -80]) },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              style={{
                y: tech.y,
                opacity: useTransform(scrollY, [600, 1200], [0.15, 0.05])
              }}
              className={`absolute ${tech.position} w-24 h-24`}
            >
              <div className="flex flex-col items-center gap-2 text-gray-400/25">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <Image src={tech.logo} alt={`${tech.name} technology logo`} width={40} height={40} className="w-full h-full object-contain" unoptimized={tech.name === 'Stripe' || tech.name === 'Google Maps'} />
                </div>
                <span className="text-xs font-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-box mb-4 inline-block">Built With</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Enterprise-grade technology{' '}
              <span className="text-cyan">(powered by the best)</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with industry-leading tools and platforms for reliability, security, and scale.
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Stripe', logo: '/stripe.png', description: 'Payments' },
              { name: 'Firebase', logo: '/firebase-logo.svg', description: 'Backend' },
              { name: 'Swift', logo: '/swift-logo.svg', description: 'iOS' },
              { name: 'Node.js', logo: '/nodejs-logo.svg', description: 'Server' },
              { name: 'TypeScript', logo: '/typescript-logo.svg', description: 'Type Safety' },
              { name: 'Google Maps', logo: '/google_maps.png', description: 'Maps' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className={`rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow ${
                    tech.name === 'Stripe' 
                      ? 'w-16 h-16 bg-white/10 backdrop-blur-sm p-0.5' 
                      : tech.name === 'Google Maps'
                      ? 'w-16 h-16 bg-white rounded-lg p-3'
                      : 'w-16 h-16 bg-white/10 backdrop-blur-sm p-3'
                  }`}>
                    <Image 
                      src={tech.logo} 
                      alt={`${tech.name} ${tech.description.toLowerCase()} technology logo`} 
                      width={tech.name === 'Stripe' ? 56 : tech.name === 'Google Maps' ? 56 : 48} 
                      height={tech.name === 'Stripe' ? 56 : tech.name === 'Google Maps' ? 56 : 48} 
                      className={tech.name === 'Stripe' ? 'w-full h-full object-contain' : 'w-full h-full object-contain'}
                      unoptimized={tech.name === 'Stripe' || tech.name === 'Google Maps'}
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
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
              Ready to revolutionize parking?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands on the waitlist and be among the first to experience
              the future of parking.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-white rounded-full font-semibold text-lg hover:bg-cyan-dark transition-all hover:scale-105"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
