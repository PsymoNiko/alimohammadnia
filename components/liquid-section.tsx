"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface LiquidSectionProps {
  children: ReactNode
  className?: string
  id?: string
  bgColor?: string
  zIndex?: number
}

export function LiquidSection({
  children,
  className = "",
  id,
  bgColor = "bg-background",
  zIndex = 10,
}: LiquidSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Calculate progress based on section position
        const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight))
        setScrollProgress(progress)

        // Check if section is in view
        setIsInView(rect.top < windowHeight && rect.bottom > 0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const borderRadius = Math.max(0, 60 - scrollProgress * 60)
  const scale = 0.95 + scrollProgress * 0.05
  const translateY = (1 - scrollProgress) * 40

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative ${bgColor} ${className} transition-shadow duration-500`}
      style={{
        zIndex,
        borderTopLeftRadius: `${borderRadius}px`,
        borderTopRightRadius: `${borderRadius}px`,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 0.4 + scrollProgress * 0.6,
        boxShadow: isInView ? `0 -20px 60px rgba(0, 0, 0, 0.3)` : "none",
        transition: "transform 0.15s ease-out, opacity 0.15s ease-out, border-radius 0.15s ease-out",
      }}
    >
      {/* Top edge glow for liquid effect */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-300"
        style={{ opacity: scrollProgress > 0.3 ? 0.8 : 0 }}
      />
      {children}
    </section>
  )
}
