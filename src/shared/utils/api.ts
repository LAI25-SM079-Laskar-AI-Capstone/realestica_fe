import { ApiClient } from "../libs/apiClient";

export const api = new ApiClient(
  "https://realesticebe-production.up.railway.app",
  {}
);

export const market_api = new ApiClient(
  "https://realesticebe-production.up.railway.app",
  {}
);

export const recommendation_api = new ApiClient(
  "https://realestica-recommendation-system-production.up.railway.app/",
  {}
);

export const predict_api = new ApiClient(
  "https://realesticebe-production.up.railway.app",
  {}
);
