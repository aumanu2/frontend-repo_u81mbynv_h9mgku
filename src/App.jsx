import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default App
