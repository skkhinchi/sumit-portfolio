/**
 * Static grid only — no mouse tracking (avoids React re-renders on every mousemove).
 * Full-viewport SVG feTurbulence was removed — it caused heavy repaint cost while scrolling.
 */
export function PageBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 gpu-layer"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 247, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 247, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
