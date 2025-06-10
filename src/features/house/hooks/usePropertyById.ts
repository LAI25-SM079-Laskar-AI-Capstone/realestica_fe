import { useQuery } from "@tanstack/react-query";
import { getHouseById } from "../api/houseId";
import type { Property } from "../types/property";
import type { ApiResponse } from "../types/apiResponse";

export default function usePropertyById(id: number) {
  return useQuery<ApiResponse<Property>, Error, Property>({
    queryKey: ["property", id],
    queryFn: () => getHouseById(id),
    enabled: !isNaN(id),
    staleTime: 5 * 60 * 1000,
    select: (res) => {
      if (res.data === undefined) {
        throw new Error("Response missing data");
      }
      return res.data;
    },
  });
}
