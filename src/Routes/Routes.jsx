import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../pages/Shared/ErrorPage";
import Login from "../Component/Login";
import Register from "../Component/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: "/all-art",
        
      },
      {
        path: "/add-carft",
      },
      {
        path: "/my-art",
      },
    ],
  },
]);

export default router;
