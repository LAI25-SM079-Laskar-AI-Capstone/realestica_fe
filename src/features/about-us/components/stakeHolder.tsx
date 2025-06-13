const StakeHolder = () => {
  return (
    <section id="stakeholder">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Stakeholder & Kolaborasi
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Realestica bermanfaat bagi berbagai pihak, dan kami terbuka untuk
          kerja sama dalam berbagai bentuk:
        </p>
        <ul className="list-disc list-inside text-base md:text-lg mb-4 space-y-2">
          <li>
            <strong>Keluarga Muda & Pembeli Rumah Pertama</strong> – Mendapat
            panduan harga dan rekomendasi properti sesuai kebutuhan, sehingga
            memudahkan pencarian hunian pertama.
          </li>
          <li>
            <strong>Penjual & Pemilik Properti</strong> – Membantu menentukan
            harga jual yang kompetitif namun wajar berdasarkan data objektif.
          </li>
          <li>
            <strong>Agen Properti & Developer Kecil</strong> – Alat valuasi awal
            untuk listing, mempercepat negosiasi dengan klien, serta
            meningkatkan kepercayaan.
          </li>
          <li>
            <strong>Investor Properti Kecil-Menengah</strong> – Mendeteksi
            peluang undervalue dan potensi sewa berdasarkan analisis data.
          </li>
          <li>
            <strong>Platform Properti Digital</strong> – Integrasi API
            Realestica untuk memperkaya fitur pencarian dan rekomendasi di
            platform Anda.
          </li>
          <li>
            <strong>Pemerintah & Lembaga Keuangan</strong> – Sebagai referensi
            transparansi harga dalam kebijakan atau simulasi KPR.
          </li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed">
          Jika Anda mewakili salah satu pihak di atas, mari berdiskusi lebih
          lanjut untuk sinergi. Hubungi kami melalui email atau form kontak.
        </p>
      </details>
    </section>
  );
};

export default StakeHolder;
