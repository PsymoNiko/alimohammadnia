"use client"

import { useState, useEffect } from "react"
import { Mail, ArrowUpRight, Github, Clock, MapPin } from "lucide-react"

export function ContactSection() {
  const [currentTime, setCurrentTime] = useState("")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateTime = () => {
      const iranTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Tehran",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      setCurrentTime(iranTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="py-24 md:py-36 relative overflow-hidden">
      {/* Background gradient following mouse */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none transition-all duration-1000"
        style={{
          left: `${(mousePos.x / window.innerWidth) * 100}%`,
          top: `${(mousePos.y / window.innerHeight) * 50}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header row - Seth Lukin style */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-4">Say Hi</span>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Iran</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-2xl md:text-3xl font-mono text-foreground tabular-nums">{currentTime}</span>
          </div>
        </div>

        {/* Main CTA - Seth Lukin style large typography */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-foreground leading-[0.85] mb-8 text-balance">
            {"Let's build"}
            <br />
            <span className="text-primary">together</span>
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <a
            href="mailto:psymoniko@example.com"
            className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-3 hover:shadow-[0_0_50px_rgba(74,222,128,0.4)] transition-all duration-500"
          >
            <Mail className="w-5 h-5" />
            <span className="uppercase tracking-[0.15em] text-sm">Start a Project</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="https://github.com/PsymoNiko"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-5 border-2 border-border rounded-full font-bold flex items-center gap-3 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500"
          >
            <Github className="w-5 h-5" />
            <span className="uppercase tracking-[0.15em] text-sm">GitHub</span>
          </a>
        </div>

        {/* Links row - Seth Lukin style */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <a
            href="mailto:psymoniko@example.com"
            className="group flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">
              Email
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
          </a>
          <span className="hidden md:block w-2 h-2 rounded-full bg-primary/50" />
          <a
            href="https://github.com/PsymoNiko"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">
              github.com/psymoniko
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
          </a>
          <span className="hidden md:block w-2 h-2 rounded-full bg-primary/50" />
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">
              LinkedIn
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
          </a>
        </div>
      </div>
    </div>
  )
}
