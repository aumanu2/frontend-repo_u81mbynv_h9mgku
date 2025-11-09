import { Rocket, Sparkles, Palette } from 'lucide-react'

function Card({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-cyan-300">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  )
}

export default function Showcase() {
  const features = [
    {
      icon: Rocket,
      title: 'Performance first',
      desc: 'Lightning-fast sites with smooth animations and optimized assets.'
    },
    {
      icon: Sparkles,
      title: 'Glowing interactions',
      desc: 'Buttons and elements pulse with vibrant neon glows on hover.'
    },
    {
      icon: Palette,
      title: 'Cohesive palette',
      desc: 'A modern blend of cyan, fuchsia, amber and violet on dark canvas.'
    }
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">End-to-end design and development for immersive, animated web experiences.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
