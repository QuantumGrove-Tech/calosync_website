'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Nutrient {
  label: string;
  quantity: number | null;
  unit: string;
}

interface FoodItem {
  foodId: number;
  label: string;
  nutrients: {
    [key: string]: Nutrient;
  };
  brand: string | null;
  category: string | null;
  servingSizes: {
    label: string;
    quantity: number;
  }[];
}

interface ApiResponse {
  text: string;
  count: number;
  hints: {
    food: FoodItem;
  }[];
}

const FoodCard = ({ food }: { food: FoodItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    // Encode the food data and pass it as a URL parameter
    const encodedData = encodeURIComponent(JSON.stringify(food));
    router.push(`/food/${food.foodId}?data=${encodedData}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-800/30 border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md dark:hover:shadow-gray-800/50 transition-shadow duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-48">
        <Image
          src="/images/food-placeholder.png"
          alt={food.label}
          fill
          className="object-cover dark:brightness-90"
        />
        <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          {food.category || 'Food'}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{food.label}</h3>
        {food.brand && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{food.brand}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {Object.entries(food.nutrients)
            .filter(([key]) => ['ENERC_KCAL', 'PROCNT', 'CHOCDF', 'FAT'].includes(key))
            .map(([key, nutrient]) => (
              <span
                key={key}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
              >
                {nutrient.label}: {nutrient.quantity?.toFixed(1)} {nutrient.unit}
              </span>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

const FoodModal = ({ food, onClose }: { food: FoodItem; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-lg w-full shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{food.label}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <Image
              src={"/images/food-placeholder.png"}
              alt={food.label}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">Energy</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {food.nutrients['ENERC_KCAL']?.quantity || 0} kcal
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">Protein</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {food.nutrients['PROCNT']?.quantity || 0}g
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">Carbs</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {food.nutrients['CHOCDF']?.quantity || 0}g
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">Fat</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {food.nutrients['FAT']?.quantity || 0}g
              </p>
            </div>
          </div>

          {food.brand && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Brand</h3>
              <p className="text-gray-900 dark:text-white">{food.brand}</p>
            </div>
          )}

          {food.category && (
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h3>
              <p className="text-gray-900 dark:text-white">{food.category}</p>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Serving Size: {food.servingSizes[0]?.quantity}g
            </p>
          </div>

          <motion.button
            className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Food Diary
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FoodSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null)
  const [searchResults, setSearchResults] = useState<FoodItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  const searchFood = async (query: string, page: number = 1) => {
    if (query.trim().length === 0) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.quantumgrove.tech:8002/searchFood?ingr=${encodeURIComponent(query)}&page=${page}&limit=20`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch food data')
      }

      const data: ApiResponse = await response.json()

      if (data.hints) {
        const newResults = data.hints.map(hint => hint.food)
        setSearchResults(prev => page === 1 ? newResults : [...prev, ...newResults])
        setTotalCount(data.count)
        setHasMore(newResults.length === 20)
        setCurrentPage(page)
      } else {
        setSearchResults([])
        setHasMore(false)
      }
    } catch (error) {
      setError('Failed to fetch food data. Please try again.')
      setSearchResults([])
      setHasMore(false)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPage(1)
    searchFood(searchTerm, 1)
  }

  const loadMore = () => {
    if (!isLoading && hasMore) {
      searchFood(searchTerm, currentPage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Food Database
              <span className="block text-primary-600 dark:text-primary-900 mt-2">Search & Track Nutrition</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access detailed nutritional information for thousands of foods to make informed dietary choices.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 md:py-16">
        {/* Search Bar */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for foods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 pr-16 sm:pr-20"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-primary-600 dark:bg-primary-500 text-white rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-white"></div>
              ) : (
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        {error && (
          <div className="text-red-500 dark:text-red-400 text-center mb-4">
            {error}
          </div>
        )}

        {/* Search Results Grid */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {isLoading && currentPage === 1 ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-8 sm:py-12"
              >
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-primary-500 dark:border-primary-400"></div>
              </motion.div>
            ) : searchResults.length > 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                >
                  {searchResults.map((food) => (
                    <FoodCard
                      key={food.foodId}
                      food={food}
                    />
                  ))}
                </motion.div>

                {hasMore && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={loadMore}
                      disabled={isLoading}
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                  </div>
                )}
              </>
            ) : searchTerm && (
              <motion.p
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-500 dark:text-gray-400 py-8 sm:py-12"
              >
                No foods found
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Food Detail Modal */}
        <AnimatePresence>
          {selectedFood && (
            <FoodModal
              food={selectedFood}
              onClose={() => setSelectedFood(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FoodSearchPage 