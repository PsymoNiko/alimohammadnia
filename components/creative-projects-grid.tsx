"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Star, GitFork, ExternalLink, ArrowRight } from "lucide-react"

interface Project {
  name: string
  description: string
  image: string
  language: string
  stars: number
  forks: number
  url: string
  tags: string[]
}

interface CreativeProjectsGridProps {
  projects: Project[]
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
}

export function CreativeProjectsGrid({ projects }: CreativeProjectsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = e.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div className="py-24 md:py-32">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-4">Featured Work</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none">
              SELECTED
              <br />
              <span className="text-primary">PROJECTS</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg">
            A curated showcase of my best work, from web applications to developer tools.
          </p>
        </div>
      </div>

      <div ref={containerRef} className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            // Create varied card sizes for non-standard grid
            const isLarge = index === 0 || index === 3
            const isMedium = index === 1 || index === 4

            return (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block ${isLarge ? "md:col-span-2 lg:col-span-2" : ""} ${isMedium ? "md:row-span-1" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <div
                  className="relative h-full overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 group-hover:border-primary/50"
                  style={{
                    boxShadow:
                      hoveredIndex === index
                        ? `0 0 60px rgba(74, 222, 128, 0.15), inset 0 0 60px rgba(74, 222, 128, 0.03)`
                        : "none",
                  }}
                >
                  {/* Mouse-following spotlight effect */}
                  {hoveredIndex === index && (
                    <div
                      className="absolute w-[300px] h-[300px] rounded-full pointer-events-none transition-opacity duration-300"
                      style={{
                        left: mousePos.x - 150,
                        top: mousePos.y - 150,
                        background: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* Image */}
                  <div className={`relative overflow-hidden ${isLarge ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />

                    {/* Large project number */}
                    <div className="absolute top-4 left-6">
                      <span className="text-[100px] md:text-[120px] font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors duration-500 leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Link icon */}
                    <div className="absolute top-6 right-6 p-3 rounded-full bg-primary text-primary-foreground opacity-0 -translate-y-4 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </div>

                    {/* Language badge */}
                    <div className="absolute bottom-4 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColors[project.language] || "#888" }}
                      />
                      <span className="text-sm font-semibold text-foreground">{project.language}</span>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-4 right-6 flex items-center gap-4 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-foreground/80">
                      <span className="flex items-center gap-1.5 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                    </div>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-green-400 to-primary w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* View all link */}
      <div className="container mx-auto px-6 md:px-12 mt-12 flex justify-center">
        <a
          href="https://github.com/PsymoNiko?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors font-medium">
            View all repositories
          </span>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    </div>
  )
}
