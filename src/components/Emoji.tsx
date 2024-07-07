import { Image, ImageProps } from "@chakra-ui/react";
import React from "react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  // index signature key: number
  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: "https://p7.hiclipart.com/preview/938/389/95/face-with-tears-of-joy-emoji-sticker-text-messaging-emoticon-emojis.jpg",
      alt: "meh",
      boxSize: "25px",
    },
    4: {
      src: "https://static-00.iconduck.com/assets.00/thumbs-up-emoji-1905x2048-yh44rgtn.png",
      alt: "recommended",
      boxSize: "25px",
    },
    5: {
      src: "https://img.icons8.com/emoji/256w/bullseye.png",
      alt: "exceptional",
      boxSize: "45px",
    },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
