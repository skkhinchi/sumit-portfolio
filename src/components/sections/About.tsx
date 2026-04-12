import {
  aboutCodeFilename,
  aboutCodeLines,
  aboutSection,
} from '../../data/portfolio'
import { ScrollReveal } from '../ui/ScrollReveal'
import { CodeBlock } from '../ui/CodeBlock'
import { SectionLabel } from '../ui/SectionLabel'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-[var(--nav-h)] px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <ScrollReveal>
          <div>
            <SectionLabel text={aboutSection.label} />
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              {aboutSection.title}
            </h2>
            <div className="mt-8 space-y-5 font-body text-base font-light leading-relaxed text-text-muted">
              {aboutSection.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutSection.miniCards.map((c) => (
                <div
                  key={c.label}
                  className="glass-card gpu-layer rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="font-mono text-[11px] text-text-faint">{c.icon}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-text-muted">
                    {c.label}
                  </p>
                  <p className="mt-1 font-body text-sm text-text-primary">{c.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {aboutSection.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center rounded-md border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-text-primary transition-[transform,colors,border-color] duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:text-cyan"
                  {...(s.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  data-cursor-hover
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <CodeBlock filename={aboutCodeFilename} lines={aboutCodeLines} />
        </ScrollReveal>
      </div>
    </section>
  )
}
