import { api } from '../../../shared/utils/api';
import type { ApiResponse } from '../types/apiResponse';
import type { Property } from '../types/property';

export interface HouseQueryParams {
  location_text?: string;
  property_type?: string;
  bedrooms?: number;
  bathrooms?: number;
  min_price?: number;
  max_price?: number;
  sort?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

<<<<<<< HEAD
export async function getHouses(params: HouseQueryParams) {
  return await api.get<ApiResponse<Property[]>>("/properties/", {
    params: params as Record<string, string>,
=======
export async function getHouses(params: HouseQueryParams = {}) {
  const cleanParams: Record<string, string | number> = {};

  cleanParams.limit = params.limit || 10;
  cleanParams.offset = params.offset || 0;
  cleanParams.sort = params.sort || 'desc';

  if (params.location_text && params.location_text.trim()) {
    cleanParams.location_text = params.location_text.trim();
  }

  if (params.property_type && params.property_type.trim()) {
    cleanParams.property_type = params.property_type.trim();
  }

  if (params.bedrooms !== undefined && params.bedrooms !== null && params.bedrooms > 0) {
    cleanParams.bedrooms = params.bedrooms;
  }

  if (params.bathrooms !== undefined && params.bathrooms !== null && params.bathrooms > 0) {
    cleanParams.bathrooms = params.bathrooms;
  }

  if (params.min_price !== undefined && params.min_price !== null && params.min_price > 0) {
    cleanParams.min_price = params.min_price;
  }

  if (params.max_price !== undefined && params.max_price !== null && params.max_price > 0) {
    cleanParams.max_price = params.max_price;
  }

  return await api.get<ApiResponse<Property[]>>('/properties/', {
    params: cleanParams,
>>>>>>> f670cb874c14e75040b7371b8a6de55d7db1e715
  });
}
