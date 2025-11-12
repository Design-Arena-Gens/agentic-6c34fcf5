'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showLogo, setShowLogo] = useState(true)

  const sections = [
    {
      title: 'NEMAWARI SILK MILLS',
      subtitle: 'Surat\'s Trusted Manufacturer & Wholesaler',
      description: 'Quality • Trends • Customer Satisfaction',
      gradient: 'from-amber-600 via-yellow-500 to-amber-700'
    },
    {
      title: 'Exquisite Sarees Collection',
      subtitle: 'Cotton • Georgette • Silk • Net',
      description: 'Work Sarees • Party Wear • Festive Collection',
      gradient: 'from-pink-500 via-rose-400 to-pink-600'
    },
    {
      title: 'Stylish Kurtis & Blouses',
      subtitle: 'Trending Designs • Premium Fabrics',
      description: 'Perfect for Every Occasion',
      gradient: 'from-purple-500 via-violet-400 to-purple-600'
    },
    {
      title: 'Colorful Petticoats (Patikot)',
      subtitle: 'Wide Variety • Comfortable Fit',
      description: 'Essential Collection for Every Woman',
      gradient: 'from-blue-500 via-cyan-400 to-blue-600'
    },
    {
      title: 'Wholesale Excellence',
      subtitle: 'Starting from just ₹100',
      description: 'Fresh Collections • Bulk Discounts • Pan-India Supply',
      gradient: 'from-green-500 via-emerald-400 to-green-600'
    },
    {
      title: 'Connect With Us',
      subtitle: 'For Business Inquiries & Orders',
      description: 'Contact: +91 XXXXX XXXXX | Email: info@nemawarisilk.com',
      gradient: 'from-indigo-500 via-blue-400 to-indigo-600'
    }
  ]

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false)
    }, 3000)

    return () => clearTimeout(logoTimer)
  }, [])

  useEffect(() => {
    if (!showLogo) {
      const interval = setInterval(() => {
        setCurrentSection((prev) => (prev + 1) % sections.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [showLogo, sections.length])

  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <AnimatePresence mode="wait">
        {showLogo ? (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-8"
              >
                <svg
                  className="w-32 h-32 mx-auto"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="url(#gradient1)"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 60 100 Q 100 60, 140 100 T 140 140"
                    stroke="url(#gradient2)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#8B4513" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B9D" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold gradient-text mb-4"
              >
                NEMAWARI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-2xl md:text-3xl text-secondary font-semibold"
              >
                SILK MILLS
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-4 flex gap-2 justify-center"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-secondary"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`section-${currentSection}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${sections[currentSection].gradient} opacity-60`} />

            <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8"
              >
                <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 flex items-center justify-center overflow-hidden relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-9xl"
                  >
                    {currentSection === 0 && '🏭'}
                    {currentSection === 1 && '👘'}
                    {currentSection === 2 && '👗'}
                    {currentSection === 3 && '👚'}
                    {currentSection === 4 && '💰'}
                    {currentSection === 5 && '📞'}
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
              >
                {sections[currentSection].title}
              </motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl md:text-4xl text-white/90 mb-4 font-semibold drop-shadow-lg"
              >
                {sections[currentSection].subtitle}
              </motion.p>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl md:text-2xl text-white/80 drop-shadow-lg"
              >
                {sections[currentSection].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-12 flex gap-3 justify-center"
              >
                {sections.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSection
                        ? 'w-12 bg-white'
                        : 'w-2 bg-white/40'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </motion.div>

              {currentSection === 0 && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-4xl mb-2">👘</div>
                    <div className="font-semibold">Sarees</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-4xl mb-2">👗</div>
                    <div className="font-semibold">Kurtis</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-4xl mb-2">👚</div>
                    <div className="font-semibold">Blouses</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-4xl mb-2">🎀</div>
                    <div className="font-semibold">Petticoats</div>
                  </div>
                </motion.div>
              )}

              {currentSection === 1 && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-12 flex flex-wrap justify-center gap-4 text-white"
                >
                  {['Cotton', 'Georgette', 'Silk', 'Net', 'Work Sarees', 'Party Wear'].map((fabric, i) => (
                    <motion.div
                      key={fabric}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 font-semibold"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    >
                      {fabric}
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {currentSection === 4 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-12 bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white"
                >
                  <div className="text-6xl font-bold mb-4">Starting at ₹100</div>
                  <div className="text-2xl font-semibold">✓ Fresh Collections</div>
                  <div className="text-2xl font-semibold">✓ Bulk Discounts Available</div>
                  <div className="text-2xl font-semibold">✓ Pan-India Delivery</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showLogo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm z-20"
        >
          Nemawari Silk Mills © 2025 | Surat, India
        </motion.div>
      )}
    </main>
  )
}
