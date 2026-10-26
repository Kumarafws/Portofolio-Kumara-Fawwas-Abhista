'use client'

import { motion } from 'motion/react'
import { Sparkles, Compass, Cpu, Database, CheckCircle, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { sectionHeaders, personalInfo } from '@/data/portfolio-content'

export function AboutSection() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].about

  const pillars = language === 'id' ? [
    {
      icon: Compass,
      title: 'Analisis Kebutuhan & Proses Bisnis',
      desc: 'Menganalisis alur kerja organisasi dan merancangnya menjadi solusi digital yang tepat guna menggunakan pemodelan UML.',
    },
    {
      icon: Cpu,
      title: 'Frontend Cepat & Interaktif',
      desc: 'Membangun antarmuka modern yang nyaman bagi pengguna dengan React.js, Next.js, dan Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Backend & Integrasi API',
      desc: 'Mengembangkan endpoint REST API yang aman dan terstruktur dengan Express.js serta manipulasi data PostgreSQL.',
    },
    {
      icon: CheckCircle,
      title: 'Pengujian & Delivery Bersih',
      desc: 'Menjamin kualitas kode melalui pengujian alur fungsional, dokumentasi arsitektur, dan kemudahan pemeliharaan.',
    },
  ] : [
    {
      icon: Compass,
      title: 'Requirements & Workflow Analysis',
      desc: 'Deconstructing real-world business challenges into structured digital architectures using UML modeling.',
    },
    {
      icon: Cpu,
      title: 'Responsive & Accessible Frontend',
      desc: 'Crafting performant and intuitive user interfaces using React.js, Next.js, and modern styling techniques.',
    },
    {
      icon: Database,
      title: 'Backend Architecture & APIs',
      desc: 'Developing secure, modular RESTful APIs with Node.js/Express.js backed by relational SQL schemas.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Testing & Delivery',
      desc: 'Ensuring code reliability with workflow validation, clean architecture practices, and seamless deployment.',
    },
  ]

  return (
    <section id="about" className="py-24 border-t border-border/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-3">
              <Sparkles size={13} />
              <span>{text.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              {text.title}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {text.description}
            </p>

            {/* Quick Metadata Highlights */}
            <div className="mt-8 space-y-3 pt-6 border-t border-border/80">
              {text.highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-border/50 text-xs">
                  <span className="font-mono text-muted-foreground uppercase tracking-wider">{item.label}</span>
                  <span className="font-semibold text-foreground mt-1 sm:mt-0">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Bento Pillars Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15 text-cyan-400 border border-cyan-500/20 mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/80">
                    <span>0{idx + 1} / Core Pillar</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
