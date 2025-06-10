import { api } from "../../../shared/utils/api";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export interface HouseQueryParams {
  location_text?: string;
  property_type?: string;
  bedrooms?: number;
  bathrooms?: number;
  min_price?: number;
  max_price?: number;
  filter?: string;
  sort?: "asc" | "desc";
  limit?: number;
  offset?: number;
}

export async function getHouses(params: HouseQueryParams) {
  return await api.get<ApiResponse<Property[]>>("/properties/", {
    params: params as Record<string, string>,
  });
}
