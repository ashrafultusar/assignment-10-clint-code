import { useContext } from "react";
import { AuthContex } from "../Firebase/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContex);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={"/login"} state={location?.pathname || '/'}></Navigate>
    );
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
