const Link = () => {
  return (
    <section id="link-dokumentasi">
      <details className="py-12">
        <summary className="border-b border-slate-500">
          <h2 className="text-3xl md:text-3xl font-semibold tracking-tight md:-tracking-wide lg:-tracking-wider mb-4">
            Link & Dokumentasi
          </h2>
        </summary>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Kami menyediakan beberapa sumber agar Anda bisa mendalami atau
          menggunakan Realestica:
        </p>
        <ul className="list-disc list-inside text-base md:text-lg mb-4 space-y-2">
          <li>
            <strong>Dataset Realestica:</strong>{" "}
            <a
              href="https://link-dataset"
              className="text-blue-600 hover:underline"
            >
              Akses Realestica Dataset
            </a>{" "}
            berisi data listing, atribut properti, dan data lingkungan yang
            digunakan untuk model.
          </li>
          <li>
            <strong>Repository GitHub:</strong>{" "}
            <a
              href="https://github.com/realestica/frontend"
              className="text-blue-600 hover:underline"
            >
              Frontend
            </a>
            ,{" "}
            <a
              href="https://github.com/realestica/backend"
              className="text-blue-600 hover:underline"
            >
              Backend
            </a>
            ,{" "}
            <a
              href="https://github.com/realestica/ml-pipeline"
              className="text-blue-600 hover:underline"
            >
              ML Pipeline
            </a>
            . README di masing-masing repo menjelaskan cara instalasi dan
            menjalankan secara lokal.
          </li>
          <li>
            <strong>Slide Presentasi Capstone:</strong>{" "}
            <a
              href="https://link-slide"
              className="text-blue-600 hover:underline"
            >
              Lihat Slide Presentasi
            </a>{" "}
            yang memuat latar belakang, metodologi, hasil, dan rencana
            pengembangan.
          </li>
          <li>
            <strong>Dokumentasi API / Teknis:</strong>{" "}
            <a
              href="https://link-dokumentasi-api"
              className="text-blue-600 hover:underline"
            >
              Dokumentasi API
            </a>{" "}
            dan{" "}
            <a
              href="https://link-pipeline"
              className="text-blue-600 hover:underline"
            >
              Dokumen Pipeline ML
            </a>
            .
          </li>
          <li>
            <strong>Demo Live:</strong>{" "}
            <a href="/" className="text-blue-600 hover:underline">
              Platform Realestica Live
            </a>
            .
          </li>
          <li>
            <strong>Video Demo:</strong>{" "}
            <a
              href="https://youtube.com/demo"
              className="text-blue-600 hover:underline"
            >
              Video Demo Penggunaan Realestica
            </a>
            .
          </li>
        </ul>
      </details>
    </section>
  );
};

export default Link;
