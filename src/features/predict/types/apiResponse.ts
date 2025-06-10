// types/apiResponse.ts

export interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
  error: Record<string, string> | null;
}
