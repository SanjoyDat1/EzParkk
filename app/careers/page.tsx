'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Megaphone, Briefcase, ArrowRight, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, X, FileText, Upload } from 'lucide-react'
import Image from 'next/image'
import { submitJobApplication, JobApplication, uploadResume } from '@/lib/firestore'

const openRoles = [
  {
    id: 'software-engineering-intern',
    title: 'Software Engineering Intern',
    department: 'Engineering',
    location: 'Remote / Los Angeles, CA',
    type: 'Internship',
    icon: Code,
    description: 'Join as a software engineering intern and help build the core platform. You\'ll work across our tech stack including web, mobile, and backend infrastructure. Learn from experienced engineers while making real impact on a product that solves real problems.',
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Experience with any programming language (JavaScript, Python, Java, Swift, etc.)',
      'Interest in full-stack development, mobile apps, or backend systems',
      'Strong problem-solving and communication skills',
      'Passion for building products that solve real problems',
    ],
  },
  {
    id: 'marketing-intern',
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Remote / Los Angeles, CA',
    type: 'Internship',
    icon: Megaphone,
    description: 'Help drive user acquisition and growth for EzParkk. You\'ll work on marketing campaigns, social media, content creation, and help build our brand in the parking and mobility space.',
    requirements: [
      'Currently pursuing a degree in Marketing, Communications, or related field',
      'Interest in digital marketing channels (social, email, paid ads)',
      'Creative thinker with strong writing skills',
      'Eager to learn and contribute to growth initiatives',
    ],
  },
  {
    id: 'operations-intern',
    title: 'Operations Intern',
    department: 'Operations',
    location: 'Los Angeles, CA / Newport Beach, CA',
    type: 'Internship',
    icon: Briefcase,
    description: 'Help scale EzParkk across California. You\'ll work on city partnerships, host onboarding, customer support, and learn how to run operations at a fast-growing startup.',
    requirements: [
      'Currently pursuing a degree in Business, Operations, or related field',
      'Strong organizational and communication skills',
      'Interest in partnerships and business development',
      'Detail-oriented with excellent problem-solving abilities',
    ],
  },
]

