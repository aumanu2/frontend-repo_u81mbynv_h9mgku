import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function GlowSubmit({ children }) {
  function handleMove(e) {
    const t = e.currentTarget
    const rect = t.getBoundingClientRect()
    const x = (e.clientX ?? e.touches?.[0]?.clientX) - rect.left
    const y = (e.clientY ?? e.touches?.[0]?.clientY) - rect.top
    t.style.setProperty('--x', `${x}px`)
    t.style.setProperty('--y', `${y}px`)
  }

  return (
    <button
      type="submit"
      onMouseMove={handleMove}
      onTouchStart={handleMove}
      onTouchMove={handleMove}
      className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-transform active:scale-[0.98]"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span
        className="pointer-events-none absolute -inset-3 rounded-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120px circle at var(--x,50%) var(--y,50%), rgba(34,211,238,0.35), rgba(217,70,239,0.25), rgba(251,191,36,0.2), transparent 60%)',
        }}
      />
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3">
        {children}
      </span>
    </button>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-24">
      {/* Match Home background theme */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something glowing</h2>
            <p className="mt-3 text-white/70">Share your vision and we’ll craft a vibrant, animated experience tailored to your brand.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Name" required />
                  <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Email" required />
                </div>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Company / Project" />
                <textarea rows="5" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" placeholder="Tell us about your project" />
                <GlowSubmit>Send Message</GlowSubmit>
              </form>
              {status && <p className="mt-4 text-sm text-emerald-300">{status}</p>}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-400 opacity-30 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-semibold text-white">Why choose us?</h3>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Motion-first design approach</li>
                <li>• Pixel-perfect implementation</li>
                <li>• SEO and performance minded</li>
                <li>• Friendly, collaborative process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Non-blocking overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
