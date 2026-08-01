'use client'

import { motion } from 'framer-motion'
import { Mail, Share2, Code, ArrowRight } from 'lucide-react'

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@swarada.dev',
      href: 'mailto:hello@swarada.dev',
      color: 'cyan',
    },
    {
      icon: Share2,
      label: 'LinkedIn',
      value: '/in/swarada-deshpande',
      href: 'https://linkedin.com/in/swarada-deshpande',
      color: 'saffron',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: '@swarada-dev',
      href: 'https://github.com',
      color: 'cyan',
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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-dark to-bg-primary relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-full h-96 bg-gradient-to-b from-cyan/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="section-label">
            CONTACT / GET_IN_TOUCH
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Let&apos;s build <span className="text-cyan">something great</span> together
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Whether you&apos;re working on ML systems, backend infrastructure, or civic-tech problems, 
              I&apos;m always excited to collaborate on projects that matter.
            </p>
          </motion.div>

          {/* Contact links */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {contacts.map((contact, i) => {
              const IconComponent = contact.icon
              return (
                <motion.a
                  key={i}
                  href={contact.href}
                  target={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? undefined : '_blank'}
                  rel={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className={`glass-card p-6 rounded-lg flex items-center gap-4 cursor-pointer hover:border-${contact.color}/50 transition-all duration-300`}
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`p-3 rounded-lg ${
                        contact.color === 'cyan' ? 'bg-cyan/10' : 'bg-saffron/10'
                      }`}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${contact.color === 'cyan' ? 'text-cyan' : 'text-saffron'}`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-text-secondary">{contact.label}</p>
                      <p className={`font-semibold ${contact.color === 'cyan' ? 'text-cyan' : 'text-saffron'}`}>
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-secondary group-hover:text-cyan transition-colors" />
                  </motion.div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-glass-border space-y-6"
          >
            <h3 className="text-lg font-bold text-text-primary">Quick Links</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { text: 'Download Resume', icon: '📄', color: 'cyan' },
                { text: 'View GitHub', icon: '💻', color: 'saffron' },
                { text: 'LinkedIn Profile', icon: '🔗', color: 'cyan' },
              ].map((link, i) => (
                <motion.button
                  key={i}
                  className={`px-4 py-2 rounded-lg glass-card terminal-text text-sm font-semibold flex items-center gap-2 transition-all ${
                    link.color === 'cyan'
                      ? 'text-cyan hover:bg-cyan/10 border border-cyan/30'
                      : 'text-saffron hover:bg-saffron/10 border border-saffron/30'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{link.icon}</span>
                  {link.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto mt-24 pt-12 border-t border-glass-border"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="terminal-text text-sm text-text-secondary">
            <span className="text-cyan">&lt;</span>
            <span className="text-text-primary font-bold">Swarada Deshpande</span>
            <span className="text-cyan"> /&gt;</span>
            <span className="text-text-secondary"> — Backend Engineer & ML Systems</span>
          </div>
          <div className="text-xs text-text-secondary">
            Built with <span className="text-cyan">React</span>, <span className="text-saffron">Framer Motion</span>, & <span className="text-cyan">Passion</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-glass-border text-xs text-text-secondary text-center space-y-2">
          <p>© 2026 Swarada Deshpande. All rights reserved.</p>
          <p className="terminal-text">
            Made with <span className="text-cyan cursor-pointer hover:animate-pulse">💙</span> in Pune, India
          </p>
        </div>
      </motion.footer>
    </section>
  )
}
