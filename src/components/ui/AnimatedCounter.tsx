import { animate } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  className?: string
}

interface ParsedStat {
  numeric: number | null
  decimals: number
  prefix: string
  suffix: string
}

function parseStat(value: string): ParsedStat {
  const trimmed = value.trim()
  const match = trimmed.match(/^([^0-9]*)([0-9]+\.?[0-9]*)(.*)$/)
  if (!match) {
    return { numeric: null, decimals: 0, prefix: '', suffix: trimmed }
  }
  const [, pre, num, suf] = match
  const numeric = Number.parseFloat(num ?? '')
  const decimals = (num ?? '').includes('.')
    ? (num ?? '').split('.')[1]?.length ?? 0
    : 0
  return {
    numeric: Number.isFinite(numeric) ? numeric : null,
    decimals,
    prefix: pre ?? '',
    suffix: suf ?? '',
  }
}

function formatNumber(v: number, decimals: number): string {
  if (decimals > 0) return v.toFixed(decimals)
  return Math.round(v).toString()
}

export function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { amount: 0.5, once: true })
  const parsed = useMemo(() => parseStat(value), [value])
  const [display, setDisplay] = useState(() =>
    parsed.numeric === null ? value : `${parsed.prefix}0${parsed.suffix}`,
  )

  useEffect(() => {
    if (parsed.numeric === null) {
      return
    }
    if (!inView) return

    const controls = animate(0, parsed.numeric, {
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(
          `${parsed.prefix}${formatNumber(v, parsed.decimals)}${parsed.suffix}`,
        )
      },
    })
    return () => controls.stop()
  }, [inView, parsed, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
