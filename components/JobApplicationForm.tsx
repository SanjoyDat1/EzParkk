'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, X, FileText, Upload } from 'lucide-react'
import { submitJobApplication, JobApplication, uploadResume } from '@/lib/firestore'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface JobApplicationFormProps {
  roleId: string
  roleTitle: string
  onSuccess?: () => void
}

export default function JobApplicationForm({ roleId, roleTitle, onSuccess }: JobApplicationFormProps) {
  const [formData, setFormData] = useState<Partial<JobApplication>>({
    name: '',
    email: '',
    phone: '',
    role: roleId,
    coverLetter: '',
    linkedIn: '',
    portfolio: '',
    instagram: '',
    tiktok: '',
    location: '',
    availability: '',
    heardAboutUs: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeFileName, setResumeFileName] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Validate required fields before proceeding
      if (!formData.name || !formData.email || !formData.coverLetter) {
        setError('Please fill in all required fields (Name, Email, and Cover Letter).')
        setLoading(false)
        return
      }

      if (!resumeFile) {
        setError('Please upload your resume.')
        setLoading(false)
        return
      }

      let resumeUrl = ''
      
      // Upload resume - this is required
      try {
        console.log('Starting resume upload...', { fileName: resumeFile.name, size: resumeFile.size, type: resumeFile.type })
        resumeUrl = await uploadResume(resumeFile, formData.email!)
        console.log('Resume uploaded successfully:', resumeUrl)
      } catch (uploadError: any) {
        console.error('Resume upload error:', uploadError)
        setError(uploadError.message || 'Failed to upload resume. Please check your file and try again.')
        setLoading(false)
        return
      }

      // Submit application to Firestore
      try {
        console.log('Submitting application to Firestore...')
        console.log('Application data:', {
          name: formData.name,
          email: formData.email,
          role: roleId,
          hasResume: !!resumeUrl,
          resumeUrlLength: resumeUrl.length,
        })
        
        const applicationId = await submitJobApplication({
          name: formData.name!,
          email: formData.email!,
          phone: formData.phone || '',
          role: roleId,
          resume: resumeUrl,
          coverLetter: formData.coverLetter!,
          linkedIn: formData.linkedIn || '',
          portfolio: formData.portfolio || '',
          instagram: formData.instagram || '',
          tiktok: formData.tiktok || '',
          location: formData.location || '',
          availability: formData.availability || '',
          heardAboutUs: formData.heardAboutUs || '',
        })
        
        console.log('Application submitted successfully with ID:', applicationId)
      } catch (submitError: any) {
        console.error('Application submission error:', submitError)
        console.error('Error code:', submitError.code)
        console.error('Error message:', submitError.message)
        
        // If you see a permission error, check the Network tab for failed requests to firestore.googleapis.com
        // This usually indicates Firestore security rules need to be updated
        
        setError(submitError.message || 'Failed to submit application. Please try again.')
        setLoading(false)
        return
      }

      // Success - reset form
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: roleId,
        coverLetter: '',
        linkedIn: '',
        portfolio: '',
        instagram: '',
        tiktok: '',
        location: '',
        availability: '',
        heardAboutUs: '',
      })
      setResumeFile(null)
      setResumeFileName('')
      
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement
      if (fileInput) {
        fileInput.value = ''
      }

      if (onSuccess) {
        setTimeout(() => {
          onSuccess()
        }, 3000)
      }
    } catch (err: any) {
      console.error('Unexpected error:', err)
      setError(err.message || 'An unexpected error occurred. Please try again.')
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

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-3xl p-12 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="font-display text-3xl font-bold mb-4">Application Submitted!</h2>
        <p className="text-lg text-gray-300 mb-8">
          Thank you! Your application has been submitted. We'll review it and get back to you soon.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-white rounded-full font-semibold hover:bg-cyan-dark transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Careers
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-3xl p-8 md:p-12"
    >
      <div className="mb-8">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all roles
        </Link>
        <h2 className="font-display text-3xl font-bold mb-2">
          Apply for {roleTitle}
        </h2>
        <p className="text-gray-400">
          We keep our intern cohort intentionally small so you can work directly with the founder and core team. Share as much detail as you can below so we can understand your background, interests, and how you like to build or create online.
        </p>
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

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="instagram"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
              placeholder="@handle"
            />
          </div>

          <div>
            <label
              htmlFor="tiktok"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              TikTok
            </label>
            <input
              type="text"
              id="tiktok"
              name="tiktok"
              value={formData.tiktok}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
              placeholder="@handle"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Current City / Time Zone
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
              placeholder="e.g. Los Angeles (PST)"
            />
          </div>

          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Availability & Weekly Hours
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
              placeholder="e.g. 10–15 hrs/week, Spring 2026"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="heardAboutUs"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            How did you hear about EzParkk?
          </label>
          <input
            type="text"
            id="heardAboutUs"
            name="heardAboutUs"
            value={formData.heardAboutUs}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-bg/50 border border-glass-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20 transition-all"
            placeholder="Friend, TikTok, Instagram, campus, etc."
          />
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
          ) : (
            <>
              Submit Application
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}

