import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getHouses, type HouseQueryParams } from "../api/house";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface UsePropertiesParams extends Omit<HouseQueryParams, "offset"> {
  currentPage?: number;
}

const useProperties = ({
  currentPage = 1,
  limit = 12,
  ...initialParams
}: UsePropertiesParams = {}) => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const offset = (currentPage - 1) * limit;

  // Ambil filter dari URL dan memoize bersama finalParams
  const location_text = searchParams.get("location_text");
  const min_price = searchParams.get("min_price");
  const max_price = searchParams.get("max_price");
  const sort = searchParams.get("sort");

  const filterParams: Partial<HouseQueryParams> = {};

  if (location_text && location_text !== "undefined") {
    filterParams.location_text = location_text;
  }
  if (min_price && !isNaN(Number(min_price))) {
    filterParams.min_price = Number(min_price);
  }
  if (max_price && !isNaN(Number(max_price))) {
    filterParams.max_price = Number(max_price);
  }
  if (sort === "asc" || sort === "desc") {
    filterParams.sort = sort;
  }

  const finalParams = { ...initialParams, ...filterParams };

  const queryKey = ["houses", { currentPage, limit, ...finalParams }];

  const {
    data: housesResponse,
    isError,
    error,
    isPending,
    isLoading,
    refetch,
    isPlaceholderData,
  } = useQuery<ApiResponse<Property[]>>({
    queryKey,
    queryFn: () => getHouses({ offset, limit, ...finalParams }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const houses = housesResponse?.data || [];
  const meta = housesResponse?.meta || {
    total: 0,
    limit,
    offset,
    has_next: false,
    has_prev: false,
  };

  useEffect(() => {
    if (!isPlaceholderData && meta.has_next) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: ["houses", { currentPage: nextPage, limit, ...finalParams }],
        queryFn: () =>
          getHouses({ offset: (nextPage - 1) * limit, limit, ...finalParams }),
      });
    }
  }, [
    meta.has_next,
    isPlaceholderData,
    currentPage,
    limit,
    finalParams,
    queryClient,
  ]);

  return {
    houses,
    meta,
    isError,
    error,
    isPending,
    isLoading,
    refetch,
  };
};

export default useProperties;
