'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, CreditCard, Smartphone, TrendingUp, Users, MapPin, Map, Code, Database, Cloud, Smartphone as PhoneIcon } from 'lucide-react'
import AppDemoSection from '@/components/AppDemoSection'
import HeroInfoCard from '@/components/HeroInfoCard'

// Animated word swap component
function AnimatedWordSwap() {
  const words = ['for drivers', 'for hosts', 'for cities']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className="inline-block min-w-[120px] text-cyan">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  // Fade out more quickly - fade from 0 to 400px
  // Also fade to 0.2 opacity instead of 0 so content remains slightly visible
  const heroOpacity = useTransform(scrollY, [0, 250, 400], [1, 0.5, 0.2])
  const heroScale = useTransform(scrollY, [0, 250, 400], [1, 0.98, 0.96])
  
  // Parallax values for background elements
  const mapY1 = useTransform(scrollY, [0, 1000], [0, 200])
  const mapY2 = useTransform(scrollY, [0, 1000], [0, -150])
  const mapY3 = useTransform(scrollY, [0, 1000], [0, 100])
  const mapOpacity = useTransform(scrollY, [0, 400], [0.15, 0.05])
  
  // Tech stack logo parallax values
  const techY1 = useTransform(scrollY, [0, 1200], [0, 150])
  const techY2 = useTransform(scrollY, [0, 1200], [0, -120])
  const techY3 = useTransform(scrollY, [0, 1200], [0, 100])
  const techY4 = useTransform(scrollY, [0, 1200], [0, -80])
  const techOpacity = useTransform(scrollY, [0, 600], [0.12, 0.04])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Zoom Match Cut */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-0">
        {/* Nature Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/nature-background.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            priority
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/85 via-dark-bg/70 to-dark-bg" />
        </div>

        {/* Animated Background Maps & Logos - Cluely-inspired */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Google Maps Logo 1 */}
          <motion.div
            style={{ y: mapY1, opacity: mapOpacity }}
            className="hidden sm:block absolute top-20 left-10 w-32 h-32 opacity-10"
          >
            <div className="flex items-center gap-2 text-gray-400/30">
              <Map className="w-8 h-8" />
              <span className="text-xs font-medium">Google Maps</span>
            </div>
          </motion.div>

          {/* Google Maps Logo 2 */}
          <motion.div
            style={{ y: mapY2, opacity: mapOpacity }}
            className="hidden sm:block absolute top-40 right-20 w-32 h-32 opacity-10"
          >
            <div className="flex items-center gap-2 text-gray-400/30">
              <Map className="w-8 h-8" />
              <span className="text-xs font-medium">Google Maps</span>
            </div>
          </motion.div>

          {/* Map Pin Elements */}
          <motion.div
            style={{ y: mapY3, opacity: mapOpacity }}
            className="hidden sm:block absolute bottom-40 left-1/4 w-24 h-24 opacity-10"
          >
            <MapPin className="w-12 h-12 text-cyan/20" />
          </motion.div>

          {/* Floating Map Icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                y: useTransform(scrollY, [0, 1000], [0, (i % 2 === 0 ? 1 : -1) * (100 + i * 30)]),
                opacity: mapOpacity,
              }}
              className={`hidden sm:block absolute ${
                i % 3 === 0 ? 'top-1/4' : i % 3 === 1 ? 'top-1/2' : 'bottom-1/4'
              } ${i % 2 === 0 ? 'left-[10%]' : 'right-[10%]'} w-16 h-16`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              <MapPin className="w-full h-full text-cyan/10" />
            </motion.div>
          ))}

          {/* Subtle Grid Pattern */}
          <motion.div
            style={{
              opacity: mapOpacity,
              backgroundImage: `
                linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            className="absolute inset-0"
          />

          {/* Tech Stack Logos - Cluely-inspired with actual logos */}
          {/* Stripe */}
          <motion.div
            style={{ y: techY1, opacity: techOpacity }}
            className="hidden md:block absolute top-32 right-[15%] w-24 h-24"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400/25">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2">
                <Image src="/stripe.png" alt="Stripe payment processing logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-medium">Stripe</span>
            </div>
          </motion.div>

          {/* Firebase */}
          <motion.div
            style={{ y: techY2, opacity: techOpacity }}
            className="hidden md:block absolute top-48 left-[12%] w-24 h-24"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400/25">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2">
                <Image src="/firebase-logo.svg" alt="Google Firebase cloud platform logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-medium">Firebase</span>
            </div>
          </motion.div>

          {/* Swift */}
          <motion.div
            style={{ y: techY3, opacity: techOpacity }}
            className="hidden md:block absolute bottom-32 right-[20%] w-24 h-24"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400/25">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2">
                <Image src="/swift-logo.svg" alt="Swift programming language logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-medium">Swift</span>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            style={{ y: techY4, opacity: techOpacity }}
            className="hidden md:block absolute bottom-48 left-[18%] w-24 h-24"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400/25">
              <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2">
                <Image src="/google_maps.png" alt="Google Maps integration logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-medium">Google Maps</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Text Content - Cluely-inspired smooth animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3 sm:space-y-4 lg:space-y-5"
              >
                <motion.span 
                  className="text-box mb-3 inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  Launching in 2 Weeks
                </motion.span>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-3 sm:mb-4 lg:mb-5">
                  <motion.span
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.4 }}
                  >
                    The parking revolution
                  </motion.span>{' '}
                  <motion.span 
                    className="text-cyan block mt-2"
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
                  >
                    (starts here)
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-5 lg:mb-6 px-2 sm:px-0"
              >
                <span className="text-box">AI-driven</span> parking solutions{' '}
                <AnimatedWordSwap />
                Transform unused spaces into smart parking networks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start px-2 sm:px-0"
              >
                <motion.span 
                  className="text-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  No credit card required
                </motion.span>
                <motion.span 
                  className="text-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.85 }}
                >
                  Secure & verified
                </motion.span>
                <motion.span 
                  className="text-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  AI-powered
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4 lg:pt-6 w-full px-2 sm:px-0"
              >
                <motion.a
                  href="/contact"
                  className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-cyan text-dark-bg rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-cyan/90 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-cyan/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
                <motion.button
                  onClick={() => {
                    const demoSection = document.getElementById('app-demo')
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-cyan/50 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:border-cyan hover:bg-cyan/10 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="hidden sm:inline">View Interactive App Demo</span>
                  <span className="sm:hidden">View App Demo</span>
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.a
                  href="/features"
                  className="text-gray-400 hover:text-cyan transition-colors duration-300 text-sm font-medium underline underline-offset-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Explore EzParkk Features
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Built For Card */}
            <div className="relative mt-6 sm:mt-8 lg:mt-0 lg:h-[600px] flex items-center justify-center w-full">
              <HeroInfoCard />
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section aria-labelledby="stats-heading" className="relative py-20 border-y border-glass-border overflow-hidden">
        {/* Animated background elements - Tech Stack Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y: useTransform(scrollY, [0, 800], [0, 100]) }}
            className="absolute top-10 right-10 w-40 h-40 opacity-5"
          >
            <Map className="w-full h-full text-cyan" />
          </motion.div>
          <motion.div
            style={{ y: useTransform(scrollY, [0, 800], [0, -80]) }}
            className="absolute bottom-10 left-10 w-32 h-32 opacity-5"
          >
            <MapPin className="w-full h-full text-purple" />
          </motion.div>

          {/* Tech Stack Logos */}
          {[
            { name: 'Stripe', logo: '/stripe.png', x: 'left-[10%]', y: useTransform(scrollY, [0, 800], [0, 60]) },
            { name: 'Firebase', logo: '/firebase-logo.svg', x: 'right-[12%]', y: useTransform(scrollY, [0, 800], [0, -50]) },
            { name: 'Swift', logo: '/swift-logo.svg', x: 'left-[15%]', y: useTransform(scrollY, [0, 800], [0, 40]) },
            { name: 'Node.js', logo: '/nodejs-logo.svg', x: 'right-[8%]', y: useTransform(scrollY, [0, 800], [0, -30]) },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              style={{ 
                y: tech.y,
                opacity: useTransform(scrollY, [200, 600], [0.08, 0.03])
              }}
              className={`absolute top-1/2 ${tech.x} w-20 h-20`}
            >
              <div className="flex flex-col items-center gap-1.5 text-gray-400/20">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <Image src={tech.logo} alt={tech.name} width={32} height={32} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: 'Weeks to Launch', value: '2', icon: TrendingUp },
              { label: 'Waitlist Signups', value: '5K+', icon: Users },
              { label: 'Launch State', value: 'CA', icon: MapPin },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-center glass rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <stat.icon className="w-12 h-12 text-cyan mx-auto mb-4" />
                <div className="font-display text-5xl font-bold text-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive App Demo Section */}
      <div id="app-demo">
        <AppDemoSection />
      </div>

      {/* Overview Blocks: Drivers, Hosts, Cities */}
      <section aria-labelledby="overview-heading" className="relative py-32 overflow-hidden">
        {/* Animated background elements - Tech Stack & Map Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                y: useTransform(scrollY, [0, 1200], [0, (i % 2 === 0 ? 1 : -1) * 150]),
                opacity: useTransform(scrollY, [400, 800], [0.08, 0.03]),
              }}
              className={`absolute ${
                i % 4 === 0 ? 'top-20 left-[5%]' :
                i % 4 === 1 ? 'top-40 right-[5%]' :
                i % 4 === 2 ? 'bottom-40 left-[15%]' :
                'bottom-20 right-[15%]'
              } w-24 h-24`}
            >
              <MapPin className="w-full h-full text-cyan/20" />
            </motion.div>
          ))}

          {/* Tech Stack Logos */}
          {[
            { name: 'Node.js', logo: '/nodejs-logo.svg', position: 'top-48 right-[10%]', y: useTransform(scrollY, [0, 1200], [0, -100]) },
            { name: 'TypeScript', logo: '/typescript-logo.svg', position: 'bottom-40 left-[12%]', y: useTransform(scrollY, [0, 1200], [0, 80]) },
            { name: 'AWS', logo: '/aws-logo.svg', position: 'bottom-32 right-[8%]', y: useTransform(scrollY, [0, 1200], [0, -90]) },
            { name: 'React', logo: '/react-logo.svg', position: 'top-32 left-[8%]', y: useTransform(scrollY, [0, 1200], [0, 120]) },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              style={{
                y: tech.y,
                opacity: useTransform(scrollY, [400, 1000], [0.1, 0.04])
              }}
              className={`absolute ${tech.position} w-20 h-20`}
            >
              <div className="flex flex-col items-center gap-1.5 text-gray-400/20">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <Image src={tech.logo} alt={tech.name} width={32} height={32} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 id="overview-heading" className="font-display text-4xl md:text-5xl font-bold mb-4">
              Revolutionizing parking{' '}
              <span className="text-cyan">(one spot at a time)</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for everyone in the parking ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Drivers',
                subtitle: '(Instant Parking)',
                description:
                  'Find and book parking spots instantly with AI-powered matching. No more circling blocks.',
                icon: Smartphone,
                colorClass: 'text-cyan',
              },
              {
                title: 'For Hosts',
                subtitle: '(New Revenue Streams)',
                description:
                  'Monetize unused parking spaces. Earn $100–$350 per spot with flexible hourly rates.',
                icon: TrendingUp,
                colorClass: 'text-purple',
              },
              {
                title: 'For Cities',
                subtitle: '(Smarter Mobility)',
                description:
                  'Reduce congestion and optimize urban parking with data-driven insights and smart routing.',
                icon: MapPin,
                colorClass: 'text-cyan',
              },
            ].map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 group"
              >
                <div className="absolute top-4 right-4 w-20 h-20 overlay-shape opacity-20" />
                <block.icon
                  className={`w-16 h-16 ${block.colorClass} mb-6 group-hover:scale-110 transition-transform`}
                />
                <h3 className="font-display text-2xl font-bold mb-2">
                  {block.title}{' '}
                  <span className="text-gray-400">{block.subtitle}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{block.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Section with Glassmorphism */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-purple/10 to-transparent" />
        
        {/* Animated background elements - Tech Stack Showcase */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{
              y: useTransform(scrollY, [0, 1500], [0, 200]),
              opacity: useTransform(scrollY, [800, 1200], [0.1, 0.05]),
            }}
            className="absolute top-20 left-20 w-48 h-48"
          >
            <div className="flex items-center gap-3 text-gray-400/20">
              <Map className="w-12 h-12" />
              <div>
                <div className="text-sm font-semibold">Google Maps</div>
                <div className="text-xs">Powered by</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{
              y: useTransform(scrollY, [0, 1500], [0, -150]),
              opacity: useTransform(scrollY, [800, 1200], [0.1, 0.05]),
            }}
            className="absolute bottom-20 right-20 w-40 h-40"
          >
            <MapPin className="w-full h-full text-purple/20" />
          </motion.div>

          {/* Tech Stack Logos Grid */}
          {[
            { name: 'Stripe', logo: '/stripe.png', position: 'top-32 right-[15%]', y: useTransform(scrollY, [0, 1500], [0, 180]) },
            { name: 'Firebase', logo: '/firebase-logo.svg', position: 'top-48 left-[15%]', y: useTransform(scrollY, [0, 1500], [0, -140]) },
            { name: 'Swift', logo: '/swift-logo.svg', position: 'bottom-40 right-[12%]', y: useTransform(scrollY, [0, 1500], [0, 120]) },
            { name: 'Node.js', logo: '/nodejs-logo.svg', position: 'bottom-32 left-[18%]', y: useTransform(scrollY, [0, 1500], [0, -100]) },
          ].map((tech, i) => (
            <motion.div
              key={tech.name}
              style={{
                y: tech.y,
                opacity: useTransform(scrollY, [800, 1300], [0.12, 0.05])
              }}
              className={`absolute ${tech.position} w-24 h-24`}
            >
              <div className="flex flex-col items-center gap-2 text-gray-400/25">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <Image src={tech.logo} alt={tech.name} width={40} height={40} className="w-full h-full object-contain" />
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
            className="glass-strong rounded-[32px] p-12 md:p-16 relative overflow-hidden"
          >
            {/* Liquid Blob Backgrounds */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Join EzParkk <span className="text-cyan">(we're hiring)</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Build the future of parking with us. We're looking for talented interns
                in engineering, marketing, and operations.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  'Software Engineering Intern',
                  'Marketing Intern',
                  'Operations Intern',
                ].map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-box text-lg py-3 px-6 cursor-pointer hover:bg-cyan/20 hover:border-cyan/60 transition-all"
                  >
                    {role}
                  </motion.div>
                ))}
              </div>

              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-white rounded-full font-semibold text-lg hover:bg-cyan-dark transition-all hover:scale-105"
              >
                View Open Roles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
