'use client'

import { motion } from 'framer-motion'

export default function Certifications() {
  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'Udemy',
      date: '2024',
      icon: '🐍',
      color: 'cyan',
      skills: ['Python', 'OOP', 'Data Structures'],
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco',
      date: '2024',
      icon: '📊',
      color: 'saffron',
      skills: ['Analytics', 'SQL', 'Visualization'],
    },
    {
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      date: '2023',
      icon: '🤖',
      color: 'cyan',
      skills: ['ML', 'Scikit-learn', 'Pandas'],
    },
    {
      title: 'Backend Development with FastAPI',
      issuer: 'Udemy',
      date: '2024',
      icon: '⚡',
      color: 'saffron',
      skills: ['FastAPI', 'REST APIs', 'Async'],
    },
    {
      title: 'Cloud Computing Basics',
      issuer: 'AWS',
      date: '2023',
      icon: '☁️',
      color: 'cyan',
      skills: ['AWS', 'EC2', 'S3'],
    },
    {
      title: 'Web Development Advanced',
      issuer: 'Udemy',
      date: '2024',
      icon: '🌐',
      color: 'saffron',
      skills: ['React', 'Next.js', 'TypeScript'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="section-label">CREDENTIALS / CERTIFICATIONS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Verified <span className="text-cyan">Skills</span> & <span className="text-saffron">Expertise</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Continuous learning through industry-recognized certifications and online courses. 
              Each certification represents real skills applied in production projects.
            </p>
          </motion.div>

          {/* Certifications grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="glass-card p-6 rounded-xl h-full flex flex-col hover:border-cyan/40 transition-all duration-300 overflow-hidden relative"
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon and header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <motion.span
                        className={`text-xs font-semibold px-3 py-1 rounded-full glass-card ${
                          cert.color === 'cyan'
                            ? 'text-cyan border border-cyan/30'
                            : 'text-saffron border border-saffron/30'
                        }`}
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {cert.date}
                      </motion.span>
                    </div>

                    {/* Title and issuer */}
                    <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className={`text-sm font-semibold mb-4 ${
                      cert.color === 'cyan' ? 'text-cyan' : 'text-saffron'
                    }`}>
                      {cert.issuer}
                    </p>

                    {/* Skills tags */}
                    <div className="flex-1" />
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded bg-glass-light text-text-secondary border border-glass-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      cert.color === 'cyan' ? 'bg-cyan' : 'bg-saffron'
                    }`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
          >
            {[
              { label: 'Certifications', value: '6' },
              { label: 'Platforms', value: '4' },
              { label: 'Skill Areas', value: '10+' },
              { label: 'Hours Invested', value: '500+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-4 text-center rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-cyan">{stat.value}</div>
                <div className="text-xs text-text-secondary mt-2 uppercase tracking-wider terminal-text">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
