'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShieldCheck, Calendar, Mail, Info, Database, Settings, Share2, Shield, UserCheck, Eye, Edit, Trash2, XCircle, Baby, Check } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-medium mb-6 border border-cyan/20">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Privacy & Security
            </div>
            
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-white">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we protect your personal information and ensure your data security.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-cyan mr-2" />
                Last updated: August 2025
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-cyan mr-2" />
                contact@ezparkk.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="relative py-12 border-y border-glass-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-white mb-8">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#introduction" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">1</span>
                  <span>Introduction</span>
                </a>
                <a href="#information-collection" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">2</span>
                  <span>Information We Collect</span>
                </a>
                <a href="#how-we-use" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">3</span>
                  <span>How We Use Your Information</span>
                </a>
                <a href="#information-sharing" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">4</span>
                  <span>Information Sharing</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#data-security" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">5</span>
                  <span>Data Security</span>
                </a>
                <a href="#your-rights" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">6</span>
                  <span>Your Rights</span>
                </a>
                <a href="#children-privacy" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">7</span>
                  <span>Children's Privacy</span>
                </a>
                <a href="#contact-us" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">8</span>
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Introduction */}
            <div id="introduction" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <Info className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">1. Introduction</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>
                    Welcome to EzParkk ("we," "our," or "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or interact with our services.
                  </p>
                  <p>
                    This policy applies to all users of our platform, including drivers seeking parking spaces and hosts offering parking spots. By using our services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                  <p>
                    <strong className="text-white">Effective Date:</strong> This Privacy Policy is effective as of August 27, 2025, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Information Collection */}
            <div id="information-collection" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">2. Information We Collect</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>We collect several different types of information for various purposes to provide and improve our services to you.</p>
                  
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Account Information:</strong> Name, email address, phone number, and password when you create an account</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Profile Information:</strong> Profile picture, vehicle information, and preferences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Payment Information:</strong> Credit card details, billing address, and payment history</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Location Data:</strong> GPS location when using our parking services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Usage Information</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Device Information:</strong> Device type, operating system, browser type, and IP address</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Usage Data:</strong> Pages visited, features used, and interaction patterns</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span><strong className="text-white">Communication Data:</strong> Messages, reviews, and feedback you provide</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* How We Use */}
            <div id="how-we-use" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">3. How We Use Your Information</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>We use the information we collect for various purposes, including:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6 border border-cyan/20">
                      <h3 className="text-lg font-semibold text-white mb-3">Service Provision</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Process parking bookings and payments</li>
                        <li>• Connect drivers with parking hosts</li>
                        <li>• Provide customer support</li>
                        <li>• Send booking confirmations</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-cyan/20">
                      <h3 className="text-lg font-semibold text-white mb-3">Communication</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Send important updates and notifications</li>
                        <li>• Respond to your inquiries</li>
                        <li>• Provide customer service</li>
                        <li>• Share relevant promotions</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-purple/20">
                      <h3 className="text-lg font-semibold text-white mb-3">Security & Safety</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Verify user identities</li>
                        <li>• Prevent fraud and abuse</li>
                        <li>• Ensure platform safety</li>
                        <li>• Comply with legal obligations</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border border-purple/20">
                      <h3 className="text-lg font-semibold text-white mb-3">Improvement</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Analyze usage patterns</li>
                        <li>• Improve our services</li>
                        <li>• Develop new features</li>
                        <li>• Personalize user experience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Information Sharing */}
            <div id="information-sharing" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">4. Information Sharing</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-2xl p-6 border-l-4 border-cyan">
                      <h3 className="text-lg font-semibold text-white mb-2">Service Providers</h3>
                      <p className="text-gray-300">We may share information with trusted third-party service providers who assist us in operating our platform, such as payment processors, hosting providers, and analytics services.</p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border-l-4 border-cyan">
                      <h3 className="text-lg font-semibold text-white mb-2">Legal Requirements</h3>
                      <p className="text-gray-300">We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety.</p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border-l-4 border-purple">
                      <h3 className="text-lg font-semibold text-white mb-2">Business Transfers</h3>
                      <p className="text-gray-300">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border-l-4 border-purple">
                      <h3 className="text-lg font-semibold text-white mb-2">With Your Consent</h3>
                      <p className="text-gray-300">We may share your information with third parties when you explicitly consent to such sharing.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Data Security */}
            <div id="data-security" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">5. Data Security</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Security Measures</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-cyan" />
                          <span className="text-gray-300">Encryption of data in transit and at rest</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-cyan" />
                          <span className="text-gray-300">Secure authentication systems</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-cyan" />
                          <span className="text-gray-300">Regular security audits</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-cyan" />
                          <span className="text-gray-300">Limited access to personal data</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-cyan" />
                          <span className="text-gray-300">Regular data backups</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-cyan" />
                          <span className="text-gray-300">Incident response procedures</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Your Rights */}
            <div id="your-rights" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">6. Your Rights</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>You have certain rights regarding your personal information, including:</p>
                  
                  <div className="grid gap-4">
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <Eye className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Right to Access</h3>
                        <p className="text-gray-300">You can request a copy of the personal information we hold about you.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <Edit className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Right to Correction</h3>
                        <p className="text-gray-300">You can request that we correct any inaccurate or incomplete information.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <Trash2 className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Right to Deletion</h3>
                        <p className="text-gray-300">You can request that we delete your personal information in certain circumstances.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <XCircle className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Right to Object</h3>
                        <p className="text-gray-300">You can object to our processing of your personal information in certain situations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">How to Exercise Your Rights</h3>
                    <p className="text-gray-300 mb-4">To exercise any of these rights, please contact us at <a href="mailto:contact@ezparkk.com" className="text-cyan hover:underline font-semibold">contact@ezparkk.com</a>. We will respond to your request within 30 days.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Children's Privacy */}
            <div id="children-privacy" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <Baby className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">7. Children's Privacy</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.</p>
                  
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Age Verification</h3>
                    <p className="text-gray-300">By using our services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Us */}
            <div id="contact-us" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">8. Contact Us</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-cyan" />
                            <a href="mailto:contact@ezparkk.com" className="text-cyan hover:underline font-semibold">contact@ezparkk.com</a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-gray-300">www.ezparkk.com</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Response Time</h3>
                        <p className="text-gray-300">We aim to respond to all privacy-related inquiries within 24 hours during business days.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Updates to This Policy</h3>
                    <p className="text-gray-300">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this policy.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="relative py-12 border-t border-glass-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-cyan hover:text-cyan/80 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
