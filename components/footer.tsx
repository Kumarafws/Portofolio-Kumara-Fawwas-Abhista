'use client'

import { ArrowUp } from 'lucide-react'
import { personalInfo, sectionHeaders } from '@/data/portfolio-content'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { language } = useLanguage()
  const text = sectionHeaders[language].footer

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border/80 py-10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-mono font-semibold text-foreground">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline">·</span>
            <span>© {new Date().getFullYear()} {text.rights}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-muted-foreground/80">
              {text.builtWith}
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/50 transition shadow-sm"
              title="Kembali ke atas"
              aria-label="Kembali ke atas"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
