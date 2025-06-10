import React, { useState } from "react";
import usePredict from "../hooks/usePredict";
import type { PredictRequestData } from "../types/predict";

const facilities = [
  "Taman",
  "Jogging Track",
  "CCTV",
  "Lapangan Voli",
  "Lapangan Bola",
  "Lapangan Basket",
  "Lapangan Bulu Tangkis",
  "Tempat Jemuran",
  "Kulkas",
  "Telepon",
  "Tempat Cuci",
  "Laundry",
  "Masjid",
  "Taman Bermain",
  "Kolam Renang",
  "Mesin Cuci",
  "Kompor",
  "Keamanan 24 Jam",
  "Kolam Ikan",
  "Backyard",
  "Kitchen Set",
  "Teras",
  "Wastafel",
  "Akses Parkir",
  "Lapangan Tenis",
  "Tempat Gym",
  "AC",
  "Water Heater",
  "One Gate System",
];

const HousePredict: React.FC = () => {
  const { predictPrice, prediction, isPending, isError, error, isSuccess } =
    usePredict();

  const [formData, setFormData] = useState({
    kamar_tidur: "",
    kamar_mandi: "",
    luas_bangunan: "",
    luas_tanah: "",
    kabupaten: "",
    sertifikat: "shm",
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

    const predictData: PredictRequestData = {
      f_taman: selectedFacilities.includes("Taman") ? 1 : 0,
      f_jogging_track: selectedFacilities.includes("Jogging Track") ? 1 : 0,
      f_cctv: selectedFacilities.includes("CCTV") ? 1 : 0,
      f_lapangan_voli: selectedFacilities.includes("Lapangan Voli") ? 1 : 0,
      f_lapangan_bola: selectedFacilities.includes("Lapangan Bola") ? 1 : 0,
      f_lapangan_basket: selectedFacilities.includes("Lapangan Basket") ? 1 : 0,
      f_lapangan_bulu_tangkis: selectedFacilities.includes(
        "Lapangan Bulu Tangkis"
      )
        ? 1
        : 0,
      f_tempat_jemuran: selectedFacilities.includes("Tempat Jemuran") ? 1 : 0,
      f_kulkas: selectedFacilities.includes("Kulkas") ? 1 : 0,
      f_telepon: selectedFacilities.includes("Telepon") ? 1 : 0,
      f_tempat_cuci: selectedFacilities.includes("Tempat Cuci") ? 1 : 0,
      f_laundry: selectedFacilities.includes("Laundry") ? 1 : 0,
      f_masjid: selectedFacilities.includes("Masjid") ? 1 : 0,
      f_taman_bermain: selectedFacilities.includes("Taman Bermain") ? 1 : 0,
      f_kolam_renang: selectedFacilities.includes("Kolam Renang") ? 1 : 0,
      f_mesin_cuci: selectedFacilities.includes("Mesin Cuci") ? 1 : 0,
      f_kompor: selectedFacilities.includes("Kompor") ? 1 : 0,
      f_keamanan_24_jam: selectedFacilities.includes("Keamanan 24 Jam") ? 1 : 0,
      f_kolam_ikan: selectedFacilities.includes("Kolam Ikan") ? 1 : 0,
      f_backyard: selectedFacilities.includes("Backyard") ? 1 : 0,
      f_kitchen_set: selectedFacilities.includes("Kitchen Set") ? 1 : 0,
      f_teras: selectedFacilities.includes("Teras") ? 1 : 0,
      f_wastafel: selectedFacilities.includes("Wastafel") ? 1 : 0,
      f_akses_parkir: selectedFacilities.includes("Akses Parkir") ? 1 : 0,
      f_lapangan_tenis: selectedFacilities.includes("Lapangan Tenis") ? 1 : 0,
      f_tempat_gym: selectedFacilities.includes("Tempat Gym") ? 1 : 0,
      f_ac: selectedFacilities.includes("AC") ? 1 : 0,
      f_water_heater: selectedFacilities.includes("Water Heater") ? 1 : 0,
      f_one_gate_system: selectedFacilities.includes("One Gate System") ? 1 : 0,

      s_jumlah_lantai: 1,
      s_kamar_mandi: parseInt(formData.kamar_mandi) || 1,
      s_kamar_tidur: parseInt(formData.kamar_tidur) || 1,
      s_luas_bangunan: parseInt(formData.luas_bangunan) || 1,
      s_luas_tanah: parseInt(formData.luas_tanah) || 1,

      poi_perbelanjaan: 0,
      poi_sekolah: 0,
      poi_transportasi: 0,

      kabupaten: formData.kabupaten,
      s_sertifikat: formData.sertifikat,
    };

    // console.log("Predict data:", predictData);

    predictPrice(predictData, {
      onError: (error) => {
        console.error("Prediction failed:", error);
      },
    });
  };

  return (
    <div className="house-predict bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🏠 Prediksi Harga Properti
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="kamar_tidur"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Kamar Tidur
            </label>
            <input
              type="number"
              id="kamar_tidur"
              name="kamar_tidur"
              value={formData.kamar_tidur}
              onChange={handleInputChange}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="kamar_mandi"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Kamar Mandi
            </label>
            <input
              type="number"
              id="kamar_mandi"
              name="kamar_mandi"
              value={formData.kamar_mandi}
              onChange={handleInputChange}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="1"
              required
            />
          </div>

          <div>
            <label
              htmlFor="luas_bangunan"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Luas Bangunan (m²)
            </label>
            <input
              type="number"
              id="luas_bangunan"
              name="luas_bangunan"
              value={formData.luas_bangunan}
              onChange={handleInputChange}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="50"
              required
            />
          </div>

          <div>
            <label
              htmlFor="luas_tanah"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Luas Tanah (m²)
            </label>
            <input
              type="number"
              id="luas_tanah"
              name="luas_tanah"
              value={formData.luas_tanah}
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
            <input
              type="text"
              id="kabupaten"
              name="kabupaten"
              value={formData.kabupaten}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="banda aceh"
              required
            />
          </div>

          <div>
            <label
              htmlFor="sertifikat"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Sertifikat
            </label>
            <select
              id="sertifikat"
              name="sertifikat"
              value={formData.sertifikat}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="shm">SHM</option>
              <option value="hgb">HGB</option>
              <option value="adat">Adat</option>
            </select>
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">Fasilitas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-60 overflow-y-auto">
            {facilities.map((facility) => (
              <label key={facility} className="flex items-center gap-2 text-sm">
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
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
            isPending
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isPending ? "Memprediksi..." : "Prediksi Harga"}
        </button>
      </form>

      {/* Error */}
      {isError && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="text-sm">
            <strong>Error:</strong> {error?.message || "Terjadi kesalahan"}
          </p>
        </div>
      )}

      {/* Result */}
      {isSuccess && prediction && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-center">
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            💰 Hasil Prediksi
          </h4>
          <div className="text-3xl font-bold text-green-700">
            {prediction?.prediksi_harga_formatted ||
              `Rp ${
                prediction?.prediksi_harga?.toLocaleString("id-ID") || "N/A"
              }`}
          </div>
        </div>
      )}
    </div>
  );
};

export default HousePredict;
