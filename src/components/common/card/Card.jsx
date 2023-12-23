const Card = () => {
  return (
    <div className="sm:max-w-[230px] w-full rounded-xl border bg-white text-black relative">
      <figure>
        <img
          className="h-[250px] sm:h-[200px] rounded-t-xl w-full object-cover object-center"
          src="https://img.freepik.com/free-photo/close-up-futuristic-sneakers-showcase_23-2151005677.jpg?t=st=1703304959~exp=1703308559~hmac=74d08789350b198e679c98b59afc1cd4a745c9b4d3d4618a95994040f0f64ca9&w=360"
          alt=""
        />
      </figure>
      <div className="h-[170px] sm:h-[150px] w-full p-4">
        <div className="flex justify-between items-center">
          <p>title</p>
          <p>$40</p>
        </div>
        <p className="text-xs mt-1">Lorem ipsum dolor sit amet consectetur</p>
        <div className="absolute bottom-4">
          <div className="flex items-center gap-10">
            <button className="text-xs w-28 flex items-center gap-2 justify-center border rounded-full py-0.5 hover:bg-black hover:text-white transition delay-50 ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Add Cart
            </button>
            <button className="font-bold hover:text-red-500 transition delay-50 ease-in">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
