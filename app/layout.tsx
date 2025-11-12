import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nemawari Silk Mills - Surat\'s Trusted Manufacturer & Wholesaler',
  description: 'High-quality sarees, kurtis, blouses, and petticoats from Surat. Wholesale prices starting from ₹100. Fresh collections and bulk discounts available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
