"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedLogoProps {
  isVisible: boolean
}

export function AnimatedLogo({ isVisible }: AnimatedLogoProps) {
  const [stage, setStage] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const x = (e.clientX - centerX) / 30
        const y = (e.clientY - centerY) / 30
        setMousePos({ x, y })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true
      const timers = [
        setTimeout(() => setStage(1), 100),
        setTimeout(() => setStage(2), 500),
        setTimeout(() => setStage(3), 900),
        setTimeout(() => setStage(4), 1300),
        setTimeout(() => setStage(5), 1700),
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [isVisible])

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full overflow-visible py-8 md:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
        {/* Left side - Name and role */}
        <div className="flex-1 text-center lg:text-left">
          {/* PSYMO with reveal animation */}
          <div className="overflow-hidden">
            <div
              className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: stage >= 2 ? "translateY(0) skewY(0deg)" : "translateY(120%) skewY(8deg)",
                opacity: stage >= 2 ? 1 : 0,
              }}
            >
              <h1
                className="text-[20vw] md:text-[14vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.04em] text-foreground"
                style={{
                  textShadow: stage >= 2 ? "0 0 80px rgba(74, 222, 128, 0.2)" : "none",
                }}
              >
                PSYMO
              </h1>
            </div>
          </div>

          {/* NIKO with reveal animation */}
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <div
              className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100"
              style={{
                transform: stage >= 2 ? "translateY(0) skewY(0deg)" : "translateY(120%) skewY(-8deg)",
                opacity: stage >= 2 ? 1 : 0,
              }}
            >
              <h1
                className="text-[20vw] md:text-[14vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.04em] text-primary"
                style={{
                  textShadow: stage >= 2 ? "0 0 60px rgba(74, 222, 128, 0.4)" : "none",
                }}
              >
                NIKO
              </h1>
            </div>
          </div>

          {/* Role subtitle - Seth Lukin style */}
          <div
            className="mt-8 md:mt-10 transition-all duration-700 ease-out"
            style={{
              transform: stage >= 3 ? "translateY(0)" : "translateY(30px)",
              opacity: stage >= 3 ? 1 : 0,
            }}
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base uppercase tracking-[0.4em] text-muted-foreground">Backend Developer</p>
              <p className="text-sm md:text-base uppercase tracking-[0.4em] text-muted-foreground">Based in Iran</p>
            </div>
          </div>

          {/* Skill tags - Seth Lukin style */}
          <div
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3 transition-all duration-700"
            style={{
              transform: stage >= 4 ? "translateY(0)" : "translateY(20px)",
              opacity: stage >= 4 ? 1 : 0,
            }}
          >
            {["Django", "Python", "Docker", "AWS", "PostgreSQL"].map((skill, i) => (
              <span
                key={skill}
                className="px-4 py-2 text-xs uppercase tracking-[0.2em] border border-border rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - Profile image with decorative elements */}
        <div
          className="relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform:
              stage >= 1
                ? `translate(${mousePos.x}px, ${mousePos.y}px) rotate(${mousePos.x * 0.05}deg)`
                : "translate(0, 80px) scale(0.5) rotate(-10deg)",
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          {/* Layered glows */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-primary/20 blur-[100px] transition-transform duration-500"
              style={{
                transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
              }}
            />
          </div>

          {/* Rotating decorative rings - Seth Lukin style */}
          <div
            className="absolute -inset-4 md:-inset-6 rounded-full border border-dashed border-primary/30"
            style={{ animation: "spin 25s linear infinite" }}
          />
          <div
            className="absolute -inset-10 md:-inset-14 rounded-full border border-primary/15"
            style={{ animation: "spin 35s linear infinite reverse" }}
          />

          {/* Floating dots - Seth Lukin style decorative elements */}
          <div
            className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute -bottom-6 -left-6 w-2 h-2 rounded-full bg-primary/60 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-primary/40 animate-float"
            style={{ animationDelay: "1s" }}
          />

          {/* Circular GIF logo */}
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_60px_rgba(74,222,128,0.5),inset_0_0_30px_rgba(74,222,128,0.15)]">
            <img
              src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
              alt="PsymoNiko Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Status row - Seth Lukin style */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 mt-20 pt-8 border-t border-border/50 transition-all duration-700"
        style={{
          transform: stage >= 5 ? "translateY(0)" : "translateY(30px)",
          opacity: stage >= 5 ? 1 : 0,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Open to Work</span>
        </div>

        <span className="hidden md:block text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Last Updated: Dec 2025
        </span>
      </div>
    </div>
  )
}
