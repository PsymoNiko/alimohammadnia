"use client"

import { useState } from "react"

const experiences = [
  {
    period: "2024 - Present",
    role: "Backend Developer",
    type: "Open to Opportunities",
    description:
      "Specializing in Django, Python, and cloud deployments. Building scalable backend systems with modern architecture patterns.",
    skills: ["Django", "Python", "Docker", "AWS", "PostgreSQL"],
  },
  {
    period: "2023 - 2024",
    role: "Full-Stack Developer",
    type: "Freelance",
    description:
      "Developed community platforms and monitoring systems with real-time features, OAuth integration, and comprehensive admin panels.",
    skills: ["Django", "Bootstrap 5", "Material Design", "Celery", "Redis"],
  },
  {
    period: "2022 - 2023",
    role: "Backend Developer",
    type: "Projects",
    description:
      "Built chat applications and API services with focus on scalability, containerization, and cloud-native deployments.",
    skills: ["Python", "FastAPI", "Docker", "Kubernetes", "CI/CD"],
  },
]

const allSkills = [
  { name: "DJANGO", category: "backend" },
  { name: "PYTHON", category: "backend" },
  { name: "DOCKER", category: "devops" },
  { name: "AWS", category: "cloud" },
  { name: "POSTGRESQL", category: "database" },
  { name: "REDIS", category: "database" },
  { name: "CELERY", category: "backend" },
  { name: "KUBERNETES", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "FASTAPI", category: "backend" },
  { name: "GIT", category: "tools" },
  { name: "LINUX", category: "systems" },
]

export function ExperienceSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="py-24 md:py-36">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.5em] text-primary block mb-4">Experience</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9]">
              5 YEARS
              <br />
              <span className="text-primary">IN DEVELOPMENT</span>
            </h2>
            <p className="max-w-md text-muted-foreground text-lg leading-relaxed lg:pb-4">
              Continuously enhancing knowledge and seeking collaboration opportunities in backend development and
              DevOps.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-500"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300" />

                <div className="pb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">{exp.period}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{exp.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border text-muted-foreground group-hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Grid - Seth Lukin style */}
          <div>
            <span className="text-xs uppercase tracking-[0.5em] text-muted-foreground block mb-8">Tech Stack</span>
            <div className="grid grid-cols-3 gap-4">
              {allSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center p-4 hover:border-primary hover:bg-primary/5 hover:shadow-[0_0_40px_rgba(74,222,128,0.1)] transition-all duration-500 group cursor-default"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-xs md:text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
