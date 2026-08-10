'use client'

import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, BriefcaseBusiness, Code2, Download, ExternalLink, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { approach, awards, contactLinks, education, experiences, getProject, navItems, profile, profileLong, profileSummary, projects, skillGroups, trainings, type Project } from '@/data/portfolio'

const ButtonLink = ({ href, children, secondary = false, download }: { href: string; children: React.ReactNode; secondary?: boolean; download?: string | boolean }) => {
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${secondary ? 'border border-border bg-card/40 text-foreground hover:border-primary/50 hover:bg-card' : 'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10'}`
  if (download !== undefined) {
    return <a href={href} download={download === true ? undefined : download} className={className}>{children}</a>
  }
  return <Link href={href} className={className}>{children}</Link>
}

function ProfilePhoto({ priority = false, className = '' }: { priority?: boolean; className?: string }) {
  return (
    <figure className={`relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:mx-0 lg:max-w-none ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card/40 shadow-lg shadow-cyan-400/5">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
          className="object-cover object-top"
        />
      </div>
      <figcaption className="mt-3 text-center lg:text-left">
        <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{profile.role}</p>
      </figcaption>
    </figure>
  )
}

export function ThemeToggle() {
  const [dark, setDark] = useState(true)
  const toggle = () => { document.documentElement.classList.toggle('dark', !dark); setDark(!dark) }
  return <button aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggle} className="rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8"><Link href="#home" className="font-mono text-sm font-bold tracking-tight"><span className="text-primary">KF</span><span className="text-muted-foreground"> / portfolio</span></Link><nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">{item.label}</Link>)}<ThemeToggle /></nav><div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)} className="rounded-full border border-border p-2 text-muted-foreground">{open ? <X size={18} /> : <Menu size={18} />}</button></div></div><AnimatePresence>{open && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-border/60 px-5 md:hidden"><div className="flex flex-col gap-1 py-4">{navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-card hover:text-foreground">{item.label}</Link>)}</div></motion.nav>}</AnimatePresence></header>
}

export function Hero() { return <section id="home" className="relative overflow-hidden px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48"><div className="pointer-events-none absolute right-0 top-28 h-80 w-80 rounded-full border border-cyan-400/10 [mask-image:linear-gradient(to_bottom,black,transparent)]" /><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><p className="mb-6 font-mono text-sm text-cyan-300">Hello, I&apos;m Kumara.</p><h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-8xl">I build thoughtful software for real-world workflows.</h1><p className="mt-8 max-w-xl text-pretty text-base leading-7 text-muted-foreground lg:text-lg">{profileSummary}</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="#projects">View my projects <ArrowUpRight size={16} /></ButtonLink><ButtonLink href={profile.cv} download="Kumara-Fawwas-Abhista-CV.pdf" secondary>Download CV <Download size={16} /></ButtonLink></div><div className="mt-8 flex items-center gap-4 text-muted-foreground"><a aria-label="GitHub" href={profile.github} className="transition hover:text-foreground"><BriefcaseBusiness size={18} /></a><a aria-label="LinkedIn" href={profile.linkedin} className="transition hover:text-foreground"><BriefcaseBusiness size={18} /></a><a aria-label="Email" href={`mailto:${profile.email}`} className="transition hover:text-foreground"><Mail size={18} /></a><span className="h-px w-10 bg-border" /><span className="font-mono text-xs">open to opportunities</span></div></motion.div><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .15 }} className="flex flex-col gap-8 lg:gap-10"><ProfilePhoto priority className="lg:max-w-[320px]" /><div className="border-l border-cyan-400/40 pl-5"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Current focus</p><p className="mt-3 max-w-xs text-xl leading-8">Frontend craft, full-stack systems, and software that stays useful after launch.</p><p className="mt-6 font-mono text-xs text-cyan-300"></p></div></motion.div></div></section> }

function ProjectVisual({ project, index }: { project: Project; index: number }) { const violet = project.accent === 'violet'; return <div className={`relative flex min-h-64 flex-col justify-between overflow-hidden border-b border-border bg-gradient-to-br ${violet ? 'from-violet-500/20' : 'from-cyan-500/20'} via-background to-background p-6`}><div className="absolute right-5 top-5 font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</div><div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{project.category}</div><div><div className={`mb-3 h-1 w-12 ${violet ? 'bg-violet-400' : 'bg-cyan-400'}`} /><p className="font-mono text-2xl font-bold tracking-tight">{project.name.split(' ').slice(0, 2).join(' ')}</p><p className="mt-1 text-sm text-muted-foreground">{project.eyebrow.toLowerCase()}</p></div></div> }

function ProjectActions({ project }: { project: Project }) {
  const accentText = project.accent === 'violet' ? 'text-violet-300' : 'text-cyan-300'
  const accentHover = project.accent === 'violet' ? 'hover:border-violet-400/50 hover:text-violet-300' : 'hover:border-cyan-400/50 hover:text-cyan-300'

  return (
    <div className="mt-7 flex flex-wrap items-center gap-2.5">
      <Link href={`/projects/${project.slug}`} className={`group inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition ${accentHover}`}>
        View case study <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition ${accentHover}`}>
          Live demo <ExternalLink size={14} />
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition ${accentHover}`}>
          GitHub <Code2 size={14} />
        </a>
      )}
      <span className={`ml-auto hidden font-mono text-xs sm:inline ${accentText}`}>project links</span>
    </div>
  )
}

