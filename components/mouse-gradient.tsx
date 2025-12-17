"use client"

import { useEffect, useState, useRef } from "react"

export function MouseGradient() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [velocity, setVelocity] = useState({ x: 0, y: 0 })
  const lastPos = useRef({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      setVelocity({
        x: (x - lastPos.current.x) * 0.5,
        y: (y - lastPos.current.y) * 0.5,
      })
      lastPos.current = { x, y }

      setMousePos({ x, y })
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
        style={{
          opacity: isHovering ? 1 : 0.3,
          background: `
            radial-gradient(ellipse 600px 400px at ${mousePos.x}% ${mousePos.y}%, rgba(74, 222, 128, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at ${mousePos.x + velocity.x}% ${mousePos.y + velocity.y}%, rgba(52, 211, 153, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 300px 200px at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Liquid blob that follows cursor */}
      <div
        className="fixed w-[400px] h-[400px] pointer-events-none z-0 transition-all duration-[400ms] ease-out rounded-full blur-[100px]"
        style={{
          left: `calc(${mousePos.x}% - 200px)`,
          top: `calc(${mousePos.y}% - 200px)`,
          background: `radial-gradient(circle, rgba(74, 222, 128, ${isHovering ? 0.15 : 0.05}) 0%, transparent 70%)`,
          transform: `scale(${1 + Math.abs(velocity.x + velocity.y) * 0.02})`,
        }}
      />
    </>
  )
}
