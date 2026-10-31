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

const EMAIL = "alimohammadnia127@gmail.com"
const GITHUB_URL = "https://github.com/PsymoNiko"
const LINKEDIN_URL = "https://www.linkedin.com/in/psymoniko/"

const featuredProjects = [
  {
    name: "BeansCoin Cafe Platform",
    description:
      "Django REST cafe POS & loyalty platform: JWT auth, PostgreSQL, OpenAPI docs, hybrid Stripe + crypto payments.",
    image: "/api-server-architecture-dark-theme.jpg",
    language: "Python",
    url: "https://beanscoin.cafe",
    tags: ["Python", "Django", "PostgreSQL", "Docker"],
  },
  {
    name: "Infrastructure & CI/CD",
    description:
      "Containerized deployments with Docker, GitLab CI/CD pipelines, Nginx, container registries and artifact management on Linux servers.",
    image: "/server-architecture-diagram-dark-mode-with-green-a.jpg",
    language: "Dockerfile",
    url: "https://github.com/PsymoNiko?tab=repositories",
    tags: ["Docker", "GitLab CI/CD", "Nginx", "Linux"],
  },
  {
    name: "Media Streaming & Load Testing",
    description:
      "Live media streaming with MediaMTX and Nginx (HLS), validated with load testing to measure real capacity before deployment.",
    image: "/terminal-command-line-interface-dark-green-matrix-.jpg",
    language: "Shell",
    url: "https://github.com/PsymoNiko?tab=repositories",
    tags: ["MediaMTX", "HLS", "Nginx", "Load Testing"],
  },
  {
    name: "Monitoring & Observability",
    description:
      "Prometheus and Grafana monitoring, Node Exporter metrics, ELK log aggregation, Sentry error tracking, and production alerting.",
    image: "/data-visualization-charts-neon-green-dark.jpg",
    language: "YAML",
    url: "https://github.com/PsymoNiko?tab=repositories",
    tags: ["Prometheus", "Grafana", "ELK", "Sentry"],
  },
]

const skillGroups = [
  {
    title: "Infrastructure & DevOps",
    skills: ["Linux", "Docker", "Docker Compose", "Nginx", "GitLab CI/CD", "Ansible", "Networking", "TLS"],
  },
  {
    title: "Backend Engineering",
    skills: ["Python", "Django", "REST APIs", "PostgreSQL", "Redis", "RabbitMQ", "Kafka"],
  },
  {
    title: "Observability & Reliability",
    skills: ["Prometheus", "Grafana", "Node Exporter", "ELK", "Sentry", "Load Testing"],
  },
  {
    title: "Platform & Delivery",
    skills: ["GitHub", "GitLab", "Harbor", "Nexus", "CI/CD Pipelines", "Containerized Services"],
  },
  {
    title: "Additional Technologies",
    skills: ["Rust", "JavaScript", "Flutter", "MSSQL", "n8n"],
  },
]

const aboutThemes = [
  {
    title: "Backend Engineering",
    detail: "Python, Django, REST APIs, PostgreSQL, Redis, asynchronous services.",
  },
  {
    title: "Infrastructure Engineering",
    detail: "Linux, Docker, Nginx, CI/CD, networking, deployments, and operational troubleshooting.",
  },
  {
    title: "Reliability Mindset",
    detail: "Monitoring, logging, performance testing, automation, and maintainability.",
  },
]

const experience = [
  {
    company: "PNR",
    role: "Backend / DevOps Engineer",
    summary:
      "Backend development and infrastructure support, including CI/CD pipelines and containerized deployments.",
  },
  {
    company: "Nikamooz",
    role: "Backend / DevOps Engineer",
    summary:
      "Backend services and infrastructure operations, including deployment automation and production troubleshooting.",
  },
  {
    company: "Zarpay",
    role: "Backend / DevOps Engineer",
    summary:
      "Backend and deployment work on payment-related services, with a focus on containerized delivery and operational reliability.",
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
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-6">About</span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
                  Building and
                  <br />
                  <span className="text-primary">operating</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                  {"I'm Ali — a Python backend engineer with a DevOps and infrastructure focus. I build, deploy, and operate backend systems and production infrastructure, with attention to automation, observability, performance, and reliability — working toward SRE practices."}
                </p>
                <ul className="space-y-6">
                  {aboutThemes.map((theme) => (
                    <li key={theme.title}>
                      <h3 className="text-sm uppercase tracking-[0.25em] text-foreground font-bold mb-1">
                        {theme.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{theme.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Groups */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl bg-card border border-border p-6 hover:border-primary hover:bg-primary/5 hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] transition-all duration-500 group cursor-default"
                  >
                    <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-4">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LiquidSection>

      {/* Experience Section - Liquid overlay */}
      <LiquidSection id="experience" bgColor="bg-card" zIndex={35} className="-mt-8">
        <div className="py-24 md:py-36">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-6">Experience</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-16 leading-[0.95]">
                {"Where I've"}
                <br />
                <span className="text-primary">worked</span>
              </h2>
              <ol className="space-y-6">
                {experience.map((job) => (
                  <li
                    key={job.company}
                    className="rounded-2xl bg-background border border-border p-8 hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{job.company}</h3>
                      <span className="text-sm uppercase tracking-[0.2em] text-primary">{job.role}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{job.summary}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </LiquidSection>

      {/* Contact Section - Liquid overlay */}
      <LiquidSection id="contact" bgColor="bg-background" zIndex={40} className="-mt-8">
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
                  href={"mailto:" + EMAIL}
                  className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-3 hover:shadow-[0_0_50px_rgba(74,222,128,0.4)] transition-all duration-500"
                >
                  <Mail className="w-5 h-5" />
                  <span className="uppercase tracking-[0.15em] text-sm">Start a Project</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a
                  href={GITHUB_URL}
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
                  href={"mailto:" + EMAIL}
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  {EMAIL}
                </a>
                <span className="hidden md:block w-2 h-2 rounded-full bg-primary/50" />
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  github.com/psymoniko
                </a>
                <span className="hidden md:block w-2 h-2 rounded-full bg-primary/50" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  linkedin.com/in/psymoniko
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
              <span className="text-muted-foreground text-sm">© {new Date().getFullYear()} Ali Mohammadnia. All rights reserved.</span>
              <div className="flex items-center gap-5">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a href={"mailto:" + EMAIL} className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={LINKEDIN_URL}
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
