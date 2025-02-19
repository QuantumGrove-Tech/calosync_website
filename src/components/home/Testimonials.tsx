'use client'

import { motion } from 'framer-motion'
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
    <div className="relative h-[95vh] flex items-center bg-white">
      <div className="w-[70%] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Success Stories
            <span className="block text-green-600 mt-2">Real Results from Real Users</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their lives with CaloSync
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-48 bg-green-50">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative">
                    <Image
                      src={testimonial.beforeImage}
                      alt={`${testimonial.name} before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
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
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-green-600 font-medium">{testimonial.achievement}</p>
                  </div>
                </div>

                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl font-bold text-gray-900">
            Join our community of successful users today!
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-green-600">10K+</span>
              <span className="ml-2 text-gray-600">Active Users</span>
            </div>
            <div className="flex items-center">
              <span className="text-4xl font-bold text-green-600">4.8</span>
              <span className="ml-2 text-gray-600">Average Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials
