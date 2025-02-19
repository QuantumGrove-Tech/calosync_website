'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const dietTypes = [
  {
    name: 'Weight Loss',
    description: 'Scientifically designed meal plans to help you lose weight while maintaining energy and satisfaction.',
    image: '/images/app-mockup.png',
    features: [
      'Calorie-controlled portions',
      'High protein for satiety',
      'Complex carbs for energy',
      'Healthy fats for hormone balance',
      'Fiber-rich foods for fullness'
    ]
  },
  {
    name: 'Muscle Gain',
    description: 'Protein-rich meal plans optimized for muscle growth and recovery during training.',
    image: '/images/app-mockup.png',
    features: [
      'High protein distribution',
      'Strategic carb timing',
      'Pre/post workout nutrition',
      'Mass gaining options',
      'Recovery-focused meals'
    ]
  },
  {
    name: 'Maintenance',
    description: 'Balanced meal plans to maintain your ideal weight while enjoying diverse, nutritious foods.',
    image: '/images/app-mockup.png',
    features: [
      'Balanced macronutrients',
      'Flexible meal timing',
      'Variety of food choices',
      'Social eating options',
      'Long-term sustainability'
    ]
  }
]

const dietaryPreferences = [
  'Vegetarian', 'Vegan', 'Keto', 'Paleo',
  'Mediterranean', 'Low-Carb', 'Gluten-Free',
  'Dairy-Free', 'Pescatarian', 'High-Protein'
]

const mealPlanFeatures = [
  {
    title: 'AI-Powered Personalization',
    description: 'Our advanced AI analyzes your preferences, goals, and dietary restrictions to create truly personalized meal plans.',
    icon: '🤖'
  },
  {
    title: 'Dynamic Adaptation',
    description: 'Meal plans automatically adjust based on your progress, feedback, and changing preferences.',
    icon: '📊'
  },
  {
    title: 'Grocery Lists & Prep',
    description: 'Get automated shopping lists and meal prep instructions to make planning effortless.',
    icon: '🛒'
  },
  {
    title: 'Restaurant Options',
    description: 'Dining out? Get AI-powered menu recommendations that fit your meal plan.',
    icon: '🍽️'
  }
]

const testimonials = [
  {
    name: 'Sarah M.',
    plan: 'Weight Loss Plan',
    quote: 'Lost 20 lbs in 3 months while never feeling deprived. The AI suggestions are spot-on!',
    image: '/images/app-mockup.png'
  },
  {
    name: 'Mike R.',
    plan: 'Muscle Gain Plan',
    quote: 'Gained 10 lbs of muscle with perfectly timed nutrition. The meal variety keeps me motivated.',
    image: '/images/app-mockup.png'
  },
  {
    name: 'Emma L.',
    plan: 'Maintenance Plan',
    quote: 'Finally found a sustainable way to maintain my weight without strict dieting.',
    image: '/images/app-mockup.png'
  }
]

const MealPlansPage = () => {
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
              AI-Powered Meal Plans
              <span className="block text-green-600 mt-2">Personalized for Your Goals</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of nutrition with meal plans that adapt to your preferences, lifestyle, and goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Diet Types */}
      <div className="w-[70%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dietTypes.map((diet, index) => (
            <motion.div
              key={diet.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-48">
                <Image
                  src={diet.image}
                  alt={diet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{diet.name}</h3>
                <p className="text-gray-600 mb-6">{diet.description}</p>
                <ul className="space-y-3">
                  {diet.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dietary Preferences */}
        <motion.div
          className="mt-16 py-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Supporting All Dietary Preferences
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {dietaryPreferences.map((pref) => (
              <span
                key={pref}
                className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium"
              >
                {pref}
              </span>
            ))}
          </div>
        </motion.div>

        {/* AI Features */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {mealPlanFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-16 py-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-green-600 text-sm text-center mb-4">{testimonial.plan}</p>
                <p className="text-gray-600 text-center italic">&quot;{testimonial.quote}&quot;</p>
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
            Start Your Personalized Nutrition Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get your AI-powered meal plan today and transform your relationship with food.
          </p>
          <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            Create Your Meal Plan
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default MealPlansPage 