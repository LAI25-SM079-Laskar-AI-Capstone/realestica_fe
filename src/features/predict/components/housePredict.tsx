import React from "react";
import usePredict from "../hooks/usePredict";
import type { BasicFormData, PredictRequestData } from "../types/predict";
import HousePredictForm from "./housePredictForm";

import { createFacilityMapping } from "../utils/handler";

const HousePredict: React.FC = () => {
  const { predictPrice, prediction, isPending, isError, error, isSuccess } =
    usePredict();

  const handleSubmitForm = (
    formData: BasicFormData,
    selectedFacilities: string[]
  ) => {
    const facilityMapping = createFacilityMapping(selectedFacilities);

    const predictData: PredictRequestData = {
      ...facilityMapping,
      s_jumlah_lantai: "1",
      s_kamar_mandi: formData.s_kamar_mandi,
      s_kamar_tidur: formData.s_kamar_tidur,
      s_luas_bangunan: formData.s_luas_bangunan,
      s_luas_tanah: formData.s_luas_tanah,
      poi_perbelanjaan: 0,
      poi_sekolah: 0,
      poi_transportasi: 0,
      kabupaten: formData.kabupaten,
      s_sertifikat: formData.s_sertifikat,
    } as PredictRequestData;

    predictPrice(predictData, {
      onError: (err) => {
        console.error("Prediction failed:", err);
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <HousePredictForm
        onSubmit={handleSubmitForm}
        isSubmitting={isPending}
        predictionResult={isSuccess ? prediction : undefined}
        error={isError ? error : undefined}
      />
    </div>
  );
};

export default HousePredict;
