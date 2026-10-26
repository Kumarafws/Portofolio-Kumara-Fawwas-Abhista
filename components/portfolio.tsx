'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react'
import { Navbar } from './navbar'
import { HeroBento } from './hero-bento'
import { ProjectsSection } from './projects-section'
import { AboutSection } from './about-section'
import { SkillsSection } from './skills-section'
import { ExperienceSection } from './experience-section'
import { EducationSection } from './education-section'
import { ContactSection } from './contact-section'
import { Footer } from './footer'
import { projectsData } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1">
        <HeroBento />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { language } = useLanguage()
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold">
          {language === 'id' ? 'Proyek Tidak Ditemukan' : 'Project Not Found'}
        </h1>
        <Link
          href="/#projects"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition"
        >
          <ArrowLeft size={16} />
          <span>{language === 'id' ? 'Kembali ke Beranda' : 'Back to Portfolio'}</span>
        </Link>
      </div>
    )
  }

  const isViolet = project.accent === 'violet'

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition mb-8"
        >
          <ArrowLeft size={14} />
          <span>{language === 'id' ? 'Kembali ke Galeri Proyek' : 'Back to Projects'}</span>
        </Link>

        {/* Case Study Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div
            className={`absolute top-0 inset-x-0 h-1.5 ${
              isViolet
                ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500'
                : 'bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500'
            }`}
          />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.badge[language]}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {project.name}
          </h1>

          <p className="mt-2 text-sm sm:text-base font-mono text-cyan-300">
            {project.tagline[language]}
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.description[language]}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold text-sm shadow-md hover:shadow-cyan-500/25 transition"
              >
                <span>{language === 'id' ? 'Kunjungi Demo Langsung' : 'Live Demo'}</span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card/60 text-foreground font-semibold text-sm hover:border-cyan-400/50 hover:bg-card transition"
              >
                <Code2 size={16} />
                <span>Source Code (GitHub)</span>
              </a>
            )}
          </div>

          {/* Highlights */}
          <div className="mt-12 pt-8 border-t border-border/70">
            <h2 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span>{language === 'id' ? 'Fitur & Kemampuan Utama' : 'Key Capabilities & Highlights'}</span>
            </h2>
            <ul className="space-y-3">
              {project.highlights[language].map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 size={17} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-10 pt-8 border-t border-border/70">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              {language === 'id' ? 'Teknologi & Stack' : 'Technologies & Stack'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-muted/80 text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
