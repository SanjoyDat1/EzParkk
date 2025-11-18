'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Users, Home, Building2, TrendingUp, Zap, MapPin } from 'lucide-react'

export default function ParkingNetworkPanel() {
  const shouldReduceMotion = useReducedMotion()
  const cards = [
    {
      id: 'drivers',
      label: 'Drivers',
      icon: Users,
      position: { x: '20%', y: '15%' },
      color: 'from-cyan/30 to-cyan/10',
      borderColor: 'border-cyan/40',
      delay: 0.2,
      microLabels: ['Hourly booking', 'Real-time availability'],
    },
    {
      id: 'hosts',
      label: 'Hosts',
      icon: Home,
      position: { x: '70%', y: '25%' },
      color: 'from-purple/30 to-purple/10',
      borderColor: 'border-purple/40',
      delay: 0.4,
      microLabels: ['Dynamic pricing', 'Earnings dashboard'],
    },
    {
      id: 'cities',
      label: 'Cities',
      icon: Building2,
      position: { x: '45%', y: '60%' },
      color: 'from-blue/30 to-blue/10',
      borderColor: 'border-blue/40',
      delay: 0.6,
      microLabels: ['Smart routing', 'Data insights'],
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: TrendingUp,
      position: { x: '15%', y: '70%' },
      color: 'from-cyan/20 to-purple/20',
      borderColor: 'border-cyan/30',
      delay: 0.8,
      microLabels: ['Live metrics', 'Network health'],
    },
  ]

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
      {/* Glassmorphic Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative glass-strong rounded-[32px] p-8 md:p-12 w-full h-full border border-glass-border shadow-2xl"
        whileHover={shouldReduceMotion ? {} : { 
          rotateX: 2,
          rotateY: -2,
          scale: 1.02,
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        {/* Background Grid Pattern */}
        <div 
          className="absolute inset-0 rounded-[32px] opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Network Cards */}
        <div className="relative w-full h-full">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  x: shouldReduceMotion ? 0 : [0, Math.sin(index) * 3, 0],
                  y: shouldReduceMotion ? 0 : [0, Math.cos(index) * 3, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: card.delay },
                  scale: { duration: 0.6, delay: card.delay },
                  y: { duration: 0.6, delay: card.delay },
                  x: shouldReduceMotion ? {} : {
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  },
                  y: shouldReduceMotion ? {} : {
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  },
                }}
                style={{
                  position: 'absolute',
                  left: card.position.x,
                  top: card.position.y,
                  transform: 'translate(-50%, -50%)',
                }}
                className="group"
              >
                {/* Card */}
                <div className={`relative glass rounded-2xl p-6 border-2 ${card.borderColor} bg-gradient-to-br ${card.color} backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 min-w-[140px]`}>
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border ${card.borderColor}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <h3 className="font-display text-lg font-bold text-white mb-2 text-center">
                    {card.label}
                  </h3>
                  
                  {/* Micro Labels */}
                  <div className="space-y-1">
                    {card.microLabels.map((label, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: card.delay + 0.3 + i * 0.1 }}
                        className="text-xs text-gray-300 text-center"
                      >
                        {label}
                      </motion.div>
                    ))}
                  </div>

                  {/* Pulsing Glow */}
                  {!shouldReduceMotion && (
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-30`}
                      animate={{
                        opacity: [0, 0.2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </div>
              </motion.div>
            )
          })}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Driver to Host */}
            <motion.line
              x1="20%"
              y1="15%"
              x2="70%"
              y2="25%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 0.4 : 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.5, delay: shouldReduceMotion ? 0 : 1 }}
            />
            
            {/* Host to Cities */}
            <motion.line
              x1="70%"
              y1="25%"
              x2="45%"
              y2="60%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 0.4 : 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.5, delay: shouldReduceMotion ? 0 : 1.2 }}
            />
            
            {/* Cities to Analytics */}
            <motion.line
              x1="45%"
              y1="60%"
              x2="15%"
              y2="70%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 0.4 : 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.5, delay: shouldReduceMotion ? 0 : 1.4 }}
            />
            
            {/* Driver to Analytics */}
            <motion.line
              x1="20%"
              y1="15%"
              x2="15%"
              y2="70%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 0.3 : 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.5, delay: shouldReduceMotion ? 0 : 1.6 }}
            />
          </svg>

          {/* Animated Data Points */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`point-${i}`}
              className="absolute w-2 h-2 bg-cyan rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={shouldReduceMotion ? {
                scale: 1,
                opacity: 0.5,
              } : {
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={shouldReduceMotion ? {} : {
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

