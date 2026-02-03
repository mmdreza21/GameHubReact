import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCartSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import type { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}

export type SortOrder = "asc" | "desc";

function GameGrid({ gameQuery }: props) {
  const { data: games, error, loading } = useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid padding={"10px"} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}>
        {loading &&
          skeleton.map((s) => (
            <GameCardContainer key={s}>
              <GameCartSkeleton />
            </GameCardContainer>
          ))}
        {games?.map((g) => (
          <GameCardContainer key={g.id}>
            <GameCard game={g} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
