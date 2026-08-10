import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { metadata as portfolioMetadata } from '@/data/portfolio'

export const metadata: Metadata = {
  title: portfolioMetadata.title,
  description: portfolioMetadata.description,
  generator: 'Next.js',
  openGraph: { title: portfolioMetadata.title, description: portfolioMetadata.description, type: 'website' },
  twitter: { card: 'summary_large_image', title: portfolioMetadata.title, description: portfolioMetadata.description },
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#0a0d12' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
