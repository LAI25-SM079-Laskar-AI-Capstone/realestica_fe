import React, { useState } from "react";
import { facilities } from "../utils/constant";
import type { BasicFormData, PredictResponseData } from "../types/predict";

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
    onSubmit(formData, selectedFacilities);
  };

  return (
    <details
      id="house-predict"
      className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 w-full mx-auto hover:cursor-pointer transition duration-500"
    >
      <summary>
        <h2 className="text-2xl font-bold text-gray-800">
          🏠 Prediksi Harga Properti
        </h2>
      </summary>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="s_kamar_tidur"
              className="block text-sm font-medium text-gray-600 mb-1"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="s_kamar_mandi"
              className="block text-sm font-medium text-gray-600 mb-1"
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
              className="block text-sm font-medium text-gray-600 mb-1"
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
              className="block text-sm font-medium text-gray-600 mb-1"
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

        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="kabupaten"
              className="block text-sm font-medium text-gray-600 mb-1"
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
              className="block text-sm font-medium text-gray-600 mb-1"
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

        {/* Facilities */}
        <details className="border border-gray-200 rounded-lg">
          <summary className="cursor-pointer p-4 bg-gray-50 hover:bg-gray-100 font-medium text-gray-700 flex justify-between items-center">
            <span>🏢 Fasilitas ({selectedFacilities.length} dipilih)</span>
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isSubmitting ? "Memprediksi..." : "Prediksi Harga"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">
            <strong>Error:</strong> {error?.message || "Terjadi kesalahan"}
          </p>
        </div>
      )}

      {/* Result */}
      {predictionResult && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-center">
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            💰 Hasil Prediksi
          </h4>
          <div className="text-3xl font-bold text-green-700">
            {predictionResult?.prediksi_harga_formatted ||
              `Rp ${
                predictionResult?.prediksi_harga?.toLocaleString("id-ID") ||
                "N/A"
              }`}
          </div>
        </div>
      )}
    </details>
  );
};

export default HousePredictForm;
