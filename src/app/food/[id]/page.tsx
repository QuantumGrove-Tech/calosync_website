'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'

interface DetailedFoodItem {
  name: string;
  bar_code: string;
  info_url: string | null;
  brand: string | null;
  categories: string | null;
  'energy-kcal_100g': number | null;
  energy_100g: number | null;
  fat_100g: number | null;
  proteins_100g: number | null;
  carbohydrates_100g: number | null;
  fiber_100g: number | null;
  sodium_100g: number | null;
  sugars_100g: number | null;
  saturated_fat_100g: number | null;
  cholesterol_100g: number | null;
  calcium_100g: number | null;
  iron_100g: number | null;
  potassium_100g: number | null;
  vitamin_a_100g: number | null;
  vitamin_c_100g: number | null;
  vitamin_d_100g: number | null;
}

export default function FoodDetailPage() {
  const params = useParams()
  const [food, setFood] = useState<DetailedFoodItem | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch(`https://api.quantumgrove.tech:8002/SearchFood_Id/${params.id}`, {
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
          setFood(data.data.metadata[0]);
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

    if (params.id) {
      fetchFoodDetails();
    }
  }, [params.id]);

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/food-search" className="text-primary-600 dark:text-primary-800 hover:text-primary-700 dark:hover:text-primary-300 mb-8 inline-block">
          ← Back to Search
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-800/30 border border-gray-100 dark:border-gray-700 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Basic Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{food.name}</h1>
              {food.brand && (
                <p className="text-gray-600 dark:text-gray-300 mb-2">Brand: {food.brand}</p>
              )}
              {food.categories && (
                <p className="text-gray-600 dark:text-gray-300 mb-4">Category: {food.categories}</p>
              )}
              
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/food-placeholder.png"
                  alt={food.name}
                  fill
                  className="object-cover dark:brightness-90"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Energy</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {Number(food['energy-kcal_100g'] || 0).toFixed(2)} kcal
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {Number(food.energy_100g || 0).toFixed(2)} kJ
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Protein</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{Number(food.proteins_100g || 0).toFixed(2)}g</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Carbs</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{Number(food.carbohydrates_100g || 0).toFixed(2)}g</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Fat</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{Number(food.fat_100g || 0).toFixed(2)}g</p>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Nutrition */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Nutrition Facts</h2>
              <div className="space-y-4">
                <NutrientRow 
                  label="Energy" 
                  value={food['energy-kcal_100g']} 
                  unit="kcal" 
                  secondaryValue={food.energy_100g}
                  secondaryUnit="kJ"
                />
                <NutrientRow label="Total Fat" value={food.fat_100g} unit="g" />
                <NutrientRow label="Saturated Fat" value={food.saturated_fat_100g} unit="g" />
                <NutrientRow label="Cholesterol" value={food.cholesterol_100g} unit="g" />
                <NutrientRow label="Sodium" value={food.sodium_100g} unit="g" />
                <NutrientRow label="Total Carbohydrates" value={food.carbohydrates_100g} unit="g" />
                <NutrientRow label="Dietary Fiber" value={food.fiber_100g} unit="g" />
                <NutrientRow label="Sugars" value={food.sugars_100g} unit="g" />
                <NutrientRow label="Protein" value={food.proteins_100g} unit="g" />
                <NutrientRow label="Calcium" value={food.calcium_100g} unit="g" />
                <NutrientRow label="Iron" value={food.iron_100g} unit="g" />
                <NutrientRow label="Potassium" value={food.potassium_100g} unit="g" />
                <NutrientRow label="Vitamin A" value={food.vitamin_a_100g} unit="g" />
                <NutrientRow label="Vitamin C" value={food.vitamin_c_100g} unit="g" />
                <NutrientRow label="Vitamin D" value={food.vitamin_d_100g} unit="g" />
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-500 dark:text-gray-400">Bar Code: {food.bar_code}</p>
                {food.info_url && (
                  <a 
                    href={food.info_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 dark:text-primary-800 hover:text-primary-700 dark:hover:text-primary-300 mt-2 block"
                  >
                    View on Open Food Facts →
                  </a>
                )}
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
  unit, 
  secondaryValue, 
  secondaryUnit 
}: { 
  label: string; 
  value: number | null; 
  unit: string;
  secondaryValue?: number | null;
  secondaryUnit?: string;
}) => (
  <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-600 last:border-0">
    <span className="text-gray-600 dark:text-gray-300">{label}</span>
    <div className="text-right">
      <span className="font-medium text-gray-900 dark:text-white">
        {value ? `${Number(value).toFixed(2)}${unit}` : 'N/A'}
      </span>
      {secondaryValue && secondaryUnit && (
        <span className="text-gray-500 dark:text-gray-400 text-sm block">
          {Number(secondaryValue).toFixed(2)}{secondaryUnit}
        </span>
      )}
    </div>
  </div>
); 