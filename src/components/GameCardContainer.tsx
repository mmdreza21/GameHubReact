import { Card } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function GameCardContainer({ children }: Props) {
  return (
    <Card.Root
      maxHeight="400px"
      maxW="500px"
      borderRadius={16}
      overflow={"hidden"}
      mb={10}
      mx={5}
      variant={"elevated"}
      border={"hidden"}
    >
      {children}
    </Card.Root>
  );
}
