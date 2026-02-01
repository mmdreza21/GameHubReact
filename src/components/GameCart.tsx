import { BASEURL } from "../Services/api-Client";
import type { GameDTO } from "../types/GameTypes";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { PlatformIconsList } from "./PlatformIconList";
import { MetacriticScore } from "./MetacriticScor";
import { GameCardContainer } from "./GameCardContainer";

interface IGameCardProps {
  game: GameDTO;
}

export default function GameCard({ game }: IGameCardProps) {
  const url = BASEURL;
  return (
    <>
      <Card.Root>
        <Image
          loading="lazy"
          maxHeight="250px"
          aspectRatio={16 / 9}
          src={url + game.backgroundImage}
        ></Image>
        <Card.Body>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"} mt={3}>
            <PlatformIconsList platforms={game.platform} />
            <MetacriticScore metacritic={game.metacritic}></MetacriticScore>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}
