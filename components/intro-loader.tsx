"use client"

import { useEffect, useState, useRef } from "react"

interface IntroLoaderProps {
  onComplete: () => void
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePos({ x, y })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const duration = 2800
    const interval = 20
    const increment = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsExiting(true), 400)
          setTimeout(() => onComplete(), 1400)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden`}
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ${isExiting ? "scale-150 opacity-0" : "scale-100 opacity-100"}`}
        style={{
          background: `
            radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(74, 222, 128, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at ${100 - mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at ${mousePos.x}% ${100 - mousePos.y}%, rgba(52, 211, 153, 0.1) 0%, transparent 45%)
          `,
        }}
      />

      {/* Morphing blob shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-[100px] transition-all duration-[2000ms] ${isExiting ? "scale-[3] opacity-0" : "scale-100 opacity-100"}`}
          style={{
            left: `${mousePos.x - 30}%`,
            top: `${mousePos.y - 30}%`,
            animation: "blob-morph 8s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-green-500/15 to-transparent blur-[80px] transition-all duration-[2000ms] delay-100 ${isExiting ? "scale-[3] opacity-0" : "scale-100 opacity-100"}`}
          style={{
            right: `${100 - mousePos.x - 20}%`,
            bottom: `${100 - mousePos.y - 20}%`,
            animation: "blob-morph 10s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div
        className={`relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExiting ? "scale-[2] opacity-0 blur-lg" : "scale-100 opacity-100 blur-0"
        }`}
      >
        {/* Outer rotating ring */}
        <div
          className="absolute -inset-8 rounded-full border-2 border-primary/30 border-dashed"
          style={{ animation: "spin 15s linear infinite" }}
        />
        <div
          className="absolute -inset-16 rounded-full border border-primary/20"
          style={{ animation: "spin 25s linear infinite reverse" }}
        />

        {/* Pulsing glow behind logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-primary/30 blur-[80px] animate-pulse" />
        </div>

        {/* GIF Logo in circle */}
        <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_60px_rgba(74,222,128,0.5)]">
          <img
            src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
            alt="PsymoNiko Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Progress counter */}
      <div
        className={`mt-16 flex items-baseline gap-1 transition-all duration-700 ${isExiting ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}
      >
        <span className="text-6xl md:text-7xl font-black tabular-nums text-foreground font-mono">
          {Math.round(progress)}
        </span>
        <span className="text-2xl md:text-3xl font-black text-primary">%</span>
      </div>

      {/* Liquid progress bar */}
      <div
        className={`w-64 h-1.5 bg-border/30 mt-8 overflow-hidden rounded-full transition-all duration-700 ${isExiting ? "opacity-0 scale-x-150" : "opacity-100 scale-x-100"}`}
      >
        <div
          className="h-full rounded-full transition-all duration-100 ease-out"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(90deg, rgba(74,222,128,0.5) 0%, rgba(74,222,128,1) 50%, rgba(52,211,153,1) 100%)",
            boxShadow: "0 0 20px rgba(74,222,128,0.8)",
          }}
        />
      </div>

      {/* Corner labels */}
      <div
        className={`absolute top-8 left-8 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500 ${isExiting ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}
      >
        Portfolio
      </div>
      <div
        className={`absolute top-8 right-8 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500 ${isExiting ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
      >
        2025
      </div>
      <div
        className={`absolute bottom-8 left-8 text-xs uppercase tracking-[0.3em] text-primary transition-all duration-500 ${isExiting ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}
      >
        PsymoNiko
      </div>
      <div
        className={`absolute bottom-8 right-8 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500 ${isExiting ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
      >
        Full-Stack Developer
      </div>
    </div>
  )
}
