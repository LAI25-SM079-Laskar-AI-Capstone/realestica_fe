import { useParams } from "react-router-dom";
import BackButton from "../shared/components/back-button";
import usePropertyById from "../features/house/hooks/usePropertyById";

const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: house, isLoading, isError } = usePropertyById(numericId);

  if (isLoading)
    return (
      <main className="relative min-h-screen max-w-[1100px] mx-auto py-12 items-start gap-12">
        <p>Loading...</p>
      </main>
    );

  if (isError || !house)
    return (
      <main className="relative min-h-screen max-w-[1100px] mx-auto py-12 items-start gap-12">
        <p>Property tidak ditemukan</p>
      </main>
    );

  console.log("House Data:", house);
  console.log("Specifications:", house.specifications);

  if (isNaN(numericId)) {
    return <p>ID tidak valid</p>;
  }

  const formatDate = (dateInput: Date | string | undefined): string => {
    if (!dateInput) return "-";
    const date =
      typeof dateInput === "string" ? new Date(dateInput) : dateInput;
    if (!(date instanceof Date) || isNaN(date.getTime())) return "-";
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const images = [
    { id: 1, src: "image.png" },
    { id: 2, src: "image.png" },
    { id: 3, src: "image.png" },
    { id: 4, src: "image.png" },
    { id: 5, src: "image.png" },
  ];

  return (
    <main className="p-4">
      <div
        key={house.id}
        className="relative max-w-[1100px] mx-auto py-12  items-start gap-12"
      >
        <BackButton />

        <div id="container" className="flex gap-6">
          <div id="content" className="w-[70%]">
            <header className=" pb-4 mb-6 border-b border-gray-200">
              <article className="bg-slate-100 h-96 rounded-xl grid grid-cols-4 grid-rows-2 p-4 gap-2 mb-6">
                {images && images.length > 0 ? (
                  <>
                    {/* Gambar pertama: span 2 kolom & 2 baris */}
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                      <img
                        src={`/${images[0].src}`} // Pastikan file ada di public/
                        alt={`property image 1`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Gambar 2-5: masing-masing dalam 1 sel */}
                    {images.slice(1, 5).map((img, idx) => (
                      <div
                        key={img.id}
                        className="rounded-2xl overflow-hidden "
                      >
                        <img
                          src={`/${img.src}`} // Pastikan file ada di public/
                          alt={`property image ${idx + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="col-span-4 row-span-2 flex items-center justify-center h-80 bg-gray-100 rounded-xl">
                    <span className="text-gray-400">Tidak ada gambar</span>
                  </div>
                )}
              </article>

              <div id="card-header" className="flex justify-between">
                <div id="title">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {house.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-1">
                    <i className="bx  bx-location"></i> {house.location_text}
                  </p>
                </div>

                <div id="option" className="flex justify-between gap-2">
                  <i className="bx  bx-share p-2 bg-slate-50 h-fit hover:bg-slate-100 text-xl hover:cursor-pointer rounded-full"></i>
                  <i className="bx  bx-bookmarks p-2 bg-slate-50 h-fit hover:bg-slate-100 text-xl hover:cursor-pointer rounded-full"></i>
                  <i className="bx  bx-dots-horizontal-rounded p-2 bg-slate-50 h-fit hover:bg-slate-100 text-xl hover:cursor-pointer rounded-full"></i>
                </div>
              </div>

              <div
                id="price"
                className="flex flex-wrap items-center justify-between mt-4"
              >
                <p className="text-6xl font-semibold text-blue-600">
                  {house.price_display}
                </p>
                {house.monthly_installment_info && (
                  <p className="text-md text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {house.monthly_installment_info}
                  </p>
                )}
              </div>

              {house.estimated_savings && (
                <p className="text-sm text-yellow-600 mt-2">
                  Estimasi penghematan: {house.estimated_savings}
                </p>
              )}
            </header>
            {/* Konten Utama */}
            <main>
              <section id="desc" className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                  Deskripsi
                </h2>
                <p className="text-slate-400 whitespace-pre-line leading-relaxed">
                  {house.description}
                </p>
              </section>

              {house.nearby_points_of_interest_text && (
                <section className="mt-8">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                    Properties available in the same area
                  </h2>
                  <p className="text-slate-400">
                    {house.nearby_points_of_interest_text}
                  </p>
                </section>
              )}

              <section id="add" className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Informasi Tambahan
                </h2>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    Diposting oleh:{" "}
                    <span className="font-medium text-gray-700">
                      {house.posted_by}
                    </span>
                  </p>
                  <p>
                    ID Properti:{" "}
                    <span className="font-medium text-gray-700">
                      {house.id}
                    </span>
                  </p>
                  <p>
                    Tanggal Diposting:{" "}
                    <span className="font-medium text-gray-700">
                      {formatDate(house.createdAt)}
                    </span>
                  </p>
                  <p>
                    Terakhir Diperbarui:{" "}
                    <span className="font-medium text-gray-700">
                      {formatDate(house.updatedAt)}
                    </span>
                  </p>
                  {house.source_url && (
                    <p>
                      Sumber:{" "}
                      <a
                        href={house.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {house.source_url}
                      </a>
                    </p>
                  )}
                </div>
              </section>
            </main>
          </div>

          <aside className="w-[30%] h-full sticky top-4 z-10">
            <section
              id="facilities"
              className="w-full bg-slate-100 p-4 rounded-xl mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Fasilitas
              </h2>
              {house.facilities ? (
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {house.facilities.map((facility, index) => (
                    <li key={index} className="list-none">
                      {facility}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Tidak ada data fasilitas.</p>
              )}
            </section>

            <section id="specs" className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Spesifikasi
              </h2>
              <div className=" grid grid-cols-3   border rounded-xl text-gray-600">
                <div className="p-4">
                  <div className="text-xs">Tipe Properti: </div>
                  <div className="text-xl"> {house.property_type}</div>
                </div>
                {house.specifications ? (
                  <>
                    <div className="p-4">
                      <div className="text-xs">Kamar Tidur:</div>
                      <div className="text-xl">
                        {house.specifications.bedrooms}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Kamar Mandi:</div>
                      <div className="text-xl">
                        {house.specifications.bathrooms}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Luas Tanah:</div>
                      <div className="text-xl">
                        {house.specifications.land_area}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Luas Bangunan:</div>
                      <div className="text-xl">
                        {house.specifications.building_area}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Jumlah Lantai:</div>
                      <div className="text-xl">
                        {house.specifications.number_of_floors}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Kapasitas Carport:</div>
                      <div className="text-xl">
                        {house.specifications.carport_capacity} mobil
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Daya Listrik:</div>
                      <div className="text-xl">
                        {house.specifications.electricity_power}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs">Sertifikat:</div>
                      <div className="text-xl">
                        {house.specifications.certificate_type}
                      </div>
                    </div>
                    {house.specifications.maid_bedrooms && (
                      <div className="p-4">
                        <div className="text-xs">Kamar Tidur ART:</div>
                        <div className="text-xl">
                          {house.specifications.maid_bedrooms}
                        </div>
                      </div>
                    )}
                    {house.specifications.maid_bathrooms && (
                      <div className="p-4">
                        <div className="text-xs">Kamar Mandi ART:</div>
                        <div className="text-xl">
                          {house.specifications.maid_bathrooms}
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <div className="text-xs">Kondisi Properti:</div>
                      <div className="text-xl">
                        {house.specifications.property_condition}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="col-span-3 p-4 text-gray-500">
                    Tidak ada data spesifikasi.
                  </div>
                )}
              </div>
            </section>

            <section id="cta" className=" pt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition duration-150 ease-in-out hover:cursor-pointer">
                Hubungi Agen
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition duration-150 ease-in-out hover:cursor-pointer">
                Simpan Properti
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default PropertyPage;
