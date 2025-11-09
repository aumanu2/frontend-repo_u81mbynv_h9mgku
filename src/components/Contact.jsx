import { useState } from 'react'

function GlowSubmit({ children }) {
  return (
    <button type="submit" className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white">
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
    </section>
  )
}
