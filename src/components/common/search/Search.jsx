/* eslint-disable react/prop-types */
import Drawer from "../../drawer/Drawer";

const Search = ({ activeDrawer, setActiveDrawer }) => {
  return (
    <Drawer
      styles="w-full min-h-[50vh] fixed top-[70px] right-0 bg-white border-b"
      setActiveDrawer={setActiveDrawer}
      activeDrawer={activeDrawer}
    >
      <div className="max-w-7xl mx-auto py-10 px-5 md:px-0 text-white">
        <div className="flex justify-center my-10">
          <div className="relative">
            <input
              type="text"
              className="min-w-[900px] border px-10 h-16 focus:outline-none placeholder:text-slate-500 placeholder:text-xl rounded-full"
              placeholder="search for ...."
            />
            <span className="absolute top-0  right-0 pr-8 pt-4 cursor-pointer">
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
            </span>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Search;
