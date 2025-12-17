"use client"

import { Marquee } from "./marquee"

const skills = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "PYTHON",
  "TAILWIND",
  "POSTGRESQL",
  "MONGODB",
  "DOCKER",
  "AWS",
  "GRAPHQL",
  "GIT",
  "LINUX",
  "KUBERNETES",
]

const tools = ["VS CODE", "GITHUB", "FIGMA", "VERCEL", "PRISMA", "REDIS", "NGINX", "JEST"]

export function SkillsMarquee() {
  return (
    <div className="py-8 border-y border-primary/20 space-y-6 bg-gradient-to-b from-card/30 to-transparent backdrop-blur-sm relative overflow-hidden">
      {/* Decorative side gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <Marquee direction="left" speed={35}>
        {skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-8 text-sm md:text-lg uppercase tracking-[0.35em] text-foreground/80 font-bold hover:text-primary transition-colors cursor-default"
          >
            {skill}
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
          </span>
        ))}
      </Marquee>

      <Marquee direction="right" speed={30}>
        {tools.map((tool) => (
          <span
            key={tool}
            className="flex items-center gap-8 text-sm md:text-base uppercase tracking-[0.35em] text-muted-foreground font-medium hover:text-foreground transition-colors cursor-default"
          >
            {tool}
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
