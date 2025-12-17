"use client"

import type React from "react"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function Marquee({ children, direction = "left", speed = 30, className = "" }: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden group ${className}`}>
      <div
        className={`flex shrink-0 gap-12 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
      <div
        className={`flex shrink-0 gap-12 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
