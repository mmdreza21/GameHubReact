import { useEffect, useState } from "react";
import axiosInstance from "../Services/axiosInstance";
import type { PaginationResult } from "../types/GameTypes";
import { CanceledError, type AxiosRequestConfig } from "axios";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      axiosInstance
        .get<PaginationResult<T>>(endpoint, {
          ...requestConfig,
          signal: controller.signal,
        })
        .then((g) => {
          setData(g.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, error, loading, setLoading };
};

export default useData;
