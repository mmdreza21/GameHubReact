import { Input, Button, VStack } from "@chakra-ui/react";

import useAddTodo from "../hooks/useAddTodo";

export default function TodoForm() {
  const { handleSubmit, title, setTitle, isPending } = useAddTodo(10);

  return (
    <form onSubmit={handleSubmit}>
      <VStack m={3} align="stretch">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a todo"
        />
        <Button type="submit" loading={isPending} disabled={!title.trim()}>
          Add
        </Button>
      </VStack>
    </form>
  );
}
