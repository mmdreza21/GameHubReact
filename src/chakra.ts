// chakra.ts
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: { value: "#3182ce" },
      },
    },
  },
});
