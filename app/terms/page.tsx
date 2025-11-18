'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Calendar, Mail, CheckCircle, BookOpen, MapPin, User, AlertTriangle, Home, CreditCard, Cloud, Info, ShieldOff, Gavel, Power, Check, AlertCircle, XCircle, Shield } from 'lucide-react'

export default function Terms() {
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
              <FileText className="w-4 h-4 mr-2" />
              Legal Terms
            </div>
            
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-white">
              Terms of Service
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Please read these terms carefully before using our parking platform. By using EzParkk, you agree to these terms.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-cyan mr-2" />
                Effective: August 2025
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
                <a href="#acceptance" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">1</span>
                  <span>Acceptance of Terms</span>
                </a>
                <a href="#definitions" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">2</span>
                  <span>Definitions</span>
                </a>
                <a href="#service" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">3</span>
                  <span>Service Description</span>
                </a>
                <a href="#accounts" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">4</span>
                  <span>User Accounts</span>
                </a>
                <a href="#conduct" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">5</span>
                  <span>User Conduct</span>
                </a>
                <a href="#listings" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">6</span>
                  <span>Parking Listings</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#payments" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">7</span>
                  <span>Reservations & Payments</span>
                </a>
                <a href="#third-party" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">8</span>
                  <span>Third-Party Services</span>
                </a>
                <a href="#disclaimers" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">9</span>
                  <span>Disclaimers</span>
                </a>
                <a href="#liability" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">10</span>
                  <span>Limitation of Liability</span>
                </a>
                <a href="#indemnification" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">11</span>
                  <span>Indemnification</span>
                </a>
                <a href="#termination" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">12</span>
                  <span>Termination</span>
                </a>
                <a href="#contact" className="flex items-center space-x-3 text-gray-400 hover:text-cyan transition-colors">
                  <span className="w-6 h-6 bg-cyan/20 rounded-full flex items-center justify-center text-sm font-semibold text-cyan">13</span>
                  <span>Contact Information</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Acceptance of Terms */}
            <div id="acceptance" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">1. Acceptance of Terms</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>
                    By accessing or using the EzParkk website, mobile application, and services (collectively, the "Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and EzParkk ("we," "our," or "us"). Your continued use of the Service after any changes to these Terms constitutes acceptance of the new Terms.
                  </p>
                  <div className="glass rounded-2xl p-6 border-l-4 border-cyan">
                    <h3 className="font-semibold text-white mb-2">Important Notice</h3>
                    <p className="text-gray-300">By using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any other applicable policies.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Definitions */}
            <div id="definitions" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">2. Definitions</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>For the purposes of these Terms, the following definitions apply:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-3">User</h3>
                      <p className="text-gray-300">Any individual or entity accessing or using the Service, including both drivers and parking space owners.</p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-3">Host</h3>
                      <p className="text-gray-300">An individual or entity listing a parking space for rent through the Service.</p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-3">Driver</h3>
                      <p className="text-gray-300">An individual or entity reserving a parking space through the Service.</p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-3">Service</h3>
                      <p className="text-gray-300">The EzParkk platform, including website, mobile app, and all related services.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Service Description */}
            <div id="service" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">3. Service Description</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>
                    EzParkk provides an online platform that connects drivers with parking space hosts to facilitate the reservation of parking spaces. Our Service includes:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <MapPin className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Parking Discovery</h3>
                        <p className="text-gray-300">Browse and search for available parking spaces in your area.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <Calendar className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Booking Management</h3>
                        <p className="text-gray-300">Reserve parking spaces and manage your bookings through our platform.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-6 glass rounded-2xl">
                      <CreditCard className="w-6 h-6 text-cyan mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Payment Processing</h3>
                        <p className="text-gray-300">Secure payment processing for parking reservations.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6 border-l-4 border-cyan">
                    <h3 className="font-semibold text-white mb-2">Important Disclaimer</h3>
                    <p className="text-gray-300">EzParkk acts solely as an intermediary and is not a party to any agreements between drivers and hosts. We do not own, operate, or manage any parking spaces listed on our platform.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* User Accounts */}
            <div id="accounts" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <User className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">4. User Accounts</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Account Registration</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>You must be at least 18 years old to create an account</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Provide accurate, current, and complete information during registration</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Maintain and update your account information as necessary</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>You may only create one account per person</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Account Security</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>You are responsible for maintaining the confidentiality of your account credentials</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>You are responsible for all activities that occur under your account</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Notify us immediately of any unauthorized use of your account</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* User Conduct */}
            <div id="conduct" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">5. User Conduct</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service. Specifically, you agree not to:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-3">Prohibited Activities</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Use the Service for any illegal purpose</li>
                        <li>• Violate any applicable laws or regulations</li>
                        <li>• Infringe on intellectual property rights</li>
                        <li>• Harass, abuse, or harm other users</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6">
                      <h3 className="font-semibold text-white mb-3">Platform Abuse</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Attempt to gain unauthorized access</li>
                        <li>• Interfere with Service operation</li>
                        <li>• Upload malicious code or content</li>
                        <li>• Spam or send unsolicited messages</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Parking Listings */}
            <div id="listings" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <Home className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">6. Parking Listings</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>Hosts are responsible for the accuracy and completeness of their parking space listings. All listings must comply with these requirements:</p>
                  
                  <div className="space-y-4">
                    <div className="glass rounded-2xl p-6 border-l-4 border-cyan">
                      <h3 className="text-lg font-semibold text-white mb-2">Accuracy Requirements</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Provide accurate location and availability information</li>
                        <li>• Include clear photos of the parking space</li>
                        <li>• Disclose any restrictions or limitations</li>
                        <li>• Update availability in real-time</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 border-l-4 border-purple">
                      <h3 className="text-lg font-semibold text-white mb-2">Legal Compliance</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Ensure you have the right to rent the parking space</li>
                        <li>• Comply with local zoning and parking regulations</li>
                        <li>• Obtain necessary permits or licenses</li>
                        <li>• Follow applicable tax requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Reservations & Payments */}
            <div id="payments" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">7. Reservations & Payments</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="glass rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Booking Process</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Review listing details before booking</li>
                        <li>• Confirm availability and pricing</li>
                        <li>• Provide accurate vehicle information</li>
                        <li>• Follow host's parking instructions</li>
                      </ul>
                    </div>
                    
                    <div className="glass rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Payment Terms</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• All payments processed securely</li>
                        <li>• Service fees may apply</li>
                        <li>• Refunds subject to host's policy</li>
                        <li>• Disputes handled through platform</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6 border-l-4 border-cyan">
                    <h3 className="text-lg font-semibold text-white mb-3">Third-Party Payment Processing</h3>
                    <p className="text-gray-300 mb-4">We use Stripe for secure payment processing. By using our payment services, you acknowledge and agree to Stripe's Services Agreement and Privacy Policy.</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Stripe's liability is limited to the greater of total fees paid in the 3 months preceding the event or $500 USD</li>
                      <li>• Stripe disclaims liability for unauthorized access or use of your data</li>
                      <li>• We are not responsible for Stripe's acts, omissions, or service interruptions</li>
                      <li>• Payment disputes must be resolved directly with Stripe when applicable</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Third-Party Services */}
            <div id="third-party" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">8. Third-Party Services</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>Our services utilize third-party providers for essential functionality. By using our platform, you acknowledge and agree to the terms and conditions of these third-party providers.</p>
                  
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Firebase Services</h3>
                    <p className="text-gray-300 mb-4">We use Firebase for cloud storage and account authentication. By using our services, you agree to Firebase's Terms of Service and Privacy Policy.</p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Google and its suppliers do not make any warranties related to Firebase services</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Google's liability is limited to the amount paid for services in the 6 months prior to the event</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>We are not responsible for Firebase's acts, omissions, or service interruptions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Authentication and data storage issues must be resolved with Google/Firebase</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Third-Party Liability Disclaimer</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>We are not responsible for the acts or omissions of Stripe, Firebase, or any other third-party providers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Any issues arising from third-party services should be addressed directly with the respective provider</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Our liability related to third-party services is limited to the extent permitted by law</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>We do not guarantee the availability, security, or performance of third-party services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Disclaimers */}
            <div id="disclaimers" className="scroll-mt-24">
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
                  <h2 className="font-display text-3xl font-bold text-white">9. Disclaimers</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Service Disclaimers</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>We do not guarantee the availability, safety, or suitability of any parking space</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>We are not responsible for disputes between users</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>We do not verify the accuracy of user-provided information</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>The Service is provided "as is" without warranties of any kind</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Limitation of Liability */}
            <div id="liability" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <ShieldOff className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">10. Limitation of Liability</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>To the maximum extent permitted by law, EzParkk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
                  
                  <div className="glass rounded-2xl p-6 sm:p-8">
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Loss of profits, revenue, or data</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Property damage or personal injury</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Service interruptions or technical issues</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span>Disputes between users</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Indemnification */}
            <div id="indemnification" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-purple/20 rounded-2xl flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">11. Indemnification</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>You agree to indemnify and hold harmless EzParkk, its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:</p>
                  
                  <div className="glass rounded-2xl p-6">
                    <ul className="space-y-3 text-gray-300">
                      <li>• Your use of the Service</li>
                      <li>• Your violation of these Terms</li>
                      <li>• Your violation of any third-party rights</li>
                      <li>• Any disputes with other users</li>
                      <li>• Your use of Stripe, Firebase, or other third-party services</li>
                      <li>• Violations of third-party service terms or applicable laws</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Termination */}
            <div id="termination" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center">
                    <Power className="w-6 h-6 text-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">12. Termination</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>We reserve the right to suspend or terminate your account at any time, with or without notice, for conduct that violates these Terms or is otherwise harmful to the Service or other users.</p>
                  
                  <div className="glass rounded-2xl p-6">
                    <h3 className="font-semibold text-white mb-3">Grounds for Termination</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Violation of these Terms</li>
                      <li>• Fraudulent or illegal activity</li>
                      <li>• Harassment of other users</li>
                      <li>• Repeated policy violations</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div id="contact" className="scroll-mt-24">
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
                  <h2 className="font-display text-3xl font-bold text-white">13. Contact Information</h2>
                </div>
                <div className="text-gray-300 space-y-6 leading-relaxed max-w-3xl">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  
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
                        <p className="text-gray-300">We aim to respond to all inquiries within 24 hours during business days.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Updates to Terms</h3>
                    <p className="text-gray-300">We may update these Terms from time to time. We will notify you of significant changes, and continued use of the Service constitutes acceptance of the new Terms.</p>
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
