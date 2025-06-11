import { useQuery } from "@tanstack/react-query";
import {
  getRecommendationProperty,
  type HouseQueryParams,
} from "../api/recommendation";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

const useProperties = (params: HouseQueryParams) => {
  const {
    data: RecommendationProperty,
    isError,
    error,
    isPending,
    isLoading,
  } = useQuery<ApiResponse<Property[]>>({
    initialData: {
      status: "success",
      data: [],
      meta: { total: 0, limit: 0, offset: 0, has_next: false, has_prev: false },
      error: null,
    },
    queryKey: ["RecommendationProperty", params],
    queryFn: () => getRecommendationProperty(params),
  });

  const Property = RecommendationProperty?.data || [];
  const Meta = RecommendationProperty?.meta || {
    total: 0,
    limit: 0,
    offset: 0,
    has_next: false,
    has_prev: false,
  };

  return { Property, Meta, isError, error, isPending, isLoading };
};

export default useProperties;
