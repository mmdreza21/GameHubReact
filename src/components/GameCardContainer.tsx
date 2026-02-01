import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function GameCardContainer({ children }: Props) {
  return (
    <Box
      maxHeight="400px"
      maxW="500px"
      borderRadius={10}
      overflow={"hidden"}
      mb={10}
      mx={5}
    >
      {children}
    </Box>
  );
}
