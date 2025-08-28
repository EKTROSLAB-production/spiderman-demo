import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Just show an alert for demo purposes
    alert('This is a static demo page. No actual login functionality.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Welcome Back, <span className="text-red-600">Hero</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sign in to your Spider-Man account and continue your heroic journey
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card">
            <div className="text-center mb-8">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-3xl text-white">🕷️</span>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 mt-2">Sign in to your Spider-Man account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                  placeholder="peter.parker@dailybugle.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-red-600 hover:text-red-700 transition-colors duration-200">
                  Forgot password?
                </a>
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary py-3 text-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign In
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🕷️ Why Join Spider-Man?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🦸</div>
                <h4 className="font-semibold text-gray-900 mb-2">Hero Community</h4>
                <p className="text-gray-600 text-sm">Connect with fellow Spider-Man fans</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📰</div>
                <h4 className="font-semibold text-gray-900 mb-2">Latest News</h4>
                <p className="text-gray-600 text-sm">Stay updated on all things Spider-Man</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎬</div>
                <h4 className="font-semibold text-gray-900 mb-2">Exclusive Content</h4>
                <p className="text-gray-600 text-sm">Access to behind-the-scenes content</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
