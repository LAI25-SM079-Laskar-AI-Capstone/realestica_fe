export interface Property {
  id: string;
  title: string;
  description: string;
  monthly_installment_info?: string;
  price_display: string;
  price_numeric: number;
  location_text: string;
  estimated_savings?: string;
  facilities?: string[];
  specifications: {
    bedrooms: number;
    bathrooms: number;
    land_area: string;
    building_area: string;
    carport_capacity?: number;
    certificate_type: string;
    electricity_power: string;
    maid_bedrooms?: number;
    maid_bathrooms?: number;
    number_of_floors: number;
    property_condition: string;
  };
  nearby_points_of_interest_text?: string;
  posted_by: string;
  property_type: "House" | "Apartment" | "Other";
  source_url: string;
  createdAt: Date;
  updatedAt: Date;
}
