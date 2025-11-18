'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function HeroStatusCard() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="flex items-center justify-center w-full h-full min-h-[500px] lg:min-h-[600px]"
    >
      {/* Small Glass Card */}
      <motion.div
        className="relative glass-strong rounded-3xl p-6 w-[280px] md:w-[320px] border border-glass-border shadow-2xl"
        style={{
          background: 'rgba(15, 23, 42, 0.8)',
          boxShadow: '0 18px 40px rgba(15, 23, 42, 0.85)',
        }}
        animate={shouldReduceMotion ? {} : {
          y: [0, -3, 0],
        }}
        transition={shouldReduceMotion ? {} : {
          y: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        whileHover={shouldReduceMotion ? {} : {
          scale: 1.02,
          boxShadow: '0 24px 50px rgba(15, 23, 42, 0.95)',
        }}
      >
        {/* Pill Label */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-cyan border border-cyan/40 rounded-full px-3 py-1">
            Live Snapshot
          </span>
          <MapPin className="w-4 h-4 text-gray-400" />
        </div>

        {/* Primary Stat */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
            2 launch cities
          </h3>
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>2 cities</span>
          <span className="text-gray-600">·</span>
          <span>187 hosts</span>
          <span className="text-gray-600">·</span>
          <span>2.3K spots</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

