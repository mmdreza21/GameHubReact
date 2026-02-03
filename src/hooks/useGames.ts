import type { GameQuery } from "../App";
import type { GameDTO } from "../types/GameTypes";
import useData from "./UseData";

const useGames = (gameQuery: GameQuery) =>
  useData<GameDTO>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        sortBy: gameQuery.sortBy,
        sortOrder: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery],
  );
export default useGames;
