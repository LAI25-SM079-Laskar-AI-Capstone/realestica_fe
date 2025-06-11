import React, { useState } from "react";
import { facilities } from "../utils/constant";
import type { BasicFormData, PredictResponseData } from "../types/predict";
import PredictionResultSkeleton from "./predictionResultSkeleton";

interface HousePredictFormProps {
  onSubmit: (formData: BasicFormData, selectedFacilities: string[]) => void;
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
  });

  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [showLoading, setShowLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoading(true);
    setTimeout(() => {
      onSubmit(formData, selectedFacilities);

      setShowLoading(false);
    }, 2000);
  };

  return (
    <details
      id="house-predict"
      className=" rounded-2xl border border-slate-200 hover:border-blue-300 w-full mx-auto   transition duration-500 overflow-hidden"
    >
      <summary className="bg-blue-700 hover:bg-blue-800 flex justify-between items-baseline-last transition  p-6 hover:cursor-pointer">
        <div className="flex flex-col ">
          <div className="flex  items-center gap-3 mb-4">
            <i className="bxr  bx-sparkles text-2xl text-white"></i>
            <h2 className="text-2xl font-bold text-white">
              Prediksi Harga Properti
            </h2>
          </div>
          <p className="max-w-[50ch] text-white text-sm">
            Penasaran berapa nilai properti impian Anda? Gunakan fitur prediksi
            kami untuk mendapatkan perkiraan harga akurat berdasarkan data
            terbaru.
          </p>
        </div>
        <i className="bxr  bxs-arrow-down-right-stroke-square text-4xl text-white"></i>
      </summary>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-end justify-center space-y-6 "
      >
        <div
          id="form"
          className=" w-full flex flex-col  justify-center items-end p-6   space-y-6 rounded-b-2xl "
        >
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="s_kamar_tidur"
                className="block text-sm font-medium mb-1"
              >
                Kamar Tidur
              </label>
              <input
                type="number"
                id="s_kamar_tidur"
                name="s_kamar_tidur"
                value={formData.s_kamar_tidur}
                onChange={handleInputChange}
                min="1"
                className="w-full px-3 py-2 border  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="2"
                required
              />
            </div>
            <div>
              <label
                htmlFor="s_kamar_mandi"
                className="block text-sm font-medium text-white mb-1"
              >
                Kamar Mandi
              </label>
              <input
                type="number"
                id="s_kamar_mandi"
                name="s_kamar_mandi"
                value={formData.s_kamar_mandi}
                onChange={handleInputChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="s_luas_bangunan"
                className="block text-sm font-medium text-white mb-1"
              >
                Luas Bangunan (m²)
              </label>
              <input
                type="number"
                id="s_luas_bangunan"
                name="s_luas_bangunan"
                value={formData.s_luas_bangunan}
                onChange={handleInputChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="50"
                required
              />
            </div>
            <div>
              <label
                htmlFor="s_luas_tanah"
                className="block text-sm font-medium text-white mb-1"
              >
                Luas Tanah (m²)
              </label>
              <input
                type="number"
                id="s_luas_tanah"
                name="s_luas_tanah"
                value={formData.s_luas_tanah}
                onChange={handleInputChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="72"
                required
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="kabupaten"
                className="block text-sm font-medium text-white mb-1"
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
                <option value="jakarta barat">Jakarta Barat</option>
                <option value="jakarta pusat">Jakarta Pusat</option>
                <option value="jakarta selatan">Jakarta Selatan</option>
                <option value="jakarta timur">Jakarta Timur</option>
                <option value="jakarta utara">Jakarta Utara</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="s_sertifikat"
                className="block text-sm font-medium text-white mb-1"
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
                <option value="adat">Adat</option>
                <option value="girik">Girik</option>
                <option value="hak pakai">Hak Pakai</option>
                <option value="hak sewa">Hak Sewa</option>
                <option value="hgb">HGB</option>
                <option value="hgu">HGU</option>
                <option value="lainnya">Lainnya</option>
                <option value="ppjb">PPJB</option>
                <option value="shm">SHM</option>
                <option value="strata">Strata</option>
              </select>
            </div>
          </div>

          <details className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <summary className="cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 font-medium text-gray-700 flex justify-between items-center">
              <span>
                Pilih Fasilitas Properti.
                <span className="text-slate-400">
                  {" "}
                  ({selectedFacilities.length} dipilih)
                </span>
              </span>
              <span className="text-sm">▼</span>
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

          <button
            type="submit"
            disabled={isSubmitting || showLoading}
            className={`w-fit py-3 px-6  rounded-full font-medium transition-colors hover:cursor-pointer ${
              isSubmitting || showLoading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSubmitting || showLoading ? (
              "Memprediksi..."
            ) : (
              <span className="flex items-center gap-2">
                <i className="bxr  bxs-sparkles"></i>
                Prediksi Harga
              </span>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">
            <strong>Error:</strong> {error?.message || "Terjadi kesalahan"}
          </p>
        </div>
      )}

      {showLoading ? (
        <PredictionResultSkeleton />
      ) : (
        predictionResult && (
          <div className="bg-white m-6">
            <div id="result" className="flex gap-4 ">
              <i className="bxr  bxs-sparkles text-4xl text-blue-600"></i>

              <section className="w-220 relative p-6 bg-white rounded-xl  overflow-hidden border border-blue-200">
                <div className="relative z-10">
                  <h4 className="text-sm font-semibold text-gray-500 mb-1 flex items-center justify-between">
                    <span>ESTIMASI PROPERTI ANDA</span>
                  </h4>
                  <div className="mb-6 mt-2">
                    <div className="text-4xl font-bold text-blue-700">
                      {`Rp ${
                        predictionResult?.prediksi_harga?.toLocaleString(
                          "id-ID"
                        ) || "N/A"
                      }`}
                    </div>
                    <p className="text-base  text-blue-700">
                      Perkiraan Nilai Properti dalam Rupiah
                    </p>{" "}
                  </div>
                  <div id="disclaimer" className="bg-yellow-400 p-2 rounded-lg">
                    <p className="text-xs text-yellow-700">
                      <strong>Disclaimer:</strong> Harga yang ditampilkan adalah
                      estimasi berdasarkan data yang tersedia dan algoritma
                      kami. Harga sebenarnya dapat bervariasi tergantung kondisi
                      pasar, negosiasi, dan faktor lain yang tidak dapat kami
                      prediksi sepenuhnya. Untuk nilai jual/beli resmi,
                      disarankan untuk melakukan <i>appraisal</i> profesional.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                Lihat properti serupa yang tersedia:
              </p>
            </section>
          </div>
        )
      )}
    </details>
  );
};

export default HousePredictForm;
