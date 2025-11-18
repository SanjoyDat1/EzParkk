'use client'

import { useState } from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
import { Car, MapPin } from 'lucide-react'

export default function HeroSmartCityMap() {
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  
  // Parallax values for hover effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })

  // Parking pin positions (percentage-based for responsive layout)
  const parkingPins = [
    { id: 1, x: '25%', y: '30%', delay: 0.1 },
    { id: 2, x: '60%', y: '25%', delay: 0.2 },
    { id: 3, x: '75%', y: '55%', delay: 0.3 },
    { id: 4, x: '45%', y: '70%', delay: 0.4 },
    { id: 5, x: '20%', y: '65%', delay: 0.5 },
    { id: 6, x: '80%', y: '40%', delay: 0.6 },
    { id: 7, x: '35%', y: '50%', delay: 0.7 },
  ]

  // Stat chips data
  const stats = [
    { value: '2,342', label: 'Spots live', position: 'top-left', delay: 0.8 },
    { value: '187', label: 'Hosts online', position: 'top-right', delay: 0.9 },
    { value: '2', label: 'Launch cities', position: 'bottom-left', delay: 1.0 },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    rotateX.set(y * 3) // Max 3 degrees
    rotateY.set(-x * 3) // Max 3 degrees
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative w-full h-full min-h-[500px] lg:min-h-[600px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Glass Card */}
      <motion.div 
        className="relative glass-strong rounded-[32px] p-6 md:p-8 w-full h-full border border-glass-border shadow-2xl overflow-hidden"
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Map Background */}
        <div 
          className="absolute inset-0 rounded-[24px]"
          style={{
            background: `
              radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 60%),
              radial-gradient(circle at bottom right, rgba(129,140,248,0.18), transparent 60%),
              #020617
            `,
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        >
          {/* City Blocks / Streets */}
          <div className="absolute inset-0">
            {/* Horizontal streets */}
            <div className="absolute top-[30%] left-0 right-0 h-[2px] bg-cyan/10" />
            <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-cyan/10" />
            {/* Vertical streets */}
            <div className="absolute left-[40%] top-0 bottom-0 w-[2px] bg-cyan/10" />
            <div className="absolute left-[70%] top-0 bottom-0 w-[2px] bg-cyan/10" />
            
            {/* City blocks (subtle rectangles) */}
            <div className="absolute top-[10%] left-[10%] w-[25%] h-[15%] bg-cyan/5 rounded-sm" />
            <div className="absolute top-[45%] left-[50%] w-[20%] h-[20%] bg-purple/5 rounded-sm" />
            <div className="absolute bottom-[15%] left-[20%] w-[30%] h-[12%] bg-blue/5 rounded-sm" />
          </div>

          {/* Parking Pins */}
          {parkingPins.map((pin) => (
            <motion.div
              key={pin.id}
              className="absolute"
              style={{
                left: pin.x,
                top: pin.y,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: pin.delay }}
            >
              {/* Outer glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan/30"
                style={{
                  width: '20px',
                  height: '20px',
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: pin.delay,
                }}
              />
              {/* Inner pin */}
              <motion.div
                className="relative w-3 h-3 rounded-full bg-cyan border-2 border-white/20"
                style={{
                  boxShadow: '0 0 12px rgba(56, 189, 248, 0.8), 0 0 24px rgba(56, 189, 248, 0.4)',
                }}
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.25, 1],
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: pin.delay,
                }}
              />
            </motion.div>
          ))}

          {/* Moving Car */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute"
              style={{
                width: '24px',
                height: '24px',
                left: '10%',
                top: '70%',
                transform: 'translate(-50%, -50%)',
                animation: 'carPath 20s linear infinite',
                animationDelay: '1.2s',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {/* Car trail (motion blur effect) */}
              <motion.div
                className="absolute bg-cyan/20 rounded-full blur-sm"
                style={{
                  width: '32px',
                  height: '32px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Car icon */}
              <div className="relative" style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}>
                <Car className="w-6 h-6 text-cyan" style={{ filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.8))' }} />
              </div>
            </motion.div>
          )}

          {/* Static car for reduced motion */}
          {shouldReduceMotion && (
            <div
              className="absolute"
              style={{
                left: '40%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Car className="w-6 h-6 text-cyan/60" />
            </div>
          )}
        </div>

        {/* Floating Stat Chips */}
        {stats.map((stat) => {
          const positionClasses = {
            'top-left': 'top-4 left-4',
            'top-right': 'top-4 right-4',
            'bottom-left': 'bottom-4 left-4',
            'bottom-right': 'bottom-4 right-4',
          }

          return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? { 
                  opacity: 1, 
                  y: 0,
                } : {
                  opacity: 1,
                  y: [0, -4, 0],
                }}
                transition={shouldReduceMotion ? {
                  opacity: { duration: 0.5, delay: stat.delay },
                  y: { duration: 0.5, delay: stat.delay },
                } : {
                  opacity: { duration: 0.5, delay: stat.delay },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: stat.delay + 1,
                  },
                }}
                className={`absolute ${positionClasses[stat.position as keyof typeof positionClasses]} glass rounded-2xl px-4 py-3 border border-cyan/60 backdrop-blur-sm`}
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                }}
              >
              <div className="text-white font-display text-2xl font-bold mb-0.5">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs font-medium">
                {stat.label}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

