import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { experienceRoles } from '../../data/portfolio'
import type { ExperienceBullet } from '../../data/portfolio'
import { timelineNodeVariants } from '../../lib/motionVariants'
import { GlowCard } from '../ui/GlowCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

function formatBullet(b: ExperienceBullet): ReactNode {
  const parts = b.text.split(/(\{[0-9]+\})/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = /^\{(\d+)\}$/.exec(part)
        if (m) {
          const idx = Number.parseInt(m[1] ?? '0', 10)
          const val = b.highlights[idx]
          return val ? (
            <strong key={i} className="text-text-primary">
              {val}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

function TimelineNode({ emoji }: { emoji: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.6, once: true })

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <motion.div
        variants={timelineNodeVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-[2] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg-elevated text-lg shadow-glow"
        aria-hidden
      >
        {emoji}
      </motion.div>
    </div>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-[var(--nav-h)] px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel text="03 // experience" />
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Shipping impact, end to end
          </h2>
        </ScrollReveal>

        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute bottom-0 left-[1.35rem] top-0 w-px lg:left-[2.25rem]"
            style={{
              background:
                'linear-gradient(to bottom, var(--cyan), var(--violet), var(--amber), rgba(245, 158, 11, 0))',
            }}
            aria-hidden
          />

          <div className="space-y-12">
            {experienceRoles.map((role) => (
              <div
                key={role.id}
                className="relative grid gap-6 pl-14 lg:grid-cols-[72px_1fr] lg:gap-10 lg:pl-0"
              >
                <div
                  className="absolute left-[0.55rem] top-8 z-[2] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated text-base shadow-glow lg:hidden"
                  aria-hidden
                >
                  {role.emoji}
                </div>

                <div className="hidden lg:flex lg:justify-center">
                  <TimelineNode emoji={role.emoji} />
                </div>

                <ScrollReveal>
                  <div className="relative lg:pl-0">
                    <span
                      className="mb-2 hidden font-mono text-[11px] text-cyan lg:absolute lg:-left-10 lg:top-6 lg:mb-0 lg:block lg:w-8 lg:-translate-x-full lg:text-right"
                      aria-hidden
                    >
                      —
                    </span>
                    <GlowCard className="p-6 md:p-8">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-cyan">
                            {role.title}
                          </p>
                          <p className="mt-2 font-display text-xl font-bold text-text-primary">
                            {role.company}
                            <span className="font-body text-base font-normal text-text-muted">
                              {' '}
                              // {role.location}
                            </span>
                          </p>
                        </div>
                        <p className="font-mono text-[11px] uppercase tracking-wide text-text-faint">
                          [{role.period}]
                        </p>
                      </div>

                      <div
                        className="my-5 h-px w-full opacity-80"
                        style={{
                          background:
                            'linear-gradient(90deg, var(--cyan), var(--violet), transparent)',
                        }}
                      />

                      <ul className="space-y-3 font-body text-sm font-light leading-relaxed text-text-muted">
                        {role.bullets.map((b) => (
                          <li key={b.text.slice(0, 32)} className="flex gap-2">
                            <span className="mt-1 text-cyan" aria-hidden>
                              ▸
                            </span>
                            <span>{formatBullet(b)}</span>
                          </li>
                        ))}
                      </ul>

                      {role.award ? (
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1.5 font-mono text-[11px] text-amber">
                          🏆 {role.award}
                        </div>
                      ) : null}
                    </GlowCard>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
