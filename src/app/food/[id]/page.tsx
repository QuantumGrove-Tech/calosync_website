'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams, useSearchParams } from 'next/navigation'

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

const NutritionLabel = ({ food }: { food: FoodItem }) => {
  const getNutrientValue = (key: string) => {
    return food.nutrients[key]?.quantity || 0;
  };

  const servingSize = food.servingSizes[0]?.quantity || 100;
  const calories = getNutrientValue('ENERC_KCAL');
  const totalFat = getNutrientValue('FAT');
  const saturatedFat = getNutrientValue('FASAT');
  const transFat = getNutrientValue('FATRN');
  const cholesterol = getNutrientValue('CHOLE');
  const sodium = getNutrientValue('NA');
  const totalCarbs = getNutrientValue('CHOCDF');
  const dietaryFiber = getNutrientValue('FIBTG');
  const sugars = getNutrientValue('SUGAR');
  const protein = getNutrientValue('PROCNT');
  const vitaminD = getNutrientValue('VITD');
  const calcium = getNutrientValue('CA');
  const iron = getNutrientValue('FE');
  const potassium = getNutrientValue('K');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-black dark:border-gray-600 max-w-[300px]">
      <div className="text-center border-b-2 border-black dark:border-gray-600 pb-2 mb-2">
        <h3 className="font-bold text-lg">Nutrition Facts</h3>
        <p className="text-sm">{servingSize}g per serving</p>
      </div>

      <div className="text-sm">
        <div className="flex justify-between border-b border-black dark:border-gray-600 py-1">
          <span className="font-bold">Amount per serving</span>
          <span className="font-bold">% Daily Value*</span>
        </div>

        <div className="flex justify-between border-b border-black dark:border-gray-600 py-1">
          <span className="font-bold">Calories</span>
          <span className="font-bold">{calories.toFixed(0)}</span>
        </div>

        <div className="flex justify-between border-b border-black dark:border-gray-600 py-1">
          <span className="font-bold">Total Fat</span>
          <span className="font-bold">{totalFat.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between pl-4 border-b border-black dark:border-gray-600 py-1">
          <span>Saturated Fat</span>
          <span>{saturatedFat.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between pl-4 border-b border-black dark:border-gray-600 py-1">
          <span>Trans Fat</span>
          <span>{transFat.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between border-b border-black dark:border-gray-600 py-1">
          <span className="font-bold">Cholesterol</span>
          <span className="font-bold">{cholesterol.toFixed(1)}mg</span>
        </div>

        <div className="flex justify-between border-b border-black dark:border-gray-600 py-1">
          <span className="font-bold">Sodium</span>
          <span className="font-bold">{sodium.toFixed(1)}mg</span>
        </div>

        <div className="flex justify-between border-b border-black dark:border-gray-600 py-1">
          <span className="font-bold">Total Carbohydrate</span>
          <span className="font-bold">{totalCarbs.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between pl-4 border-b border-black dark:border-gray-600 py-1">
          <span>Dietary Fiber</span>
          <span>{dietaryFiber.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between pl-4 border-b border-black dark:border-gray-600 py-1">
          <span>Total Sugars</span>
          <span>{sugars.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between border-b-2 border-black dark:border-gray-600 py-1">
          <span className="font-bold">Protein</span>
          <span className="font-bold">{protein.toFixed(1)}g</span>
        </div>

        <div className="flex justify-between py-1">
          <span>Vitamin D</span>
          <span>{vitaminD.toFixed(1)}µg</span>
        </div>

        <div className="flex justify-between py-1">
          <span>Calcium</span>
          <span>{calcium.toFixed(1)}mg</span>
        </div>

        <div className="flex justify-between py-1">
          <span>Iron</span>
          <span>{iron.toFixed(1)}mg</span>
        </div>

        <div className="flex justify-between border-t border-black dark:border-gray-600 py-1">
          <span>Potassium</span>
          <span>{potassium.toFixed(1)}mg</span>
        </div>
      </div>

      <div className="text-xs mt-2">
        <p>* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
      </div>
    </div>
  );
};

export default function FoodDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [food, setFood] = useState<FoodItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      // Get the food data from URL search params
      const foodData = searchParams.get('data')
      if (foodData) {
        const parsedFood = JSON.parse(decodeURIComponent(foodData))
        setFood(parsedFood)
      } else {
        throw new Error('No food data provided')
      }
    } catch (err) {
      setError('Failed to load food information')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 dark:border-primary-400"></div>
      </div>
    );
  }

  if (error || !food) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
        <p className="text-red-500 dark:text-red-400 text-xl mb-4">{error || 'Food not found'}</p>
        <Link href="/food-search" className="text-primary-600 dark:text-primary-800 hover:text-primary-700 dark:hover:text-primary-300">
          ← Back to Search
        </Link>
      </div>
    );
  }

  const getNutrientValue = (key: string) => {
    return food.nutrients[key]?.quantity || 0;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/food-search" className="text-primary-600 dark:text-primary-800 hover:text-primary-700 dark:hover:text-primary-300 mb-8 inline-block">
          ← Back to Search
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-800/30 border border-gray-100 dark:border-gray-700 p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{food.label}</h1>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              {food.brand && (
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {food.brand}
                </span>
              )}
              {food.category && (
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {food.category}
                </span>
              )}
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {food.servingSizes[0]?.quantity}g per serving
              </span>
            </div>
          </div>

          {/* Image and Nutrition Label Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Image Section */}
            <div className="relative h-[400px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src="/images/food-placeholder.png"
                alt={food.label}
                fill
                className="object-cover dark:brightness-90"
              />
            </div>

            {/* Nutrition Label */}
            <div className="flex items-center justify-center">
              <NutritionLabel food={food} />
            </div>
          </div>

          {/* App CTA Section */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-xl p-8 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Track Your Nutrition with CaloSync</h3>
              <p className="text-lg text-white/90 mb-4">
                Get personalized meal planning, detailed nutrition tracking, and expert recommendations to achieve your health goals.
              </p>
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2">In the app, you'll get:</h4>
                <ul className="text-sm text-white/90 space-y-1">
                  <li>• Detailed breakdown of vitamins and minerals</li>
                  <li>• Complete micronutrient tracking</li>
                  <li>• Daily nutrient goals and recommendations</li>
                  <li>• Personalized nutrition insights</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.caloriecounter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={240}
                    height={72}
                    className="hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NutrientRow = ({ 
  label, 
  value, 
  unit
}: { 
  label: string; 
  value: number; 
  unit: string;
}) => (
  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-600 last:border-0">
    <span className="text-gray-600 dark:text-gray-300">{label}</span>
    <span className="font-medium text-gray-900 dark:text-white">
      {value ? `${Number(value).toFixed(2)}${unit}` : 'N/A'}
    </span>
  </div>
); 