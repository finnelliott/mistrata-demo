"use client";
import './globals.css'
import { Inter } from '@next/font/google'
import { ReactLenis } from '@studio-freight/react-lenis'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ReactLenis root>
    <html lang="en">
      <head />
      <body className={inter.className + " bg-white min-h-screen"} >
        {children}
      </body>
    </html>
    </ReactLenis>
  )
}
