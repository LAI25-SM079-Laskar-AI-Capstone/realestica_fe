const LatarBelakang = () => {
  return (
    <section id="latar-belakang">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Latar Belakang
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Pasar properti di Jakarta terkenal dinamis dan terkadang kurang
          transparan. Harga rumah bisa sangat bervariasi antar wilayah, dan
          calon pembeli sering kesulitan menilai apakah sebuah listing
          ditawarkan dengan harga wajar. Sementara itu, penjual kerap bingung
          menentukan harga jual yang kompetitif namun tetap menguntungkan.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Menurut Rumah123 Recap 2024, sekitar 75% pencari properti berusia
          18–44 tahun — generasi muda yang semakin tertarik membeli rumah
          pertama mereka. Area-area di Jakarta (Selatan, Barat, Utara, Timur,
          Pusat) masuk dalam top permintaan. Namun informasi yang tersebar belum
          cukup membantu pengguna memahami faktor-faktor yang memengaruhi harga,
          seperti fasilitas sekitar, jenis sertifikat, atau tren pasar terkini.
        </p>
        <ul className="list-disc list-inside text-base md:text-lg mb-4 space-y-2">
          <li>
            <strong>Untuk Pembeli</strong>: Risiko membayar terlalu tinggi
            (overpay), waktu pencarian lebih lama, dan ketidakpastian negosiasi.
          </li>
          <li>
            <strong>Untuk Penjual</strong>: Sulit menentukan harga jual yang
            tepat; risiko underprice atau stagnasi listing.
          </li>
          <li>
            <strong>Untuk Agen/Developer Kecil</strong>: Membutuhkan alat
            valuasi awal cepat agar dapat memberikan penawaran atau rekomendasi
            lebih akurat kepada klien.
          </li>
          <li>
            <strong>Untuk Investor Kecil-Menengah</strong>: Kesulitan mendeteksi
            properti undervalue atau potensi sewa optimal tanpa analisis data
            mendalam.
          </li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed">
          Misi kami adalah memberdayakan masyarakat—terutama generasi muda,
          keluarga baru, dan pelaku usaha kecil di sektor properti—dengan
          data-driven insights. Kami ingin menghadirkan platform yang memudahkan
          pengguna menilai harga properti secara transparan, sekaligus
          menawarkan rekomendasi properti serupa yang sesuai kebutuhan mereka.
        </p>
      </details>
    </section>
  );
};

export default LatarBelakang;
