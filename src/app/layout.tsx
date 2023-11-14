import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import { Header } from '@/components/layout/header/Header'
import { Layout } from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GROMOV',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout children={children} />
      </body>
    </html>
  )
}
