'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CodeAnimation() {
  const [displayedCode, setDisplayedCode] = useState('')
  const codeLines = [
    'def build_ml_system():',
    '    model = train_neural_net()',
    '    api = FastAPI()',
    '    cache = Redis()',
    '    return deploy(model, api)',
    '',
    '# Swarada: Backend & ML',
    '> python main.py',
    '[✓] System Ready',
  ]

  useEffect(() => {
    let currentIndex = 0
    let currentCharIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < codeLines.length) {
        if (currentCharIndex < codeLines[currentIndex].length) {
          setDisplayedCode(
            codeLines
              .slice(0, currentIndex)
              .join('\n') +
              (currentIndex > 0 ? '\n' : '') +
              codeLines[currentIndex].substring(0, currentCharIndex + 1)
          )
          currentCharIndex++
        } else {
          currentCharIndex = 0
          currentIndex++
          if (currentIndex < codeLines.length) {
            setDisplayedCode(codeLines.slice(0, currentIndex).join('\n'))
          }
        }
      } else {
        // Reset after completion
        setTimeout(() => {
          currentIndex = 0
          currentCharIndex = 0
          setDisplayedCode('')
        }, 2000)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden lg:block"
    >
      <div className="glass-card p-6 rounded-lg font-mono text-sm h-96 flex flex-col justify-between overflow-hidden relative border border-cyan/20 hover:border-cyan/40 transition-all duration-300">
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-cyan/20">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-text-secondary text-xs ml-2">terminal — bash</span>
        </div>

        {/* Code display */}
        <div className="flex-1 overflow-hidden">
          <motion.div className="text-text-secondary whitespace-pre-wrap leading-relaxed">
            {displayedCode.split('\n').map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`${
                  line.includes('def ') || line.includes('return ')
                    ? 'text-cyan'
                    : line.includes('#')
                    ? 'text-text-secondary/60'
                    : line.includes('>')
                    ? 'text-saffron'
                    : line.includes('[✓]')
                    ? 'text-green-400'
                    : 'text-text-primary'
                }`}
              >
                {line}
              </motion.div>
            ))}
            {displayedCode && <span className="animate-cursor-blink">|</span>}
          </motion.div>
        </div>

        {/* Animated dots at bottom */}
        <motion.div className="flex gap-2 pt-4 border-t border-cyan/20">
          <motion.div
            className="w-2 h-2 rounded-full bg-cyan"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-saffron"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-cyan"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
