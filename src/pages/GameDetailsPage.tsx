import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!); // ! - force the type script comiler to accept slug as not null value
  // because this game detail page is loaded only when there is slug in route
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game?.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameSlug={game.slug} />
          <GameScreenshots gameSlug={game.slug} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
