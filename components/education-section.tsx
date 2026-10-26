'use client'

import { motion } from 'motion/react'
import { Sparkles, GraduationCap, Award, CheckCircle } from 'lucide-react'
import { personalInfo, awardsData, sectionHeaders } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

export function EducationSection() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].education

  return (
    <section id="education" className="py-24 border-t border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-3">
            <Sparkles size={13} />
            <span>{text.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {text.title}
          </h2>
        </div>

        {/* Dual Bento Grid: Education & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Formal Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
            className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <GraduationCap size={15} className="text-cyan-400" />
                  <span>{text.academicLabel}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  IPK {personalInfo.gpa.split(' ')[0]}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                {personalInfo.university}
              </h3>

              <p className="mt-1 text-sm text-cyan-300 font-medium">
                {personalInfo.major[language]}
              </p>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {language === 'id'
                  ? 'Fokus pada rekayasa perangkat lunak, sistem basis data, analisis proses bisnis, serta integrasi teknologi informasi untuk mendukung operasi organisasi modern.'
                  : 'Focused on software engineering, relational database systems, business process analysis, and modern web application development.'}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>{personalInfo.graduationStatus[language]}</span>
              <span>Skala 4.00</span>
            </div>
          </motion.div>

          {/* Honors & Recognition Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between border-violet-500/20"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Award size={15} className="text-violet-400" />
                  <span>{text.awardsLabel}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  2025
                </span>
              </div>

              {awardsData.map((award, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    <span>🏆</span>
                    <span>{award.title[language]}</span>
                  </h3>

                  <p className="mt-1 text-sm text-violet-300 font-medium">
                    {award.issuer}
                  </p>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {award.description[language]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <CheckCircle size={14} className="text-violet-400" />
              <span>Capstone Project Excellence Award</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
