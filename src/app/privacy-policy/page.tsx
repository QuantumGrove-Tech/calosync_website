'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At CaloSync, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                2.1 Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Name and contact information</li>
                <li>Profile information</li>
                <li>Health and fitness data</li>
                <li>Dietary preferences and restrictions</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                2.2 Usage Data
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>App usage statistics</li>
                <li>Device information</li>
                <li>Log data</li>
                <li>Location data (if enabled)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>To provide and maintain our service</li>
                <li>To personalize your experience</li>
                <li>To improve our app and services</li>
                <li>To communicate with you</li>
                <li>To process your payments</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: privacy@calosync.com
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy 