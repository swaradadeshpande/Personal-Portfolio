'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      role: 'Data Visualization Intern',
      company: 'Infosys Springboard',
      period: 'July 2026',
      status: 'Upcoming',
      description: 'Building interactive data visualization dashboards for enterprise clients',
      tags: ['Data Viz', 'React', 'Analytics'],
    },
    {
      role: 'Data Analytics Intern',
      company: 'Cognifyz Technologies',
      period: 'Jan – Feb 2026',
      status: 'Completed',
      description: 'Analyzed customer datasets and built predictive models for retention optimization',
      tags: ['Analytics', 'Python', 'Machine Learning'],
    },
    {
      role: 'Data Analyst Virtual Simulation',
      company: 'Deloitte (Forage)',
      period: 'May 2026',
      status: 'Completed',
      description: 'Completed industry-standard data analysis case studies and delivered insights to stakeholders',
      tags: ['SQL', 'Tableau', 'Business Analysis'],
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label">
            EXPERIENCE / WORK_HISTORY
          </motion.div>

          {/* Timeline */}
          <div className="space-y-6 relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 to-saffron/20" />

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-cyan border-2 border-bg-primary transform md:-translate-x-1/2 cursor-pointer"
                  whileHover={{ scale: 1.3, boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <motion.div
                  className="glass-card p-6 rounded-lg hover:border-cyan/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-1">{exp.role}</h3>
                      <p className="text-cyan font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="terminal-text text-xs px-3 py-1 bg-cyan/10 text-cyan rounded">
                        {exp.period}
                      </span>
                      <span
                        className={`terminal-text text-xs px-3 py-1 rounded ${
                          exp.status === 'Completed'
                            ? 'bg-saffron/10 text-saffron'
                            : 'bg-cyan/10 text-cyan'
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="terminal-text text-xs text-saffron bg-saffron/10 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
