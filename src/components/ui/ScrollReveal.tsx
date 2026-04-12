import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { scrollRevealVariants } from '../../lib/motionVariants'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, {
    amount: 0.08,
    margin: '0px 0px -5% 0px',
    once: true,
  })

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={scrollRevealVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}
