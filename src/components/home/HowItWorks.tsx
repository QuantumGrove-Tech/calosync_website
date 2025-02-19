'use client'

import { motion } from 'framer-motion'
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
    <div className="relative h-[95vh] flex items-center bg-gray-50">
      <div className="w-[70%] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Start Your Journey in Just 3 Simple Steps!
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            CaloSync makes tracking your calories and reaching your fitness goals effortless. Here&apos;s how it works:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-green-600 mr-2">{step.number}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {step.description.map((desc, i) => (
                    <p key={i} className="text-gray-600">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Ready to take control of your nutrition? Join thousands already using CaloSync!
          </h3>
          <Link
            href="https://play.google.com/store"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Download Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HowItWorks 