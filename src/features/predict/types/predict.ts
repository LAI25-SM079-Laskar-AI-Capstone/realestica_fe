export interface BasicFormData {
  s_kamar_tidur: string;
  s_kamar_mandi: string;
  s_luas_bangunan: string;
  s_luas_tanah: string;
  kabupaten: string;
  s_sertifikat: string;
}

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
  s_kamar_mandi: string;
  s_jumlah_lantai: string;
  s_kamar_tidur: string;
  s_luas_bangunan: string;
  s_luas_tanah: string;

  // Points of Interest (poi_)
  poi_perbelanjaan: number;
  poi_sekolah: number;
  poi_transportasi: number;

  // Other fields
  kabupaten: string;
  s_sertifikat: string;
}

export interface PredictResponseData {
  prediksi_harga: number;
  prediksi_harga_formatted: string;
}
