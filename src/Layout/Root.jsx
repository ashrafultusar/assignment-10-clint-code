import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  return (
      <div className="max-w-6xl mx-auto">
          <Navber></Navber>
      <div className="min-h-screen"><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
