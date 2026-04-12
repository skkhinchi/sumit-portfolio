import {
  contactCards,
  contactHeadline,
  contactSection,
  contactStatus,
  contactSubcopy,
} from '../../data/portfolio'
import { GlowCard } from '../ui/GlowCard'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionLabel } from '../ui/SectionLabel'

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-[var(--nav-h)] px-5 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <SectionLabel text={contactSection.label} />
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-text-primary">
            {contactHeadline.line1}
            <br />
            {contactHeadline.line2}
            <br />
            <span className="inline-flex items-center gap-2">
              {contactHeadline.line3}{' '}
              <span className="text-cyan" aria-hidden>
                →
              </span>
            </span>
          </h2>
          <p className="mt-8 max-w-md font-body text-base font-light leading-relaxed text-text-muted">
            {contactSubcopy}
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {contactCards.map((c) => (
            <ScrollReveal key={c.id}>
              <GlowCard className="group overflow-hidden p-0">
                <a
                  href={c.href}
                  className="flex items-center gap-4 px-5 py-4 transition-transform duration-300 group-hover:translate-x-1"
                  {...(c.id === 'email' || c.id === 'phone'
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  data-cursor-hover
                >
                  <span className="text-xl" aria-hidden>
                    {c.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-faint">
                      {c.label}
                    </p>
                    <p className="truncate font-mono text-sm text-text-primary">
                      {c.value}
                    </p>
                  </div>
                </a>
              </GlowCard>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <p className="mt-6 flex items-center gap-2 font-mono text-[11px] text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {contactStatus}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
