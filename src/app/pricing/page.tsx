'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tiers = [
  {
    name: 'Free',
    description: 'Perfect for getting started with basic tracking',
    price: '₹0',
    duration: 'forever',
    features: [
      'Basic calorie tracking',
      'Food database access',
      'Weight tracking',
      'Basic progress charts',
      'Community support'
    ],
    cta: 'Download Now',
    ctaLink: 'https://play.google.com/store',
    highlighted: false
  },
  {
    name: 'Premium',
    description: 'Early Bird Special - 70% OFF!',
    originalPrice: '₹499',
    price: '₹149',
    duration: 'per month',
    features: [
      'Everything in Free plan',
      'AI-powered meal suggestions',
      'Custom meal plans',
      'Advanced analytics',
      'Progress photos',
      'Macro tracking',
      'Recipe database',
      'Priority support'
    ],
    cta: 'Get Premium Now',
    ctaLink: 'https://play.google.com/store',
    highlighted: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Lifetime',
    description: 'One-time payment, lifetime access',
    originalPrice: '₹11,999',
    price: '₹2,999',
    duration: 'one-time',
    features: [
      'Everything in Premium',
      'Lifetime updates',
      'Personal nutrition coach',
      'Custom workout plans',
      'VIP support',
      'Early access to new features'
    ],
    cta: 'Get Lifetime Access',
    ctaLink: 'https://play.google.com/store',
    highlighted: false,
    badge: 'BEST VALUE'
  }
]

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20">
      <div className="w-[70%] mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
            🎉 Limited Time Early Bird Offer
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Special Launch Pricing
            <span className="block text-green-600 mt-2">Save Up To 70% Today!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join early and lock in the lowest prices ever. Most fitness apps charge ₹499/month, 
            but as an early supporter, you get premium features at a fraction of the cost!
          </p>

          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-sm text-gray-600">4.8/5 rating</span>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-600">10,000+ active users</span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-600">30-day money back guarantee</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block px-6 py-3 rounded-lg bg-red-50 border border-red-100">
            <p className="text-red-600 font-semibold">
              🔥 Early Bird Offer Ends In:
              <span className="ml-2 font-mono">23:59:59</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl ${
                tier.highlighted 
                  ? 'bg-white shadow-xl ring-2 ring-green-500' 
                  : 'bg-white/60 shadow-lg'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  {tier.originalPrice && (
                    <span className="text-lg text-gray-500 line-through mr-2">
                      {tier.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600">/{tier.duration}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-green-500 mt-1 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaLink}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/60 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">When will prices increase?</h3>
              <p className="text-gray-600">
                Early bird pricing is only available during our launch period. 
                Prices will increase to regular rates (₹499/month) once we reach 50,000 users.
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes! You can cancel your subscription at any time. 
                We also offer a 30-day money-back guarantee if you&apos;re not satisfied.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-xl text-gray-600 mb-6">
            Don&apos;t miss out on these special launch prices!
            <br />
            Join thousands of users who are already achieving their fitness goals.
          </p>
          <Link
            href="https://play.google.com/store"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Download Now & Save 70%
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PricingPage