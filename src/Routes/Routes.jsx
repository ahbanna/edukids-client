import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);
export default router;