export default function Careers() {
  const { scrollY } = useScroll()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<JobApplication>>({
    name: '',
    email: '',
    phone: '',
    role: '',
    coverLetter: '',
    linkedIn: '',
    portfolio: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeFileName, setResumeFileName] = useState<string>('')

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
    setFormData({ ...formData, role: roleId })
    setError(null)
    setSubmitted(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) {
      setError('Please select a role first')
      return
    }

    setError(null)
    setLoading(true)

    try {
      let resumeUrl = ''
      
      // Upload resume if provided
      if (resumeFile) {
        try {
          resumeUrl = await uploadResume(resumeFile, formData.email!)
        } catch (uploadError: any) {
          setError(uploadError.message || 'Failed to upload resume. Please try again.')
          setLoading(false)
          return
        }
      }

      await submitJobApplication({
        name: formData.name!,
        email: formData.email!,
        phone: formData.phone || '',
        role: selectedRole,
        resume: resumeUrl,
        coverLetter: formData.coverLetter!,
        linkedIn: formData.linkedIn || '',
        portfolio: formData.portfolio || '',
      })
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        coverLetter: '',
        linkedIn: '',
        portfolio: '',
      })
      setResumeFile(null)
      setResumeFileName('')
      setTimeout(() => {
        setSubmitted(false)
        setSelectedRole(null)
      }, 5000)
    } catch (err: any) {
      setError(err.message || 'Failed to submit application. Please try again.')
      console.error('Application error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Resume file size must be less than 5MB')
        return
      }
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a PDF or Word document (.pdf, .doc, .docx)')
        return
      }
      setResumeFile(file)
      setResumeFileName(file.name)
      setError(null)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const selectedRoleData = openRoles.find((role) => role.id === selectedRole)

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
            <span className="text-box mb-4 inline-block">Join the Team</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Open Roles{' '}
              <span className="text-cyan">(We're Hiring)</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Help us revolutionize parking. Join a small, ambitious team building the future of urban mobility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {openRoles.map((role, index) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative glass rounded-3xl p-8 hover:scale-105 transition-transform cursor-pointer ${
                    selectedRole === role.id ? 'ring-2 ring-cyan' : ''
                  }`}
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <div className="absolute top-4 right-4 w-20 h-20 overlay-shape opacity-20" />
                  <Icon className="w-16 h-16 text-cyan mb-6" />
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-3 py-1 bg-cyan/20 text-cyan rounded-full">
                      {role.department}
                    </span>
                    <span className="text-xs px-3 py-1 bg-purple/20 text-purple rounded-full">
                      {role.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="flex items-center text-cyan font-medium text-sm group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      {selectedRole && selectedRole !== 'general-application' && (
        <section className="relative py-20 border-y border-glass-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-2">
                    Apply for {selectedRoleData?.title}
                  </h2>
                  <p className="text-gray-400">
                    We'd love to hear from you. Fill out the form below to get started.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedRole(null)
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      role: '',
                      coverLetter: '',
                      linkedIn: '',
                      portfolio: '',
                    })
                    setResumeFile(null)
                    setResumeFileName('')
                    setError(null)
                    setSubmitted(false)
                  }}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="linkedIn"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="https://linkedin.com/in/yourname"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="portfolio"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Portfolio / Website
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Resume (PDF or Word) *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white cursor-pointer hover:border-cyan hover:bg-dark-bg/70 transition-all"
                    >
                      {resumeFileName ? (
                        <>
                          <FileText className="w-5 h-5 text-cyan" />
                          <span className="text-sm text-gray-300 truncate flex-1">{resumeFileName}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setResumeFile(null)
                              setResumeFileName('')
                              const input = document.getElementById('resume') as HTMLInputElement
                              if (input) input.value = ''
                            }}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-400">Click to upload resume (PDF, DOC, DOCX - Max 5MB)</span>
                        </>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB</p>
                </div>

                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Cover Letter / Why EzParkk? *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
                    placeholder="Tell us why you're interested in this role and what you'd bring to EzParkk..."
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
                      Thank you! Your application has been submitted. We'll review it and get back to you soon.
                    </p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading || submitted}
                  whileHover={!loading && !submitted ? { scale: 1.02 } : {}}
                  whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
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
                      <span>Application Submitted!</span>
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      )}

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
              Don't see a role that fits?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented people. Send us your application and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() => handleRoleSelect('general-application')}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan text-cyan rounded-full font-semibold text-lg hover:bg-cyan/10 transition-all"
            >
              Send General Application
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* General Application Form Section */}
      {selectedRole === 'general-application' && (
        <section className="relative py-20 border-y border-glass-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-2">
                    General Application
                  </h2>
                  <p className="text-gray-400">
                    We'd love to hear from you. Fill out the form below and we'll keep you in mind for future opportunities.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedRole(null)
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      role: '',
                      coverLetter: '',
                      linkedIn: '',
                      portfolio: '',
                    })
                    setResumeFile(null)
                    setResumeFileName('')
                    setError(null)
                    setSubmitted(false)
                  }}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="linkedIn"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="https://linkedin.com/in/yourname"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="portfolio"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Portfolio / Website
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Resume (PDF or Word) *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white cursor-pointer hover:border-cyan hover:bg-dark-bg/70 transition-all"
                    >
                      {resumeFileName ? (
                        <>
                          <FileText className="w-5 h-5 text-cyan" />
                          <span className="text-sm text-gray-300 truncate flex-1">{resumeFileName}</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setResumeFile(null)
                              setResumeFileName('')
                              const input = document.getElementById('resume') as HTMLInputElement
                              if (input) input.value = ''
                            }}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-400">Click to upload resume (PDF, DOC, DOCX - Max 5MB)</span>
                        </>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB</p>
                </div>

                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tell Us About Yourself *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all resize-none"
                    placeholder="Tell us about yourself, your interests, and why you'd like to work with EzParkk..."
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
                      Thank you! Your application has been submitted. We'll review it and get back to you if we have a role that matches your interests.
                    </p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading || submitted}
                  whileHover={!loading && !submitted ? { scale: 1.02 } : {}}
                  whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
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
                      <span>Application Submitted!</span>
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}

