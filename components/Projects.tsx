'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      name: 'OsteoAI',
      headline: 'Reading osteoporosis risk from an X-ray in seconds.',
      description:
        'Multi-modal deep learning system combining hand X-rays and clinical data. Features Grad-CAM explainability, automated PDF reports, and doctor recommendations. Winner of 3 hackathons.',
      tech: ['TensorFlow', 'FastAPI', 'React', 'Grad-CAM', 'Vercel', 'Render'],
      features: [
        'Multi-modal deep learning (images + clinical data)',
        'Explainable AI with Grad-CAM visualization',
        'PDF report generation',
        'Doctor recommendation system',
      ],
      links: {
        github: '#',
        demo: '#',
      },
      impact: '3x Hackathon Wins',
    },
    {
      name: 'Customer Churn Prediction',
      headline: 'Predicting churn before customers know they\'re leaving.',
      description:
        'XGBoost-powered predictive model with real-time probability scoring. Includes feature importance analysis and actionable insights for retention strategies.',
      tech: ['XGBoost', 'FastAPI', 'React', 'Pandas', 'Python'],
      features: [
        'XGBoost classifier with 87% accuracy',
        'Real-time probability scoring API',
        'Feature importance visualization',
        'Retention strategy recommendations',
      ],
      links: {
        github: '#',
        demo: '#',
      },
      impact: 'Production Ready',
    },
    {
      name: 'Email Spam & Phishing Detection',
      headline: 'Explainable spam detection — no black box, just the keywords that mattered.',
      description:
        'TF-IDF + Random Forest ensemble with real-time predictions and interpretable output. Identifies suspicious emails with transparency on decision factors.',
      tech: ['TF-IDF', 'Random Forest', 'Streamlit', 'Scikit-learn', 'Python'],
      features: [
        'TF-IDF vectorization pipeline',
        'Random Forest ensemble classifier',
        'Real-time email classification',
        'Top contributing keyword visualization',
      ],
      links: {
        github: '#',
        demo: '#',
      },
      impact: 'Interpretable ML',
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
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
            PROJECTS / PORTFOLIO
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="glass-card h-full p-6 rounded-xl flex flex-col cursor-pointer hover:border-cyan/50 transition-all duration-300"
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{project.name}</h3>
                    <p className="text-sm text-cyan font-semibold leading-tight">{project.headline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-4 flex-grow leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-saffron/10 text-saffron rounded terminal-text"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-cyan/10 text-cyan rounded terminal-text">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Impact badge */}
                  <div className="mb-4">
                    <span className="text-xs px-3 py-1 bg-cyan/10 text-cyan rounded-full terminal-text font-bold">
                      {project.impact}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-glass-border">
                    <motion.a
                      href={project.links.github}
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-cyan hover:bg-cyan/10 rounded transition-all text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Code size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.links.demo}
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-saffron hover:bg-saffron/10 rounded transition-all text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>

                  {/* Expanded view */}
                  {expandedProject === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-glass-border space-y-3"
                    >
                      <h4 className="section-label">Features</h4>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        {project.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-saffron mt-0.5">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <h4 className="section-label pt-2">All Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs px-2 py-1 bg-glass-light border border-cyan/20 text-cyan rounded terminal-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View all projects CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <motion.a
              href="https://github.com"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-cyan font-semibold hover:text-saffron transition-colors"
            >
              View more projects on GitHub <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
