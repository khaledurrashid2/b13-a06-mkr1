function Hero({ setActiveTab }) {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Part of the hero section*/}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            ✨ New: AI-Powered Tools Available
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
            Supercharge Your <br />
            <span className="text-violet-600">Digital Workflow</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto md:mx-0 mb-8">
            Access premium AI tools, design assets, templates, and productivity software — all in
            one place. Start creating faster today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => setActiveTab("products")}
              className="px-7 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition shadow-lg"
            >
              Explore Products
            </button>
            <button className="px-7 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:border-violet-400 transition flex items-center justify-center gap-2">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* Right part of the hero section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/banner.png"
            alt="Banner"
            className="w-72 md:w-96 object-contain rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;