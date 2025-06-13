const Solusi = () => {
  return (
    <section id="solusi-fitur">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Solusi & Fitur Unggulan
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Realestica menyediakan beberapa fitur utama yang dirancang untuk
          membantu Anda membuat keputusan properti lebih cepat, tepat, dan
          berbasis data.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Prediksi Harga Berbasis AI
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Model machine learning kami memproses berbagai atribut
              properti—seperti lokasi, luas tanah dan bangunan, jumlah kamar,
              jenis sertifikat, jumlah lantai—serta faktor lingkungan (jarak ke
              sekolah, transportasi, ruang hijau, pusat perbelanjaan, dan
              lain-lain). Hasilnya adalah estimasi harga yang objektif, membantu
              Anda memahami kisaran harga wajar di pasar.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Rekomendasi Properti Serupa
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Setelah Anda melihat estimasi satu properti, Realestica
              menampilkan alternatif properti serupa berdasarkan preferensi
              fasilitas dan anggaran. Dengan demikian, Anda dapat membandingkan
              beberapa pilihan tanpa harus mencari ulang secara manual.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Data Komprehensif & Analitik
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Tidak hanya prediksi harga, kami juga menampilkan ringkasan
              analitik: tren harga pasar di wilayah tertentu, insight sederhana
              tentang strategi investasi, dan perubahan pasar terkini. Ini
              memudahkan Anda memantau perkembangan harga seiring waktu.
            </p>
          </div>
        </div>
      </details>
    </section>
  );
};

export default Solusi;
