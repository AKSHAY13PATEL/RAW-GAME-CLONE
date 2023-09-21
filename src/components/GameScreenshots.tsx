import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameSlug: string;
}
const GameScreenshots = ({ gameSlug }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameSlug);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2} marginY={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
