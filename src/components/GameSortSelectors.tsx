"use client";

import { HStack, Portal, Select, createListCollection } from "@chakra-ui/react";

export type SortOrder = "asc" | "desc";

interface Props {
  sortBy: string;
  sortOrder: SortOrder;
  onSortByChange: (value: string) => void;
  onSortOrderChange: (value: SortOrder) => void;
}

const sortByCollection = createListCollection({
  items: [
    { label: "Rating", value: "rating" },
    { label: "Released", value: "released" },
    { label: "Name", value: "name" },
    { label: "Metacritic", value: "metacritic" },
    { label: "Created At", value: "createdAt" },
  ],
});

const sortOrderCollection = createListCollection({
  items: [
    { label: "Desc", value: "desc" },
    { label: "Asc", value: "asc" },
  ],
});

function GameSortSelector({
  sortBy,
  sortOrder,
  onSortByChange,
  onSortOrderChange,
}: Props) {
  return (
    <HStack padding="10px" m={4}>
      <Select.Root
        collection={sortByCollection}
        value={[sortBy]}
        onValueChange={(e) => onSortByChange(e.value[0])}
        width="220px"
        size="sm"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Sort by" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Portal>
          <Select.Positioner>
            <Select.Content>
              {sortByCollection.items.map((item) => (
                <Select.Item item={item} key={item.value}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>

      <Select.Root
        collection={sortOrderCollection}
        value={[sortOrder]}
        onValueChange={(e) => onSortOrderChange(e.value[0] as SortOrder)}
        width="150px"
        size="sm"
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Order" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Portal>
          <Select.Positioner>
            <Select.Content>
              {sortOrderCollection.items.map((item) => (
                <Select.Item item={item} key={item.value}>
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </HStack>
  );
}

export default GameSortSelector;
