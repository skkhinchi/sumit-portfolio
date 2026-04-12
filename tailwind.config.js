/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        cyan: 'var(--cyan)',
        'cyan-glow': 'var(--cyan-glow)',
        violet: 'var(--violet)',
        'violet-glow': 'var(--violet-glow)',
        amber: 'var(--amber)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'text-faint': 'var(--text-faint)',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'var(--gradient-accent)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-hover': 'var(--shadow-glow-hover)',
      },
    },
  },
  plugins: [],
}
