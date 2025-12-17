"use client"

import { Card } from "@/components/ui/card"
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react"

interface Repository {
  name: string
  description: string
  language: string
  stars: number
  forks: number
  url: string
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Rust: "bg-orange-500",
  Go: "bg-cyan-400",
  HTML: "bg-red-500",
  CSS: "bg-purple-500",
  default: "bg-muted-foreground",
}

export function RepositoryCard({ repo, index }: { repo: Repository; index: number }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {repo.name}
              </h3>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]">
            {repo.description || "No description available"}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            {/* Language */}
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || languageColors.default}`} />
              <span className="text-muted-foreground">{repo.language || "Unknown"}</span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <GitFork className="w-4 h-4" />
                <span>{repo.forks}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  )
}
