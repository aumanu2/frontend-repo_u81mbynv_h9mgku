import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
