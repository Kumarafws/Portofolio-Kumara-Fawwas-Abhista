import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectCaseStudy } from '@/components/portfolio'
import { getProject, projects } from '@/data/portfolio'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return { title: project ? `${project.name} — Kumara Fawwas` : 'Project not found — Kumara Fawwas', description: project?.description }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!getProject(slug)) notFound()
  return <ProjectCaseStudy slug={slug} />
}
