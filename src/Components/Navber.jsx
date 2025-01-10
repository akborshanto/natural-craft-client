import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../assets/logo1.png";
import ThemeBtn from "./ThemeBtn";

import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Navber = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  console.log(loading, user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonHover = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownHover = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
        <Toaster position="top-center" reverseOrder={false} />;
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2 text-white   lg:text-[#322C2B] duration-500 dark:text-[#E4C59E] ${
            isActive
              ? " font-bold rounded-lg bg-[#e4c49e41]  "
              : "font-normal  border-none"
          } `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allcraftitems"
        className={({ isActive }) =>
          `text-base px-3 p-1 text-white  ml-2 lg:text-[#322C2B] duration-500 dark:text-[#E4C59E] ${
            isActive
              ? " font-bold rounded-lg  bg-[#e4c49e41]"
              : "font-normal  border-none"
          } `
        }
      >
        All Crafts Items
      </NavLink>
      <NavLink
        to="/addcraftitem"
        className={({ isActive }) =>
          `text-base px-3 p-1  text-white ml-2 lg:text-[#322C2B] duration-500 dark:text-[#E4C59E]  ${
            isActive
              ? " font-bold rounded-lg  bg-[#e4c49e41]"
              : "font-normal  border-none"
          } `
        }
      >
        Add Craft Item
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-base px-3 p-1  text-white ml-2 lg:text-[#322C2B] duration-500 dark:text-[#E4C59E] ${
            isActive
              ? " font-bold rounded-lg  bg-[#e4c49e41] "
              : "font-normal  border-none"
          } `
        }
        to="/mycraftitem"
      >
        My Crafts List
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-[#181818] shadow-lg  border-[#e4c49e69] px-5">
      <div className="navbar container m-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" hover:bg-transparent bg-transparent border-none  text-2xl text-[#E4C59E] lg:hidden"
            >
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[50]  shadow  bg-[#1b1919da] rounded-box w-52"
            >
              {list}
            </ul>
          </div>
          <a className="h-12 hover:bg-transparent bg-transparent border-none text-xl">
            <img className="h-full" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">{list}</ul>
        </div>

        <div className="navbar-end flex gap-4 items-center">
          <div className="text-[#E4C59E] text-2xl">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Change theme"
              data-tooltip-place="left"
            >
              <ThemeBtn />
            </a>
          </div>
          {loading ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : user?.email ? (
            <div className="flex items-center gap-4">
              <div className="relative avatar">
                <div
                  onMouseEnter={handleButtonHover}
                  className=" w-10 rounded-full ring ring-[#E4C59E] dark:ring-[#e4c49e69] ring-offset-white duration-500 ring-offset-2"
                >
                  <img src={user.photoURL} alt="User Avatar" className="" />
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute z-50 top-full right-0 mt-1 w-52 bg-[#181414cc] duration-500  p-5  rounded-md shadow-lg"
                    onMouseEnter={handleDropdownHover}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <ul className="text-white  font-bold duration-500">
                      <li>{user.displayName}</li>
                      <li>
                        <button
                          className="btn bg-[#e4c49e]  text-black font-bold border-none"
                          onClick={handleLogout}
                        >
                    
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]">
                  Log In
                </button>
              </Link>
              <Link to="/register">
                <button className="btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
