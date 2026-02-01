import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCart";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid padding={"10px"} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {games?.map((g) => (
          <GameCard game={g} key={g.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
