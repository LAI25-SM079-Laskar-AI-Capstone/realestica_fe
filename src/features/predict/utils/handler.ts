export const createFacilityMapping = (selectedFacilities: string[]) => {
  const facilityMappings = {
    Taman: "f_taman",
    "Jogging Track": "f_jogging_track",
    CCTV: "f_cctv",
    "Lapangan Voli": "f_lapangan_voli",
    "Lapangan Bola": "f_lapangan_bola",
    "Lapangan Basket": "f_lapangan_basket",
    "Lapangan Bulu Tangkis": "f_lapangan_bulu_tangkis",
    "Tempat Jemuran": "f_tempat_jemuran",
    Kulkas: "f_kulkas",
    Telepon: "f_telepon",
    "Tempat Cuci": "f_tempat_cuci",
    Laundry: "f_laundry",
    Masjid: "f_masjid",
    "Taman Bermain": "f_taman_bermain",
    "Kolam Renang": "f_kolam_renang",
    "Mesin Cuci": "f_mesin_cuci",
    Kompor: "f_kompor",
    "Keamanan 24 Jam": "f_keamanan_24_jam",
    "Kolam Ikan": "f_kolam_ikan",
    Backyard: "f_backyard",
    "Kitchen Set": "f_kitchen_set",
    Teras: "f_teras",
    Wastafel: "f_wastafel",
    "Akses Parkir": "f_akses_parkir",
    "Lapangan Tenis": "f_lapangan_tenis",
    "Tempat Gym": "f_tempat_gym",
    AC: "f_ac",
    "Water Heater": "f_water_heater",
    "One Gate System": "f_one_gate_system",
  };

  const facilityMap: Record<string, number> = {};

  Object.entries(facilityMappings).forEach(([facility, key]) => {
    facilityMap[key] = selectedFacilities.includes(facility) ? 1 : 0;
  });

  return facilityMap;
};
