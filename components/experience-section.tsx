'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Sparkles, Briefcase, Users, Calendar, Building2 } from 'lucide-react'
import { experiencesData, sectionHeaders } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

export function ExperienceSection() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].experience
  const [tab, setTab] = useState<'all' | 'work' | 'organization'>('all')

  const filteredExperiences = experiencesData.filter((item) => {
    if (tab === 'all') return true
    return item.type === tab
  })

  return (
    <section id="experience" className="py-24 border-t border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <Sparkles size={13} />
              <span>{text.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {text.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {text.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl border border-border bg-card/60 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                tab === 'all'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {language === 'id' ? 'Semua' : 'All'}
            </button>
            <button
              onClick={() => setTab('work')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                tab === 'work'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {text.workTab}
            </button>
            <button
              onClick={() => setTab('organization')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                tab === 'organization'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {text.orgTab}
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-border/70 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          <AnimatePresence>
            {filteredExperiences.map((exp, idx) => {
              const isWork = exp.type === 'work'

              return (
                <motion.div
                  key={`${exp.organization}-${idx}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                    <div
                      className={`h-5 w-5 rounded-full border-2 border-background flex items-center justify-center ${
                        isWork
                          ? 'bg-cyan-400 shadow-md shadow-cyan-400/40'
                          : 'bg-violet-400 shadow-md shadow-violet-400/40'
                      }`}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-background" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="glass-card glass-card-hover rounded-2xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono ${
                            isWork
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                              : 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                          }`}
                        >
                          {isWork ? <Briefcase size={12} /> : <Users size={12} />}
                          <span>{isWork ? 'Professional' : 'Organization'}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                        <Calendar size={13} className="text-cyan-400" />
                        <span>{typeof exp.period === 'string' ? exp.period : exp.period[language]}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-cyan-400 transition">
                      {exp.role[language]}
                    </h3>

                    <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Building2 size={14} className="text-muted-foreground" />
                      <span>{exp.organization}</span>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {exp.description[language]}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
