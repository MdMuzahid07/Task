/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../features/products/productSlice";

const CartCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (value) => {
    if (value) {
      const count = quantity + 1;
      setQuantity(count);
    } else if (quantity > 1) {
      const count = quantity - 1;
      setQuantity(count);
    }
  };

  const total = product?.price * quantity;

  console.log(product, "cart card");

  return (
    <div className="w-full h-[150px] bg-slate-100 rounded-xl p-4 mb-7 flex justify-between relative">
      <figure className="w-[30%]">
        <img
          className="h-full rounded-xl w-full object-cover object-center"
          src={product?.thumbnail}
          alt=""
        />
      </figure>
      <div className="w-[70%] pl-3 relative">
        <h1 className="text-[18px]">{product?.title}</h1>
        <p>
          ${product?.price} <span>* {quantity}</span> <span>= ${total}</span>
        </p>

        <div className="flex items-center gap-3 absolute bottom-0">
          <button
            className="w-4 h-4 flex items-center justify-center "
            onClick={() => handleQuantity(false)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="w-4 h-4 flex items-center justify-center "
            onClick={() => handleQuantity(true)}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeProduct(product?.id))}
        className="absolute right-2 top-2 w-7 h-7 flex items-center justify-center border rounded-full bg-white text-black"
      >
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
