import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import AllToys from "../components/AllToys/AllToys";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import MyToys from "../components/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../components/UpdateToys/UpdateToys";

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
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/alltoys"),
      },
      {
        path: "alltoys/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/alltoys/${params.id}`),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mytoys/${params.id}`),
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
