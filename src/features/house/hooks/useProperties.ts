import { useQuery } from "@tanstack/react-query";
import { getHouses, type HouseQueryParams } from "../api/house";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

const useProperties = (params: HouseQueryParams) => {
  const {
    data: housesResponse,
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
    queryKey: ["houses", params],
    queryFn: () => getHouses(params),
  });
  // Ambil data dari .data field
  const houses = housesResponse?.data || [];
  return { houses, isError, error, isPending, isLoading };
};

export default useProperties;
