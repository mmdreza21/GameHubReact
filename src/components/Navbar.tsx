import { HStack, Image, Text } from "@chakra-ui/react";

import logoDark from "../assets/logo.png";
import logoLight from "../assets/Logo_Light.png";
import { ColorModeButton, ColorModeIcon, useColorMode } from "./ui/color-mode";
function NavBar() {
  const theme = useColorMode();
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image
        m={2}
        sizes="16px"
        className="ma-2"
        src={theme.colorMode === "dark" ? logoDark : logoLight}
      />
      {/* <Text> NavBar</Text> */}
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
