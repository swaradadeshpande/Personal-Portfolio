'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ModernIcons } from './Icons'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: 'hero', label: 'Home', iconKey: 'Home' as const },
    { id: 'about', label: 'About', iconKey: 'About' as const },
    { id: 'work', label: 'Experience', iconKey: 'Experience' as const },
    { id: 'projects', label: 'Projects', iconKey: 'Projects' as const },
    { id: 'skills', label: 'Skills', iconKey: 'Skills' as const },
    { id: 'certifications', label: 'Certifications', iconKey: 'Certifications' as const },
    { id: 'achievements', label: 'Achievements', iconKey: 'Achievements' as const },
    { id: 'contact', label: 'Contact', iconKey: 'Contact' as const },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      let currentSection = 'hero'
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.getBoundingClientRect().top < 200) {
          currentSection = section.id
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-glass-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold terminal-text text-cyan"
          >
            {'<'}SD{' / >'}
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {sections.map((section) => {
              const IconComponent = ModernIcons[section.iconKey]
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm terminal-text font-medium transition-colors duration-300 px-3 py-2 rounded-lg flex items-center gap-2 ${
                    activeSection === section.id
                      ? 'text-cyan bg-cyan/10'
                      : 'text-text-secondary hover:text-cyan hover:bg-cyan/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-5 h-5">
                    <IconComponent />
                  </div>
                  <span className="hidden lg:inline">{section.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 space-y-2 pb-4 max-h-96 overflow-y-auto"
          >
            {sections.map((section) => {
              const IconComponent = ModernIcons[section.iconKey]
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex w-full items-center gap-3 text-left px-4 py-3 rounded-lg terminal-text text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id
                      ? 'bg-cyan/10 text-cyan'
                      : 'text-text-secondary hover:bg-glass-light hover:text-cyan'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-5 h-5">
                    <IconComponent />
                  </div>
                  {section.label}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
