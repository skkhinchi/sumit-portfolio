import { useInView } from 'framer-motion'
import { startTransition, useEffect, useRef, useState } from 'react'
import { featuredProject, gridProjects } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'

function TerminalDemo({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.35, once: true })
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!inView) return
    startTransition(() => {
      setShown(0)
    })
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setShown(i)
      if (i >= lines.length) window.clearInterval(id)
    }, 420)
    return () => window.clearInterval(id)
  }, [inView, lines])

  return (
    <div
      ref={ref}
      className="mt-8 rounded-lg border border-border/80 bg-black/50 p-4 font-mono text-[11px] leading-relaxed text-emerald-300/95 shadow-inner sm:text-xs"
    >
      <div className="mb-3 flex items-center gap-2 text-text-faint">
        <span className="h-2 w-2 rounded-full bg-red-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-text-muted">
          zsh — automation
        </span>
      </div>
      <div className="space-y-1 text-text-primary/90">
        {lines.slice(0, shown).map((line, idx) => (
          <p key={`${idx}-${line.slice(0, 24)}`}>{line}</p>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-cyan/80 align-middle" />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-[var(--nav-h)] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel text="04 // projects" />
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Selected work
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <GlowCard className="mt-12 p-6 md:p-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 max-w-xl font-body text-sm font-light text-text-muted">
                  &ldquo;{featuredProject.tagline}&rdquo;
                </p>
              </div>
            </div>

            <div
              className="my-6 h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg, var(--cyan), var(--violet), transparent)',
              }}
            />

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <TerminalDemo lines={featuredProject.terminalLines} />
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
                    Features
                  </p>
                  <ul className="mt-3 space-y-2 font-mono text-[12px] text-text-muted">
                    {featuredProject.features.map((f) => (
                      <li key={f.text}>→ {f.text}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-text-faint">
                    Tech Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {featuredProject.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {gridProjects.map((p) => (
            <ScrollReveal key={p.id}>
              <GlowCard className="flex h-full flex-col p-6 md:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl" aria-hidden>
                    {p.emoji}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-text-faint transition-transform duration-300 group-hover:translate-x-1">
                    case study
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-text-muted">
                  {p.description}
                </p>
                <ul className="mt-4 space-y-2 font-body text-sm font-light text-text-muted">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-cyan" aria-hidden>
                        ▸
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-6">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
