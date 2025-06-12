const Demo = () => {
  return (
    <section className="py-16 px-4 mx-auto">
      {/* Heading + Tombol CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
          Demo Dashboard Realestica
        </h2>
        <button
          onClick={() => {
            // Tambahkan handler misalnya membuka modal atau redirect ke demo URL
            // misal: navigate("/demo") atau openModal()
          }}
          className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-900 transition"
        >
          Request Demo <span className="text-lg">→</span>
        </button>
      </div>

      {/* Grid dua kolom: Gambar mockup di kiri, deskripsi + CTA di kanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Kolom Gambar */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="dashboard-mockup.png"
            alt="Demo Dashboard Realestica"
            className="w-full h-full object-cover aspect-video"
          />
        </div>
        {/* Kolom Deskripsi */}
        <div className="flex flex-col justify-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Tampilan Dashboard Interaktif
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            Lihat visualisasi heatmap harga rumah, grafik tren real-time, dan
            ringkasan rekomendasi secara intuitif. Dashboard kami dirancang
            untuk memudahkan Anda memahami data dan mengambil keputusan cepat.
          </p>
          <button
            onClick={() => {
              // Handler tambahan, misalnya scroll ke form sign-up atau membuka modal demo interaktif
            }}
            className="self-start px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition"
          >
            Coba Demo Sekarang
          </button>
        </div>
      </div>

      {/* Opsional: Jika ingin menambahkan beberapa poin fitur dashboard di bawah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
        {/* Poin 1 */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 text-blue-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* ikon dashboard small */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">
            Heatmap harga rumah: lihat area dengan potensi kenaikan tertinggi.
          </p>
        </div>
        {/* Poin 2 */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 text-blue-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* ikon chart line */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 17l6-6 4 4 8-8"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">
            Grafik tren real-time: pantau fluktuasi harga dan permintaan pasar.
          </p>
        </div>
        {/* Poin 3 */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 text-blue-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* ikon document/report */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">
            Export laporan: unduh ringkasan analisis dalam format PDF untuk
            presentasi atau diskusi.
          </p>
        </div>
        {/* Poin 4 */}
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 text-blue-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* ikon user/settings */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A10 10 0 1118.88 6.196 10 10 0 015.12 17.804zM12 12a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </div>
          <p className="text-gray-600 text-sm">
            Personalisasi tampilan: sesuaikan widget dashboard sesuai kebutuhan
            analisis Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;
