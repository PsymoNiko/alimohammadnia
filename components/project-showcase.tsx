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

interface ProjectShowcaseProps {
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

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 400
      const newIndex = Math.round(scrollLeft / (cardWidth + 24))
      setActiveIndex(newIndex)
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
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="py-20 md:py-32">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary block mb-4">Featured Work</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none">PROJECTS</h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {/* Progress dots */}
            <div className="hidden md:flex items-center gap-2 mr-4">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-border/30 text-muted-foreground/30 cursor-not-allowed"
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
                  : "border-border/30 text-muted-foreground/30 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] snap-start"
          >
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_50px_rgba(74,222,128,0.1)]">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Number */}
                <div className="absolute top-4 left-4">
                  <span className="text-8xl font-black text-foreground/5 group-hover:text-primary/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Link icon */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-primary/10 backdrop-blur-sm text-primary opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>

                {/* Language & stats */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
                    <span className={`w-2.5 h-2.5 rounded-full ${languageColors[project.language] || "bg-gray-500"}`} />
                    <span className="text-sm font-medium text-foreground">{project.language}</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground/80">
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
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-green-400 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </a>
        ))}
      </div>

      {/* View all link */}
      <div className="container mx-auto px-6 md:px-12 mt-8 flex justify-center">
        <a
          href="https://github.com/PsymoNiko?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
        >
          <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary transition-colors">
            View all repositories
          </span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    </div>
  )
}
