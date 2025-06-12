import React, { useEffect, useState } from "react";
import PredictionResultSkeleton from "./predictionResultSkeleton";
import { facilities, pointOfInterest } from "../utils/constant";
import { useRecommendation } from "../../recommendation/hooks/useRecommendation";
import type { BasicFormData, PredictResponseData } from "../types/predict";
import type { RecommendationCriteria } from "../../recommendation/types";
import PropertyRecommendations from "../../recommendation/components/propertyRecommendation";

interface HousePredictFormProps {
  onSubmit: (
    formData: BasicFormData,
    selectedFacilities: string[],
    selectedPointsOfInterest: string[]
  ) => void;
  isSubmitting: boolean;
  predictionResult?: PredictResponseData | null;
  error?: Error | null;
}

const HousePredictForm: React.FC<HousePredictFormProps> = ({
  onSubmit,
  isSubmitting,
  predictionResult,
  error,
}) => {
  const [formData, setFormData] = useState<BasicFormData>({
    s_kamar_tidur: "2",
    s_kamar_mandi: "1",
    s_luas_bangunan: "50",
    s_luas_tanah: "72",
    kabupaten: "jakarta barat",
    s_sertifikat: "shm",
    s_jumlah_lantai: "1",
  });

  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  const [selectedPointsOfInterest, setSelectedPointsOfInterest] = useState<
    string[]
  >([]);

  // Hook untuk rekomendasi
  const {
    recommendations,
    loading: recommendationLoading,
    error: recommendationError,
    getRecommendations,
  } = useRecommendation();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFacilityChange = (facility: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  const handlePointOfInterestChange = (poi: string) => {
    setSelectedPointsOfInterest((prev) =>
      prev.includes(poi) ? prev.filter((p) => p !== poi) : [...prev, poi]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoading(true);
    setTimeout(() => {
      onSubmit(formData, selectedFacilities, selectedPointsOfInterest);

      setShowLoading(false);
    }, 2000);
  };

  // Function untuk convert form data ke criteria
  const convertFormDataToCriteria = (
    formData: BasicFormData,
    facilities: string[],
    predictionPrice: number
  ): RecommendationCriteria => {
    // Buat range harga berdasarkan prediksi (±10% dari hasil prediksi)
    const priceVariation = predictionPrice * 0.1;
    const minPrice = Math.max(0, predictionPrice - priceVariation);
    const maxPrice = predictionPrice + priceVariation;

    return {
      min_price: Math.floor(minPrice),
      max_price: Math.ceil(maxPrice),
      location: formData.kabupaten,
      property_type: "House", // Asumsi untuk house predict form
      min_bedrooms:
        parseInt(formData.s_kamar_tidur) - 1 > 0
          ? parseInt(formData.s_kamar_tidur) - 1
          : 1,
      max_bedrooms: parseInt(formData.s_kamar_tidur) + 1,
      min_bathrooms:
        parseInt(formData.s_kamar_mandi) - 1 > 0
          ? parseInt(formData.s_kamar_mandi) - 1
          : 1,
      max_bathrooms: parseInt(formData.s_kamar_mandi) + 1,
      min_building_area:
        parseInt(formData.s_luas_bangunan) - 20 > 0
          ? parseInt(formData.s_luas_bangunan) - 20
          : 1,
      max_building_area: parseInt(formData.s_luas_bangunan) + 20,
      min_land_area:
        parseInt(formData.s_luas_tanah) - 20 > 0
          ? parseInt(formData.s_luas_tanah) - 20
          : 1,
      max_land_area: parseInt(formData.s_luas_tanah) + 20,
      required_facilities: facilities.length > 0 ? facilities : undefined,
      certificate_type: formData.s_sertifikat.toUpperCase(),
      // // Weight untuk scoring
      // price_weight: 0.3,
      // location_weight: 0.2,
      // size_weight: 0.2,
      // features_weight: 0.2,
      // condition_weight: 0.1,
      // use_similarity_scoring: true,
    };
  };

  // Effect untuk auto-fetch rekomendasi setelah prediksi berhasil
  useEffect(() => {
    if (predictionResult?.prediksi_harga) {
      const criteria = convertFormDataToCriteria(
        formData,
        selectedFacilities,
        predictionResult.prediksi_harga
      );

      getRecommendations({
        criteria,
        num_recommendations: 5, // Ambil 5 rekomendasi
      });
    }
  }, [predictionResult, formData, selectedFacilities, getRecommendations]);

  return (
    <details
      id="house-predict"
      className="w-full max-w-6xl mx-auto  rounded-2xl border border-slate-200 hover:border-blue-300 transition duration-500 overflow-hidden"
    >
      <summary className="bg-blue-700 hover:bg-blue-800 text-white flex flex-col md:flex-row justify-between gap-4 transition p-4 md:p-6 hover:cursor-pointer">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <i className="bx bx-sparkles text-xl md:text-2xl"></i>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Prediksi Harga Properti
            </h2>
          </div>
          <p className="max-w-prose text-sm">
            Penasaran berapa nilai properti impian Anda? Gunakan fitur prediksi
            kami untuk mendapatkan perkiraan harga akurat berdasarkan data
            terbaru.
          </p>
        </div>
        <i className="bx bxs-arrow-down-right-stroke-square text-3xl md:text-4xl"></i>
      </summary>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end justify-center space-y-6"
      >
        <div
          id="form"
          className="w-full flex flex-col justify-center items-end p-4 md:p-6 space-y-6 rounded-b-2xl"
        >
          {/* INPUT FIELDS */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {(
              [
                ["s_kamar_tidur", "Kamar Tidur", "2"],
                ["s_kamar_mandi", "Kamar Mandi", "1"],
                ["s_luas_bangunan", "Luas Bangunan (m²)", "50"],
                ["s_luas_tanah", "Luas Tanah (m²)", "72"],
                ["s_jumlah_lantai", "Jumlah Lantai", "2"],
              ] as [keyof BasicFormData, string, string][]
            ).map(([id, label, placeholder]) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type="number"
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleInputChange}
                  min="1"
                  placeholder={placeholder}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}
          </div>

          {/* SELECT OPTIONS */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="kabupaten"
                className="block text-sm font-medium mb-1"
              >
                Kabupaten
              </label>
              <select
                id="kabupaten"
                name="kabupaten"
                value={formData.kabupaten}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih Kabupaten</option>
                {[
                  "Jakarta Barat",
                  "Jakarta Pusat",
                  "Jakarta Selatan",
                  "Jakarta Timur",
                  "Jakarta Utara",
                ].map((kab) => (
                  <option key={kab.toLowerCase()} value={kab.toLowerCase()}>
                    {kab}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="s_sertifikat"
                className="block text-sm font-medium mb-1"
              >
                Sertifikat
              </label>
              <select
                id="s_sertifikat"
                name="s_sertifikat"
                value={formData.s_sertifikat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                {[
                  "adat",
                  "girik",
                  "hak pakai",
                  "hak sewa",
                  "hgb",
                  "hgu",
                  "lainnya",
                  "ppjb",
                  "shm",
                  "strata",
                ].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* FASILITAS */}
          <details className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <summary className="cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 font-medium text-gray-700 flex justify-between items-center">
              <span>
                Pilih Fasilitas Properti.
                <span className="text-slate-400">
                  {" "}
                  ({selectedFacilities.length} dipilih)
                </span>
              </span>
            </summary>
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-60 overflow-y-auto">
                {facilities.map((facility) => (
                  <label
                    key={facility}
                    className="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded"
                  >
                    <input
                      type="checkbox"
                      value={facility}
                      checked={selectedFacilities.includes(facility)}
                      onChange={() => handleFacilityChange(facility)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    {facility}
                  </label>
                ))}
              </div>
              {selectedFacilities.length > 0 && (
                <div className="mt-3 p-2 bg-blue-50 rounded">
                  <p className="text-sm text-blue-700">
                    <strong>Dipilih:</strong> {selectedFacilities.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </details>

          {/* POINT OF INTEREST */}
          <details className="w-full border border-gray-200 rounded-lg">
            <summary className="cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 font-medium text-gray-700 flex justify-between items-center">
              <span>
                Pilih Point of Interest.
                <span className="text-slate-400">
                  {" "}
                  ({selectedPointsOfInterest.length} dipilih)
                </span>
              </span>
            </summary>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {pointOfInterest.map((poi) => (
                  <label
                    key={poi}
                    className="flex items-center gap-2 text-sm hover:bg-gray-50 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      value={poi}
                      checked={selectedPointsOfInterest.includes(poi)}
                      onChange={() => handlePointOfInterestChange(poi)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    {poi}
                  </label>
                ))}
              </div>
              {selectedPointsOfInterest.length > 0 && (
                <div className="mt-3 p-2 bg-blue-50 rounded">
                  <p className="text-sm text-blue-700">
                    <strong>Dipilih:</strong>{" "}
                    {selectedPointsOfInterest.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </details>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting || showLoading}
            className={`w-full md:w-fit text-center text-sm md:text-base py-3 px-6 text-white rounded-full font-medium transition-colors ${
              isSubmitting || showLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting || showLoading ? (
              "Memprediksi..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                <i className="bx bxs-sparkles"></i> Prediksi Harga
              </span>
            )}
          </button>
        </div>
      </form>

      {/* ERROR */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">
            <strong>Error:</strong> {error?.message || "Terjadi kesalahan"}
          </p>
        </div>
      )}

      {/* HASIL PREDIKSI */}
      {showLoading ? (
        <PredictionResultSkeleton />
      ) : (
        predictionResult && (
          <div className="flex flex-col gap-6 bg-white m-4 md:m-6">
            {/* RESULT */}
            <div
              id="predictionResult"
              className="flex flex-col md:flex-row gap-4"
            >
              <i className="bx bxs-sparkles text-4xl text-blue-600"></i>
              <section className="flex-1 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Estimasi Properti Anda
                  </h4>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    Regression Algorithm
                  </span>
                </div>
                <article className="p-4 md:p-6 bg-white rounded-xl border border-blue-200">
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-bold text-blue-700">
                      {`Rp ${
                        predictionResult?.prediksi_harga?.toLocaleString(
                          "id-ID"
                        ) || "N/A"
                      }`}
                    </div>
                    <p className="text-base text-blue-700">
                      Perkiraan Nilai Properti dalam Rupiah
                    </p>
                  </div>
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <p className="text-xs text-yellow-700">
                      <strong>Disclaimer:</strong> Harga adalah estimasi
                      berdasarkan data dan algoritma kami. Nilai jual
                      sesungguhnya dapat berbeda.
                    </p>
                  </div>
                </article>
              </section>
            </div>

            {/* REKOMENDASI */}
            <div
              id="recommendation"
              className="flex flex-col md:flex-row gap-4"
            >
              <i className="bx bxs-sparkles text-4xl text-blue-600"></i>
              <section className="flex-1 bg-white overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Lihat properti serupa yang tersedia
                  </h4>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    Similarity Algorithm
                  </span>
                </div>
                <article className="flex overflow-x-auto p-4 md:p-6 rounded-xl border border-blue-200 gap-4 hide-scrollbar">
                  <PropertyRecommendations
                    recommendations={recommendations}
                    loading={recommendationLoading}
                    error={recommendationError}
                    showRecommendations={!!predictionResult}
                    axis="horizontal"
                    variant="compact"
                  />
                </article>
              </section>
            </div>
          </div>
        )
      )}
    </details>
  );
};

export default HousePredictForm;
