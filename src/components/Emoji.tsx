import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: { src: string } } = {
    3: { src: meh },
    4: { src: thumsUp },
    5: { src: bullsEye },
  };

  return (
    <>
      <Image {...emojiMap[rating]} boxSize={25} marginTop={1} />
    </>
  );
};

export default Emoji;
