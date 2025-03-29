'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type MealPlan = {
  id: number;
  diet_plan: string;
  diet_type: string;
  title: string;
  intro: string;
  cover_url: string;
  tags: string[];
  short_description: string;
}

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
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const response = await fetch('https://api.quantumgrove.tech:8002/getMeals');
        if (!response.ok) {
          throw new Error('Failed to fetch meal plans');
        }
        const data = await response.json();
        setMealPlans(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching meal plans:', err);
        setError('Failed to load meal plans. Please try again later.');
        setLoading(false);
      }
    };

    fetchMealPlans();
  }, []);

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
              AI-Powered Meal Plans
              <span className="block text-primary-600 dark:text-primary-400 mt-2">Personalized for Your Goals</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the future of nutrition with meal plans that adapt to your preferences, lifestyle, and goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
        {/* Meal Plans from API */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading meal plans...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-500 dark:text-red-400">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {mealPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-800/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={plan.cover_url}
                    alt={plan.diet_plan}
                    fill
                    className="object-cover dark:brightness-90"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-primary-600 dark:text-primary-400 text-sm font-medium">
                      {plan.diet_type}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                    {plan.diet_plan}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {plan.short_description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {plan.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                    {plan.tags.length > 3 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                        +{plan.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link 
                    href={`/meal-plans/${plan.id}`}
                    className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    View Full Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Dietary Preferences */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Supporting All Dietary Preferences
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {dietaryPreferences.map((pref) => (
              <span
                key={pref}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-300 text-primary-600 dark:text-gray-100 rounded-full text-sm font-medium"
              >
                {pref}
              </span>
            ))}
          </div>
        </motion.div>

        {/* AI Features */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {mealPlanFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md dark:shadow-gray-800/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{feature.icon}</span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md dark:shadow-gray-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover dark:brightness-90"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 text-center mb-3 sm:mb-4">{testimonial.plan}</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center italic">&quot;{testimonial.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 bg-primary-50 dark:bg-primary-900/100 rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Start Your Personalized Nutrition Journey
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
            Get your AI-powered meal plan today and transform your relationship with food.
          </p>
          <button 
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.caloriecounter', '_blank')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            Download App
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default MealPlansPage 