'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Define types
type BlogPost = {
  heading: string;
  image_url: string;
  title: string;
  content: string;
}

const categories = [
  'All Posts',
  'Healthy Eating',
  'Food Groups',
  'Meal Timing',
  'Digestive System',
  'Wellness'
]

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.quantumgrove.tech:8002/getBlogs')
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        const data = await response.json()
        setPosts(data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts. Please try again later.')
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All Posts' 
    ? posts 
    : posts.filter(post => {
        if (selectedCategory === 'Healthy Eating' && post.heading.includes('Healthy Eating')) return true;
        if (selectedCategory === 'Food Groups' && post.heading.includes('Food Groups')) return true;
        if (selectedCategory === 'Meal Timing' && post.heading.includes('Meal Timing')) return true;
        if (selectedCategory === 'Digestive System' && post.heading.includes('Digestive System')) return true;
        if (selectedCategory === 'Wellness' && post.heading.includes('Wellness')) return true;
        return false;
      })

  // Featured posts (first 2)
  const featuredPosts = filteredPosts.slice(0, 2)
  
  // Recent posts (rest of the posts)
  const recentPosts = filteredPosts.slice(2)

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
              CaloSync Blog
              <span className="block text-primary-600 dark:text-primary-400 mt-2">Nutrition & Wellness Insights</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert tips, success stories, and the latest in nutrition science to help you achieve your fitness goals.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === selectedCategory
                    ? 'bg-primary-600 dark:bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 lg:py-16">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {featuredPosts.map((post, index) => (
                    <motion.article
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800/30 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/50 transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      <div className="relative aspect-video sm:aspect-[16/10]">
                        <Image
                          src={post.image_url}
                          alt={post.title}
                          fill
                          className="object-cover dark:brightness-90"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-primary-600 dark:text-white text-sm font-medium">
                            {getCategoryFromHeading(post.heading)}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                          <Link href={`/blogs/${index}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {getFirstParagraph(post.content).slice(0, 150)}...
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">{getCategoryFromHeading(post.heading)}</p>
                              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Nutrition</p>
                            </div>
                          </div>
                          <Link 
                            href={`/blogs/${index}`}
                            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Read more
                          </Link>
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
                className="mt-12 sm:mt-16 lg:mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                  {selectedCategory === 'All Posts' ? 'Recent Articles' : selectedCategory}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {recentPosts.map((post, index) => (
                    <motion.article
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800/30 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/50 transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={post.image_url}
                          alt={post.title}
                          fill
                          className="object-cover dark:brightness-90"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-primary-600 dark:text-primary-400 text-sm font-medium">
                            {getCategoryFromHeading(post.heading)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                          <Link href={`/blogs/${featuredPosts.length + index}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-2">
                          {getFirstParagraph(post.content).slice(0, 100)}...
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{getCategoryFromHeading(post.heading)}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Nutrition</p>
                          </div>
                          <Link 
                            href={`/blogs/${featuredPosts.length + index}`}
                            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Read more
                          </Link>
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
                className="text-center py-12 sm:py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                  No posts found in this category yet. Check back soon!
                </h3>
              </motion.div>
            )}
          </>
        )}

        {/* Newsletter */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Stay Updated with CaloSync
          </h3>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
            Get the latest nutrition tips and wellness insights delivered to your inbox weekly.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

// Helper function to extract the first paragraph from HTML content
function getFirstParagraph(htmlContent: string): string {
  const match = htmlContent.match(/<p>(.*?)<\/p>/);
  if (match && match[1]) {
    // Remove HTML tags
    return match[1].replace(/<\/?[^>]+(>|$)/g, "");
  }
  return htmlContent.slice(0, 150);
}

// Helper function to extract a category from the heading
function getCategoryFromHeading(heading: string): string {
  if (heading.includes('Healthy Eating')) return 'Healthy Eating';
  if (heading.includes('Food Groups')) return 'Food Groups';
  if (heading.includes('Meal Timing')) return 'Meal Timing';
  if (heading.includes('Digestive System')) return 'Digestive System';
  if (heading.includes('Wellness') || heading.includes('Roadmap')) return 'Wellness';
  return 'Nutrition';
}

export default BlogPage