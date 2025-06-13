const Status = () => {
  return (
    <section id="status">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Status & Pencapaian
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Realestica telah selesai 100% sesuai rencana capstone dan sudah live
          untuk pasar awal di Jakarta.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Pada pengujian internal, model prediksi menunjukkan MAE sekitar [X
          juta rupiah] pada data validasi. Meskipun hasil ini bervariasi antar
          wilayah, angka ini memberi gambaran estimasi yang lebih objektif
          dibanding penilaian manual. (Catatan: angka detail dan metodologi
          pengujian tersedia di dokumentasi teknis.)
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Feedback pengguna beta akan segera dikumpulkan untuk penyempurnaan
          model.
        </p>
        <div className="space-x-4">
          <a
            href="/demo-live"
            className="inline-block px-6 py-3 font-medium text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Lihat Demo Live
          </a>
          <a
            href="https://youtube.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-medium text-base bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Tonton Video Demo
          </a>
        </div>
      </details>
    </section>
  );
};

export default Status;
