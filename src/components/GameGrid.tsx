import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCart";
import { GameCartSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

function GameGrid() {
  const { games, error, loading } = useGames();

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid padding={"10px"} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {loading &&
          skeleton.map((s) => (
            <GameCardContainer>
              {" "}
              <GameCartSkeleton key={s} />
            </GameCardContainer>
          ))}
        {games?.map((g) => (
          <GameCardContainer>
            <GameCard game={g} key={g.id}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
