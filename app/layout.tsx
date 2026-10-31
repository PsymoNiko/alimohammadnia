import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://alimohammadnia.ir"),
  title: "Ali Mohammadnia | DevOps & Python Backend Engineer",
  description:
    "Portfolio of Ali Mohammadnia, focused on DevOps, " +
    "infrastructure engineering, Python backend development, " +
    "automation, observability, and reliability.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ali Mohammadnia | DevOps & Python Backend Engineer",
    description:
      "DevOps, infrastructure engineering, Python backend development, automation, observability, and reliability.",
    url: "https://alimohammadnia.ir",
    siteName: "Ali Mohammadnia",
    type: "website",
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Mohammadnia",
  alternateName: ["علی محمدنیا", "PsymoNiko"],
  url: "https://alimohammadnia.ir",
  email: "alimohammadnia127@gmail.com",
  jobTitle: "DevOps & Infrastructure Engineer",
  knowsAbout: [
    "DevOps",
    "Infrastructure Engineering",
    "Python",
    "Django",
    "Docker",
    "Linux",
    "Nginx",
    "GitLab CI/CD",
    "Prometheus",
    "Grafana",
  ],
  sameAs: [
    "https://github.com/PsymoNiko",
    "https://www.linkedin.com/in/psymoniko/",
    "https://beanscoin.cafe",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
