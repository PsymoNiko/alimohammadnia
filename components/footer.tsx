"use client"

import { Github, Mail, Linkedin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_20px_rgba(74,222,128,0.3)] group-hover:border-primary transition-colors">
              <img
                src="https://raw.githubusercontent.com/PsymoNiko/PsymoNiko/main/assets/output2.gif"
                alt="PsymoNiko"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-lg font-bold text-foreground">PsymoNiko</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Backend Developer</p>
            </div>
          </a>

          {/* Copyright */}
          <span className="text-muted-foreground text-sm order-last md:order-none">
            © {new Date().getFullYear()} Ali Mohammadnia. All rights reserved.
          </span>

          {/* Social + Back to top */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/PsymoNiko"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:psymoniko@example.com"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
