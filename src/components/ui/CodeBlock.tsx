import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

type TokenKind = 'keyword' | 'string' | 'prop' | 'value' | 'plain'

interface CodeBlockProps {
  filename: string
  lines: string[]
}

const KEYWORDS = new Set(['const', 'export'])

function tokenizeLine(line: string): Array<{ kind: TokenKind; text: string }> {
  const tokens: Array<{ kind: TokenKind; text: string }> = []
  const push = (kind: TokenKind, text: string) => {
    if (text) tokens.push({ kind, text })
  }

  if (line.trim().startsWith('//')) {
    push('plain', line)
    return tokens
  }

  let i = 0
  while (i < line.length) {
    const rest = line.slice(i)
    const kwMatch = rest.match(/^(const|export)\b/)
    if (kwMatch) {
      push('keyword', kwMatch[0])
      i += kwMatch[0].length
      continue
    }
    if (rest[0] === '"' || rest[0] === "'") {
      const quote = rest[0]
      let j = 1
      while (j < rest.length && rest[j] !== quote) j += 1
      push('string', rest.slice(0, j + 1))
      i += j + 1
      continue
    }
    const propMatch = rest.match(/^(\s*)([a-zA-Z0-9_]+)(\s*:)/)
    if (propMatch) {
      push('plain', propMatch[1] ?? '')
      push('prop', propMatch[2] ?? '')
      push('plain', propMatch[3] ?? '')
      i += (propMatch[0] ?? '').length
      continue
    }
    const numMatch = rest.match(/^(\d+\.?\d*%?)/)
    if (numMatch) {
      push('value', numMatch[1] ?? '')
      i += (numMatch[1] ?? '').length
      continue
    }
    push('plain', rest[0] ?? '')
    i += 1
  }

  return tokens
}

function lineTokens(line: string): Array<{ kind: TokenKind; text: string }> {
  if (line.trim() === '') return [{ kind: 'plain', text: line }]
  if (KEYWORDS.has(line.trim().split(/\s+/)[0] ?? '')) {
    return tokenizeLine(line)
  }
  return [{ kind: 'plain', text: line }]
}

function TokenSpan({
  kind,
  children,
}: {
  kind: TokenKind
  children: React.ReactNode
}) {
  const color =
    kind === 'keyword'
      ? 'text-violet'
      : kind === 'string'
        ? 'text-emerald-400'
        : kind === 'prop'
          ? 'text-cyan'
          : kind === 'value'
            ? 'text-amber'
            : 'text-text-primary/90'
  return <span className={color}>{children}</span>
}

const lineVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function CodeBlock({ filename, lines }: CodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.25, once: true })

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl border border-border bg-bg-base/90 font-mono text-[13px] leading-relaxed shadow-glow"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </span>
        <span className="text-[11px] text-text-muted">{filename}</span>
      </div>
      <pre className="overflow-x-auto p-4 pb-6 text-[12px] sm:text-[13px]">
        <code>
          {lines.map((line, idx) => (
            <motion.div
              key={`${idx}-${line.slice(0, 12)}`}
              className="whitespace-pre"
              custom={idx}
              variants={lineVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {lineTokens(line).map((t, j) => (
                <TokenSpan key={`${idx}-${j}`} kind={t.kind}>
                  {t.text}
                </TokenSpan>
              ))}
            </motion.div>
          ))}
          <motion.span
            className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-cyan"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            aria-hidden
          />
        </code>
      </pre>
    </div>
  )
}
