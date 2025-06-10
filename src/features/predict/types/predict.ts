// Interface untuk predict request
export interface PredictRequestData {
  // Features (f_)
  f_taman: number;
  f_jogging_track: number;
  f_cctv: number;
  f_lapangan_voli: number;
  f_lapangan_bola: number;
  f_lapangan_basket: number;
  f_lapangan_bulu_tangkis: number;
  f_tempat_jemuran: number;
  f_kulkas: number;
  f_telepon: number;
  f_tempat_cuci: number;
  f_laundry: number;
  f_masjid: number;
  f_taman_bermain: number;
  f_kolam_renang: number;
  f_mesin_cuci: number;
  f_kompor: number;
  f_keamanan_24_jam: number;
  f_kolam_ikan: number;
  f_backyard: number;
  f_kitchen_set: number;
  f_teras: number;
  f_wastafel: number;
  f_akses_parkir: number;
  f_lapangan_tenis: number;
  f_tempat_gym: number;
  f_ac: number;
  f_water_heater: number;
  f_one_gate_system: number;

  // Specifications (s_)
  s_jumlah_lantai: number;
  s_kamar_mandi: number;
  s_kamar_tidur: number;
  s_luas_bangunan: number;
  s_luas_tanah: number;

  // Points of Interest (poi_)
  poi_perbelanjaan: number;
  poi_sekolah: number;
  poi_transportasi: number;

  // Other fields
  kabupaten: string;
  s_sertifikat: string;
}

// Interface untuk predict response data
export interface PredictResponseData {
  prediksi_harga: number;
  prediksi_harga_formatted: string;
}
