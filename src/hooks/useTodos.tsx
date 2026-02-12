import { useInfiniteQuery } from "@tanstack/react-query";
import todoService from "../Services/TodoService";

interface TodoQuery {
  pageSize: number;
}

export const TODOS_QUERY_KEY = ["todos"];

export default function useTodos(query: TodoQuery) {
  return useInfiniteQuery({
    queryKey: [...TODOS_QUERY_KEY, query],

    queryFn: async ({ pageParam = 1 }) => {
      const res = await todoService.getAll({
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      });

      return res;
    },

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === query.pageSize ? allPages.length + 1 : undefined,
  });
}
