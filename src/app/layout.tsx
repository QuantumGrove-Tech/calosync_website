import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CalSync - AI-Powered Nutrition & Meal Planning',
  description: 'Track your nutrition, get personalized AI meal plans, and achieve your fitness goals with CalSync.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 