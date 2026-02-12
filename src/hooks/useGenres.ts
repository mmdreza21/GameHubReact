import { useQuery } from "@tanstack/react-query";
import type { GenreDTO } from "../types/GameTypes";
import APIClient from "../Services/api-client";
const apiClient = new APIClient<GenreDTO[]>("/genre");

const useGenres = () =>
  useQuery<GenreDTO[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 1000 * 60 * 60, // 24 hour
  });

export default useGenres;
