function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center md:flex-row md:items-center">
      <article className="w-full md:w-1/2 flex justify-center md:items-center md:px-10">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Adrian Zabolitzki
          </h1>
          <p className="text-2xl text-slate-300 mt-4">Software Developer</p>
          <p className="text-lg text-slate-400 mt-2">
            I build thoughtful, well-crafted web applications, shaped by a
            background in hospitality and science, and a love of the outdoors.
          </p>
          <div className="flex justify-center md:flex-col lg:flex-row md:items-start lg:justify-start mt-10 gap-10 md:gap-4 lg:gap-16">
            <button className="w-auto md:w-44 lg:w-auto bg-slate-900 rounded-xl px-8 py-2 cursor-pointer transition hover:bg-slate-600 hover:-translate-y-0.5 duration-200 ease-in-out">
              View My Work
            </button>
            <button className="w-auto md:w-44 lg:w-auto border border-slate-400 rounded-xl px-8 py-2 transition cursor-pointer hover:border-slate-600 hover:bg-slate-600/50 hover:-translate-y-0.5 duration-200 ease-in-out">
              Contact Me
            </button>
          </div>
        </div>
      </article>
      <article className="w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-0">
        <div className="max-w-6xl w-3/4 aspect-[4/3] border border-slate-600 flex justify-center items-center">
          <p>image goes here</p>
        </div>
      </article>
    </section>
  )
}
export default Hero
