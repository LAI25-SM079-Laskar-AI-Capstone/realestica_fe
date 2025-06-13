const Teknologi = () => {
  return (
    <section id="teknologi-metode">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Teknologi & Metode
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Di balik antarmuka sederhana, Realestica memanfaatkan teknologi modern
          untuk menjaga akurasi, performa, dan skalabilitas. Berikut gambaran
          singkat alur kerja kami:
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Data & Pipeline
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Kami mengumpulkan data listing dari sumber terpercaya dan data
              lingkungan (Points of Interest) seperti sekolah, transportasi,
              ruang hijau, fasilitas kesehatan. Data diolah melalui proses ETL:
              pembersihan (cleaning), normalisasi, dan feature engineering
              (misalnya menghitung jarak ke POI, mengkategorikan jenis
              sertifikat).
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Machine Learning
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Model prediksi harga menggunakan algoritma regresi canggih (misal
              Random Forest atau XGBoost/Neural Network) yang dievaluasi dengan
              metrik MAE/RMSE pada dataset validasi. Model dijadwalkan
              retraining periodik agar terus menyesuaikan perubahan tren pasar.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Rekomendasi
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Untuk rekomendasi properti serupa, kami menggunakan teknik
              similarity berbasis fitur lengkap. Di masa depan, potensi hybrid
              dengan data perilaku pengguna untuk personalisasi lebih mendalam.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Frontend & Backend
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Frontend dibangun dengan React dan TanStack Query agar interaktif
              dan responsif. Backend (misal Node.js/Python) bertugas melayani
              API prediksi dan rekomendasi dengan response cepat. Infrastruktur
              container (Docker) dan hosting cloud memastikan skalabilitas.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight md:-tracking-wide lg:-tracking-wider mb-2">
              Deployment & Monitoring
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Aplikasi dan model dideploy di cloud dengan pipeline CI/CD.
              Monitoring performa API dan akurasi model dijalankan rutin untuk
              memastikan kualitas layanan.
            </p>
          </div>
        </div>
        <p className="text-base md:text-lg leading-relaxed mt-6">
          Jika Anda tertarik detail teknis lebih dalam (API spec, dokumentasi ML
          pipeline), silakan lihat di Dokumentasi Teknis pada bagian Link &
          Dokumentasi.
        </p>
      </details>
    </section>
  );
};

export default Teknologi;
