//root/src/app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Nav />
        <div className="ml-4 mr-4 mt-4 sm:ml-8 sm:mr-8 sm:mt-8 md:ml-16 md:mr-16 md:mt-16 lg:ml-[20%] lg:mr-[20%] lg:mt-[10%]">
          {children}
        </div>
      </body>
    </html>
  )
}
