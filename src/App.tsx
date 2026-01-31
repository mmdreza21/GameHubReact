import { Button, Container, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "nav""main"`,
          lg: ` "nav nav""aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem
          display={{ base: "none", lg: "block" }}
          area="aside"
          bg="gold"
        >
          Aside
        </GridItem>
        <GridItem area="main" bg="brand">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
