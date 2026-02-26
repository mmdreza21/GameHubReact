import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCartSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const skeletons = Array.from({ length: 8 });

  const games = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <>
      {error && <Text>{error.message}</Text>}

      {isLoading && (
        <SimpleGrid
          padding="10px"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          m={3}
        >
          {skeletons.map((_, index) => (
            <GameCardContainer key={index}>
              <GameCartSkeleton />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}

      {!isLoading && (
        <InfiniteScroll
          dataLength={games.length}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Text textAlign="center">Loading...</Text>}
          endMessage={
            <Text textAlign="center" fontWeight="bold" py={4}>
              Yay! You have seen it all
            </Text>
          }
        >
          <SimpleGrid
            padding="10px"
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            m={3}
          >
            {games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      )}
    </>
  );
}

export default GameGrid;
