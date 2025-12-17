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
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [isVisible])

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center w-full overflow-visible py-8 md:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 w-full">
        <div
          className="relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform:
              stage >= 1
                ? `translate(${mousePos.x}px, ${mousePos.y}px) rotate(${mousePos.x * 0.1}deg)`
                : "translate(0, 80px) scale(0.5) rotate(-10deg)",
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          {/* Multiple layered glows for depth */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-primary/25 blur-[120px] transition-transform duration-500"
              style={{
                transform: `translate(${mousePos.x * 3}px, ${mousePos.y * 3}px) scale(${1 + Math.abs(mousePos.x + mousePos.y) * 0.005})`,
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-green-400/20 blur-[80px] transition-transform duration-300"
              style={{
                transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
              }}
            />
          </div>

          {/* Rotating decorative rings */}
          <div
            className="absolute -inset-6 md:-inset-10 rounded-full border-2 border-dashed border-primary/40"
            style={{ animation: "spin 20s linear infinite" }}
          />
          <div
            className="absolute -inset-12 md:-inset-16 rounded-full border border-primary/20"
            style={{ animation: "spin 30s linear infinite reverse" }}
          />

          {/* Circular GIF logo */}
          <div className="relative w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/60 shadow-[0_0_80px_rgba(74,222,128,0.6),inset_0_0_30px_rgba(74,222,128,0.2)]">
            <img
              src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
              alt="PsymoNiko Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name reveal with liquid text effect */}
        <div className="text-center lg:text-left">
          {/* PSYMO */}
          <div className="overflow-hidden">
            <div
              className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: stage >= 2 ? "translateY(0) skewY(0deg)" : "translateY(120%) skewY(8deg)",
                opacity: stage >= 2 ? 1 : 0,
              }}
            >
              <h1
                className="text-[18vw] md:text-[12vw] lg:text-[9vw] font-black leading-[0.85] tracking-[-0.05em] text-foreground"
                style={{
                  textShadow: stage >= 2 ? "0 0 80px rgba(74, 222, 128, 0.3)" : "none",
                }}
              >
                PSYMO
              </h1>
            </div>
          </div>

          {/* NIKO */}
          <div className="overflow-hidden">
            <div
              className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200"
              style={{
                transform: stage >= 2 ? "translateY(0) skewY(0deg)" : "translateY(120%) skewY(-8deg)",
                opacity: stage >= 2 ? 1 : 0,
              }}
            >
              <h1
                className="text-[18vw] md:text-[12vw] lg:text-[9vw] font-black leading-[0.85] tracking-[-0.05em] text-primary"
                style={{
                  textShadow: stage >= 2 ? "0 0 60px rgba(74, 222, 128, 0.5)" : "none",
                }}
              >
                NIKO
              </h1>
            </div>
          </div>

          {/* Subtitle with reveal */}
          <div
            className="mt-8 transition-all duration-700 ease-out"
            style={{
              transform: stage >= 3 ? "translateY(0)" : "translateY(30px)",
              opacity: stage >= 3 ? 1 : 0,
            }}
          >
            <p className="text-sm md:text-base uppercase tracking-[0.4em] text-muted-foreground">
              Full-Stack Developer & Designer
            </p>
          </div>
        </div>
      </div>

      {/* Status row */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-16 transition-all duration-700"
        style={{
          transform: stage >= 4 ? "translateY(0)" : "translateY(30px)",
          opacity: stage >= 4 ? 1 : 0,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Available for Work</span>
        </div>
        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-border" />
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in Iran</span>
      </div>
    </div>
  )
}
