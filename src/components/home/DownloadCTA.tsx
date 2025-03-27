'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  {
    title: 'Free to Start',
    description: 'Download and start tracking your nutrition journey today at no cost',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'AI-Powered',
    description: 'Get personalized meal suggestions and nutrition insights powered by AI',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Easy to Use',
    description: 'Simple, intuitive interface makes tracking your nutrition effortless',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

const DownloadCTA = () => {
  return (
    <AnimatePresence>
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                Ready to Transform
                <span className="block text-primary-600 dark:text-primary-900 mt-2">Your Nutrition Journey?</span>
              </h2>
              
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                Join thousands of users who have already achieved their fitness goals with CaloSync. Start your journey today!
              </p>

              <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-8 sm:mt-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-900">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.app.caloriecounter"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Download Now
                </Link>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm sm:text-base">4.8/5 on Play Store</span>
                </div>
              </motion.div>
            </motion.div>

            {/* App Preview */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
                <Image
                  src="/images/app-mockup.png"
                  alt="CaloSync App Features"
                  fill
                  className="object-contain dark:brightness-90"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default DownloadCTA 