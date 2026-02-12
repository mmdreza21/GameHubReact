import useGenres from "../hooks/useGenres";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  genreId: string | null;
}

function GameHeading({ genreId }: Props) {
  const { data: genres } = useGenres();

  return (
    <Box pl={5} pt={5} marginTop={2}>
      <Heading as={"h1"} size={"xl"}>
        {genreId
          ? genres?.find((g) => g.id === genreId)?.name + " Games"
          : "All Games"}
      </Heading>
    </Box>
  );
}

export default GameHeading;
