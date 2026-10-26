'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react'
import { ProjectItem, sectionHeaders } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

interface ProjectQuickViewModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export function ProjectQuickViewModal({ project, onClose }: ProjectQuickViewModalProps) {
  const { language } = useLanguage()
  const text = sectionHeaders[language].projects

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl rounded-3xl border border-border/80 bg-card/95 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Top ambient accent line */}
          <div
            className={`absolute top-0 inset-x-0 h-1.5 ${
              project.accent === 'violet'
                ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500'
                : 'bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500'
            }`}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Tutup modal"
            className="absolute top-5 right-5 p-2 rounded-full border border-border bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {project.badge[language]}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-cyan-300 font-mono">
              {project.tagline[language]}
            </p>
          </div>

          {/* Short Description */}
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.description[language]}
          </p>

          {/* Highlights */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold mb-3 flex items-center gap-1.5">
              <Sparkles size={14} className="text-cyan-400" />
              <span>{text.highlightsTitle}</span>
            </h4>
            <ul className="space-y-2.5">
              {project.highlights[language].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-6 pt-5 border-t border-border/70">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              {text.techTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-muted/80 text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-border/70">
            <div className="flex flex-wrap items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition"
                >
                  <span>{text.viewDemo}</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-muted/60 text-foreground font-semibold text-xs hover:border-cyan-400/50 hover:bg-muted transition"
                >
                  <Code2 size={14} />
                  <span>{text.viewCode}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground transition"
            >
              {text.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
