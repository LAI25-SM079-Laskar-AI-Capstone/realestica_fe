import { useQuery } from "@tanstack/react-query";
import { getMarkets, type MarketQueryParams } from "../api/market";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

const useMarkets = (params: MarketQueryParams) => {
  const {
    data: marketsResponses,
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
    queryKey: ["markets", params],
    queryFn: () => getMarkets(params),
  });
  // Ambil data dari .data field
  const markets = marketsResponses?.data || [];
  return { markets, isError, error, isPending, isLoading };
};

export default useMarkets;
