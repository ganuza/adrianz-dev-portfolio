import heroImage from '../../assets/images/hero-mountain.jpg'

function Hero() {
  return (
    <section className="min-h-screen px-6 py-16 md:px-10 md:py-0 lg:px-16">
      <div className="mx-auto grid min-h-screen max-w-[94rem] items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <article className="flex justify-center md:justify-start">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Adrian Zabolitzki
            </h1>
            <p className="mt-4 text-2xl text-slate-300">Software Developer</p>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">
              I build thoughtful, well-crafted web applications, shaped by a
              background in hospitality and science, and a love of the outdoors.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="w-auto rounded-xl bg-slate-900 px-8 py-2 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-slate-600 md:w-44 lg:w-auto">
                View My Work
              </button>
              <button className="w-auto rounded-xl border border-slate-400 px-8 py-2 cursor-pointer transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-600/50 md:w-44 lg:w-auto">
                Contact Me
              </button>
            </div>
          </div>
        </article>

        <article className="flex justify-center md:justify-end">
          <div className="w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <img
              src={heroImage}
              alt="Mountain ridge in Colorado"
              className="w-full h-full object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
