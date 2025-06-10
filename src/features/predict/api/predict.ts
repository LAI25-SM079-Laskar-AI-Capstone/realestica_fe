import { predict_api } from "../../../shared/utils/api";
import type { ApiResponse } from "../types/apiResponse";
import type { PredictRequestData, PredictResponseData } from "../types/predict";

// Function untuk predict
export async function predictHousePrice(data: PredictRequestData) {
  return await predict_api.post<ApiResponse<PredictResponseData>>(
    "/predict/",
    data
  );
}
