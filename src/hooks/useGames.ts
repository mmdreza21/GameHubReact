import { useEffect, useState } from "react";
import type { FetchGamesResponse, GameDTO } from "../types/GameTypes";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<GameDTO[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((g) => {
        setGames(g.data.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
