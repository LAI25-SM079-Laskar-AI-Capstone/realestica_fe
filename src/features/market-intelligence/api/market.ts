import { market_api } from "../../../shared/utils/api";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export interface MarketQueryParams {
  limit?: number;
  offset?: number;
  property_type?: string;
  filter?: string;
  sort?: "asc" | "desc";
}

export async function getMarkets(params: MarketQueryParams) {
  return await market_api.get<ApiResponse<Property[]>>("/properties/", {
    params: params as Record<string, string>,
  });
}
