import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaWindows, FaPlaystation } from "react-icons/fa";

export interface IPlatformIconsListProps {
  platforms: string[];
}

export function PlatformIconsList({ platforms }: IPlatformIconsListProps) {
  const iconMap: { [key: string]: IconType } = {
    Windows: FaWindows,
    Playstation: FaPlaystation,
  };

  return (
    <HStack>
      {platforms.map((p) => {
        return <Icon as={iconMap[p]} color={"gray.500"} />;
      })}
    </HStack>
  );
}
