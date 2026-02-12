import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { SortOrder } from "./components/GameSortSelectors";
import GameSortSelector from "./components/GameSortSelectors";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId: string | null;
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
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(e) =>
              setGameQuery({ ...gameQuery, genreId: e?.id || null })
            }
          />
        </GridItem>
        <GridItem area="main">
          <GameHeading genreId={gameQuery.genreId} />

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
