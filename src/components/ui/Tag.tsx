interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-bg-elevated/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-text-muted ${className}`}
    >
      {children}
    </span>
  )
}
