'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Food Search', href: '/food-search' },
    { name: 'Meal Plans', href: '/meal-plans' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Pricing', href: '/pricing' },
  ]

  return (
    <nav className="bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/calosync_icon_light.svg"
                alt="CaloSync"
                width={120}
                height={40}
                priority
                className="w-auto h-8 sm:h-10 block dark:hidden"
              />
              <Image
                src="/images/calosync_icon_dark.svg"
                alt="CaloSync"
                width={120}
                height={40}
                priority
                className="w-auto h-8 sm:h-10 hidden dark:block"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-900 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-primary-600 dark:text-white bg-primary-50 dark:bg-primary-200 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            {/* <Link
              href="/login"
              className="whitespace-nowrap bg-primary-600 dark:bg-primary-500 text-white px-3 lg:px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-500 dark:hover:bg-primary-400 transition-colors ml-2"
            >
              Sign In
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900/50 px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href ? 'text-primary-600 dark:text-white bg-primary-50 dark:bg-primary-900 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-500 dark:hover:bg-primary-400 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 