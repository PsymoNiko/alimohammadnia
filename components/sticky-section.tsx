"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface StickySectionProps {
  children: ReactNode
  className?: string
  id?: string
  bgColor?: string
  zIndex?: number
}

export function StickySection({
  children,
  className = "",
  id,
  bgColor = "bg-background",
  zIndex = 10,
}: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative ${bgColor} ${className}`}
      style={{
        zIndex,
        transform: `translateY(${(1 - scrollProgress) * 20}px)`,
        opacity: 0.3 + scrollProgress * 0.7,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }}
    >
      {children}
    </section>
  )
}
