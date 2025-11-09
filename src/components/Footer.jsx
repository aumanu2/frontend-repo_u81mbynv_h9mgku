export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-white/60">© {new Date().getFullYear()} Alisharasily. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {["Twitter","Instagram","LinkedIn"].map((s) => (
              <a key={s} href="#" className="relative group inline-flex items-center px-3 py-1.5 rounded-full text-sm text-white">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-50 group-hover:opacity-90 transition-opacity" />
                <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5">{s}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  )
}
