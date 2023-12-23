import { useState } from "react";
import Search from "../search/Search";

const Navbar = () => {
  const [activeDrawer, setActiveDrawer] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 h-[70px] border-b drop-shadow-sm w-full flex items-center text-black px-5 md:px-0">
      <div className="max-w-7xl mx-auto w-full">
        <ul className="flex items-center justify-between">
          <li className="cursor-pointer">
            <h1 className="text-[20px] md:text-[30px] font-bold">Shop</h1>
          </li>
          <ul className="flex items-center gap-7 ">
            <li className="text-[16px] cursor-pointer">Home</li>
            <li className="text-[16px] cursor-pointer">Shop</li>
          </ul>
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </li>
            <li className="cursor-pointer flex items-center">
              <button onClick={() => setActiveDrawer(!activeDrawer)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 "
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
              <figure className="w-8 h-8 overflow-hidden rounded-full">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?w=826&t=st=1703299167~exp=1703299767~hmac=d36ca47a67441d7f9bedbda91363fee7072b555ec73316292f5b0b543b3c4c83"
                  alt=""
                />
              </figure>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
