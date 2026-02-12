import { BASEURL } from "../Services/api-client";
import type { GameDTO } from "../types/GameTypes";
import { Card, Heading, HStack, Image, Skeleton, Box } from "@chakra-ui/react";
import { PlatformIconsList } from "./PlatformIconList";
import { MetacriticScore } from "./MetacriticScor";
import placeholder from "../assets/PlaceHolder.png";
import { useState } from "react";
import Emoji from "./Emoji";

interface IGameCardProps {
  game: GameDTO;
}

export default function GameCard({ game }: IGameCardProps) {
  const url = BASEURL;
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageSrc = game.backgroundImage
    ? `${url}${game.backgroundImage}`
    : placeholder;

  const displaySrc = hasError ? placeholder : imageSrc;

  return (
    <Card.Root>
      <Box height="250px" overflow="hidden">
        {isLoading && (
          <Skeleton position="absolute" top="0" left="0" right="0" bottom="0" />
        )}
        <Image
          loading="lazy"
          height="100%"
          width="100%"
          objectFit="contain"
          src={displaySrc}
          alt={game.name}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          onLoad={() => setIsLoading(false)}
          opacity={isLoading ? 0 : 1}
          transition="opacity 0.2s"
        />
      </Box>
      <Card.Body>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconsList platforms={game.platform} />
          <MetacriticScore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating!} />
      </Card.Body>
    </Card.Root>
  );
}
