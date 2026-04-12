interface SectionLabelProps {
  text: string
  className?: string
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.2em] text-cyan ${className}`}
    >
      {text}
    </p>
  )
}
