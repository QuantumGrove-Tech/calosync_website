'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Search & Log Your Food',
    description: [
      'Easily find any food in our database or scan barcodes for instant tracking.',
      'Get accurate calorie and macro details for every meal.'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: '2',
    title: 'Get AI-Powered Meal Plans',
    description: [
      'Our smart AI suggests meal plans based on your weight loss, muscle gain, or fitness goals.',
      'Customize meals to fit your lifestyle and preferences.'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: '3',
    title: 'Track Progress & Stay on Target',
    description: [
      'Monitor daily intake, set goals, and get insights on your nutrition.',
      'Stay motivated with reminders and personalized tips.'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
]

const HowItWorks = () => {
  return (
    <AnimatePresence>
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              Start Your Journey in Just 3 Simple Steps!
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              CaloSync makes tracking your calories and reaching your fitness goals effortless. Here&apos;s how it works:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg dark:shadow-gray-800/30 h-full hover:shadow-xl dark:hover:shadow-gray-800/50 transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-900 mr-3">
                        {step.number}
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {step.description.map((desc, i) => (
                      <p key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12 lg:mt-16"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Ready to take control of your nutrition? Join thousands already using CaloSync!
            </h3>
            <Link
              href="https://play.google.com/store/apps/details?id=com.app.caloriecounter&hl=en"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Download Now
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default HowItWorks 