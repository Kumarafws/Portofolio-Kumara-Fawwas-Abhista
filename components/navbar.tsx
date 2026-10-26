'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Moon, Sun, Menu, X, Globe, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { navigationTranslations, personalInfo } from '@/data/portfolio-content'

export function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const nav = navigationTranslations[language]

  const navLinks = [
    { label: nav.home, href: '#home' },
    { label: nav.projects, href: '#projects' },
    { label: nav.about, href: '#about' },
    { label: nav.skills, href: '#skills' },
    { label: nav.experience, href: '#experience' },
    { label: nav.education, href: '#education' },
    { label: nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check initial dark mode
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-lg shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition shadow-sm">
              <span className="font-bold text-foreground group-hover:text-cyan-400 transition">KF</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-sm tracking-tight leading-none group-hover:text-cyan-400 transition">
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className="text-[11px] text-muted-foreground font-sans mt-0.5">
                Full-Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-border/80 shadow-sm">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Controls: Language Switcher + Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              aria-label="Ganti Bahasa / Switch Language"
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-md text-xs font-semibold text-foreground hover:border-cyan-400/50 hover:bg-card transition shadow-sm"
              title={language === 'id' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
            >
              <Globe size={14} className="text-cyan-400" />
              <div className="flex items-center gap-1 font-mono text-[11px]">
                <span className={language === 'id' ? 'text-cyan-400 font-bold' : 'text-muted-foreground'}>ID</span>
                <span className="text-border">/</span>
                <span className={language === 'en' ? 'text-cyan-400 font-bold' : 'text-muted-foreground'}>EN</span>
              </div>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-cyan-400/50 transition shadow-sm"
            >
              {isDark ? <Sun size={16} className="text-amber-300" /> : <Moon size={16} className="text-slate-700" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur-md text-muted-foreground hover:text-foreground"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-border/80 bg-background/95 backdrop-blur-2xl overflow-hidden px-4 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
