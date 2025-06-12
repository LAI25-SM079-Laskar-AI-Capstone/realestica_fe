const Visionary = () => {
  return (
    <section className="relative backdrop-blur-sm px-4 py-12 sm:py-16">
      <div className="container mx-auto flex flex-col gap-8">
        {/* Brand Badge */}
        <div className="w-fit border rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          <a href="/" className="group flex items-center gap-1">
            Realestica
            <i className="bx bx-arrow-back text-xl group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Bayangkan potensi rumah Anda.
        </h1>

        {/* Subheading */}
        <p className="rounded-md border bg-gray-100 p-4 text-gray-600 text-lg leading-relaxed">
          Dari kavling sederhana hingga aset investasi strategis. Didukung oleh
          analisis harga, tren pasar Jakarta, dan wawasan berbasis data. Semua
          keputusan dimulai dari insight yang tepat.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 hover:cursor-pointer rounded-md hover:bg-blue-700 transition-colors">
            <a href="/">Mulai Sekarang</a>
          </button>
          <button className="border border-blue-600 text-blue-600 hover:cursor-pointer px-6 py-3 rounded-md hover:bg-blue-50 transition-colors">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Visionary;
