import APIClient from "./APIClientService";

export type Todo = {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
};

export default new APIClient<Todo>(
  "https://jsonplaceholder.typicode.com/todos",
);
