import { ArrowUp } from 'lucide-react'
import { footerTech } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-transparent bg-bg-base/80">
      <div
        className="absolute inset-x-0 top-0 h-px opacity-90"
        style={{
          background:
            'linear-gradient(90deg, var(--cyan), var(--violet), transparent)',
        }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="max-w-xl font-mono text-[11px] leading-relaxed text-text-muted">
          Designed &amp; engineered by Sumit Khinchi &nbsp;·&nbsp; Bengaluru 🇮🇳
          &nbsp;·&nbsp; {year}
          <br />
          <span className="text-text-faint">{footerTech}</span>
        </p>
        <button
          type="button"
          onClick={scrollTop}
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 font-mono text-[11px] text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
          aria-label="Back to top"
          data-cursor-hover
        >
          <ArrowUp className="h-4 w-4" />
          top
        </button>
      </div>
    </footer>
  )
}
