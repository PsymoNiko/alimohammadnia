"use client"

import { useRef, useState, useEffect } from "react"
import { Star, GitFork, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

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

interface HorizontalProjectsProps {
  projects: Project[]
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Go: "bg-cyan-400",
  Rust: "bg-orange-500",
  Java: "bg-red-500",
}

export function HorizontalProjects({ projects }: HorizontalProjectsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const ref = scrollRef.current
    ref?.addEventListener("scroll", checkScroll)
    return () => ref?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="work" className="py-20 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground block mb-4">Featured Work</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none">PROJECTS</h2>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/50 text-muted-foreground/50 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/50 text-muted-foreground/50 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] snap-start"
          >
            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 group-hover:border-primary/50">
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Project number */}
                <div className="absolute top-4 left-4">
                  <span className="text-7xl md:text-8xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* External link icon */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-primary text-primary-foreground opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>

                {/* Language badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-500"}`} />
                  <span className="text-sm font-medium text-foreground">{project.language}</span>
                </div>

                {/* Stats */}
                <div className="absolute bottom-4 right-4 flex items-center gap-4 text-foreground/80">
                  <span className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
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

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </a>
        ))}
      </div>

      {/* View all link */}
      <div className="container mx-auto px-6 md:px-12 mt-8">
        <a
          href="https://github.com/PsymoNiko?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          View all repositories
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  )
}
