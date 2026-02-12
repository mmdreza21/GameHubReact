import {
  Box,
  Button,
  HStack,
  Spinner,
  Stack,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import useTodos from "../hooks/useTodos";

export default function TodoList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useTodos({ pageSize: 10 });

  if (isLoading) {
    return (
      <HStack justify="center" py={6}>
        <Spinner />
      </HStack>
    );
  }

  if (error) {
    return <Text color="red.400">Error loading todos: {error.message}</Text>;
  }

  return (
    <Stack my={3} mt={4}>
      {data?.pages.map((page, pageIndex) => (
        <Box key={pageIndex}>
          {page.map((todo) => (
            <HStack
              my={3}
              key={todo.id}
              p={3}
              borderWidth="1px"
              borderRadius="lg"
              justify="space-between"
            >
              <Checkbox.Root checked={todo.completed}>
                <Checkbox.Control />
                <Checkbox.Label>
                  <Text
                    textDecoration={todo.completed ? "line-through" : "none"}
                    color={todo.completed ? "gray.400" : "white"}
                  >
                    {todo.title}
                  </Text>
                </Checkbox.Label>
              </Checkbox.Root>
            </HStack>
          ))}
        </Box>
      ))}

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          mt={2}
        >
          Load more
        </Button>
      )}
    </Stack>
  );
}
