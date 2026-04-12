import { skillCategories, skillsTickerKeywords } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'

const cardLayout = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
]

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-[var(--nav-h)] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel text="02 // skills" />
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Tools, systems, and craft
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.id}>
              <GlowCard
                className={`p-5 ${cardLayout[idx] ?? 'lg:col-span-2'}`}
                violetGlow={cat.highlight === 'violet'}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl" aria-hidden>
                    {cat.icon}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-text-primary">
                  {cat.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-full border border-border/60 bg-bg-surface/40 py-3">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted/30">
            {[...skillsTickerKeywords, ...skillsTickerKeywords].map((k, i) => (
              <span key={`${k}-${i}`}>{k}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
