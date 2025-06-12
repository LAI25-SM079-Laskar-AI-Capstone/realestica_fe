export default function Hero() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a href="/" className="mb-6 text-sm font-medium  hover:underline">
            Realestica · AI Cerdas untuk Harga & Rekomendasi Rumah Jakarta
          </a>

          <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl tracking-tight lg:-tracking-wider">
            Yakin mau beli rumah di Jakarta? Cek harganya dulu, yuk!
          </h1>

          <h3 className="text-lg text-gray-500 sm:text-xl md:text-2xl max-w-2xl mt-4">
            Realestica menyediakan prediksi harga berbasis machine learning dan
            rekomendasi alternatif rumah serupa—agar setiap keputusan beli atau
            jual lebih objektif dan menguntungkan.
          </h3>

          <div className="my-8 w-full max-w-5xl overflow-hidden rounded-lg border sm:rounded-xl h-64 sm:h-80 md:h-[480px]">
            <img
              className="h-full w-full object-cover"
              src="hero-6.jpg"
              width={1920}
              height={1080}
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
