import useTrailer from "../hooks/useTrailer";

interface Props {
  gameSlug: string;
}
const GameTrailer = ({ gameSlug }: Props) => {
  const { data, error, isLoading } = useTrailer(gameSlug);
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];
  if (!first) return null;

  return <video src={first.data[480]} poster={first.preview} controls></video>;
};

export default GameTrailer;
