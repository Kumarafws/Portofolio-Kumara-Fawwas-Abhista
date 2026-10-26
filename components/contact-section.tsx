'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Sparkles, Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { personalInfo, sectionHeaders } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

export function ContactSection() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].contact
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="py-24 border-t border-border/80 relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-cyan-500/30 relative overflow-hidden">
          {/* Subtle top gradient */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Sparkles size={13} />
              <span>{text.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {text.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {text.subtitle}
            </p>
          </div>

          {/* Contact Methods Bento Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Email Card with Quick Copy */}
            <div className="rounded-2xl border border-border/80 bg-background/60 backdrop-blur-md p-5 flex flex-col justify-between hover:border-cyan-400/50 transition group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail size={18} />
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg border border-border bg-card/60 text-muted-foreground hover:text-cyan-400 transition"
                    title={text.copyEmail}
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="mt-1 text-sm font-semibold text-foreground truncate">
                  {personalInfo.email}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-semibold text-cyan-400 inline-flex items-center gap-1 hover:underline"
                >
                  <span>{text.sendEmail}</span>
                  <ArrowUpRight size={13} />
                </a>
                {copied && (
                  <span className="text-[10px] font-mono text-emerald-400 animate-fade-in">
                    {text.copied}
                  </span>
                )}
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border/80 bg-background/60 backdrop-blur-md p-5 flex flex-col justify-between hover:border-cyan-400/50 transition group"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 w-fit mb-3">
                  <LinkedInIcon size={18} />
                </div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  /in/kumara-fawwas
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:underline">
                <span>{text.connectLinkedin}</span>
                <ArrowUpRight size={13} />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border/80 bg-background/60 backdrop-blur-md p-5 flex flex-col justify-between hover:border-cyan-400/50 transition group"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 w-fit mb-3">
                  <GitHubIcon size={18} />
                </div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">GitHub</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  github.com/kumarafws
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-violet-400 group-hover:underline">
                <span>{text.visitGithub}</span>
                <ArrowUpRight size={13} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
