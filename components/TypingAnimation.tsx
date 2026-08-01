'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export default function TypingAnimation({
  text,
  delay = 0,
  speed = 50,
  className = '',
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const typeNext = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex))
        if (currentIndex === text.length) {
          setIsComplete(true)
        }
        currentIndex++
        timeout = setTimeout(typeNext, speed)
      }
    }

    timeout = setTimeout(typeNext, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, speed])

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
