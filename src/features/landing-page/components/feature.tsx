type FeatureText = {
  iconClass: string;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    iconClass: "bx bx-bolt",
    title: "Prediksi Harga Akurat",
    description:
      "Estimasi harga tanah dan properti yang tepat berbasis data, bantu Anda menetapkan harga jual atau penawaran terbaik.",
  },
  {
    iconClass: "bx bx-bar-chart-square",
    title: "Analisis Pasar Mendalam",
    description:
      "Lihat tren harga dan pergerakan pasar properti di Jakarta secara real-time untuk keputusan investasi yang lebih cerdas.",
  },
  {
    iconClass: "bx bx-bullseye",
    title: "Rekomendasi Properti Tepat Sasaran",
    description:
      "Sistem kami mempelajari preferensi Anda untuk menyarankan properti yang paling relevan dengan kebutuhan Anda.",
  },
];

const Feature = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 not-prose">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight md:-tracking-wider">
            Mengapa memilih Realestica?
          </h3>
          <h4 className="text-lg sm:text-2xl font-light text-gray-600 ">
            Keunggulan berbasis AI untuk keputusan investasi properti yang lebih
            cerdas.
          </h4>

          <div className="mt-6 grid gap-8 sm:gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
            {featureText.map(({ iconClass, title, description }, index) => (
              <div key={index} className="flex flex-col gap-3">
                <i className={`${iconClass} text-3xl text-primary`}></i>
                <h4 className="text-lg font-medium text-black tracking-tight md:-tracking-wider">
                  {title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
