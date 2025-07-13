import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Star Access',
  description: 'Created By Noval ',
  generator: 'Vs code',
  icons: {
    icon: '/logo-starnet.png',
    shortcut: '/logo-starnet.png',
    apple: '/logo-starnet.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}