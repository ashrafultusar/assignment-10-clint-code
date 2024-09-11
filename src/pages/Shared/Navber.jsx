import { NavLink } from "react-router-dom";
import { AuthContex } from "../../Firebase/Authprovider";
import { useContext } from "react";

const Navber = () => {
  const { logOut, user } = useContext(AuthContex);

  return (
    <div className="">
      <div className="navbar text-white px-32 fixed z-10 bg-[#0a1316]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-xl font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0a1316] rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-art"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "text-white"
                  }
                >
                  All Art
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-carft"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "text-white"
                  }
                >
                  Add Craft
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-art"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "text-white"
                  }
                >
                  My Art
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">D-ART</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-bold">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-art"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-white"
                }
              >
                All Art
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-carft"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-white"
                }
              >
                Add Craft
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-art"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "text-white"
                }
              >
                My Art
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2">
              <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <img
                  className="w-12 rounded-full"
                  alt="img"
                  src={
                    user?.photoURL ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
              <div>
                <button
                  onClick={logOut}
                  className="relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group"
                >
                  <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-black">
                    LogOut
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-1">
              <div>
                <NavLink to="/login">
                  <button className="relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      Login
                    </span>
                  </button>
                </NavLink>
              </div>
              <div>
                <NavLink to="/register">
                  <button className="relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      Register
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
