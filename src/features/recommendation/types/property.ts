export interface Property {
  id: string; // Unique identifier for the property
  title: string;
  description: string;
  monthly_installment_info?: string;
  price_display: string; // Changed from 'price' to avoid confusion with 'price_numeric' and be more descriptive
  price_numeric: number;
  location_text: string; // Changed from 'location' for clarity
  estimated_savings?: string; // Changed from 'savings' for clarity
  facilities?: string[];
  specifications: {
    bedrooms: number; // Changed from 'kamar_tidur'
    bathrooms: number; // Changed from 'kamar_mandi'
    land_area: string; // Changed from 'luas_tanah'
    building_area: string; // Changed from 'luas_bangunan'
    carport_capacity?: number; // Changed from 'carport' for clarity
    certificate_type: string; // Changed from 'sertifikat'
    electricity_power: string; // Changed from 'daya_listrik'
    maid_bedrooms?: number; // Changed from 'kamar_tidur_pembantu'
    maid_bathrooms?: number; // Changed from 'kamar_mandi_pembantu'
    number_of_floors: number; // Changed from 'jumlah_lantai'
    property_condition: string; // Changed from 'kondisi_properti'
  };
  nearby_points_of_interest_text?: string; // Changed from 'poi_structured_text'
  posted_by: string;
  property_type: "House" | "Apartment" | "Other"; // Values translated
  source_url: string; // Changed from 'url' for more specific meaning
  createdAt: Date;
  updatedAt: Date;
}
