'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Smart Calorie Tracking',
    description: 'Effortlessly track your daily calories with our AI-powered food recognition system. Simply take a photo of your meal, and let CaloSync do the rest.',
    image: '/images/app-mockup.png',
    benefits: [
      'Instant food recognition',
      'Barcode scanner',
      'Custom meal creation',
      'Restaurant menu database',
      'Portion size estimation'
    ]
  },
  {
    title: 'Personalized Meal Plans',
    description: 'Get customized meal suggestions based on your preferences, dietary restrictions, and fitness goals. Our AI adapts to your tastes while ensuring optimal nutrition.',
    image: '/images/app-mockup.png',
    benefits: [
      'AI-powered recommendations',
      'Dietary restriction handling',
      'Weekly meal planning',
      'Grocery list generation',
      'Recipe alternatives'
    ]
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your fitness journey with comprehensive analytics and insights. Track weight, measurements, and see your progress visualized clearly.',
    image: '/images/app-mockup.png',
    benefits: [
      'Visual progress charts',
      'Body measurements',
      'Progress photos',
      'Goal tracking',
      'Trend analysis'
    ]
  },
  {
    title: 'Nutrition Insights',
    description: 'Understand your eating habits with detailed nutritional breakdowns and actionable insights to improve your diet quality.',
    image: '/images/app-mockup.png',
    benefits: [
      'Macro tracking',
      'Vitamin analysis',
      'Eating pattern insights',
      'Food quality scores',
      'Nutrient recommendations'
    ]
  }
]

const integrations = [
  {
    name: 'Apple Health',
    icon: '🍎',
    description: 'Sync your health data seamlessly'
  },
  {
    name: 'Google Fit',
    icon: '🏃',
    description: 'Connect your fitness activities'
  },
  {
    name: 'Fitbit',
    icon: '⌚',
    description: 'Import your activity data'
  },
  {
    name: 'MyFitnessPal',
    icon: '📱',
    description: 'Transfer your existing food logs'
  }
]

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Powerful Features
              <span className="block text-primary-600 dark:text-primary-900 mt-2">For Your Fitness Journey</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how CaloSync combines cutting-edge technology with intuitive design to make your nutrition tracking effortless.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-12 sm:py-16 ${
              index !== features.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">{feature.description}</p>
              <ul className="space-y-3 sm:space-y-4">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center space-x-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain dark:brightness-90"
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Integrations Section */}
        <motion.div
          className="mt-12 sm:mt-16 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-gray-800/30 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl sm:text-4xl mb-4 block">{integration.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{integration.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 sm:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Join thousands of users who are achieving their health goals with CaloSync.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl">
            Download Now - It&apos;s Free
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturesPage 