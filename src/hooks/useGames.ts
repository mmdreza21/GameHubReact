import { useEffect, useState } from "react";
import type { FetchGamesResponse, GameDTO } from "../types/GameTypes";
import apiClient from "../Services/api-Client";
import { CanceledError } from "axios";

const useGames = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<GameDTO[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((g) => {
        setGames(g.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error, loading, setLoading };
};

export default useGames;
