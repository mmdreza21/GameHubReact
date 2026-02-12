import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import type { GameDTO, PaginationResult } from "../types/GameTypes";
import APIClient from "../Services/api-client";

const apiClient = new APIClient<PaginationResult<GameDTO>>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<PaginationResult<GameDTO>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          sortBy: gameQuery.sortBy,
          sortOrder: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.meta.totalPages ? nextPage : undefined;
    },
  });

export default useGames;
