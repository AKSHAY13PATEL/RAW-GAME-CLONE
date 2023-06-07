import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import useGenres from "./hooks/useGenres";

function App() {
  const { genres } = useGenres();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            {genres.map((genre) => {
              return <p>{genre.name}</p>;
            })}
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
