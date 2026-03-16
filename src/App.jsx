import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-700 flex items-center justify-center">
      {/* <Navbar /> */}
      <main className="max-w-5xl mx-auto px-6">
        {/* <Hero /> */}
        {/* <Projects /> */}
        <h1 className="text-6xl font-semibold mb-4">Adrian Zabolitzki</h1>
        <p className="text-2xl text-slate-500">Portfolio coming soon.</p>
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
export default App
