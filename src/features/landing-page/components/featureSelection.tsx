const FeatureSelection = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800 max-w-3xl tracking-tight md:-tracking-wider">
          Analitik cerdas untuk keputusan harga rumah lebih tepat.
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl">
          Realestica menggunakan AI untuk prediksi harga rumah, rekomendasi
          cerdas, pemantauan tren pasar, dan personalisasi strategi
          investasi—agar keputusan jual-beli Anda lebih terukur.
        </p>
      </div>

      {/* Grid dua kolom: daftar fitur di kiri, gambar di kanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12 px-4 sm:px-6 lg:px-8">
        {/* Kiri: Daftar fitur dengan details/summary */}
        <div className="space-y-4">
          {[
            {
              title: "Prediksi Harga Tepat untuk Rumah Anda",
              body: `Kami menganalisis lokasi, ukuran, fasilitas, dan data pasar historis agar Anda tahu kisaran nilai pasar yang wajar.`,
            },
            {
              title: "Rekomendasi Rumah Serupa",
              body: `Sistem belajar dari preferensi Anda dan data prediksi untuk menampilkan rumah lain dengan fitur dan kisaran harga serupa—memudahkan Anda membandingkan opsi terbaik.`,
            },
            {
              title: "Pantau Tren Pasar",
              body: `Pantau fluktuasi harga, permintaan, dan indikator ekonomi secara real-time. Dashboard interaktif menampilkan tren historis dan proyeksi agar Anda bisa menentukan waktu investasi dengan tepat.`,
            },
            {
              title: "Strategi Investasi yang Disesuaikan",
              body: `Realestica menyesuaikan rekomendasi berdasarkan tujuan, anggaran, toleransi risiko, dan preferensi Anda agar dapat menghindari opsi yang kurang cocok.`,
            },
          ].map((feature, idx) => (
            <details
              key={idx}
              className="group rounded-lg p-4 border-b border-gray-200"
              open={idx === 0}
            >
              <summary className="text-xl sm:text-2xl cursor-pointer text-left font-medium text-gray-800 ">
                {feature.title}
              </summary>
              <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.body}
              </p>
            </details>
          ))}
        </div>

        {/* Kanan: Gambar ilustrasi */}
        <div className="flex justify-center md:justify-end aspect-square">
          <img
            src="hero-10.jpg"
            alt="Analytics Detail"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSelection;
