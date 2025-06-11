export interface ApiResponse<T> {
  status: 'success' | 'error';
  data: T;
  error: string | null;
}

export interface PropertySpecifications {
  bedrooms: number;
  bathrooms: number;
  land_area: string;
  building_area: string;
  carport_capacity: number | string;
  certificate_type: string;
  electricity_power: string;
  number_of_floors: number;
  property_condition: string;
}

export interface NearbyPointsOfInterest {
  transportation?: string[];
  schools?: string[];
  shopping?: string[];
}

export interface RecommendationCriteria {
  min_price?: number;
  max_price?: number;
  location?: string;
  property_type?: 'House' | 'Apartment' | 'Other';
  min_bedrooms?: number;
  max_bedrooms?: number;
  min_bathrooms?: number;
  max_bathrooms?: number;
  min_land_area?: number;
  max_land_area?: number;
  min_building_area?: number;
  max_building_area?: number;
  required_facilities?: string[];
  has_carport?: boolean;
  property_condition?: string;
  certificate_type?: string;
  price_weight?: number;
  location_weight?: number;
  size_weight?: number;
  features_weight?: number;
  condition_weight?: number;
  use_similarity_scoring?: boolean;
}

export interface RecommendationByCriteriaRequest {
  criteria: RecommendationCriteria;
  num_recommendations?: number;
}

export interface SimilarPropertiesRequest {
  property_id: number;
  num_recommendations?: number;
  min_similarity?: number;
}

export interface RecommendedProperty {
  id: string;
  title: string;
  description: string;
  monthly_installment_info: string;
  price_display: string;
  price_numeric: number;
  location_text: string;
  estimated_savings: string;
  posted_by: string;
  source_url: string;
  property_type: 'House' | 'Apartment' | 'Other';
  facilities: string[];
  specifications: PropertySpecifications;
  nearby_points_of_interest: NearbyPointsOfInterest;
  createdAt: string;
  updatedAt: string;
}

export interface RecommendationResponse {
  recommendations: RecommendedProperty[];
  total_found: number;
  computation_time_ms: number;
  message: string;
}

export interface RecommendationFilters {
  priceRange: [number, number];
  location: string;
  propertyType: 'House' | 'Apartment' | 'Other' | '';
  bedrooms: [number, number];
  bathrooms: [number, number];
  landArea: [number, number];
  buildingArea: [number, number];
  facilities: string[];
  hasCarport: boolean;
  condition: string;
  certificateType: string;
}
