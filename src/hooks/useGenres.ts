import { useQuery } from "@tanstack/react-query";
import type { GenreDTO } from "../types/GameTypes";
import APIClient from "../Services/api-client";
import ms from "ms";
const apiClient = new APIClient<GenreDTO[]>("/genre");

const useGenres = () =>
  useQuery<GenreDTO[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });

export default useGenres;
