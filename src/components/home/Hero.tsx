'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      <section className="relative min-h-screen py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                <span className="block mb-2">Track Your Calories.</span>
                <span className="block text-primary-600 dark:text-primary-800 mb-2">Reach Your Goals.</span>
                <span className="block">Smarter with AI.</span>
              </h1>
              
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                CaloSync helps you lose weight, build muscle, or stay fit with AI-powered meal plans and seamless tracking.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.app.caloriecounter&hl=en"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Download Now
                </Link>
                <button
                  onClick={scrollToFeatures}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-lg text-primary-700 dark:text-primary-800 border-2 border-primary-600 dark:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/50 md:py-4 md:px-10 transition-all duration-200"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-lg lg:max-w-none">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <svg className="h-5 w-5 text-warning flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">4.8★ Rating</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <svg className="h-5 w-5 text-primary-500 dark:text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">10,000+ Users</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <span className="text-sm sm:text-base italic text-gray-500 dark:text-gray-400">&quot;CaloSync changed how I eat!&quot;</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              className="w-full lg:w-1/2 max-w-md lg:max-w-none mx-auto"
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/images/app-mockup.png"
                  alt="CaloSync App Interface"
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

export default Hero