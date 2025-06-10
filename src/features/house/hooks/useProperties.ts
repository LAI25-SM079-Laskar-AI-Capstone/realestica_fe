import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getHouses, type HouseQueryParams } from "../api/house";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";
import { useEffect } from "react";

interface UsePropertiesParams extends Omit<HouseQueryParams, "offset"> {
  currentPage?: number;
}

const useProperties = ({
  currentPage = 1,
  limit = 12,
  ...restParams
}: UsePropertiesParams = {}) => {
  const queryClient = useQueryClient();
  const offset = (currentPage - 1) * limit;

  const queryKey = ["houses", { currentPage, limit, ...restParams }];

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
    queryFn: () => getHouses({ offset, limit, ...restParams }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    // placeholderData: true,
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
        queryKey: ["houses", { currentPage: nextPage, limit, ...restParams }],
        queryFn: () =>
          getHouses({ offset: (nextPage - 1) * limit, limit, ...restParams }),
      });
    }
  }, [
    meta.has_next,
    isPlaceholderData,
    currentPage,
    limit,
    restParams,
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
