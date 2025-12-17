import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PsymoNiko | Backend Developer Portfolio",
  description:
    "Ali Mohammadnia - Backend Web Developer specializing in Django, Python, Docker, and cloud deployments. Building scalable systems and innovative solutions.",
  keywords: [
    "Backend Developer",
    "Django",
    "Python",
    "Docker",
    "AWS",
    "Full Stack",
    "Portfolio",
    "PsymoNiko",
    "Ali Mohammadnia",
  ],
  authors: [{ name: "Ali Mohammadnia", url: "https://github.com/PsymoNiko" }],
  creator: "PsymoNiko",
  openGraph: {
    type: "website",
    title: "PsymoNiko | Backend Developer Portfolio",
    description: "Backend Web Developer specializing in Django, Python, and cloud deployments.",
    siteName: "PsymoNiko Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "PsymoNiko | Backend Developer Portfolio",
    description: "Backend Web Developer specializing in Django, Python, and cloud deployments.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#4ade80",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
