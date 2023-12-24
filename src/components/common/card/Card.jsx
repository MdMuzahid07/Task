/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  return (
    <div className="sm:max-w-[250px] md:max-w-[270px] h-full max-h-[400px] sm:max-h-[350px] w-full rounded-xl border bg-white text-black relative">
      <figure>
        <img
          className="h-[250px] sm:max-h-[200px] rounded-t-xl w-full object-cover object-center"
          src={product?.thumbnail}
          alt=""
        />
      </figure>
      <div className="min-h-[150px] h-full w-full p-4">
        <div className="flex justify-between items-center">
          <p>{product?.title}</p>
          <p>${product?.price}</p>
        </div>
        <p className="text-xs mt-1">{product?.description.slice(0, 25)}...</p>
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
