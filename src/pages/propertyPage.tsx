import { useParams } from "react-router-dom";
import { useEffect } from "react";

import BackButton from "../shared/components/back-button";

import { useRecommendation } from "../features/recommendation/hooks/useRecommendation";
import PropertyRecommendations from "../features/recommendation/components/propertyRecommendation";
import type { SimilarPropertiesRequest } from "../features/recommendation/types";

import type { Property } from "../features/house/types/property";
import usePropertyById from "../features/house/hooks/usePropertyById";
import DescriptionSection from "../features/house/components/houseDescription";

const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  const { data: house, isLoading, isError } = usePropertyById(numericId);

  const {
    recommendations,
    loading: similarLoading,
    error: similarError,
    getSimilar,
    // totalFound,
    computationTime,
  } = useRecommendation();

  const convertPropertyToSimilarRequest = (
    property: Property
  ): SimilarPropertiesRequest => {
    return {
      property_id: Number(property.id),
      num_recommendations: 5,
      min_similarity: 0.1,
    };
  };

  useEffect(() => {
    if (house && house.id) {
      const similarRequest = convertPropertyToSimilarRequest(house);
      getSimilar(similarRequest);
    }
  }, [house, getSimilar]);

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

  // console.log("House Data:", house);
  // console.log("Specifications:", house.specifications);

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

  const images_p = [
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
        className="relative max-w-[1100px]  mx-auto py-12  items-start gap-12"
      >
        <BackButton />

        <section id="container" className="lg:flex-row flex flex-col gap-6">
          <div id="content" className="w-full lg:w-[70%]">
            <header className="pb-6 border-b border-gray-200">
              <article className="bg-slate-100 rounded-xl p-4 mb-6 space-y-2">
                {images_p && images_p.length > 0 ? (
                  <>
                    {/* Gambar utama */}
                    <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                      <img
                        src={`/${images_p[0].src}`}
                        alt="Gambar Utama"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Grid gambar kecil */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {images_p.slice(1, 5).map((img, idx) => (
                        <div
                          key={img.id}
                          className="rounded-2xl overflow-hidden aspect-square"
                        >
                          <img
                            src={`/${img.src}`}
                            alt={`Gambar ${idx + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="h-60 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
                    Tidak ada gambar tersedia.
                  </div>
                )}
              </article>

              <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                    {house.title}
                  </h1>
                  <p className="text-md md:text-lg text-gray-600">
                    <i className="bx bx-location"></i> {house.location_text}
                  </p>
                </div>
                <div className="flex gap-2 self-start md:self-center">
                  <i className="bx bx-forward-big p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-lg md:text-xl"></i>
                  <i className="bx bx-bookmarks p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-lg md:text-xl"></i>
                  <i className="bx bx-dots-horizontal-rounded p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-lg md:text-xl"></i>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-4 mt-4">
                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-600">
                  {house.price_display}
                </p>
                {house.monthly_installment_info && (
                  <p className="text-sm md:text-base text-green-600 bg-green-100 px-3 py-1 rounded-full">
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

            <main>
              <DescriptionSection description={house.description} />

              {house.nearby_points_of_interest_text && (
                <section className="mt-8">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
                    Properties available in the same area
                  </h2>
                  <p className="text-slate-500">
                    {house.nearby_points_of_interest_text}
                  </p>
                </section>
              )}

              <section id="add" className="mt-10 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  Informasi Tambahan
                </h2>
                <div className="text-sm text-gray-500 space-y-2">
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

          <aside className="w-full lg:w-[30%] h-full lg:sticky lg:top-4 z-10 space-y-8">
            {/* Fasilitas */}
            <section
              id="facilities"
              className="w-full bg-slate-100 p-4 rounded-xl"
            >
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">
                Fasilitas
              </h2>
              {house.facilities?.length ? (
                <ul className="space-y-1 text-slate-600">
                  {house.facilities.map((facility, index) => (
                    <li key={index} className="list-disc list-inside">
                      {facility}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500">Tidak ada data fasilitas.</p>
              )}
            </section>

            {/* Spesifikasi */}
            <section id="specs">
              <h2 className="text-2xl font-semibold text-slate-700 mb-4">
                Spesifikasi
              </h2>

              <div className="grid grid-cols-2 border border-slate-300 rounded-2xl overflow-hidden text-slate-800">
                {/* Kolom Kiri */}
                <div className="divide-y divide-slate-100 border-r border-r-slate-300 p-4 flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Tipe Properti</p>
                    <p className="text-lg font-semibold">
                      {house.property_type || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Kamar Mandi</p>
                    <p className="text-lg font-semibold">
                      {house.specifications?.bathrooms || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Luas Bangunan</p>
                    <p className="text-lg font-semibold">
                      {house.specifications?.building_area || "-"} m²
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Sertifikat</p>
                    <p className="text-lg font-semibold">
                      {house.specifications?.certificate_type || "-"}
                    </p>
                  </div>
                </div>

                {/* Kolom Kanan */}
                <div className="divide-y divide-slate-100 p-4 flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Kamar Tidur</p>
                    <p className="text-lg font-semibold">
                      {house.specifications?.bedrooms || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Luas Tanah</p>
                    <p className="text-lg font-semibold">
                      {house.specifications?.land_area || "-"} m²
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Jumlah Lantai</p>
                    <p className="text-lg font-semibold">
                      {house.specifications?.number_of_floors || "-"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section id="cta" className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition hover:cursor-pointer duration-150 ease-in-out">
                Hubungi Agen
              </button>
              <button className="bg-slate-200 hover:bg-slate-300  text-sm text-slate-800 font-bold py-3 px-6 rounded-lg w-full sm:w-auto transition hover:cursor-pointer duration-150 ease-in-out">
                Simpan Properti
              </button>
            </section>
          </aside>
        </section>

        {/* Similar Properties Section */}
        <section
          id="similar-properties"
          className="mt-12 pt-8 border-t border-slate-200"
        >
          {/* Stats Info */}
          {recommendations.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-slate-500">
                  Memproses selama {computationTime.toFixed(2)} detik
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                  Similarity Algorithm
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <details>
                  <summary>
                    <h2 className="text-3xl font-bold text-slate-800  flex items-end gap-2">
                      Rekomendasi Rumah Serupa
                    </h2>
                  </summary>
                  <p className="text-slate-600">
                    Properti yang dipilih khusus berdasarkan karakteristik
                    serupa yang mungkin Anda minati.
                  </p>
                </details>
                {/* Property Recommendations Component */}
                <article className="flex flex-nowrap overflow-x-auto rounded-xl p-6 border border-blue-200 gap-4 hide-scrollbar">
                  <PropertyRecommendations
                    recommendations={recommendations}
                    loading={similarLoading}
                    error={similarError}
                    showRecommendations={true}
                  />
                </article>
              </div>
            </div>
          )}

          {/* Loading State Khusus */}
          {similarLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="text-lg font-medium">
                  Mencari properti serupa...
                </span>
              </div>
            </div>
          )}

          {/* Enhanced No Results State */}
          {!similarLoading && recommendations.length === 0 && !similarError && (
            <div className="text-center py-16 bg-slate-50 rounded-xl">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  Belum Ada Properti Serupa
                </h3>
                <p className="text-slate-500 mb-6">
                  Saat ini belum ada properti lain yang memiliki karakteristik
                  serupa dengan properti ini. Coba periksa kembali nanti atau
                  jelajahi properti lainnya.
                </p>
                <button
                  onClick={() => (window.location.href = "/properties")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Jelajahi Properti Lain
                </button>
              </div>
            </div>
          )}

          {/* Error State */}
          {similarError && (
            <div className="text-center py-12 bg-red-50 rounded-xl border border-red-200">
              <div className="max-w-md mx-auto">
                <div className="text-4xl mb-4">⚠️</div>
                <h3 className="text-lg font-semibold text-red-700 mb-2">
                  Gagal Memuat Properti Serupa
                </h3>
                <p className="text-red-600 text-sm mb-4">{similarError}</p>
                <button
                  onClick={() => {
                    const similarRequest =
                      convertPropertyToSimilarRequest(house);
                    getSimilar(similarRequest);
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Coba Lagi
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default PropertyPage;
