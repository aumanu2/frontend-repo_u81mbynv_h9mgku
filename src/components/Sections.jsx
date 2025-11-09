import Spline from '@splinetool/react-spline'
import { Megaphone, Code, Mail, BarChart3, CheckCircle2 } from 'lucide-react'
import Contact from './Contact'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
    </div>
  )}

function ServiceCard({ icon: Icon, title, points }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-cyan-300"><Icon size={22} /></div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <ul className="mt-3 space-y-2 text-white/75 text-sm">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 text-fuchsia-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="About" title="About Me" subtitle="I build animated, high-converting experiences that blend branding, motion, and performance." />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
            <p className="text-white/80 leading-relaxed">
              Focused on turning brands into memorable digital journeys. From visual identity to production-ready web builds, I bring a motion-first approach with a cohesive neon palette inspired by modern interfaces.
            </p>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
            <p className="text-white/80 leading-relaxed">
              My process is collaborative and data-informed, aligning design, development, and performance to drive clear outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

function Services() {
  const services = [
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      points: ['Content strategy', 'Creative design', 'Campaign management', 'Analytics & optimization']
    },
    {
      icon: Code,
      title: 'Web Development',
      points: ['Design to code', 'Performance & SEO', 'Responsive UI', 'Animations & micro-interactions']
    },
    {
      icon: BarChart3,
      title: 'Google Ads',
      points: ['Keyword strategy', 'High-ROI campaigns', 'Landing page alignment', 'Conversion tracking']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      points: ['Automations & flows', 'Template design', 'Segmentation', 'A/B testing']
    }
  ]

  return (
    <section id="services" className="relative py-28">
      {/* Spline background to cover the section */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="What we can do" title="Branding & Marketing Set" subtitle="A cohesive set of services to grow your brand and performance across channels." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} points={s.points} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </section>
  )
}

function Skills() {
  const skills = ['Brand Strategy', 'UI/UX', 'Motion Design', 'React', 'Tailwind CSS', 'Framer Motion', 'SEO', 'Analytics', 'CRO']
  return (
    <section id="skills" className="relative py-24">
      {/* Metallic cubes background (distinct from hero cover) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Skills" title="Skills that speak for me" />
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="relative group inline-flex items-center px-3 py-1.5 rounded-full text-sm text-white">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 blur-xl opacity-50 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5">{s}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

function FAQs() {
  const faqs = [
    { q: 'What is your typical process?', a: 'Discovery, strategy, design, development, iterate, and optimize.' },
    { q: 'Do you handle end-to-end?', a: 'Yes—branding, content, development, and performance optimization.' },
    { q: 'How long does a project take?', a: 'Most websites ship in 2–6 weeks depending on scope and revisions.' }
  ]
  return (
    <section id="faqs" className="relative py-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
              <h4 className="text-white font-semibold">{f.q}</h4>
              <p className="mt-2 text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Amina K.', quote: 'Transformed our brand into a living, breathing digital experience.' },
    { name: 'Rahul S.', quote: 'The animations and performance uplift directly improved conversions.' }
  ]
  return (
    <section id="testimonials" className="relative py-24">
      {/* Metallic cubes background (distinct from hero cover) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Clients" title="What clients say" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative z-10">
                <p className="text-white/80">“{t.quote}”</p>
                <p className="mt-3 text-white font-semibold">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

function Blog() {
  const posts = [
    { title: 'Designing with motion: a practical guide', tag: 'Design' },
    { title: 'Boosting performance without losing flair', tag: 'Development' },
    { title: 'Scaling paid media for growth', tag: 'Marketing' }
  ]
  return (
    <section id="blog" className="relative py-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Blog" title="Insights & Articles" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl">
              <span className="text-xs text-cyan-300">{p.tag}</span>
              <h3 className="mt-2 font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">Read more →</p>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

export default function Sections() {
  return (
    <div>
      <About />
      <Services />
      <Skills />
      <FAQs />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  )
}
