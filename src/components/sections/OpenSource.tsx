import { openSourceSection } from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

export function OpenSource() {
  const hasEntries = openSourceSection.entries.length > 0

  return (
    <section
      id="opensource"
      className="relative scroll-mt-[var(--nav-h)] px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel text={openSourceSection.label} />
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            {openSourceSection.title}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-text-muted">
            {openSourceSection.description}
          </p>
        </ScrollReveal>

        {hasEntries ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {openSourceSection.entries.map((e) => (
              <ScrollReveal key={e.name}>
                <GlowCard className="p-5">
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-lg font-bold text-text-primary hover:text-cyan"
                    data-cursor-hover
                  >
                    {e.name}
                  </a>
                  <p className="mt-2 font-body text-sm font-light text-text-muted">
                    {e.description}
                  </p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <GlowCard className="mt-10 p-6">
              <p className="font-mono text-[12px] text-text-muted">
                Repositories and packages will appear here as they are published.
                Follow on GitHub for updates.
              </p>
            </GlowCard>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
