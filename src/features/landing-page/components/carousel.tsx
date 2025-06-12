import { useRef } from "react";

const Carousel = () => {
  const featuredPlots = [
    {
      id: 1,
      name: "Senayan Riverside Plot",
      price: "Rp2,350,000,000",
      area: "200 m²",
      image: "image-1.jpg",
      description:
        "Prime riverside land in Senayan with high growth potential.",
    },
    {
      id: 2,
      name: "Kemang Hillside Parcel",
      price: "Rp1,800,000,000",
      area: "150 m²",
      image: "image-2.jpg",
      description:
        "Strategic hillside plot in Kemang area, ideal for upscale development.",
    },
    {
      id: 3,
      name: "Pondok Indah Corner Lot",
      price: "Rp3,500,000,000",
      area: "180 m²",
      image: "image-3.jpg",
      description:
        "Corner lot in Pondok Indah with excellent accessibility and amenities.",
    },
    {
      id: 4,
      name: "BSD City Greenfield",
      price: "Rp1,200,000,000",
      area: "250 m²",
      image: "hero-4.jpg",
      description:
        "Greenfield plot in BSD City, perfect for long-term investment.",
    },
    {
      id: 5,
      name: "Tangerang Transit-Oriented Plot",
      price: "Rp950,000,000",
      area: "100 m²",
      image: "image-10.jpg",
      description:
        "Near public transport hub in Tangerang; ideal untuk properti sewa.",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      const scrollAmount = width * 0.7;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 tracking-tight md:-tracking-wider max-w-md">
          Jelajahi rumah unggulan kami.
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-sm">
          Pilihan rumah terpilih di Jakarta dengan prediksi nilai investasi
          optimal.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {/* Left Arrow */}
        <button
          onClick={() => scrollSlider("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-md rounded-full"
          aria-label="Prev"
        >
          <span className="text-xl">&#x276E;</span>
        </button>

        {/* Scrollable Cards */}
        <div
          ref={sliderRef}
          className="overflow-x-auto scroll-smooth scroll-snap-x px-1 sm:px-2"
        >
          <div className="flex gap-6">
            {featuredPlots.map((plot) => (
              <div
                key={plot.id}
                className="scroll-snap-center flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={plot.image}
                    alt={plot.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {plot.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {plot.description}
                  </p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="font-medium text-gray-900">
                      {plot.price}
                    </span>
                    <span className="text-blue-500 underline">{plot.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollSlider("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white shadow-md rounded-full"
          aria-label="Next"
        >
          <span className="text-xl">&#x276F;</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
