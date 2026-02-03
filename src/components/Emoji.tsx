import { Image, type ImageProps } from "@chakra-ui/react";
import meh from "../assets/neutral_face.png";
import thumbsUp from "../assets/+1.png";
import bullsEye from "../assets/dart.png";

export interface IEmojiProps {
  rating: number;
}

export default function Emoji({ rating }: IEmojiProps) {
  if (rating < 3) return null;

  const rounded = Math.round(rating);

  const emojiMap: Record<number, ImageProps> = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rounded]} mt={1} />;
}
