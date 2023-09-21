import { Heading, Spinner } from "@chakra-ui/react";
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
      <Heading>{game.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameSlug={game.slug} />
      <GameScreenshots gameSlug={game.slug} />
    </>
  );
};

export default GameDetailsPage;
