/* eslint-disable react/prop-types */
import { useState } from "react";
import Drawer from "../../drawer/Drawer";
import Card from "../card/Card";

const Search = ({ activeDrawer, setActiveDrawer }) => {
  const [inputValue, setInputValue] = useState(" ");

  console.log("onChange", inputValue);

  const handleKey = (event) => {
    if (event.key == "Enter") {
      console.log("enter working");
    }
  };

  const handleClick = () => {
    console.log(inputValue, "btn on click");
  };

  return (
    <Drawer
      styles="w-full h-screen md:min-h-[70vh] fixed top-[70px] right-0 bg-white border-b"
      setActiveDrawer={setActiveDrawer}
      activeDrawer={activeDrawer}
    >
      <div className="max-w-7xl mx-auto py-10 px-5 md:px-0 text-white">
        <div className="flex justify-center my-10">
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => handleKey(e)}
              className="max-w-[350px] md:min-w-[700px] lg:min-w-[900px] border px-10 h-16 focus:outline-none placeholder:text-slate-500 text-black placeholder:text-xl rounded-full"
              placeholder="search for ...."
            />
            <button
              type="button"
              onClick={handleClick}
              className="absolute top-0  right-0 pr-8 pt-4 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* product cards  */}
        <div className="flex flex-wrap justify-center xl:justify-start gap-10 h-[60vh] md:max-h-[50vh] overflow-y-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Drawer>
  );
};

export default Search;
