'use client'
import { useState } from 'react'
import Image from 'next/image'

const screenshots = [
  {
    id: 1,
    image: "/screenshots/screen1.png",
    title: "Track your meals",
    description: "Easily log your meals and track your daily calorie intake"
  },
  {
    id: 2,
    image: "/screenshots/screen2.png",
    title: "AI Analysis",
    description: "Get instant AI-powered analysis of your food"
  },
  {
    id: 3,
    image: "/screenshots/screen3.png",
    title: "Progress Tracking",
    description: "Monitor your weight loss journey"
  }
]

export default function SecondaryHeader() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="framer-19z354v-container">
      <section className="framer-DHsDL" data-framer-name="Desktop">
        <div className="framer-1uztc9t">
          <div className="framer-y9xtt6" data-framer-name="Motto + Logos">
            <div className="framer-1wr03mz" data-framer-component-type="RichTextContainer">
              <h2 className="framer-text framer-styles-preset-1wpz0dw">
                Track your calories with AI
              </h2>
            </div>
            <div className="framer-device-frame" data-framer-name="Device Frame">
              <div className="framer-device-content">
                <Image
                  src="https://framerusercontent.com/images/eOkQipcAuByHjPvhsOlx3B8tRA.png"
                  alt="App Screenshot"
                  width={375}
                  height={812}
                  className="framer-image"
                  priority
                />
              </div>
              <div className="framer-side-images">
                <div className="framer-prev-image">
                  <Image
                    src="https://framerusercontent.com/images/BAXywubxN8sAhfJg9tGvhGZ6fg.png"
                    alt="Previous Screenshot"
                    width={300}
                    height={650}
                    className="framer-image-prev"
                  />
                </div>
                <div className="framer-next-image">
                  <Image
                    src="https://framerusercontent.com/images/7yoUJQlEbujm5YMYWUhvknNHA.png"
                    alt="Next Screenshot"
                    width={300}
                    height={650}
                    className="framer-image-next"
                  />
                </div>
              </div>
              <div className="framer-controls">
                <button 
                  onClick={() => setActiveIndex(prev => (prev - 1 + 3) % 3)}
                  className="framer-button-prev"
                >
                  Previous
                </button>
                <button 
                  onClick={() => setActiveIndex(prev => (prev + 1) % 3)}
                  className="framer-button-next"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}