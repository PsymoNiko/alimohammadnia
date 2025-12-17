"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { IntroLoader } from "@/components/intro-loader"
import { AnimatedLogo } from "@/components/animated-logo"
import { SkillsMarquee } from "@/components/skills-marquee"
import { FeaturedWorkSection } from "@/components/featured-work-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MouseGradient } from "@/components/mouse-gradient"
import { LiquidSection } from "@/components/liquid-section"

const featuredProjects = [
  {
    name: "Project Alpha",
    description:
      "A modern web application built with Next.js and TypeScript featuring real-time updates and seamless UX",
    image: "/modern-dark-web-dashboard-with-charts-and-data-vis.jpg",
    language: "TypeScript",
    stars: 42,
    forks: 12,
    url: "https://github.com/PsymoNiko",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Dev Toolkit",
    description: "Collection of utility functions and components for rapid development workflows",
    image: "/code-editor-dark-theme-with-syntax-highlighting.jpg",
    language: "JavaScript",
    stars: 28,
    forks: 8,
    url: "https://github.com/PsymoNiko",
    tags: ["React", "Node.js", "CLI"],
  },
  {
    name: "API Engine",
    description: "High-performance REST API built with modern backend technologies and best practices",
    image: "/server-architecture-diagram-dark-mode-with-green-a.jpg",
    language: "Python",
    stars: 35,
    forks: 15,
    url: "https://github.com/PsymoNiko",
    tags: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    name: "UI Library",
    description: "Beautiful, accessible UI components for React applications with full customization",
    image: "/ui-components-library-design-system-dark-theme-gre.jpg",
    language: "TypeScript",
    stars: 56,
    forks: 22,
    url: "https://github.com/PsymoNiko",
    tags: ["React", "Storybook", "A11y"],
  },
  {
    name: "Data Viz",
    description: "Interactive data visualization library with charts, graphs, and real-time updates",
    image: "/data-visualization-charts-neon-green-dark-backgrou.jpg",
    language: "JavaScript",
    stars: 19,
    forks: 6,
    url: "https://github.com/PsymoNiko",
    tags: ["D3.js", "Canvas", "WebGL"],
  },
  {
    name: "CLI Tools",
    description: "Command-line utilities to boost developer productivity and automate workflows",
    image: "/terminal-command-line-interface-dark-green-matrix-.jpg",
    language: "Go",
    stars: 31,
    forks: 9,
    url: "https://github.com/PsymoNiko",
    tags: ["Go", "Cobra", "Automation"],
  },
]

export default function Portfolio() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <MouseGradient />

      {/* Intro Loader */}
      {!introComplete && <IntroLoader onComplete={() => setIntroComplete(true)} />}

      {/* Navbar */}
      <Navbar isVisible={introComplete} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedLogo isVisible={introComplete} />
        </div>

        {/* Skills Marquee */}
        <div className="mt-auto">
          <SkillsMarquee />
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex justify-center py-10 transition-all duration-700 delay-1000 ${
            introComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <span className="text-xs uppercase tracking-[0.4em]">Scroll to explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-primary via-primary/50 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Projects Section - Liquid overlay */}
      <LiquidSection id="work" bgColor="bg-card" zIndex={20} className="-mt-8">
        <FeaturedWorkSection projects={featuredProjects} />
      </LiquidSection>

      {/* Experience Section - Liquid overlay */}
      <LiquidSection id="about" bgColor="bg-background" zIndex={30} className="-mt-8">
        <ExperienceSection />
      </LiquidSection>

      {/* Contact Section - Liquid overlay */}
      <LiquidSection id="contact" bgColor="bg-card" zIndex={40} className="-mt-8">
        <ContactSection />
        <Footer />
      </LiquidSection>
    </div>
  )
}
