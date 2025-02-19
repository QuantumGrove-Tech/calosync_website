'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface FoodItem {
  bar_code: string
  name: string
  'energy-kcal_100g': number | null
  energy_100g: number | null
}

interface DetailedFoodItem extends FoodItem {
  brand: string | null;
  categories: string | null;
  proteins_100g: number | null;
  fat_100g: number | null;
  carbohydrates_100g: number | null;
  fiber_100g: number | null;
  sodium_100g: number | null;
  info_url: string | null;
}

interface ApiResponse {
  response_message: string
  response_status: string
  data: {
    UUID: string
    info: {
      age: string
      gender: string
    }
    metadata: FoodItem[]
  }
}

const FoodCard = ({ food }: { food: FoodItem }) => {
  const router = useRouter()

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-3 sm:p-4 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(`/food/${food.bar_code}`)}
    >
      <div className="aspect-square relative mb-3 sm:mb-4 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src="/images/food-placeholder.png"
          alt={food.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2 mb-1 sm:mb-2">
        {food.name}
      </h3>
      <p className="text-xs sm:text-sm text-gray-500">
        {Number(food['energy-kcal_100g'] || 0).toFixed(2)} kcal/100g
      </p>
    </motion.div>
  )
}

const FoodModal = ({ food, onClose }: { food: FoodItem; onClose: () => void }) => {
  const [detailedFood, setDetailedFood] = useState<DetailedFoodItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`https://api.quantumgrove.tech:8002/SearchFood_Id/${food.bar_code}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch food details');
        }

        const data = await response.json();
        if (data.response_status === "True" && data.data.metadata?.[0]) {
          setDetailedFood(data.data.metadata[0]);
        } else {
          throw new Error('No detailed data found');
        }
      } catch (err) {
        setError('Failed to load detailed information');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoodDetails();
  }, [food.bar_code]);

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
        className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{food.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-4">{error}</div>
        ) : detailedFood && (
          <div className="space-y-6">
            <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={"/images/food-placeholder.png"}
                alt={detailedFood.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Energy</p>
                <p className="text-xl font-bold text-gray-900">{detailedFood.energy_100g || 0} kcal</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Protein</p>
                <p className="text-xl font-bold text-gray-900">{detailedFood.proteins_100g || 0}g</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Carbs</p>
                <p className="text-xl font-bold text-gray-900">{detailedFood.carbohydrates_100g || 0}g</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">Fat</p>
                <p className="text-xl font-bold text-gray-900">{detailedFood.fat_100g || 0}g</p>
              </div>
            </div>

            {detailedFood.brand && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Brand</h3>
                <p className="text-gray-900">{detailedFood.brand}</p>
              </div>
            )}

            {detailedFood.categories && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Categories</h3>
                <p className="text-gray-900">{detailedFood.categories}</p>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">Bar Code: {detailedFood.bar_code}</p>
              {detailedFood.info_url && (
                <a 
                  href={detailedFood.info_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:text-green-700 mt-2 block"
                >
                  View on Open Food Facts →
                </a>
              )}
            </div>

            <motion.button
              className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Food Diary
            </motion.button>
          </div>
        )}
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

  const searchFood = async (query: string) => {
    if (query.trim().length === 0) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.quantumgrove.tech:8002/SeachFood_Name/${encodeURIComponent(query)}/20`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          food_name: query
        })
      })

      if (!response.ok) {
        throw new Error('Failed to fetch food data')
      }

      const data: ApiResponse = await response.json()
      
      if (data.response_status === "True") {
        setSearchResults(data.data.metadata)
      } else {
        setSearchResults([])
      }
    } catch (error) {
      setError('Failed to fetch food data. Please try again.')
      setSearchResults([])
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    searchFood(searchTerm)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Food Database
              <span className="block text-green-600 mt-2">Search & Track Nutrition</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 pr-16 sm:pr-20"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12"
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
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}

        {/* Search Results Grid */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-8 sm:py-12"
              >
                <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-green-500"></div>
              </motion.div>
            ) : searchResults.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              >
                {searchResults.map((food) => (
                  <FoodCard
                    key={food.bar_code}
                    food={food}
                  />
                ))}
              </motion.div>
            ) : searchTerm && (
              <motion.p
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-500 py-8 sm:py-12"
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