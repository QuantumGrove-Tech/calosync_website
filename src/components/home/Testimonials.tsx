'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'David Anderson',
    image: '/images/app-mockup.png',
    achievement: 'Lost 25 kg in 6 months',
    quote: 'CaloSync transformed my life! The personalized meal plans and calorie tracking helped me achieve my weight loss goals. The AI suggestions made healthy eating so much easier.',
    transformationImage: '/images/before_after_1.png',
    rating: 5,
  },
  {
    name: 'Sophie Martinez',
    image: '/images/app-mockup.png',
    achievement: 'Lost 15 kg in 4 months',
    quote: 'I never thought I could achieve such amazing results! CaloSync\'s smart tracking and meal suggestions helped me make sustainable lifestyle changes. The progress tracking kept me motivated.',
    transformationImage: '/images/before_after_2.png',
    rating: 5,
  },
  {
    name: 'James Wilson',
    image: '/images/app-mockup.png',
    achievement: 'Transformed body composition',
    quote: 'CaloSync helped me get in shape and build muscle while losing fat. The macro tracking and meal planning features are incredible. Best fitness app I\'ve ever used!',
    transformationImage: '/images/before_after_3.png',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <AnimatePresence>
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              Success Stories
              <span className="block text-primary-600 dark:text-primary-900 mt-2">Real Results from Real Users</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their lives with CaloSync
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800/30 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/50 transition-shadow duration-200"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 sm:h-56 bg-primary-50 dark:bg-primary-900/20">
                  <Image
                    src={testimonial.transformationImage}
                    alt={`${testimonial.name}'s transformation`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-900 font-medium text-xs sm:text-sm">
                        {testimonial.achievement}
                      </p>
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-warning inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
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
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Join our community of successful users today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12">
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-900">
                  200K+
                </span>
                <span className="ml-2 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  Active Users
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-900">
                  1M+
                </span>
                <span className="ml-2 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  Downloads
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-900">
                  4.6+
                </span>
                <span className="ml-2 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  Rating
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  )
}

export default Testimonials
