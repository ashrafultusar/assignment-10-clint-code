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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/craft')
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
    ],
  },
]);

export default router;
