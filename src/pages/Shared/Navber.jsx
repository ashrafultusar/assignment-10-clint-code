import { Link } from "react-router-dom";
import { AuthContex } from "../../Firebase/Authprovider";
import { useContext } from "react";

const Navber = () => {

  const {logOut,user}=useContext(AuthContex)
  console.log(user)
  


  return (
    <div className="mt-3 ">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/home"}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to={"/all-art"}>
                  <a>All Art</a>
                </Link>
              </li>
              <li>
                <Link to={"/add-carft"}>
                  <a>Add Craft</a>
                </Link>
              </li>
              <li>
                <Link to={"/my-art"}>
                  <a>My Art</a>
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DREAM ART</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/home"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to={"/all-art"}>
                <a>All Art</a>
              </Link>
            </li>
            <li>
              <Link to={"/add-carft"}>
                <a>Add Craft</a>
              </Link>
            </li>
            <li>
              <Link to={"/my-art"}>
                <a>My Art</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="flex gap-2">
              <div className="tooltip tooltip-left" data-tip={ user.displayName}>
            <img
              className="w-12 rounded-full"
              alt="Tailwind CSS Navbar component"
              src={user.photoURL}
            />
            </div>
              <div>
              <button onClick={logOut} className="btn bg-green-300">
                LogOut
              </button>
            </div>
            </div>: <div><Link to={"/login"}>
            <button className="btn  bg-green-500">Login</button>
          </Link>
          {/* <Link to={"/register"}>
            <button className="btn  bg-green-500 ">Register</button>
                </Link> */}
              </div>
          }

          

         
        </div>
      </div>
    </div>
  );
};

export default Navber;