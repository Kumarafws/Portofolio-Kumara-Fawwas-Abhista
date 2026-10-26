'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, ExternalLink, Code2, Sparkles, Eye, Terminal } from 'lucide-react'
import { projectsData, sectionHeaders, ProjectItem } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'
import { ProjectQuickViewModal } from './project-quick-view-modal'

export function ProjectsSection() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].projects
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend'>('all')
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null)

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true
    return project.categoryKey === filter
  })

  return (
    <section id="projects" className="py-24 border-t border-border/80 relative">
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <Sparkles size={13} />
              <span>{text.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              {text.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {text.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl border border-border bg-card/60 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {text.allFilter}
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filter === 'fullstack'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {text.fullstackFilter}
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filter === 'frontend'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              {text.frontendFilter}
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isViolet = project.accent === 'violet'

              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
                >
                  {/* Card Visual Header / Mockup Banner */}
                  <div
                    className={`relative h-44 w-full p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${
                      isViolet
                        ? 'from-violet-500/20 via-card to-card'
                        : 'from-cyan-500/20 via-card to-card'
                    } border-b border-border/80`}
                  >
                    {/* Background abstract grid lines */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                    {/* Top line with category & badge */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {project.categoryKey.toUpperCase()}
                      </span>
                      {project.badge && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                            isViolet
                              ? 'bg-violet-500/15 text-violet-300 border-violet-500/30'
                              : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                          }`}
                        >
                          {project.badge[language]}
                        </span>
                      )}
                    </div>

                    {/* Visual Icon & Name in banner */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className={`p-1.5 rounded-lg ${
                            isViolet ? 'bg-violet-500/20 text-violet-300' : 'bg-cyan-500/20 text-cyan-300'
                          }`}
                        >
                          <Terminal size={16} />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">
                          {project.technologies.slice(0, 2).join(' · ')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-cyan-400 transition">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-mono text-cyan-300 mb-2">
                        {project.tagline[language]}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description[language]}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-muted/70 text-foreground border border-border/70"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-muted-foreground bg-muted/40">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white border border-cyan-500/30 text-xs font-semibold transition"
                            title="Buka Demo Langsung"
                          >
                            <span>Demo</span>
                            <ExternalLink size={12} />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/60 hover:bg-card hover:text-cyan-400 text-muted-foreground text-xs font-semibold transition"
                            title="Lihat Source Code GitHub"
                          >
                            <Code2 size={13} />
                            <span>Code</span>
                          </a>
                        )}
                      </div>

                      {/* Quick View Button */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-cyan-400 transition"
                      >
                        <Eye size={13} />
                        <span>{text.quickView}</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <ProjectQuickViewModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  )
}
