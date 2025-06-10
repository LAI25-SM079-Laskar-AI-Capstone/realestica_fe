import { api } from "../../../shared/utils/api";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export async function getHouseById(id: number) {
  return await api.get<ApiResponse<Property>>(`/properties/${id}`, {});
}
