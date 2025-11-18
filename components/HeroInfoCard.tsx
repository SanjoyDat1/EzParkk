'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Car, Home, Building2 } from 'lucide-react'

// Typing animation component
function TypingText({ text, delay = 0, typingSpeed = 50, shouldReduceMotion = false }: { 
  text: string
  delay?: number
  typingSpeed?: number
  shouldReduceMotion?: boolean
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(text)
      return
    }

    let typingInterval: NodeJS.Timeout | null = null

    const timer = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0
      
      typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          if (typingInterval) {
            clearInterval(typingInterval)
            typingInterval = null
          }
          setIsTyping(false)
        }
      }, typingSpeed)
    }, delay)

    return () => {
      clearTimeout(timer)
      if (typingInterval) {
        clearInterval(typingInterval)
      }
    }
  }, [text, delay, typingSpeed, shouldReduceMotion])

  return (
    <span className="text-[11px] sm:text-xs md:text-sm text-gray-400">
      — {displayedText}
      {isTyping && !shouldReduceMotion && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-3 sm:h-4 bg-cyan ml-0.5 align-middle"
        />
      )}
    </span>
  )
}

export default function HeroInfoCard() {
  const shouldReduceMotion = useReducedMotion()

  const audiences = [
    {
      icon: Car,
      label: 'Drivers',
      benefit: 'Find hourly spots near you.',
    },
    {
      icon: Home,
      label: 'Hosts',
      benefit: 'Earn from unused parking spaces.',
    },
    {
      icon: Building2,
      label: 'Cities',
      benefit: 'Turn existing lots into smart networks.',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="flex items-center justify-center w-full h-full min-h-0 py-4 sm:py-0 lg:min-h-[600px]"
    >
      {/* Built For Card */}
      <motion.div
        className="relative glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 w-full max-w-[90%] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[340px] border border-glass-border shadow-2xl"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(148, 163, 184, 0.4)',
          boxShadow: '0 18px 40px rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, -3, 0],
        }}
        transition={shouldReduceMotion ? {} : {
          y: {
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.02,
          boxShadow: '0 24px 50px rgba(15, 23, 42, 0.95)',
        }}
      >
        {/* Top Pill Label */}
        <div className="mb-3 sm:mb-4 md:mb-5">
          <span className="text-[10px] sm:text-xs font-semibold text-cyan border border-cyan/50 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 inline-block">
            Built for
          </span>
        </div>

        {/* Main Statement */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-display font-semibold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
          Drivers, hosts, and cities – all in one parking network.
        </p>

        {/* Three Audience Rows */}
        <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={audience.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-2 sm:gap-2.5 md:gap-3"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan/80" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-white">
                    {audience.label}
                  </span>
                  {' '}
                  <TypingText 
                    text={audience.benefit}
                    delay={600 + index * 800}
                    typingSpeed={30}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}

