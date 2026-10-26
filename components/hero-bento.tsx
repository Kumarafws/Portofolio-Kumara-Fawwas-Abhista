'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Download,
  Copy,
  Check,
  Award,
  GraduationCap,
  Sparkles,
  Layers,
  Code2,
  Mail,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { useLanguage } from '@/lib/language-context'
import { heroContent, personalInfo } from '@/data/portfolio-content'

export function HeroBento() {
  const { language } = useLanguage()
  const content = heroContent[language]
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-violet-500/10 to-transparent blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-48 -right-32 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-80 -left-32 w-[350px] h-[350px] bg-violet-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center md:justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.statusBadge[language]}</span>
          </div>
        </motion.div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="font-mono text-sm tracking-wide text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400 animate-pulse" />
              <span>{content.greeting} <span className="text-foreground underline decoration-cyan-400/50 decoration-2 underline-offset-4">{personalInfo.name}</span></span>
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]">
              {content.headlinePrefix}{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                {content.headlineHighlight}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {content.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3.5">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>{content.viewProjects}</span>
                <ArrowUpRight size={17} />
              </Link>

              <a
                href={personalInfo.cv}
                download="Kumara-Fawwas-Abhista-CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/70 backdrop-blur-md text-foreground font-semibold text-sm hover:border-cyan-400/60 hover:bg-card hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <Download size={16} className="text-cyan-400" />
                <span>{content.downloadCv}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-border/90 text-sm transition shadow-sm"
                title="Salin alamat email"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 font-medium text-xs">{content.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-muted-foreground" />
                    <span className="text-xs">{content.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Social Links */}
            <div className="mt-8 flex items-center gap-3 text-muted-foreground">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/70">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/80 bg-card/40 hover:text-cyan-400 hover:border-cyan-400/50 transition"
                aria-label="GitHub"
              >
                <GitHubIcon size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border/80 bg-card/40 hover:text-cyan-400 hover:border-cyan-400/50 transition"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg border border-border/80 bg-card/40 hover:text-cyan-400 hover:border-cyan-400/50 transition"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </motion.div>

          {/* Right Bento Card Column: Profile & Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Bento Profile Card Container */}
            <div className="relative mx-auto max-w-sm rounded-3xl border border-border/80 bg-gradient-to-b from-card/90 via-card/60 to-card/90 backdrop-blur-xl p-5 shadow-2xl shadow-cyan-500/5">
              {/* Profile Image with subtle aesthetic frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-muted/40 group shadow-inner">
                <Image
                  src={personalInfo.photo}
                  alt={`Foto formal ${personalInfo.name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                {/* Floating Tech Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-background/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 shadow-sm">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-background/80 backdrop-blur-md border border-violet-400/40 text-violet-300 shadow-sm">
                    React
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-background/80 backdrop-blur-md border border-emerald-400/40 text-emerald-300 shadow-sm">
                    Node.js
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-base font-bold text-foreground tracking-tight drop-shadow-sm">
                    {personalInfo.name}
                  </p>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">
                    {content.roleTag}
                  </p>
                </div>
              </div>

              {/* Bento Card Footer: University & Core Strength */}
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <GraduationCap size={15} className="text-cyan-400" />
                  <span>{personalInfo.university}</span>
                </div>
                <span className="font-mono font-bold text-foreground bg-muted px-2 py-0.5 rounded-md text-[11px]">
                  GPA {personalInfo.gpa.split(' ')[0]}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Bento Item 1: GPA */}
          <div className="glass-card glass-card-hover rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {content.statsGpaLabel}
              </span>
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-extrabold tracking-tight text-foreground font-mono">
                3.71 <span className="text-sm font-normal text-muted-foreground">/ 4.0</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {personalInfo.major[language]}
              </p>
            </div>
          </div>

          {/* Bento Item 2: Best Technical Execution Award */}
          <div className="glass-card glass-card-hover rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between border-violet-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {content.statsAwardLabel}
              </span>
              <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Award size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xl font-bold tracking-tight text-foreground">
                Best Technical Execution
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                FIPEX Capstone Program 2025
              </p>
            </div>
          </div>

          {/* Bento Item 3: Fullstack Specialty */}
          <div className="glass-card glass-card-hover rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Architecture & Delivery
              </span>
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Layers size={18} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold tracking-tight text-foreground">
                End-to-End System
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {language === 'id' ? 'Frontend, REST API & Desain Database SQL' : 'Frontend UI, REST APIs & SQL Database Design'}
              </p>
            </div>
          </div>

          {/* Bento Item 4: Modern Toolkit */}
          <div className="glass-card glass-card-hover rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Primary Stack
              </span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Code2 size={18} />
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-muted/80 text-foreground border border-border/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
