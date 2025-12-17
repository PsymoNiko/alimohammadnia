"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { IntroLoader } from "@/components/intro-loader"
import { AnimatedLogo } from "@/components/animated-logo"
import { SkillsMarquee } from "@/components/skills-marquee"
import { CreativeProjectsGrid } from "@/components/creative-projects-grid"
import { MouseGradient } from "@/components/mouse-gradient"
import { LiquidSection } from "@/components/liquid-section"
import { Github, Mail, ArrowUpRight, Linkedin } from "lucide-react"

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
        <CreativeProjectsGrid projects={featuredProjects} />
      </LiquidSection>

      {/* About Section - Liquid overlay */}
      <LiquidSection id="about" bgColor="bg-background" zIndex={30} className="-mt-8">
        <div className="py-24 md:py-36">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-6">About</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
                  Building digital
                  <br />
                  <span className="text-primary">experiences</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  I design and develop interactive experiences that break away from sterile patterns, reintroducing
                  delight and genuine engagement into everyday technology. Passionate about clean code, performance, and
                  user experience.
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-7xl md:text-9xl font-black text-primary leading-none">5+</span>
                  <span className="text-muted-foreground uppercase tracking-[0.25em] text-sm leading-relaxed">
                    Years
                    <br />
                    Experience
                  </span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4">
                {["UX/UI", "WEB", "MOBILE", "MOTION", "BACKEND", "DEVOPS", "API", "DATABASE", "CLOUD"].map(
                  (skill, index) => (
                    <div
                      key={skill}
                      className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center p-4 hover:border-primary hover:bg-primary/5 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] transition-all duration-500 group cursor-default"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-xs md:text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider text-center">
                        {skill}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </LiquidSection>

      {/* Contact Section - Liquid overlay */}
      <LiquidSection id="contact" bgColor="bg-card" zIndex={40} className="-mt-8">
        <div className="py-24 md:py-36">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-6">Get in Touch</span>
              <h2 className="text-5xl md:text-7xl lg:text-9xl font-black text-foreground mb-16 leading-[0.9] text-balance">
                {"Let's build"}
                <br />
                <span className="text-primary">together</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                <a
                  href="mailto:your.email@example.com"
                  className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-3 hover:shadow-[0_0_50px_rgba(74,222,128,0.4)] transition-all duration-500"
                >
                  <Mail className="w-5 h-5" />
                  <span className="uppercase tracking-[0.15em] text-sm">Start a Project</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href="https://github.com/PsymoNiko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 border-2 border-border rounded-full font-bold flex items-center gap-3 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
                >
                  <Github className="w-5 h-5" />
                  <span className="uppercase tracking-[0.15em] text-sm">GitHub</span>
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-muted-foreground">
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  hello@psymoniko.dev
                </a>
                <span className="hidden md:block w-2 h-2 rounded-full bg-primary/50" />
                <a
                  href="https://github.com/PsymoNiko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  github.com/psymoniko
                </a>
                <span className="hidden md:block w-2 h-2 rounded-full bg-primary/50" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border py-10">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Footer GIF Logo */}
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
                <img
                  src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
                  alt="PsymoNiko"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Ali Mohammadnia. All rights reserved.
              </span>
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/PsymoNiko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </LiquidSection>
    </div>
  )
}
