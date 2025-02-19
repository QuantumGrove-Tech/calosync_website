'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const categories = [
  'All Posts',
  'Nutrition Tips',
  'Weight Loss',
  'Muscle Gain',
  'Recipes',
  'Success Stories',
  'App Updates'
]

// Combined posts data with more posts for each category
const allPosts = [
  {
    id: 1,
    title: '10 Science-Backed Ways to Boost Your Metabolism Naturally',
    excerpt: 'Discover proven methods to enhance your metabolic rate and achieve your weight loss goals faster...',
    category: 'Weight Loss',
    readTime: '5 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Dr. Sarah Wilson',
      role: 'Nutrition Expert',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 15, 2024',
    featured: true
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Macro Tracking for Muscle Growth',
    excerpt: 'Learn how to perfectly balance your proteins, carbs, and fats to maximize muscle gains...',
    category: 'Muscle Gain',
    readTime: '8 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Mike Thompson',
      role: 'Fitness Coach',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 12, 2024',
    featured: true
  },
  {
    id: 3,
    title: 'Quick & Healthy Breakfast Ideas Under 300 Calories',
    excerpt: 'Start your day right with these nutritious and delicious breakfast options that keep you energized...',
    category: 'Recipes',
    readTime: '4 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Chef Emma Davis',
      role: 'Culinary Expert',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 10, 2024',
    featured: false
  },
  {
    id: 4,
    title: 'How I Lost 30 Pounds with CaloSync',
    excerpt: 'Read Jane\'s inspiring journey of transformation and the strategies that worked for her...',
    category: 'Success Stories',
    readTime: '6 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Jane Cooper',
      role: 'CaloSync User',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 8, 2024',
    featured: true
  },
  {
    id: 5,
    title: 'Understanding Macronutrients: A Beginner\'s Guide',
    excerpt: 'Learn the basics of proteins, carbs, and fats, and how they affect your fitness goals...',
    category: 'Nutrition Tips',
    readTime: '7 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Dr. Sarah Wilson',
      role: 'Nutrition Expert',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 5, 2024',
    featured: false
  },
  {
    id: 6,
    title: 'New AI-Powered Meal Recommendations',
    excerpt: 'Discover how our latest update uses AI to provide personalized meal suggestions...',
    category: 'App Updates',
    readTime: '3 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Alex Chen',
      role: 'Product Manager',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 3, 2024',
    featured: false
  },
  {
    id: 7,
    title: 'High-Protein Vegetarian Recipes',
    excerpt: 'Delicious meat-free recipes that help you meet your protein goals...',
    category: 'Recipes',
    readTime: '5 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Chef Emma Davis',
      role: 'Culinary Expert',
      avatar: '/images/app-mockup.png'
    },
    date: 'Mar 1, 2024',
    featured: false
  },
  {
    id: 8,
    title: 'The Science of Fat Loss',
    excerpt: 'Understanding the biological mechanisms behind weight loss and how to optimize them...',
    category: 'Weight Loss',
    readTime: '9 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Dr. James Miller',
      role: 'Exercise Physiologist',
      avatar: '/images/app-mockup.png'
    },
    date: 'Feb 28, 2024',
    featured: false
  },
  {
    id: 9,
    title: 'Building Muscle on a Budget',
    excerpt: 'Cost-effective strategies for gaining muscle while keeping your grocery bill low...',
    category: 'Muscle Gain',
    readTime: '6 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Mike Thompson',
      role: 'Fitness Coach',
      avatar: '/images/app-mockup.png'
    },
    date: 'Feb 25, 2024',
    featured: false
  },
  {
    id: 10,
    title: 'From Couch to 5K with CaloSync',
    excerpt: 'How proper nutrition helped Mark achieve his running goals...',
    category: 'Success Stories',
    readTime: '7 min read',
    image: '/images/app-mockup.png',
    author: {
      name: 'Mark Johnson',
      role: 'CaloSync User',
      avatar: '/images/app-mockup.png'
    },
    date: 'Feb 22, 2024',
    featured: false
  }
]

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  // Filter posts based on selected category
  const filteredPosts = allPosts.filter(post => 
    selectedCategory === 'All Posts' ? true : post.category === selectedCategory
  )

  // Separate featured and non-featured posts
  const featuredPosts = filteredPosts.filter(post => post.featured)
  const recentPosts = filteredPosts.filter(post => !post.featured)

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
              CaloSync Blog
              <span className="block text-green-600 mt-2">Nutrition & Wellness Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips, success stories, and the latest in nutrition science to help you achieve your fitness goals.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === selectedCategory
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-[70%] mx-auto py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-green-600 text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link href={`/blogs/${post.id}`} className="hover:text-green-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {selectedCategory === 'All Posts' ? 'Recent Articles' : selectedCategory}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-green-600 text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      <Link href={`/blogs/${post.id}`} className="hover:text-green-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl text-gray-600">
              No posts found in this category yet. Check back soon!
            </h3>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          className="mt-16 bg-green-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with CaloSync
          </h3>
          <p className="text-gray-600 mb-6">
            Get the latest nutrition tips and wellness insights delivered to your inbox weekly.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPage