import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-red-600">Spider</span>
              <span className="text-white">-Man</span>
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              With great power comes great responsibility. The iconic web-slinger who protects New York City from all threats.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn-primary text-lg px-8 py-3">
                Learn More
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Watch Trailer
              </button>
            </motion.div>
          </motion.div>

          {/* Spider-Man Logo/Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-8xl">🕷️</span>
              </motion.div>
              
              {/* Web effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🕸️</div>
            <h3 className="text-xl font-semibold mb-2">Web-Slinging</h3>
            <p className="text-gray-200">Can swing between buildings at speeds up to 35 mph</p>
          </div>
          
          <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🦸</div>
            <h3 className="text-xl font-semibold mb-2">Spider-Sense</h3>
            <p className="text-gray-200">Sixth sense that warns of danger before it happens</p>
          </div>
          
          <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl mb-2">🏙️</div>
            <h3 className="text-xl font-semibold mb-2">New York</h3>
            <p className="text-gray-200">Protects the city that never sleeps from all threats</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
