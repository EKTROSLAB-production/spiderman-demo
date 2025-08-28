import React from 'react'
import { motion } from 'framer-motion'

const InfoSection: React.FC = () => {
  const infoCards = [
    {
      icon: '🕷️',
      title: 'Origin Story',
      description: 'Bitten by a radioactive spider, Peter Parker gained spider-like abilities and became the amazing Spider-Man.',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: '🦸',
      title: 'Powers & Abilities',
      description: 'Superhuman strength, agility, spider-sense, web-slinging, and wall-crawling abilities.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: '🏠',
      title: 'Personal Life',
      description: 'A brilliant scientist and photographer who struggles to balance his superhero duties with normal life.',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: '🦹',
      title: 'Rogues Gallery',
      description: 'Faces iconic villains like Green Goblin, Doctor Octopus, Venom, and many more.',
      color: 'from-green-600 to-green-700'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Amazing <span className="text-red-600">Spider-Man</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the incredible story of Peter Parker, the friendly neighborhood Spider-Man who protects New York City with his extraordinary abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card h-full text-center group-hover:shadow-xl transition-all duration-300">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Spider-Man's Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-red-600 to-blue-600"></div>
            
            <div className="space-y-12">
              {[
                { year: '1962', event: 'First appearance in Amazing Fantasy #15' },
                { year: '1963', event: 'Gets his own comic series' },
                { year: '2002', event: 'First live-action movie starring Tobey Maguire' },
                { year: '2012', event: 'The Amazing Spider-Man reboot' },
                { year: '2016', event: 'Spider-Man joins the Marvel Cinematic Universe' },
                { year: '2021', event: 'Spider-Man: No Way Home breaks box office records' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card">
                      <div className="text-2xl font-bold text-red-600 mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InfoSection
