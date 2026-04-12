import type { ComponentPropsWithoutRef } from 'react'

interface GlowCardProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
  className?: string
  violetGlow?: boolean
}

export function GlowCard({
  children,
  className = '',
  violetGlow = false,
  ...rest
}: GlowCardProps) {
  return (
    <div
      className={[
        'group relative rounded-xl border border-border bg-bg-surface/80 backdrop-blur-md',
        'shadow-glow transition-[transform,box-shadow,border-color] duration-300 ease-out',
        'hover:-translate-y-1.5 hover:border-border-hover hover:shadow-glow-hover',
        violetGlow ? 'hover:shadow-[0_0_40px_var(--violet-glow)]' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, var(--cyan), var(--violet), transparent)',
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
