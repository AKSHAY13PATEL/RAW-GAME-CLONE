import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <CardHeader>
          <Text fontSize="2xl">{game.name}</Text>
        </CardHeader>
      </CardBody>
    </Card>
  );
};

export default GameCard;
