import { useContext } from "react";
import { AuthContex } from "../Firebase/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  
  const { user,loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) {
    return <div className="text-center">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
}


  if (!user) {
    return (
      <Navigate to={"/login"} state={location?.pathname || "/"}></Navigate>
    );
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
