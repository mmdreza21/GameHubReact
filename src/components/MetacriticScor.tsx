import { Badge } from "@chakra-ui/react";

export interface IMetacriticScoreProps {
  metacritic: number;
}

export function MetacriticScore({ metacritic }: IMetacriticScoreProps) {
  let color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "red";

  return (
    <Badge
      fontSize={"14px"}
      paddingX={"2"}
      borderRadius={5}
      colorPalette={color}
    >
      {metacritic}
    </Badge>
  );
}
