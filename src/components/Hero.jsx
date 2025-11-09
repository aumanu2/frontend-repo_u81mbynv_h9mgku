import Spline from '@splinetool/react-spline'

function GlowCTA({ children, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`relative group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
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
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
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
