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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="w-[70%] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Powerful Features
              <span className="block text-green-600 mt-2">For Your Fitness Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how CaloSync combines cutting-edge technology with intuitive design to make your nutrition tracking effortless.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Features */}
      <div className="w-[70%] mx-auto py-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`flex flex-col md:flex-row items-center gap-12 py-16 ${
              index !== features.length - 1 ? 'border-b border-gray-200' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
              <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
              <ul className="space-y-4">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Integrations Section */}
        <motion.div
          className="mt-16 py-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-4xl mb-4 block">{integration.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-green-50 rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are achieving their health goals with CaloSync.
          </p>
          <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            Download Now - It&apos;s Free
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturesPage 