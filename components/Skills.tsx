'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend & Systems',
      skills: ['Python', 'FastAPI', 'Node.js', 'SQL', 'MongoDB', 'MySQL', 'DBMS', 'Git/GitHub'],
      color: 'cyan',
    },
    {
      category: 'ML & Data',
      skills: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
      color: 'saffron',
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'TypeScript', 'Responsive Design', 'Tailwind CSS'],
      color: 'cyan',
    },
    {
      category: 'Languages',
      skills: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'SQL'],
      color: 'saffron',
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
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-bg-dark relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
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
            SKILLS / EXPERTISE
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
          >
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Category title */}
                <h3 className={`text-lg font-bold ${category.color === 'cyan' ? 'text-cyan' : 'text-saffron'}`}>
                  <span className="terminal-text text-sm mr-2">{'>'}</span>
                  {category.category}
                </h3>

                {/* Skills list */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      variants={itemVariants}
                      className={`glass-card px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        category.color === 'cyan'
                          ? 'border-cyan/50 text-cyan hover:shadow-lg hover:shadow-cyan/30 hover:border-cyan'
                          : 'border-saffron/50 text-saffron hover:shadow-lg hover:shadow-saffron/30 hover:border-saffron'
                      }`}
                      whileHover={{
                        scale: 1.1,
                        y: -4,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-semibold terminal-text">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency level insight */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass-card p-8 rounded-xl border border-glass-border"
          >
            <h3 className="section-label mb-6">Proficiency Distribution</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { level: 'Expert', description: 'Python, FastAPI, React, TensorFlow, XGBoost', percentage: '40%' },
                { level: 'Proficient', description: 'SQL, Node.js, JavaScript, Data Analysis, ML Pipelines', percentage: '35%' },
                { level: 'Familiar', description: 'C++, C, MongoDB, Tableau, Advanced Statistics', percentage: '25%' },
              ].map((prof, i) => (
                <motion.div key={i} className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-text-primary">{prof.level}</span>
                    <span className="terminal-text text-sm text-cyan">{prof.percentage}</span>
                  </div>
                  <div className="w-full h-2 bg-glass-light rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${i === 0 ? 'bg-cyan' : i === 1 ? 'bg-saffron' : 'bg-cyan/70'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: prof.percentage }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-xs text-text-secondary pt-1">{prof.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
