import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { GenreDTO } from "./types/GameTypes";
import type { SortOrder } from "./components/GameSortSelectors";
import GameSortSelector from "./components/GameSortSelectors";

export interface GameQuery {
  genre: GenreDTO | null;
  searchText: string;
  sortBy: string;
  sortOrder: SortOrder;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav""main"`,
          lg: ` "nav nav""aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onsearch={(text) =>
              setGameQuery({ ...gameQuery, searchText: text })
            }
          />
        </GridItem>

        <GridItem
          px={5}
          pl={7}
          display={{ base: "none", lg: "block" }}
          area="aside"
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(e) => setGameQuery({ ...gameQuery, genre: e })}
          />
        </GridItem>
        <GridItem area="main">
          <Box pl={5} pt={5} marginTop={2}>
            <Heading as={"h1"} size={"xl"}>
              {gameQuery.genre?.name} Games
            </Heading>
          </Box>

          <GameSortSelector
            sortBy={gameQuery.sortBy}
            sortOrder={gameQuery.sortOrder}
            onSortByChange={(sortBy) => setGameQuery({ ...gameQuery, sortBy })}
            onSortOrderChange={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
