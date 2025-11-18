'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Image from 'next/image'

// Demo steps configuration
const demoSteps = [
  {
    id: 'sign-in',
    title: 'Sign In',
    subtitle: 'Start by securely signing into your EzParkk account.',
    imageSrc: '/signup_view.PNG',
    flow: 'Driver Flow',
  },
  {
    id: 'find-parking',
    title: 'Find Parking',
    subtitle: 'Search nearby hourly spots in just a few taps.',
    imageSrc: '/phone_mockup.jpg',
    flow: 'Driver Flow',
  },
  {
    id: 'payment',
    title: 'Payment',
    subtitle: 'Review your booking and pay seamlessly in-app.',
    imageSrc: '/payment_view.PNG',
    flow: 'Driver Flow',
  },
  {
    id: 'list-your-spot',
    title: 'List Your Spot',
    subtitle: 'Hosts can quickly list available spaces with key details.',
    imageSrc: '/list_parking_view.PNG',
    flow: 'Host Flow',
  },
  {
    id: 'become-a-host',
    title: 'Become a Host',
    subtitle: 'Onboard as a host and unlock new recurring revenue.',
    imageSrc: '/host_signup_view.PNG',
    flow: 'Host Flow',
  },
]

export default function AppDemoSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const activeStep = demoSteps[activeIndex]

  const nextStep = () => {
    setActiveIndex((prev) => (prev + 1) % demoSteps.length)
  }

  const prevStep = () => {
    setActiveIndex((prev) => (prev - 1 + demoSteps.length) % demoSteps.length)
  }

  const goToStep = (index: number) => {
    setActiveIndex(index)
    setIsPlaying(false) // Pause auto-play when user manually selects a step
  }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoSteps.length)
    }, 2000) // 2 seconds per step

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section
      className="relative py-32 overflow-hidden"
      aria-label="EzParkk app demo"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg" />
      
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-box mb-4 inline-block">Product Demo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            See the EzParkk App{' '}
            <span className="text-cyan">(in action)</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Step through the core flows of the EzParkk app — all from your browser.
          </p>
        </motion.div>

        {/* Main Demo Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Step List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:order-1"
          >
            {demoSteps.map((step, index) => {
              const isActive = index === activeIndex
              return (
                <motion.button
                  key={step.id}
                  onClick={() => goToStep(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'glass-strong border-2 border-cyan/50 shadow-lg shadow-cyan/20'
                      : 'glass border border-glass-border hover:border-cyan/30 opacity-70 hover:opacity-100'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan text-dark-bg'
                          : 'bg-gray-700 text-gray-400'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={`font-display text-lg font-bold ${
                            isActive ? 'text-white' : 'text-gray-300'
                          }`}
                        >
                          {step.title}
                        </h3>
                        {step.flow && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full ${
                              step.flow === 'Driver Flow'
                                ? 'bg-cyan/20 text-cyan'
                                : 'bg-purple/20 text-purple'
                            }`}
                          >
                            {step.flow}
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          isActive ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a
                href="#waitlist"
                className="flex-1 px-6 py-4 bg-cyan text-dark-bg font-bold rounded-xl text-center hover:bg-cyan/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
              </motion.a>
              <motion.a
                href="/hosts"
                className="flex-1 px-6 py-4 glass border border-glass-border font-bold rounded-xl text-center hover:border-cyan/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Become a Host
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Phone Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative md:order-2"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
              {/* Glow effects */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-cyan/20 via-purple/20 to-cyan/20 rounded-[48px] blur-2xl opacity-50" />
              
              {/* Phone container */}
              <div className="relative glass-strong rounded-[28px] sm:rounded-[32px] p-3 sm:p-4 border border-glass-border shadow-2xl">
                {/* Phone bezel */}
                <div className="relative bg-black rounded-[20px] sm:rounded-[24px] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-b-2xl z-10" />
                  
                  {/* Screen content */}
                  <div className="relative aspect-[9/19.5] bg-gray-900 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeStep.id}
                        initial={{ opacity: 0, x: 16, scale: 0.97 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -16, scale: 0.97 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.18, 0.89, 0.32, 1.28],
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeStep.imageSrc}
                          alt={`EzParkk mobile app ${activeStep.title.toLowerCase()} screen showing ${activeStep.subtitle.toLowerCase()}`}
                          fill
                          className="object-contain"
                          priority={activeIndex === 0}
                          unoptimized={activeStep.imageSrc.endsWith('.PNG')}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Previous Button */}
              <motion.button
                onClick={prevStep}
                className="p-3 rounded-full glass border border-glass-border hover:border-cyan hover:bg-cyan/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous step"
              >
                <ChevronLeft className="w-6 h-6 text-gray-300" />
              </motion.button>

              {/* Play/Pause Button */}
              <motion.button
                onClick={togglePlay}
                className="p-3 rounded-full glass border border-glass-border hover:border-cyan hover:bg-cyan/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-cyan" />
                ) : (
                  <Play className="w-6 h-6 text-gray-300" />
                )}
              </motion.button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {demoSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-cyan'
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to step ${index + 1}: ${demoSteps[index].title}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextStep}
                className="p-3 rounded-full glass border border-glass-border hover:border-cyan hover:bg-cyan/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next step"
              >
                <ChevronRight className="w-6 h-6 text-gray-300" />
              </motion.button>
            </div>

            {/* Current Step Info */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-6"
            >
              <h3 className="font-display text-2xl font-bold mb-2">
                {activeStep.title}
              </h3>
              <p className="text-gray-400">{activeStep.subtitle}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

