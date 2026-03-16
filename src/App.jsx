import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="max-h-screen bg-white text-slate-700">
      {/* <Navbar /> */}
      <main className="max-w-5xl mx-auto px-6">
        {/* <Hero /> */}
        {/* <Projects /> */}
        <h1 className="text-6xl mt-200">Adrian Z</h1>
        <p className="text-3xl">Portfolio coming soon.</p>
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
export default App
