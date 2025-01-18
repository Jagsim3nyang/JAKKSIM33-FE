import { BaseResponseDTO } from "@/models";
import { api } from "@/apis";
import { useLoadingStore } from "@/lib/zusstand/loading";

import { AxiosRequestConfig } from "axios";
import { METHOD, RESPONSE } from "@/constants/api";

export const useFetch = <T, K>() => {
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  const fetchData = async (
    url: string,
    data: T,
    method: METHOD = METHOD.GET,
    options?: AxiosRequestConfig
  ): Promise<BaseResponseDTO<K>> => {
    const isGetMethod = method === METHOD.GET;
    setIsLoading(true);

    try {
      return isGetMethod ? await api[method](url, options) : await api[method](url, data, options);
    } catch (error) {
      console.error(error);
      return {
        status: RESPONSE.FAIL,
        data: {} as K,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData };
};
