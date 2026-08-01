'use client'

import { motion } from 'framer-motion'
import { ModernIcons } from './Icons'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const paragraphs = [
    {
      iconKey: 'Build' as const,
      title: 'Building Systems That Work',
      text: 'I believe in building systems that work. Not just technically correct—actually usable, scalable, and elegant. That\'s why I split my focus between backend infrastructure and machine learning pipelines.',
    },
    {
      iconKey: 'ML' as const,
      title: 'ML Systems in Production',
      text: 'I\'ve spent the last year building end-to-end ML applications—training models, optimizing inference, designing APIs, and shipping features that doctors and engineers actually rely on.',
    },
    {
      iconKey: 'Dance' as const,
      title: 'Precision Through Discipline',
      text: 'On the side, I\'ve trained in Bharatanatyam for four years—a classical Indian dance that demands precision, discipline, and structural thinking. The same principles apply to code.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label">
            ABOUT_ME / WHO_I_AM
          </motion.div>

          {/* Interactive cards with paragraphs */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {paragraphs.map((para, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="glass-card p-6 rounded-lg h-full flex flex-col hover:border-cyan/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      className="w-8 h-8 mb-4 text-cyan"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {ModernIcons[para.iconKey]()}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">
                      {para.title}
                    </h3>

                    {/* Text */}
                    <p className="text-text-secondary leading-relaxed flex-1">
                      {para.text}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan to-saffron"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={itemVariants} className="space-y-8 pt-8">
            <h3 className="section-label">Key Numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'CGPA', value: '9.2/10', highlight: 'cyan' },
                { label: 'Hackathons Won', value: '3+', highlight: 'saffron' },
                { label: 'Years CSE', value: '3rd', highlight: 'cyan' },
                { label: 'Full-Stack Projects', value: '5+', highlight: 'saffron' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-4 text-center rounded-lg group hover:border-cyan/40 transition-all"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className={`terminal-text font-bold text-2xl sm:text-3xl ${stat.highlight === 'cyan' ? 'text-cyan' : 'text-saffron'}`}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-text-secondary text-xs mt-2 terminal-text uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Focus areas */}
          <motion.div variants={itemVariants} className="space-y-4 pt-8">
            <h3 className="section-label">Current Focus</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'ML Systems Design',
                'FastAPI & Python',
                'Backend Optimization',
                'Data Pipelines',
                'Production ML',
                'API Design',
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  className="glass-card px-4 py-2 text-sm terminal-text text-cyan rounded-lg hover:border-cyan/40 transition-all cursor-pointer"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {'>'} {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
