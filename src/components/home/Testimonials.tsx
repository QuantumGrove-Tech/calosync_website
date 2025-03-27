'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: '/images/app-mockup.png',
    achievement: 'Lost 25 lbs in 4 months',
    quote: 'CaloSync made tracking my meals so easy. The AI suggestions helped me make better food choices, and the results speak for themselves!',
    beforeImage: '/images/app-mockup.png',
    afterImage: '/images/app-mockup.png',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    image: '/images/app-mockup.png',
    achievement: 'Gained 15 lbs muscle mass',
    quote: 'The macro tracking and meal suggestions were perfect for my muscle gain journey. Best fitness app I\'ve ever used!',
    beforeImage: '/images/app-mockup.png',
    afterImage: '/images/app-mockup.png',
    rating: 5,
  },
  {
    name: 'Emma Davis',
    image: '/images/app-mockup.png',
    achievement: 'Maintained weight for 1 year',
    quote: 'Finally found an app that helps me maintain a healthy lifestyle without feeling restricted. The reminders and tips are so helpful!',
    beforeImage: '/images/app-mockup.png',
    afterImage: '/images/app-mockup.png',
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
                <div className="relative h-32 sm:h-40 bg-primary-50 dark:bg-primary-900/20">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative">
                      <Image
                        src={testimonial.beforeImage}
                        alt={`${testimonial.name} before`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <Image
                        src={testimonial.afterImage}
                        alt={`${testimonial.name} after`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                        After
                      </div>
                    </div>
                  </div>
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
                  10K+
                </span>
                <span className="ml-2 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  Active Users
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-900">
                  4.8
                </span>
                <span className="ml-2 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300">
                  Average Rating
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
