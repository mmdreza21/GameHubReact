import { useQuery } from "@tanstack/react-query";
import type { GenreDTO, PaginationResult } from "../types/GameTypes";
import apiClient from "../Services/api-client";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<PaginationResult<GenreDTO>>("/genre/stats")
        .then((res) => res.data.data),
    staleTime: 24 * 1000 * 60 * 60, // 24 hour
  });

export default useGenres;
