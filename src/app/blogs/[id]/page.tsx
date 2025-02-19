'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams } from 'next/navigation'

// Sample blog post data
const blogPosts = {
  1: {
    title: '10 Science-Backed Ways to Boost Your Metabolism Naturally',
    category: 'Weight Loss',
    author: {
      name: 'Dr. Sarah Wilson',
      role: 'Nutrition Expert',
      avatar: '/images/app-mockup.png',
      bio: 'Dr. Sarah Wilson is a certified nutritionist with over 10 years of experience in metabolic health.'
    },
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: '/images/app-mockup.png',
    content: [
      {
        type: 'paragraph',
        content: 'Understanding your metabolism is the first step to optimizing it. Your metabolic rate determines how quickly your body converts food into energy, and while some factors like genetics play a role, there are several evidence-based strategies you can use to give it a natural boost.'
      },
      {
        type: 'heading',
        content: '1. Build and Maintain Muscle Mass'
      },
      {
        type: 'paragraph',
        content: 'Muscle tissue is metabolically active, meaning it burns more calories at rest than fat tissue. Regular strength training can help you build and maintain muscle mass, leading to a higher resting metabolic rate.'
      },
      {
        type: 'tip',
        content: 'Pro Tip: Aim for at least 2-3 strength training sessions per week, focusing on compound exercises that work multiple muscle groups.'
      },
      {
        type: 'heading',
        content: '2. Stay Hydrated'
      },
      {
        type: 'paragraph',
        content: 'Water is essential for all metabolic processes. Studies show that drinking water can temporarily boost metabolism by 24-30% for an hour after consumption.'
      },
      {
        type: 'heading',
        content: '3. Eat Protein-Rich Foods'
      },
      {
        type: 'paragraph',
        content: 'Protein has a higher thermic effect compared to carbs and fats, meaning your body burns more calories digesting it. Including protein in every meal can help boost your metabolism.'
      }
    ],
    tags: ['Metabolism', 'Weight Loss', 'Nutrition', 'Health Tips', 'Fitness'],
    relatedPosts: [2, 3, 4]
  }
  // Add more blog posts as needed
}

const BlogPost = () => {
  const params = useParams()
  const postId = Number(params.id)
  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Blog post not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-green-400 font-medium mb-4">{post.category}</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-[70%] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <article className="prose prose-lg max-w-none">
              {post.content.map((section, index) => {
                switch (section.type) {
                  case 'heading':
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {section.content}
                      </h2>
                    )
                  case 'paragraph':
                    return (
                      <p key={index} className="text-gray-600 mb-6">
                        {section.content}
                      </p>
                    )
                  case 'tip':
                    return (
                      <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                        <p className="text-gray-700">
                          {section.content}
                        </p>
                      </div>
                    )
                  default:
                    return null
                }
              })}
            </article>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Author Bio */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{post.author.bio}</p>
            </div>

            {/* Newsletter */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-4">
                Get the latest nutrition tips and wellness insights delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost 