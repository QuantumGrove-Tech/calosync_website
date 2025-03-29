'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

type MealDay = {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string[];
}

type FoodsAllowed = {
  [key: string]: string[];
}

type FoodsRestricted = {
  [key: string]: string[];
}

type MacronutrientBreakdown = {
  [key: string]: string;
}

type Considerations = {
  duration?: string;
  risks?: string[];
  precautions?: string[];
}

type MealPlanDetail = {
  diet_plan: string;
  id: number;
  diet_type: string;
  title: string;
  intro: string;
  cover_url: string;
  tags: string[];
  short_description: string;
  meal_plan?: {
    days: MealDay[];
  };
  foods_allowed?: FoodsAllowed;
  foods_restricted?: FoodsRestricted;
  macronutrient_breakdown?: MacronutrientBreakdown;
  considerations?: Considerations;
}

export default function MealPlanDetailPage() {
  const params = useParams();
  const planId = params.name as string;
  
  const [mealPlan, setMealPlan] = useState<MealPlanDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<number>(0);
  const [expandedSections, setExpandedSections] = useState({
    intro: true,
    mealPlan: true,
    foods: false,
    macros: false,
    considerations: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    const fetchMealPlanDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.quantumgrove.tech:8002/getMealDetail/${planId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch meal plan details');
        }
        const data = await response.json();
        console.log('API Response:', data);
        setMealPlan(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching meal plan details:', err);
        setError('Failed to load meal plan details. Please try again later.');
        setLoading(false);
      }
    };

    fetchMealPlanDetail();
  }, [planId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading meal plan...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !mealPlan) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center py-12 text-red-500 dark:text-red-400">
            <p>{error || 'Meal plan not found'}</p>
            <Link 
              href="/meal-plans"
              className="mt-4 inline-block text-primary-600 dark:text-primary-400 hover:underline"
            >
              Back to All Meal Plans
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Format intro text into paragraphs
  const formatIntroText = (text: string) => {
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        {mealPlan.cover_url && (
          <Image
            src={mealPlan.cover_url}
            alt={mealPlan.diet_plan}
            fill
            className="object-cover opacity-70 dark:brightness-75"
            priority
            onError={() => console.error(`Failed to load image: ${mealPlan.cover_url}`)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-600 rounded-full text-sm font-medium mb-4">{mealPlan.diet_type}</span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{mealPlan.diet_plan}</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">{mealPlan.short_description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10">
        <Link 
          href="/meal-plans" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6"
        >
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Meal Plans
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-800/30 overflow-hidden"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            {/* App Promotion - Top */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/30 rounded-xl p-4 sm:p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-primary-500 dark:bg-primary-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Want this meal plan in your pocket?</h3>
                  <button 
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.caloriecounter', '_blank')}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Download CaloSync App
                  </button>
                </div>
              </div>
            </div>

            {/* Tag Pills */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {mealPlan.tags.map((tag, index) => (
                  <span key={index} className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <button 
                onClick={() => toggleSection('intro')}
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-900 dark:text-white mb-4 focus:outline-none"
              >
                <span>About This Diet</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedSections.intro ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {expandedSections.intro && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 mb-6">
                  <div className="prose prose-sm sm:prose max-w-none dark:prose-invert">
                    {formatIntroText(mealPlan.intro)}
                  </div>
                </div>
              )}
            </section>

            {/* Sample Meal Plan */}
            {mealPlan.meal_plan?.days && (
              <section className="mb-8">
                <button 
                  onClick={() => toggleSection('mealPlan')}
                  className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-900 dark:text-white mb-4 focus:outline-none"
                >
                  <span>7-Day Meal Plan</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${expandedSections.mealPlan ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedSections.mealPlan && (
                  <>
                    {/* Day selector tabs */}
                    <div className="flex overflow-x-auto mb-4 pb-1 hide-scrollbar">
                      {mealPlan.meal_plan.days.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveDay(index)}
                          className={`px-4 py-2 flex-shrink-0 rounded-t-lg font-medium text-sm ${
                            activeDay === index
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {day.day}
                        </button>
                      ))}
                    </div>

                    {/* Active day content */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-5 border-b dark:border-gray-600 pb-2">
                        {mealPlan.meal_plan.days[activeDay].day}
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Breakfast</h4>
                          <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                            {mealPlan.meal_plan.days[activeDay].breakfast}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Lunch</h4>
                          <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                            {mealPlan.meal_plan.days[activeDay].lunch}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Dinner</h4>
                          <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                            {mealPlan.meal_plan.days[activeDay].dinner}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-2">Snacks</h4>
                          <ul className="space-y-2">
                            {mealPlan.meal_plan.days[activeDay].snacks.map((snack, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                                {snack}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </section>
            )}

            {/* Foods Allowed & Restricted */}
            {(mealPlan.foods_allowed || mealPlan.foods_restricted) && (
              <section className="mb-8">
                <button 
                  onClick={() => toggleSection('foods')}
                  className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-900 dark:text-white mb-4 focus:outline-none"
                >
                  <span>Food Guidelines</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${expandedSections.foods ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedSections.foods && (
                  <div className="space-y-4">
                    {/* Foods Allowed */}
                    {mealPlan.foods_allowed && (
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-5">
                        <h3 className="text-md font-medium text-green-600 dark:text-green-400 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                          Foods Allowed
                        </h3>
                        <div className="space-y-5">
                          {Object.entries(mealPlan.foods_allowed).map(([category, foods]) => (
                            <div key={category}>
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                                {category.replace('_', ' ')}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {foods.map((food, i) => (
                                  <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-800/40 text-green-800 dark:text-green-300">
                                    {food}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Foods Restricted */}
                    {mealPlan.foods_restricted && (
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-5">
                        <h3 className="text-md font-medium text-red-600 dark:text-red-400 mb-4 border-b border-gray-200 dark:border-gray-600 pb-2">
                          Foods Restricted
                        </h3>
                        <div className="space-y-5">
                          {Object.entries(mealPlan.foods_restricted).map(([category, foods]) => (
                            <div key={category}>
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                                {category.replace('_', ' ')}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {foods.map((food, i) => (
                                  <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-800/40 text-red-800 dark:text-red-300">
                                    {food}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* Macronutrient Breakdown */}
            {mealPlan.macronutrient_breakdown && (
              <section className="mb-8">
                <button 
                  onClick={() => toggleSection('macros')}
                  className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-900 dark:text-white mb-4 focus:outline-none"
                >
                  <span>Macronutrient Breakdown</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${expandedSections.macros ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedSections.macros && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Object.entries(mealPlan.macronutrient_breakdown).map(([macro, value]) => (
                      <div key={macro} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{value}</p>
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 capitalize">
                          {macro.replace('_', ' ')}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}
            
            {/* Considerations */}
            {mealPlan.considerations && (
              <section className="mb-8">
                <button 
                  onClick={() => toggleSection('considerations')}
                  className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-900 dark:text-white mb-4 focus:outline-none"
                >
                  <span>Important Considerations</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${expandedSections.considerations ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedSections.considerations && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6">
                    {mealPlan.considerations.duration && (
                      <div className="mb-5 pb-5 border-b dark:border-gray-600">
                        <h3 className="text-md font-medium text-gray-800 dark:text-white mb-2">Recommended Duration:</h3>
                        <p className="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-3 rounded-lg">
                          {mealPlan.considerations.duration}
                        </p>
                      </div>
                    )}
                    
                    {mealPlan.considerations.risks && (
                      <div className="mb-5 pb-5 border-b dark:border-gray-600">
                        <h3 className="text-md font-medium text-gray-800 dark:text-white mb-2">Potential Risks:</h3>
                        <ul className="space-y-2">
                          {mealPlan.considerations.risks.map((risk, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <span className="inline-flex mr-2 text-red-500">⚠️</span>
                              <span>{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {mealPlan.considerations.precautions && (
                      <div>
                        <h3 className="text-md font-medium text-gray-800 dark:text-white mb-2">Precautions:</h3>
                        <ul className="space-y-2">
                          {mealPlan.considerations.precautions.map((precaution, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg">
                              <span className="inline-flex mr-2 text-yellow-500">⚠️</span>
                              <span>{precaution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}
            
            {/* CTA */}
            <div className="mt-10 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-900 rounded-xl p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
                Get the CaloSync App
              </h2>
              <p className="text-center text-gray-100 mb-6">
                Track your meals, get personalized recommendations, and achieve your goals faster
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.app.caloriecounter', '_blank')}
                  className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Download Now - Free
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 