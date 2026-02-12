import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TodoPage from "./pages/Todo/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <TodoPage />,
  },
]);
