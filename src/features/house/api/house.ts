import { api } from "../../../shared/utils/api";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export interface HouseQueryParams {
  limit?: number;
  offset?: number;
  property_type?: string;
  filter?: string;
  sort?: "asc" | "desc";
}

export async function getHouses(params: HouseQueryParams) {
  return await api.get<ApiResponse<Property[]>>("/properties", {
    params: params as Record<string, string>,
  });
}
