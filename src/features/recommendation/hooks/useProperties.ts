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
  // Ambil data dari .data field
  const Property = RecommendationProperty?.data || [];
  return { Property, isError, error, isPending, isLoading };
};

export default useProperties;
