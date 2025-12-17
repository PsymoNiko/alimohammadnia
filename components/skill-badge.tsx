"use client"

import type React from "react"

interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
  index: number
}

export function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <div
      className="group relative px-4 py-3 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 cursor-default"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      <span className="relative text-foreground font-medium text-sm">{name}</span>
    </div>
  )
}
