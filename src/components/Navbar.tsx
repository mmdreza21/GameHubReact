import { HStack, Image } from "@chakra-ui/react";

import logoDark from "../assets/logo.png";
import logoLight from "../assets/Logo_Light.png";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import SearchInput from "./SearchInput";

function NavBar() {
  const theme = useColorMode();
  return (
    <HStack
      justifyContent={"space-between"}
      p={"10px"}
      borderBottomColor={"gray.500"}
      borderBottomWidth="1px"
    >
      <Image
        m={2}
        sizes="16px"
        className="ma-2"
        src={theme.colorMode === "dark" ? logoDark : logoLight}
      />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
