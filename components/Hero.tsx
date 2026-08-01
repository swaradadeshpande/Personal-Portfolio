'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import CodeAnimation from './CodeAnimation'
import TypingAnimation from './TypingAnimation'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = containerRef.current?.querySelector('.scroll-indicator')
      if (scrollDown && window.scrollY > 50) {
        scrollDown.classList.add('opacity-0', 'pointer-events-none')
      } else if (scrollDown) {
        scrollDown.classList.remove('opacity-0', 'pointer-events-none')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow label */}
            <div className="section-label">
              Backend Engineer · ML in Production
            </div>

            {/* Main headline with name */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <span className="text-2xl sm:text-3xl font-bold text-saffron">Swarada Deshpande</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans leading-tight text-text-primary mb-6">
                I build the{' '}
                <span className="glow-cyan">infrastructure</span>
                <br />
                that makes machine learning actually usable.
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-text-secondary leading-relaxed max-w-2xl"
              >
                3rd-year CSE @ MMCOE, Pune — backend systems, ML pipelines, and the civic-tech problems in between.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-4"
            >
              <div>
                <div className="terminal-text text-cyan font-bold text-2xl">9.2/10</div>
                <div className="text-text-secondary text-sm mt-1">CGPA</div>
              </div>
              <div>
                <div className="terminal-text text-saffron font-bold text-2xl">3+</div>
                <div className="text-text-secondary text-sm mt-1">Hackathon Wins</div>
              </div>
              <div>
                <div className="terminal-text text-cyan font-bold text-2xl">100%</div>
                <div className="text-text-secondary text-sm mt-1">ML Focus</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('projects')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 sm:px-8 py-3 bg-cyan text-bg-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/30 transition-all duration-300 transform hover:scale-105 font-sans text-sm sm:text-base"
              >
                View Projects
              </button>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 border border-cyan text-cyan font-semibold rounded-lg hover:bg-cyan/10 transition-all duration-300 font-sans text-sm sm:text-base"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right code animation element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <CodeAnimation />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-text-secondary text-xs tracking-widest terminal-text">SCROLL</span>
            <ChevronDown className="w-5 h-5 text-cyan" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
