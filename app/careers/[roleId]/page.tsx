'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { getRoleById, openRoles } from '@/lib/roles'
import JobApplicationForm from '@/components/JobApplicationForm'
import { useEffect } from 'react'

export default function RoleApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const roleId = params.roleId as string
  const role = getRoleById(roleId)

  const { scrollY } = useScroll()

  useEffect(() => {
    if (!role) {
      router.push('/careers')
    }
  }, [role, router])

  if (!role) {
    return null
  }

  const Icon = role.icon

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
            className="text-center mb-12"
          >
            <span className="text-box mb-4 inline-block">{role.department}</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {role.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{role.location}</span>
              </div>
              <span className="text-gray-500">•</span>
              <span>{role.type}</span>
            </div>
          </motion.div>

          {/* Role Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-cyan" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold mb-4">About This Role</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-4">Requirements</h3>
              <ul className="space-y-3">
                {role.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan mt-1.5">•</span>
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="relative py-20 border-y border-glass-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <JobApplicationForm roleId={roleId} roleTitle={role.title} />
        </div>
      </section>
    </div>
  )
}


