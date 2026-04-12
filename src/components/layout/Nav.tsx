import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../data/portfolio'
import { drawerOverlayVariants, drawerVariants } from '../../lib/motionVariants'

const linkVariants = {
  rest: {},
  hover: {},
}

const underlineVariants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
}

function NavLinkItem({
  href,
  label,
  onNavigate,
}: {
  href: string
  label: string
  onNavigate?: () => void
}) {
  return (
    <motion.a
      href={href}
      className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-text-primary"
      variants={linkVariants}
      initial="rest"
      whileHover="hover"
      onClick={onNavigate}
    >
      <span>{label}</span>
      <motion.span
        className="absolute -bottom-1 left-0 h-px w-full origin-left bg-cyan/80"
        variants={underlineVariants}
      />
    </motion.a>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] flex h-[var(--nav-h)] items-center border-b backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? 'border-border bg-bg-base/75 shadow-[0_1px_0_rgba(0,247,255,0.12)]'
            : 'border-transparent bg-bg-base/55'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5">
          <Link
            to="/"
            className="font-display text-xl font-extrabold tracking-tight text-cyan"
            data-cursor-hover
          >
            SK
          </Link>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <NavLinkItem key={l.id} href={l.href} label={l.label} />
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-md border border-cyan px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-cyan transition-colors hover:bg-cyan hover:text-bg-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-hover
            >
              hire_me()
            </motion.a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border p-2 font-mono text-[11px] text-text-primary md:hidden"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            data-cursor-hover
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm md:hidden"
              variants={drawerOverlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={close}
            />
            <motion.aside
              id="mobile-drawer"
              className="fixed inset-y-0 right-0 z-[120] flex w-[min(88vw,320px)] flex-col border-l border-border bg-bg-surface/95 p-6 pt-[calc(var(--nav-h)+1rem)] backdrop-blur-md md:hidden"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="flex flex-col gap-6" aria-label="Mobile">
                {navLinks.map((l) => (
                  <NavLinkItem
                    key={l.id}
                    href={l.href}
                    label={l.label}
                    onNavigate={close}
                  />
                ))}
              </nav>
              <motion.a
                href="#contact"
                className="mt-10 inline-flex items-center justify-center rounded-md border border-cyan px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-cyan transition-colors hover:bg-cyan hover:text-bg-base"
                onClick={close}
                data-cursor-hover
              >
                hire_me()
              </motion.a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
