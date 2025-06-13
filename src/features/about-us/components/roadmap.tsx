const Roadmap = () => {
  return (
    <section id="roadmap">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Roadmap & Rencana 6 Bulan Ke Depan
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Setelah platform live di Jakarta, berikut rencana pengembangan jangka
          pendek untuk meningkatkan fungsionalitas dan cakupan Realestica:
        </p>
        <ol className="list-decimal list-inside text-base md:text-lg mb-4 space-y-2">
          <li>
            <strong>
              Bulan 1–2: Integrasi Data Real-Time & Partnership Agen Lokal
            </strong>{" "}
            – Menjalin kerja sama dengan agen properti di Jakarta untuk
            memperkaya data listing secara real-time dan validasi harga.
            Memperbarui pipeline ETL agar mampu mengambil data terbaru secara
            berkala.
          </li>
          <li>
            <strong>
              Bulan 3–4: Fitur Simulasi KPR & Integrasi Lembaga Keuangan
            </strong>{" "}
            – Mengembangkan modul simulasi cicilan KPR berdasarkan estimasi
            harga, suku bunga, dan durasi pinjaman. Kolaborasi awal dengan
            lembaga keuangan untuk memberikan perkiraan cepat kepada pengguna.
          </li>
          <li>
            <strong>Bulan 5: Uji Coba Ekspansi ke Kota Lain</strong> – Memulai
            pilot di kota terdekat (misal Bandung atau Surabaya) dengan
            menyesuaikan data lingkungan dan tren pasar lokal. Melakukan
            pengujian akurasi model di wilayah baru sebelum peluncuran penuh.
          </li>
          <li>
            <strong>Bulan 6: Peluncuran Versi Beta Publik & Marketing</strong> –
            Membuka akses beta ke publik, mengumpulkan feedback pengguna luas,
            serta kampanye pemasaran ringan di media sosial atau mitra agen.
            Menganalisis data penggunaan untuk iterasi berikutnya.
          </li>
        </ol>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Tim pengembangan tambahan (jika perlu), biaya server/cloud, lisensi
          data, dan alokasi jam orang untuk integrasi dan testing.
        </p>
        <a
          href="mailto:contact@realestica.com"
          className="inline-block px-6 py-3 font-medium text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Hubungi untuk Detail Jadwal & Anggaran
        </a>
      </details>
    </section>
  );
};

export default Roadmap;
