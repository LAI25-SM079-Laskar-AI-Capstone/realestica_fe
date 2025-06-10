import { recommendation_api } from "../../../shared/utils/api";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export interface HouseQueryParams {
  limit?: number;
  offset?: number;
  property_type?: string;
  filter?: string;
  sort?: "asc" | "desc";
}

export async function getRecommendationProperty(params: HouseQueryParams) {
  return await recommendation_api.get<ApiResponse<Property[]>>("/property", {
    params: params as Record<string, string>,
  });
}
