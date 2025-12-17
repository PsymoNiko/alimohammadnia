"use client"

import { useState, useEffect } from "react"
import { Github, Menu, X, Mail } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

interface NavbarProps {
  isVisible?: boolean
}

export function Navbar({ isVisible = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      } ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#home" className="group relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.3)] group-hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]">
              <img
                src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
                alt="PsymoNiko"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/PsymoNiko"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div
          className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 mb-8 shadow-[0_0_30px_rgba(74,222,128,0.4)]">
            <img
              src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
              alt="PsymoNiko"
              className="w-full h-full object-cover"
            />
          </div>

          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-4xl font-bold text-foreground hover:text-primary transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div
            className={`flex items-center gap-6 mt-8 transition-all duration-500 ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="https://github.com/PsymoNiko"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
