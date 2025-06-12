const faqItems = [
  {
    question: "Seberapa akurat prediksi harga rumah?",
    answer:
      "Prediksi kami menggunakan data historis dan model ML terlatih secara berkala. Akurasi bervariasi, namun kami terus meningkatkan model dengan data terbaru.",
    open: true,
  },
  {
    question: "Bagaimana cara berlangganan update pasar?",
    answer:
      "Masukkan email pada bagian subscribe untuk menerima laporan rutin tentang tren harga rumah dan rekomendasi.",
  },
  {
    question: "Apakah layanan tersedia untuk area selain Jakarta?",
    answer:
      "Saat ini fokus utama pada rumah di Jakarta dan sekitarnya, tetapi kami berencana memperluas ke kota lain di masa depan.",
  },
  {
    question: "Bagaimana cara menghubungi tim Realestica?",
    answer:
      "Klik tombol “Get Started” atau “Hubungi Kami” untuk mengirimkan permintaan, atau kirim email ke realestica@inc.id.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <h2 className="text-3xl sm:text-5xl font-semibold text-gray-800 max-w-md leading-tight -tracking-wider">
          Frequently asked questions.
        </h2>
        <p className="text-gray-500 text-base max-w-md">
          Jawaban atas pertanyaan seputar prediksi harga rumah dan layanan kami.
        </p>
      </div>

      <div className="space-y-6">
        {faqItems.map(({ question, answer, open }, idx) => (
          <details key={idx} open={open} className="group rounded-lg py-4 ">
            <summary className="flex justify-between items-center cursor-pointer text-left font-medium text-gray-800 text-xl sm:text-2xl group-open:text-gray-900 transition-colors">
              {question}
              <span className="ml-2 bg-gray-100 rounded-full transition-transform group-open:rotate-180">
                <i className="bx bx-chevron-down p-2 text-xl"></i>
              </span>
            </summary>
            <p className="mt-3 text-gray-500 text-sm max-w-2xl leading-relaxed">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
