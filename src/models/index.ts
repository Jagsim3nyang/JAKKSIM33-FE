export interface BaseResponseDTO<T> {
  status: number;
  data: T;
}
