import type React from "react"
import type { Metadata } from "next"
import { Rethink_Sans } from "next/font/google"
import "./globals.css"
import ScrollAnimations from "@/components/common/ScrollAnimations"

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink-sans",
})

export const metadata: Metadata = {
  title: "Aquarious Technology - AI-Powered Global Software Solutions Partner",
  description:
    "We build intelligent systems that automate, optimize, and scale - trusted by global businesses for secure, AI-driven growth.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rethinkSans.variable} antialiased`}>
      <body>
        <ScrollAnimations />
        {children}
      </body>
    </html>
  )
}
