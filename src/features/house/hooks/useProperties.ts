import { useQuery } from '@tanstack/react-query';
import { getHouses, type HouseQueryParams } from '../api/house';
import type { ApiResponse } from '../types/apiResponse';
import type { Property } from '../types/property';

const useProperties = (params: HouseQueryParams = {}) => {
  const {
    data: housesResponse,
    isError,
    error,
    isPending,
    isLoading,
    refetch,
  } = useQuery<ApiResponse<Property[]>>({
    queryKey: ['houses', params],
    queryFn: () => getHouses(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  // Extract data from response
  const houses = housesResponse?.data || [];
  const meta = housesResponse?.meta || {
    total: 0,
    limit: 0,
    offset: 0,
    has_next: false,
    has_prev: false,
  };

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
