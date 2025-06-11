import { recommendation_api } from '../../../shared/utils/api';
import type { ApiResponse, Property, RecommendationByCriteriaRequest, SimilarPropertiesRequest, RecommendationResponse } from '../types';

export async function getRecommendationProperty(params: RecommendationByCriteriaRequest): Promise<ApiResponse<RecommendationResponse>> {
  return await recommendation_api.post<ApiResponse<RecommendationResponse>>('/recommendations/criteria', params);
}

export async function getSimilarProperties(params: SimilarPropertiesRequest): Promise<ApiResponse<RecommendationResponse>> {
  return await recommendation_api.post<ApiResponse<RecommendationResponse>>('/recommendations/similar', params);
}

export async function getPropertyById(propertyId: number): Promise<ApiResponse<Property>> {
  return await recommendation_api.get<ApiResponse<Property>>(`/properties/${propertyId}`);
}
