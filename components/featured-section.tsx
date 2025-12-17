"use client"

import { useState } from "react"
import { ExternalLink, Star, GitFork } from "lucide-react"

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

interface FeaturedSectionProps {
  projects: Project[]
}

export function FeaturedSection({ projects }: FeaturedSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Featured</h2>
          <div className="h-px flex-1 bg-border" />
          <span className="text-6xl md:text-8xl font-black text-foreground">WORK</span>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:border-primary/50 hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-95" : "opacity-70"
                  }`}
                />

                {/* Floating action button */}
                <div
                  className={`absolute top-4 right-4 p-3 rounded-full bg-primary text-primary-foreground transition-all duration-300 ${
                    hoveredIndex === index
                      ? "translate-y-0 opacity-100 rotate-0"
                      : "-translate-y-4 opacity-0 -rotate-45"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                </div>

                {/* Language Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground">
                    {project.language}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom highlight line */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/PsymoNiko?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 border border-border rounded-full text-foreground hover:border-primary transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-[0.2em] text-sm font-medium group-hover:text-primary-foreground transition-colors duration-300">
              View All Repositories
            </span>
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>
      </div>
    </section>
  )
}
