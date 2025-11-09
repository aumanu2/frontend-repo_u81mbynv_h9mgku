import Spline from '@splinetool/react-spline'

function WorkCard({ title, desc, cta }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>
        <a href="#contact" className="mt-4 inline-flex text-cyan-300 hover:text-fuchsia-300 transition-colors">{cta}</a>
      </div>
    </div>
  )
}

export default function Work() {
  const projects = [
    { title: 'Brand Campaign Launch', desc: 'Integrated SMM + Ads + Landing page with motion-first storytelling.', cta: 'Discuss case study →' },
    { title: 'SaaS Website Refresh', desc: 'Animated hero with Spline, improved UX, and conversion-optimized flows.', cta: 'See the approach →' },
    { title: 'E-commerce Growth', desc: 'Full-funnel strategy: brand polish, web performance, paid media.', cta: 'Explore results →' }
  ]

  return (
    <section id="work" className="relative py-28">
      {/* Spline background to ensure animated cover across this section */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we can do</h2>
          <p className="mt-3 text-white/70">A curated selection of outcomes across brand, web, and growth.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.title} title={p.title} desc={p.desc} cta={p.cta} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </section>
  )
}
