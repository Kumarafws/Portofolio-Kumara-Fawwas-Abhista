import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectCaseStudy } from '@/components/portfolio'
import { projectsData } from '@/data/portfolio-content'

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  return {
    title: project ? `${project.name} — Kumara Fawwas Abhista` : 'Project not found — Kumara Fawwas Abhista',
    description: project?.description.id || project?.description.en,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) notFound()
  return <ProjectCaseStudy slug={slug} />
}
