import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  heroRoles,
  heroStats,
  heroTagline,
  resumeUrl,
  statLabels,
} from '../../data/portfolio'
import {
  heroContainerVariants,
  heroItemVariants,
  roleFadeVariants,
} from '../../lib/motionVariants'
import { AnimatedCounter } from '../ui/AnimatedCounter'

const ROLE_INTERVAL_MS = 2500

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % heroRoles.length)
    }, ROLE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-5 pb-24 pt-[calc(var(--nav-h)+2rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 scanlines opacity-[0.12]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(800px circle at 80% 20%, rgba(0, 247, 255, 0.04), transparent)',
            'radial-gradient(600px circle at 10% 80%, rgba(139, 92, 246, 0.05), transparent)',
          ].join(', '),
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-[2] mx-auto w-full max-w-6xl"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={heroItemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cyan/10 px-3 py-1.5 font-mono text-[11px] text-text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Senior / Lead roles
          </span>
        </motion.div>

        <motion.h1
          variants={heroItemVariants}
          className="font-display font-extrabold leading-[0.9] tracking-[-0.25rem] text-text-primary sm:tracking-[-0.35rem]"
        >
          <span className="block text-[clamp(52px,14vw,72px)] md:text-[clamp(72px,12vw,120px)]">
            SUMIT
          </span>
          <span
            className="block bg-clip-text text-[clamp(52px,14vw,72px)] text-transparent [-webkit-text-stroke:1.5px_var(--cyan)] md:text-[clamp(72px,12vw,120px)]"
            style={{ WebkitTextStroke: '1.5px var(--cyan)' }}
          >
            KHINCHI
          </span>
        </motion.h1>

        <motion.div
          variants={heroItemVariants}
          className="mt-6 h-8 font-mono text-sm text-cyan sm:text-base md:h-9"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={heroRoles[roleIndex]}
              variants={roleFadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-xl"
            >
              {heroRoles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={heroItemVariants}
          className="mt-6 max-w-[520px] font-body text-[18px] font-light leading-relaxed text-text-muted"
        >
          {heroTagline}
        </motion.p>

        <motion.div
          variants={heroItemVariants}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-cyan px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-wider text-bg-base transition-opacity hover:opacity-90"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-cursor-hover
          >
            View My Work ↓
          </motion.a>
          <motion.a
            href={resumeUrl}
            download
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-text-primary transition-colors hover:border-border-hover hover:text-cyan"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-cursor-hover
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={heroItemVariants} className="mt-14">
          <div className="text-gradient-divider mb-8 max-w-xl" />
          <div className="grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.labelKey} className="space-y-1">
                <AnimatedCounter
                  value={s.value}
                  className="block font-display text-[36px] font-extrabold text-cyan"
                />
                <span className="block font-mono text-[11px] uppercase tracking-wide text-text-muted">
                  {statLabels[s.labelKey] ?? s.labelKey}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 z-[2] -translate-x-1/2 font-mono text-cyan"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      >
        ↓
      </motion.div>
    </section>
  )
}
