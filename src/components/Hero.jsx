import Spline from '@splinetool/react-spline'

function GlowCTA({ children, href = '#', className = '' }) {
  function handleMove(e) {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty('--x', `${x}px`)
    target.style.setProperty('--y', `${y}px`)
  }

  return (
    <a
      href={href}
      onMouseMove={handleMove}
      onTouchStart={(e) => handleMove(e.touches[0])}
      onTouchMove={(e) => handleMove(e.touches[0])}
      className={`relative group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-transform active:scale-[0.98] ${className}`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span className="pointer-events-none absolute -inset-3 rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(120px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.35), rgba(217,70,239,0.25), rgba(251,191,36,0.2), transparent 60%)' }} />
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
        {children}
      </span>
    </a>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
              Welcome to Alisharasily.com
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Building immersive, animated digital experiences
            </h1>
            <p className="mt-4 text-lg text-white/80">
              We craft modern, high-performance websites with glowing interactions, motion design, and a vibrant neon palette.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <GlowCTA href="#work">View Work</GlowCTA>
              <GlowCTA href="#contact" className="[&>span:last-child]:bg-white/5">Contact Us</GlowCTA>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </section>
  )
}
