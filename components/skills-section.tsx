'use client'

import { motion } from 'motion/react'
import { Sparkles, Terminal, Code2, Database, Wrench, GitBranch } from 'lucide-react'
import { skillCategories, sectionHeaders } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

export function SkillsSection() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].skills
  const categories = skillCategories[language]

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 size={18} className="text-cyan-400" />
      case 1:
        return <Terminal size={18} className="text-violet-400" />
      case 2:
        return <Database size={18} className="text-emerald-400" />
      case 3:
        return <Wrench size={18} className="text-amber-400" />
      default:
        return <GitBranch size={18} className="text-sky-400" />
    }
  }

  return (
    <section id="skills" className="py-24 border-t border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <Sparkles size={13} />
            <span>{text.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {text.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {text.subtitle}
          </p>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, idx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-card border border-border">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {category.label}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-muted/60 text-foreground border border-border/70 hover:border-cyan-400/50 hover:bg-muted transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                {category.skills.length} competencies
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
