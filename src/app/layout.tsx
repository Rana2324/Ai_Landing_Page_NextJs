import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pointer - Unleash the Power of AI Agents',
  description: 'Accelerate your development workflow with intelligent AI agents that write, review, and optimize your code in real-time.',
  keywords: ['AI', 'Development', 'Code', 'Agents', 'Productivity', 'Programming'],
  authors: [{ name: 'Pointer Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
