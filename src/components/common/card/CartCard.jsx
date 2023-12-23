import { useState } from "react";

const CartCard = () => {
  const [quantity, setQuantity] = useState(0);
  const handleQuantity = (value) => {
    if (value) {
      const count = quantity + 1;
      setQuantity(count);
    } else if (quantity > 1) {
      const count = quantity - 1;
      setQuantity(count);
    }
  };

  const total = 45 * quantity;

  return (
    <div className="w-full h-[150px] bg-slate-100 rounded-xl p-4 mb-7 flex justify-between relative">
      <figure className="w-[30%]">
        <img
          className="h-full rounded-xl w-full object-cover object-center"
          src="https://img.freepik.com/free-photo/close-up-futuristic-sneakers-showcase_23-2151005677.jpg?t=st=1703304959~exp=1703308559~hmac=74d08789350b198e679c98b59afc1cd4a745c9b4d3d4618a95994040f0f64ca9&w=360"
          alt=""
        />
      </figure>
      <div className="w-[70%] pl-3 relative">
        <h1 className="text-[18px]">Product name</h1>
        <p>
          $45 <span>* {quantity}</span> <span>= ${total}</span>
        </p>

        <div className="flex items-center gap-3 absolute bottom-0">
          <button onClick={() => handleQuantity(false)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => handleQuantity(true)}>+</button>
        </div>
      </div>
      <button className="absolute right-2 top-2 w-7 h-7 flex items-center justify-center border rounded-full bg-white text-black">
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartCard;
