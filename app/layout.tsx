import { cn } from "@/lib/utils";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lukáš Franc Photography',
  description: 'Jsem fotograf z Plzeňského kraje a rád fotím přírodu ve všech jejích podobách. Baví mě také fotit detaily v přírodě či ve městě.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={cn("bg-[#13100E] h-screen", inter.className)}>{children}</body>
    </html>
  )
}
