import { useRef } from 'react'
import { useInView } from 'framer-motion'

export interface UseScrollRevealOptions {
  amount?: number | 'some' | 'all'
  once?: boolean
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { amount = 0.1, once = true } = options
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, {
    amount,
    margin: '0px 0px -10% 0px',
    once,
  })

  return { ref, inView }
}
