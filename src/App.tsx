import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import GameSortSelector from "./components/GameSortSelectors";
import GameHeading from "./components/GameHeading";

function App() {
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
          <NavBar />
        </GridItem>

        <GridItem
          px={5}
          pl={7}
          display={{ base: "none", lg: "block" }}
          area="aside"
        >
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <GameHeading />

          <GameSortSelector />
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
