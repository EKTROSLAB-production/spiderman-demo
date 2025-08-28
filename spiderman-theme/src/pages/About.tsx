import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const aboutSections = [
    {
      title: "The Origin Story",
      content: "Peter Parker was just an ordinary high school student until a fateful field trip to a science laboratory changed his life forever. Bitten by a radioactive spider, he gained incredible spider-like abilities that would transform him into the amazing Spider-Man.",
      icon: "🕷️"
    },
    {
      title: "Powers & Abilities",
      content: "Spider-Man possesses superhuman strength, agility, and reflexes. His spider-sense warns him of danger, he can cling to walls, and his web-shooters allow him to swing through the city. He's also a brilliant scientist and inventor.",
      icon: "🦸"
    },
    {
      title: "The Daily Bugle",
      content: "As Peter Parker, he works as a photographer for the Daily Bugle, constantly struggling to balance his superhero duties with his personal life. J. Jonah Jameson, the editor, is always looking for photos of Spider-Man.",
      icon: "📰"
    },
    {
      title: "Villains & Challenges",
      content: "Spider-Man faces some of the most dangerous villains in the Marvel Universe, including Green Goblin, Doctor Octopus, Venom, and many others. Each battle tests his abilities and his commitment to protecting the innocent.",
      icon: "🦹"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">Spider-Man</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible story behind one of Marvel's most beloved superheroes and the man behind the mask.
          </p>
        </motion.div>

        {/* About Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{section.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spider-Man Quote */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-red-600 to-blue-600 p-12 rounded-2xl text-white">
            <blockquote className="text-3xl lg:text-4xl font-bold italic mb-4">
              "With great power comes great responsibility."
            </blockquote>
            <cite className="text-xl text-gray-200">
              — Uncle Ben to Peter Parker
            </cite>
          </div>
        </motion.div>

        {/* Key Facts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-5xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">First Appearance</h3>
            <p className="text-gray-600">Amazing Fantasy #15 (1962)</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-5xl mb-4">👨‍🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-600">Brilliant scientist and photographer</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-5xl mb-4">🏙️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Base of Operations</h3>
            <p className="text-gray-600">New York City, USA</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Join the Adventure?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Sign Up Now
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
