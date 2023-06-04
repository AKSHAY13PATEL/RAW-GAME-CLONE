import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="12px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
