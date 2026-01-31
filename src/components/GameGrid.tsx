import { useEffect, useState } from "react";
import apiClient from "../Services/api-Client";
import type { FetchGamesResponse, GameDTO } from "../types/GameTypes";

function GameGrid() {
  const [games, setGames] = useState<GameDTO[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((g) => {
        setGames(g.data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <ul>
        {games?.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
