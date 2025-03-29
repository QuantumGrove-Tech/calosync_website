'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// Define type for blog post
type BlogPost = {
  heading: string;
  image_url: string;
  title: string;
  content: string;
}

const BlogPost = () => {
  const params = useParams()
  const postId = Number(params.id)
  
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.quantumgrove.tech:8002/getBlogs')
        if (!response.ok) {
          throw new Error('Failed to fetch blog post')
        }
        const data = await response.json()
        
        // Since the blogs don't have IDs in the API, we'll use the array index
        if (data.length > postId) {
          setPost(data[postId])
        } else {
          setError('Blog post not found')
        }
        
        setLoading(false)
      } catch (err) {
        console.error('Error fetching blog post:', err)
        setError('Failed to load blog post. Please try again later.')
        setLoading(false)
      }
    }

    fetchBlogPost()
  }, [postId])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error || 'Blog post not found'}</p>
          <Link
            href="/blogs"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Get category from heading
  const category = getCategoryFromHeading(post.heading)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={post.image_url}
          alt={post.title}
          fill
          className="object-cover opacity-50 dark:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-400 font-medium mb-4">{category}</p>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="text-gray-200">{post.heading}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                {category}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                Nutrition
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                Wellness
              </span>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* CTA */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Try the CaloSync App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get personalized meal plans, track your calories, and achieve your fitness goals with our AI-powered app.
              </p>
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.caloriecounter', '_blank')}
                className="w-full px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
              >
                Download Now
              </button>
            </div>

            {/* Related Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-800/30 p-6 mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Explore More
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/meal-plans" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Browse All Meal Plans
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Read More Articles
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get the latest nutrition tips and wellness insights delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
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

// Helper function to extract a category from the heading
function getCategoryFromHeading(heading: string): string {
  if (heading.includes('Healthy Eating')) return 'Healthy Eating';
  if (heading.includes('Food Groups')) return 'Food Groups';
  if (heading.includes('Meal Timing')) return 'Meal Timing';
  if (heading.includes('Digestive System')) return 'Digestive System';
  if (heading.includes('Wellness') || heading.includes('Roadmap')) return 'Wellness';
  return 'Nutrition';
}

export default BlogPost 