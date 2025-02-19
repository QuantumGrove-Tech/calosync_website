'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative h-[95vh] flex items-center bg-white overflow-hidden">
      <div className="w-[80%] mx-auto">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-left text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block mb-2">Track Your Calories.</span>
              <span className="block text-green-600 mb-2">Reach Your Goals.</span>
              <span className="block">Smarter with AI.</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-left text-lg sm:text-xl text-gray-600 max-w-2xl">
              CaloSync helps you lose weight, build muscle, or stay fit with AI-powered meal plans and seamless tracking.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-row flex-wrap gap-4 w-full">
              <Link
                href="https://play.google.com/store"
                className="flex-none inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download Now
              </Link>
              <button
                onClick={scrollToFeatures}
                className="flex-none inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base font-medium rounded-lg text-green-700 border-2 border-green-600 hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
              >
                See How It Works
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 w-full">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600 font-medium whitespace-nowrap">4.8★ Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm text-gray-600 font-medium whitespace-nowrap">10,000+ Users</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm italic text-gray-500">&quot;CaloSync changed how I eat!&quot;</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="lg:w-[45%] relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <Image
                src="/images/app-mockup.png"
                alt="CaloSync App Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero