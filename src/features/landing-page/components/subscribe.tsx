const Subscribe = () => {
  return (
    <section className="py-12 sm:py-16">
      {/* Container teks */}
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 tracking-tight md:-tracking-wider">
          Investasi lebih cerdas,
          <br /> dimulai dari data yang tepat.
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Dapatkan update prediksi harga rumah di Jakarta, tren pasar, dan
          rekomendasi investasi langsung ke email Anda.
        </p>

        {/* Form input + button */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full sm:w-auto flex-grow max-w-sm p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full sm:w-auto px-5 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition">
            Stay Updated
          </button>
        </div>
      </div>

      {/* Gambar di bawah teks */}
      <div className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="hero-8.jpg"
          alt="Vision Section Image"
          className="w-full rounded-lg object-cover  h-64 sm:h-80 md:h-96"
        />
      </div>
    </section>
  );
};

export default Subscribe;
