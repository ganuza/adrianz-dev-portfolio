import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-700 text-white flex items-center justify-center">
      {/* <Navbar /> */}
      <main className="max-w-5xl mx-auto px-6">
        {/* <Hero /> */}
        {/* <Projects /> */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Adrian Zabolitzki
        </h1>
        <p className="text-2xl text-slate-300 mt-4">Software Developer</p>
        <p className="text-lg text-slate-400 mt-2">Portfolio coming soon.</p>
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
export default App
