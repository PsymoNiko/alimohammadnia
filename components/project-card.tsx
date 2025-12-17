"use client"

import { useState } from "react"
import { ExternalLink, Star, GitFork } from "lucide-react"

interface ProjectCardProps {
  project: {
    name: string
    description: string
    image: string
    language: string
    stars: number
    forks: number
    url: string
    tags: string[]
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-90" : "opacity-60"
          }`}
        />

        {/* Floating action button */}
        <div
          className={`absolute top-4 right-4 p-3 rounded-full bg-primary text-primary-foreground transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
          {project.tags.map((tag) => (
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
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </a>
  )
}
