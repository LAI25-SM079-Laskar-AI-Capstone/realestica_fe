const AnalisisPasar = () => {
  return (
    <section id="analisis-swat">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Analisis Pasar & SWOT
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Target pasar Realestica adalah generasi muda (rentang usia 25–45
          tahun), keluarga baru, profesional digital, dan investor properti
          skala kecil-menengah. Berdasarkan Rumah123 Recap 2024, sekitar 75%
          pencari properti berasal dari kelompok usia 18–44, dengan fokus awal
          di area Jakarta (Selatan, Barat, Utara, Timur, Pusat) yang masuk dalam
          10 besar permintaan tertinggi. Pengguna di segmen ini mencari hunian
          strategis dengan fasilitas lengkap dan harga yang sesuai kemampuan
          finansial. Realestica hadir untuk menjawab kebutuhan tersebut melalui
          data-driven insights.
        </p>
        <ul className="list-disc list-inside text-base md:text-lg mb-4 space-y-2">
          <li>
            <strong>Strengths:</strong> Prediksi harga akurat dan transparan
            menggunakan ML; UI/UX minimalis mudah digunakan; rekomendasi
            properti serupa berbasis fitur lengkap.
          </li>
          <li>
            <strong>Weaknesses:</strong> Ketergantungan pada kualitas data
            eksternal; belum terintegrasi pengecekan legalitas properti secara
            otomatis.
          </li>
          <li>
            <strong>Opportunities:</strong> Kolaborasi dengan agen/developer
            untuk data lebih kaya; integrasi lembaga keuangan untuk simulasi
            KPR; ekspansi ke kota lain setelah validasi Jakarta.
          </li>
          <li>
            <strong>Threats:</strong> Kompetisi platform besar dapat meniru
            fitur; regulasi perlindungan data memerlukan kepatuhan; fluktuasi
            pasar memerlukan retraining model rutin.
          </li>
        </ul>
        <p className="text-base md:text-lg italic leading-relaxed">
          Untuk detail analisis pasar lengkap, silakan merujuk ke laporan
          terpisah.
        </p>
      </details>
    </section>
  );
};

export default AnalisisPasar;
