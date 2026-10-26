import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: 'Kumara Fawwas Abhista — Full-Stack Web Developer & Information Systems Graduate',
  description:
    'Portofolio resmi Kumara Fawwas Abhista. Lulusan Sistem Informasi Universitas Ahmad Dahlan dengan spesialisasi Full-Stack Web Development (React, Next.js, Node.js, Express, PostgreSQL).',
  generator: 'Next.js',
  keywords: [
    'Kumara Fawwas Abhista',
    'Full-Stack Developer',
    'Frontend Developer',
    'Next.js',
    'React',
    'Universitas Ahmad Dahlan',
    'Web Developer Indonesia',
    'Portofolio Developer',
  ],
  authors: [{ name: 'Kumara Fawwas Abhista' }],
  openGraph: {
    title: 'Kumara Fawwas Abhista — Full-Stack Web Developer',
    description:
      'Portofolio resmi Kumara Fawwas Abhista. Membangun aplikasi web dan sistem modern, cepat, dan berdampak.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kumara Fawwas Abhista — Full-Stack Web Developer',
    description:
      'Portofolio resmi Kumara Fawwas Abhista. Membangun aplikasi web dan sistem modern, cepat, dan berdampak.',
  },
}

export const viewport: Viewport = { colorScheme: 'dark light', themeColor: '#0a0d12' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="antialiased min-h-screen bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