export function ProjectsSection() { return <section id="projects" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-sm text-cyan-300">01 / selected work</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Projects that connect<br className="hidden sm:block" /> people, data, and process.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">A selection of projects across admissions, sales, reporting, and full-stack web development.</p></div><div className="grid gap-6 lg:grid-cols-2">{projects.map((project, index) => <motion.article key={project.slug} whileHover={{ y: -5 }} className="overflow-hidden rounded-2xl border border-border bg-card/50"><ProjectVisual project={project} index={index} /><div className="p-6"><p className="font-mono text-xs text-muted-foreground">{project.eyebrow}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{technology}</span>)}</div><ProjectActions project={project} /></div></motion.article>)}</div></div></section> }

export function AboutSection() { return <section id="about" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="font-mono text-sm text-violet-300">02 / about me</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">A systems thinker who likes to ship.</h2></div><div><p className="max-w-2xl text-xl leading-9 text-foreground/90">{profileLong}</p><div className="mt-10 grid gap-5 border-t border-border pt-6 sm:grid-cols-2"><div><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Background</p><p className="mt-2 text-sm">{profile.university}<br />{profile.role}</p></div><div><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Availability</p><p className="mt-2 text-sm">Open to software development, web development, IT, and related opportunities.</p></div></div></div></div></section> }

export function SkillsSection() { return <section id="skills" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><div className="mb-12"><p className="font-mono text-sm text-cyan-300">03 / toolkit</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Practical tools.<br />Clear outcomes.</h2></div><div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{skillGroups.map((group) => <div key={group.label} className="bg-background p-5"><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{group.label}</p><ul className="mt-5 space-y-3">{group.items.map((item) => <li key={item} className="text-sm">{item}</li>)}</ul></div>)}</div></div></section> }

export function EducationSection() { return <section id="education" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm text-violet-300">04 / education</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Grounded in systems,<br />curious about craft.</h2><div className="mt-10 max-w-xl border-l border-violet-400/50 pl-5"><p className="font-mono text-xs text-muted-foreground">ACADEMIC BACKGROUND</p><h3 className="mt-3 text-xl font-semibold">{education[0].institution}</h3><p className="mt-1 text-muted-foreground">{education[0].program}</p><p className="mt-4 text-sm text-muted-foreground">{education[0].detail}</p>{education[0].gpa && <p className="mt-2 text-sm text-muted-foreground">GPA: {education[0].gpa}</p>}</div></div></section> }

function ExperienceList({ items, heading }: { items: typeof experiences; heading: string }) {
  if (items.length === 0) return null
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{heading}</p>
      <ul className="mt-6 space-y-8">{items.map((item, index) => (
        <li key={`${item.role}-${item.organization}-${index}`} className="border-l border-cyan-400/50 pl-5">
          <p className="font-mono text-xs text-cyan-300">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
          {item.description && <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>}
        </li>
      ))}</ul>
    </div>
  )
}

export function ExperienceSection() {
  const work = experiences.filter((item) => item.type === 'work')
  const organization = experiences.filter((item) => item.type === 'organization')
  return (
    <section id="experience" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-cyan-300">05 / experience</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Work &amp; organization<br />experience.</h2>
        <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">Professional roles and campus organization contributions across development and academic support.</p>
        <div className="mt-12 space-y-16">
          <ExperienceList items={work} heading="Work experience" />
          <ExperienceList items={organization} heading="Organization experience" />
        </div>
      </div>
    </section>
  )
}

export function AwardsTrainingSection() {
  return (
    <section id="awards-training" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12"><p className="font-mono text-sm text-violet-300">06 / recognition</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Awards &amp; training.</h2></div>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Awards</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">{awards.map((award) => (
              <li key={`${award.title}-${award.year}`} className="py-5">
                <div className="flex items-start justify-between gap-4"><div><h3 className="text-base font-semibold">{award.title}</h3><p className="mt-1 text-sm text-muted-foreground">{award.issuer}</p>{award.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{award.description}</p>}</div><span className="shrink-0 font-mono text-xs text-violet-300">{award.year}</span></div>
              </li>
            ))}</ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Training</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">{trainings.map((training) => (
              <li key={`${training.title}-${training.year}`} className="py-5">
                <div className="flex items-start justify-between gap-4"><div><h3 className="text-base font-semibold">{training.title}</h3><p className="mt-1 text-sm text-muted-foreground">{training.provider}</p>{training.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{training.description}</p>}</div><span className="shrink-0 font-mono text-xs text-cyan-300">{training.year}</span></div>
              </li>
            ))}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowIWorkSection() { return <section id="approach" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm text-cyan-300">07 / how I work</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Make the problem<br />smaller first.</h2><ol className="mt-10 max-w-2xl divide-y divide-border border-y border-border">{approach.map((step, index) => <li key={step} className="flex items-center gap-5 py-4"><span className="font-mono text-xs text-cyan-300">0{index + 1}</span><span className="text-sm">{step}</span></li>)}</ol></div></section> }

export function ContactSection() { return <section id="contact" className="border-t border-border px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm text-cyan-300">08 / contact</p><div className="mt-4 flex flex-col justify-between gap-10 md:flex-row md:items-end"><h2 className="max-w-2xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">Let&apos;s build something useful.</h2><p className="max-w-xs text-sm leading-6 text-muted-foreground">Have a role, project, or problem worth discussing? I&apos;d be glad to hear from you.</p></div><div className="mt-14 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">{contactLinks.map((link) => <a key={link.label} href={link.href} className="group flex items-center justify-between rounded-xl border border-border p-4 transition hover:border-cyan-400/50"><span><span className="block font-mono text-xs text-muted-foreground">{link.label}</span><span className="mt-1 block text-sm">{link.value}</span></span><ArrowUpRight size={16} className="text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" /></a>)}</div></div></section> }

export function Footer() { return <footer className="border-t border-border px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row"><p className="font-mono">Kumara Fawwas Abhista</p><p>Built with Next.js and TypeScript · © {new Date().getFullYear()} Kumara Fawwas</p></div></footer> }

export function ProjectCaseStudy({ slug }: { slug: string }) { const project = getProject(slug); if (!project) return <main className="mx-auto max-w-3xl px-5 pb-24 pt-40"><Link href="/#projects" className="text-sm text-cyan-300">← Back to projects</Link><h1 className="mt-12 text-5xl font-semibold">Project not found</h1></main>; const accentHover = project.accent === 'violet' ? 'hover:border-violet-400/50 hover:text-violet-300' : 'hover:border-cyan-400/50 hover:text-cyan-300'; return <main className="mx-auto max-w-6xl px-5 pb-24 pt-36 lg:px-8 lg:pt-48"><Link href="/#projects" className="font-mono text-sm text-cyan-300">← Back to portfolio</Link><div className="mt-12 max-w-4xl"><p className="font-mono text-sm text-cyan-300">case study / {project.category}</p><h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{project.name}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{project.description}</p><div className="mt-8 flex flex-wrap gap-2.5">{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition ${accentHover}`}>Live demo <ExternalLink size={15} /></a>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition ${accentHover}`}>GitHub <Code2 size={15} /></a>}</div></div><div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.65fr]"><div className="space-y-12">{[['Overview', project.overview], ['Problem', project.problem], ['Objective', project.objective], ['Solution', project.solution], ['Architecture', project.architecture], ['Challenges', project.challenges], ['Outcome', project.outcome]].map(([label, text]) => <section key={label}><h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</h2><p className="mt-3 max-w-2xl text-lg leading-8">{text}</p></section>)}</div><aside className="h-fit rounded-2xl border border-border bg-card/40 p-6 lg:sticky lg:top-28"><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Technology stack</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{technology}</span>)}</div><p className="mt-10 font-mono text-xs uppercase tracking-wider text-muted-foreground">Key features</p><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{project.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-cyan-300">—</span>{feature}</li>)}</ul><p className="mt-10 font-mono text-xs uppercase tracking-wider text-muted-foreground">Development process</p><ol className="mt-4 space-y-3 text-sm text-muted-foreground">{project.process.map((step, index) => <li key={step} className="flex gap-3"><span className="font-mono text-cyan-300">0{index + 1}</span>{step}</li>)}</ol></aside></div></main> }

export function PortfolioPage() { return <><Navigation /><main><Hero /><ProjectsSection /><AboutSection /><SkillsSection /><EducationSection /><ExperienceSection /><AwardsTrainingSection /><HowIWorkSection /><ContactSection /></main><Footer /></> }
