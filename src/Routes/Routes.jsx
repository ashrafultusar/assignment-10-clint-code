import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/Shared/ErrorPage";
import Login from "../Component/Login";
import Register from "../Component/Register";
import AllArt from "../Component/AllArt";
import AddCraft from "../Component/AddCraft";
import MyArt from "../Component/MyArt";
import PrivateRoute from "../Component/PrivateRoute";
import UpdateCraft from "../Component/UpdateCraft";
import ViewDetails from "../Component/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://art-and-craft-store-server-ioz1o3buw.vercel.app/craft"),
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
        path: "/all-art",
        element: <AllArt></AllArt>,
        loader: () => fetch("https://art-and-craft-store-server-ioz1o3buw.vercel.app/craft"),
      },
      {
        path: "/add-carft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-art",
        element: (
          <PrivateRoute>
            <MyArt></MyArt>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatecraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
