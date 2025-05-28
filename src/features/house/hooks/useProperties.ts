import { useQuery } from "@tanstack/react-query";
import { getHouses, type HouseQueryParams } from "../api/house";

const useProperties = (params: HouseQueryParams) => {
  const {
    data: houses,
    isError,
    error,
    isPending,
    isLoading,
  } = useQuery({
    initialData: [],
    queryKey: ["houses", params],
    queryFn: () => getHouses(params),
  });

  return { houses, isError, error, isPending, isLoading };
};

export default useProperties;
