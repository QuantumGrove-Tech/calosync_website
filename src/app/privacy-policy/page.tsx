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
            CaloSync: Calorie Counter Privacy Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last Updated: 23 March, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Welcome to CaloSync AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application CaloSync AI: Calorie Counter (the "App").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Basic profile information (age, height, weight)</li>
                <li>Dietary preferences and health goals</li>
                <li>Meal planning preferences and history</li>
                <li>Location data (Pakistan only)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Device information (device type, operating system)</li>
                <li>Advertising ID</li>
                <li>Usage data and analytics</li>
                <li>App performance and crash data</li>
                <li>IP address and general location data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>To provide and maintain our calorie counting and meal planning services</li>
                <li>To personalize your experience and deliver tailored meal recommendations</li>
                <li>To improve our App's functionality and user experience</li>
                <li>To analyze usage patterns and optimize performance</li>
                <li>To display relevant advertisements</li>
                <li>To communicate important updates and information</li>
                <li>To detect and prevent technical issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our App integrates with the following third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Google Firebase (Analytics, Crashlytics, Remote Config, Performance Monitoring)</li>
                <li>Google AdMob (Advertising)</li>
                <li>Meta Ads SDK</li>
                <li>Other functional libraries</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Each third-party service may collect and process data according to their own privacy policies. We encourage you to review their respective privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Data Controller Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The data controller for CaloSync AI is:
              </p>
              <ul className="list-none pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Company Name: Quantum Grove</li>
                <li>Address: Al-Bashra, Dubai</li>
                <li>Email: support@calosyncai.com</li>
                <li>Representative: Shayan Ahmad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We retain your personal information for as long as necessary to provide you with our services and for legitimate and essential business purposes, such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Maintaining the performance of our App</li>
                <li>Making data-driven business decisions about new features and offerings</li>
                <li>Complying with our legal obligations</li>
                <li>Resolving disputes</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Specifically:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Basic profile and health data: Retained while your account is active</li>
                <li>Usage data and analytics: Retained for 26 months</li>
                <li>Crash reports and performance data: Retained for 90 days</li>
                <li>Marketing communications data: Retained until you unsubscribe</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can request deletion of your data at any time by contacting us at playstore@quantumgrove.tech.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Your Privacy Rights
              </h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                7.1 California Consumer Privacy Act (CCPA) Rights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you are a California resident, you have the following rights under the CCPA:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Right to Know: You can request information about the personal information we collect, use, disclose, and sell</li>
                <li>Right to Delete: You can request deletion of your personal information</li>
                <li>Right to Opt-Out: You can opt-out of the sale of your personal information</li>
                <li>Right to Non-Discrimination: We will not discriminate against you for exercising your CCPA rights</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                To exercise your CCPA rights, contact us at support@calosyncai.com.
              </p>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                7.2 Data Sharing and Sale Opt-Out Rights
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We share certain data with advertising partners to display personalized ads. This may be considered a "sale" under certain privacy laws. You can opt-out of data sharing/selling by:
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">1. Advertising ID Opt-Out:</p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Android: Settings {'>'} Google {'>'} Ads {'>'} Opt out of Ads Personalization</li>
                <li>iOS: Settings {'>'} Privacy {'>'} Tracking {'>'} Disable "Allow Apps to Request to Track"</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-2">2. Third-Party Data Sharing:</p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Disable personalized ads in app settings</li>
                <li>Contact us at support@calosyncai.com to opt-out of all non-essential data sharing</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                7.3 Right to Know About Data Sharing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to know what personal information we collect and share. We share data with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Analytics providers (Firebase)</li>
                <li>Advertising partners (AdMob, Meta)</li>
                <li>Service providers who assist in app functionality</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can request detailed information about data sharing by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Emailing us at support@calosyncai.com</li>
                <li>Contacting our privacy team through the app</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Advertising
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use AdMob to display advertisements in our App. AdMob may use your Advertising ID and other device information to serve personalized ads. You can opt out of personalized advertising through your device settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. In-App Purchases and Subscriptions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                When you make purchases through our App, payment information is processed by Google Play's billing system. We do not collect or store your payment information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Children's Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our App is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. International Data Transfers
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of personalized advertising</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                14. Changes to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may update this Privacy Policy periodically. We will notify you of any material changes through the App or via email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                15. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: support@calosyncai.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                16. Consent
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By using our App, you consent to our Privacy Policy and agree to its terms.
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