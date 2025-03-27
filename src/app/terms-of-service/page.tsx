'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing and using CaloSync, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CaloSync provides a mobile application and website for calorie tracking, meal planning, and nutrition management. Our service includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Calorie and macro tracking</li>
                <li>AI-powered meal planning</li>
                <li>Food database access</li>
                <li>Progress tracking and analytics</li>
                <li>Subscription-based premium features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To use our service, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Be at least 13 years old</li>
                <li>Register for an account</li>
                <li>Provide accurate information</li>
                <li>Maintain the security of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Subscription and Payments
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our service offers both free and premium subscription options:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Free tier with basic features</li>
                <li>Premium subscription with advanced features</li>
                <li>Subscription fees are billed in advance</li>
                <li>You can cancel your subscription at any time</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. User Content
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By using our service, you retain all rights to your content. However, you grant us a license to use, modify, and display your content in connection with providing our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                CaloSync is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: legal@calosync.com
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

export default TermsOfService 