import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { GameDTO, PaginationResult } from "../types/GameTypes";
import apiClient from "../Services/api-client";

const useGames = (gameQuery: GameQuery) =>
  useQuery<PaginationResult<GameDTO>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<PaginationResult<GameDTO>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            sortBy: gameQuery.sortBy,
            sortOrder: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
