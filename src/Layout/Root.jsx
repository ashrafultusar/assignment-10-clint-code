// import { Outlet } from "react-router-dom";
// import Navber from "../pages/Shared/Navber";
// import Footer from "../pages/Shared/Footer";

// const Root = () => {
//   return (
//     <div className="bg-[#0a1316]">
//       <Navber></Navber>
      
//       <div className="min-h-screen">
//         <Outlet></Outlet>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Root;
import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/Shared/Navber";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  const location = useLocation();
  
  // Define the routes where you don't want to show the navbar and footer
  const hideNavbarFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="bg-[#0a1316]">
      {!hideNavbarFooter && <Navber />}
      
      <div className="min-h-screen">
        <Outlet />
      </div>
      
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default Root;
