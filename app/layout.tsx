import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swarada Deshpande | Backend Engineer & ML Systems',
  description: 'Backend systems, ML pipelines, and the civic-tech problems in between. 3rd-year CSE student at MMCOE, Pune.',
  generator: 'v0.app',
  keywords: ['Backend Engineer', 'Machine Learning', 'Full Stack Developer', 'Data Science'],
  authors: [{ name: 'Swarada Deshpande' }],
  openGraph: {
    title: 'Swarada Deshpande | Backend Engineer & ML Systems',
    description: 'Backend systems, ML pipelines, and civic-tech solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background scroll-smooth">
      <head>
        <style>{`
          html, body {
            background-color: #0a0e14;
          }
        `}</style>
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
