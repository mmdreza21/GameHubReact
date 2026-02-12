import { Container, Heading, VStack, Card } from "@chakra-ui/react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

export default function TodoPage() {
  return (
    <Container maxW="md" mt={10}>
      <VStack gap={6} align="stretch">
        <Heading textAlign="center">Todos</Heading>

        <Card.Root p={4}>
          <TodoForm />
        </Card.Root>

        <TodoList />
      </VStack>
    </Container>
  );
}
