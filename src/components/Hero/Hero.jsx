import topoBg from '../../assets/images/hero-topo-bg.png'
import heroImage from '../../assets/images/hero-mountain.jpg'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-16 md:px-10 md:py-0 lg:px-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
        style={{ backgroundImage: `url(${topoBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 via-40% to-transparent" />

      <div className="relative mx-auto grid max-w-[94rem] gap-10 md:min-h-screen md:grid-cols-2 md:items-center md:gap-10 lg:gap-12">
        <article className="flex justify-center md:justify-start">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Adrian Zabolitzki
            </h1>

            <p className="mt-3 text-xl text-slate-300 sm:text-2xl">
              Software Developer
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              I build thoughtful, well-crafted web applications, shaped by a
              background in hospitality and science, and a love of the outdoors.
            </p>

            <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row sm:mt-10 md:justify-start">
              <button className="w-full rounded-xl text-white bg-[#b86a3a] px-8 py-3 shadow-md hover:shadow-lg cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-[#9a552f] sm:w-auto md:w-44 lg:w-auto">
                View My Work
              </button>

              <button className="w-full rounded-xl text-slate-200 border border-slate-400 px-8 py-3 shadow-md hover:shadow-lg cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-600/50 sm:w-auto md:w-44 lg:w-auto">
                Contact Me
              </button>
            </div>
          </div>
        </article>

        <article className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={heroImage}
              alt="Mountain ridge in Colorado"
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
