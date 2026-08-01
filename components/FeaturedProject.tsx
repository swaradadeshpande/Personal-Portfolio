'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FeaturedProject() {
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

  return (
    <section id="featured" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-primary to-bg-dark relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-full h-96 bg-gradient-to-b from-cyan/10 to-transparent" />
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
            FEATURED_PROJECT / SHOWCASE
          </motion.div>

          {/* Main featured project */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Content */}
            <div className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-text-primary leading-tight"
              >
                Watching <span className="text-cyan">74 years</span> of India&apos;s climate unfold — 
                <span className="text-saffron"> in the browser</span>.
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-text-secondary leading-relaxed"
              >
                MeghNetra is an interactive 3D globe that visualizes India&apos;s climate data spanning 1951–2025. 
                Built for the Bharatiya Antariksh Hackathon 2026 (ISRO/NRSC Problem Statement PS-5), 
                it layers IMD gridded climate data, city-level projections, and a powerful &quot;What-If&quot; simulation panel.
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="section-label">Key Features</h3>
                <ul className="space-y-2 text-text-secondary">
                  {[
                    '3D interactive globe with India boundary overlays',
                    'Gridded IMD-style climate dataset (1951–2025)',
                    'Time slider for temporal analysis',
                    'City-level climate projections',
                    'What-If scenario simulation panel',
                    'Real-time data interpolation',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan mt-1">{'>'}</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="section-label">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Three.js', 'Chart.js', 'FastAPI', 'Python', 'WebGL'].map((tech) => (
                    <motion.span
                      key={tech}
                      className="glass-card px-4 py-2 text-sm terminal-text text-saffron rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="https://github.com"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-cyan/10 text-cyan border border-cyan rounded-lg hover:bg-cyan hover:text-bg-primary transition-all font-semibold flex items-center gap-2"
                >
                  View Code <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-saffron/10 text-saffron border border-saffron rounded-lg hover:bg-saffron hover:text-bg-primary transition-all font-semibold flex items-center gap-2"
                >
                  Live Demo <ArrowRight size={18} />
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Showcase area */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-xl h-96 flex items-center justify-center relative overflow-hidden"
              whileHover={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
            >
              {/* Placeholder with animated grid */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="rgba(34, 211, 238, 0.3)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#grid)" />
                </svg>
              </div>

              <motion.div
                className="relative z-10 text-center space-y-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-6xl">🌍</div>
                <div className="text-cyan font-mono text-lg">MeghNetra</div>
                <div className="text-text-secondary text-sm font-mono">Climate Data Visualization</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-8"
          >
            {[
              { label: 'Data Points', value: '74K+' },
              { label: 'Simulation Speed', value: '1951→2025' },
              { label: 'Interactive Layers', value: '12+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-4 text-center rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-cyan font-bold text-2xl">{stat.value}</div>
                <div className="text-text-secondary text-xs mt-2 terminal-text uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
