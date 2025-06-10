import { useMutation } from "@tanstack/react-query";
import { predictHousePrice } from "../api/predict";
import type { ApiResponse } from "../types/apiResponse";
import type { PredictRequestData, PredictResponseData } from "../types/predict";

const usePredict = () => {
  const {
    mutate: predictPrice,
    mutateAsync: predictPriceAsync,
    data: predictResponse,
    isError,
    error,
    isPending,
    isSuccess,
    reset,
  } = useMutation<ApiResponse<PredictResponseData>, Error, PredictRequestData>({
    mutationFn: (data: PredictRequestData) => predictHousePrice(data),
    onSuccess: (response) => {
      console.log("API Response Success:", response);
      console.log("Prediction Data:", response.data);
    },
    onError: (error) => {
      console.error("API Error:", error);
      console.error("Error message:", error.message);
    },
  });

  const prediction = predictResponse?.data ?? null;

  return {
    predictPrice,
    predictPriceAsync,
    prediction,
    predictResponse,
    isError,
    error,
    isPending,
    isSuccess,
    reset,
  };
};

export default usePredict;
