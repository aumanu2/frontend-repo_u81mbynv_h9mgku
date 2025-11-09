import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function GlowButton({ children, className = '' }) {
  return (
    <button className={`relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-white transition-colors ${className}`}>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5">{children}</span>
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400" />
            <span className="text-white font-semibold tracking-wide">Alisharasily</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <GlowButton>Get Started</GlowButton>
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition"
                >
                  {item.label}
                </a>
              ))}
              <GlowButton className="w-full justify-center">Get Started</GlowButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
