export interface BaseResponseDTO<T> {
  status: string;
  data: T;
}
