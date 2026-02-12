import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import { TODOS_QUERY_KEY } from "./useTodos";
import { useState } from "react";
import TodoService, { type Todo } from "../Services/TodoService";

export default function useAddTodo(pageSize: number) {
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const queryKey = [...TODOS_QUERY_KEY, { pageSize }];

  const { isPending, mutate } = useMutation({
    mutationFn: TodoService.post,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData =
        queryClient.getQueryData<InfiniteData<Todo[]>>(queryKey);

      const optimisticTodo: Todo = {
        ...newTodo,
        id: Date.now(),
      };

      queryClient.setQueryData<InfiniteData<Todo[]>>(queryKey, (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page, index) =>
            index === 0 ? [optimisticTodo, ...page] : page,
          ),
        };
      });

      return { previousData };
    },

    onError: (_err, _newTodo, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    mutate({
      title: title.trim(),
      userId: 1,
      completed: false,
    });

    setTitle("");
  };

  return { handleSubmit, title, setTitle, isPending };
}
