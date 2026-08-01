'use client'

import { motion } from 'framer-motion'
import { Trophy, Award } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      rank: '1st Place',
      title: 'National Level MedTech Hackathon Nexus Aescode',
      org: 'Bharati Vidyapeeth DU x KCDH IIT Bombay',
      year: '2024–2025',
      icon: Trophy,
    },
    {
      rank: '2nd Prize',
      title: 'International IntelliTech Hackathon',
      org: 'Universidad Nacional del Altiplano de Puno, Peru',
      year: '2024',
      prize: '$500 Prize',
      icon: Award,
    },
    {
      rank: '2nd Prize',
      title: 'National Level Hackathon OFFGRID 1.0',
      org: 'D. Y. Patil International University',
      year: '2024',
      icon: Award,
    },
    {
      rank: 'Rank 2',
      title: 'Code Debugging Competition',
      org: 'IEEE Student Branch BIT',
      year: '2024',
      icon: Trophy,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label">
            ACHIEVEMENTS / RECOGNITION
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-text-primary leading-tight"
          >
            Recognized for building <span className="text-cyan">impact</span>
          </motion.h2>

          {/* Achievements grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {achievements.map((achievement, i) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="glass-card p-6 rounded-lg h-full flex flex-col cursor-pointer hover:border-cyan/50 transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Icon and rank */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className="p-3 bg-cyan/10 rounded-lg"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <IconComponent className="w-6 h-6 text-cyan" />
                      </motion.div>
                      <span className="text-xs font-bold px-3 py-1 bg-saffron/10 text-saffron rounded-full terminal-text">
                        {achievement.rank}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-text-primary mb-2 text-sm leading-tight flex-grow">
                      {achievement.title}
                    </h3>

                    <p className="text-xs text-cyan mb-3 font-semibold">{achievement.org}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                      <span className="terminal-text text-xs text-text-secondary">{achievement.year}</span>
                      {achievement.prize && (
                        <span className="terminal-text text-xs text-saffron font-bold">{achievement.prize}</span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Stats summary */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
          >
            {[
              { number: '4', label: 'Major Hackathon Awards', icon: '🏆' },
              { number: '3', label: 'First Place Finishes', icon: '🥇' },
              { number: '15K+', label: 'Lines of Code Shipped', icon: '💻' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan mb-2">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
