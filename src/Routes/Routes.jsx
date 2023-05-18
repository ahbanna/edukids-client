import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
export default router;
