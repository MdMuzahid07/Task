import { useState } from "react";
import Search from "../search/Search";
import Mobile from "./Mobile";
import Cart from "../../Cart/Cart";
import Profile from "../../profile/Profile";

const Navbar = () => {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const [activeMobile, setActiveMobile] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 h-[70px] border-b drop-shadow-sm w-full flex items-center text-black px-5 xl:px-0 z-50">
      <div className="max-w-7xl mx-auto w-full">
        <ul className="flex items-center justify-between">
          <li className="block md:hidden">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl border"
              onClick={() => setActiveMobile(!activeMobile)}
            >
              {activeMobile ? (
                <span className="font-bold">X</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
            <Mobile
              activeMobile={activeMobile}
              setActiveMobile={setActiveMobile}
            />
          </li>
          <li className="cursor-pointer">
            <h1 className="text-[20px] md:text-[30px] font-bold">Shop</h1>
          </li>
          <li className="hidden md:block">
            <ul className="flex items-center gap-7 ">
              <li className="text-[16px] cursor-pointer">Home</li>
              <li className="text-[16px] cursor-pointer">Shop</li>
            </ul>
          </li>
          <ul className="flex items-center gap-3 md:gap-6">
            <li className="cursor-pointer">
              <button onClick={() => setCartActive(!cartActive)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`h-4 w-4 md:w-7 md:h-7 ${
                    cartActive ? "text-red-500" : "text-black"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </button>
              <Cart
                styles={`absolute top-[70px] min-h-[100vh] bg-white right-0 w-[100vw] md:w-[50vw] lg:w-[25vw] px-5 py-10`}
                cartActive={cartActive}
              />
            </li>
            <li className="cursor-pointer flex items-center">
              <button onClick={() => setActiveDrawer(!activeDrawer)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    activeDrawer ? "text-red-500" : "text-black"
                  } h-4 w-4 md:w-7 md:h-7 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <Search
                activeDrawer={activeDrawer}
                setActiveDrawer={setActiveDrawer}
              />
            </li>
            <li className="cursor-pointer">
              <figure
                onClick={() => setActiveProfile(!activeProfile)}
                className="h-5 w-5 md:w-8 md:h-8 overflow-hidden rounded-full"
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?w=826&t=st=1703299167~exp=1703299767~hmac=d36ca47a67441d7f9bedbda91363fee7072b555ec73316292f5b0b543b3c4c83"
                  alt=""
                />
              </figure>
              <Profile
                activeProfile={activeProfile}
                styles={`absolute top-[80px] bg-white w-80 h-96 p-5 right-[10vw] shadow-sm z-20 rounded-2xl`}
              />
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
