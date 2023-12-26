/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../../features/products/productSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const total = product?.price * product?.quantity;

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
          ${product?.price} <span>* {product?.quantity}</span>{" "}
          <span>= ${total}</span>
        </p>

        <div className="flex items-center gap-3 absolute bottom-0">
          <button
            className="w-4 h-4 flex items-center justify-center "
            onClick={() => dispatch(decreaseQuantity(product?.id))}
          >
            -
          </button>
          <p>{product?.quantity}</p>
          <button
            className="w-4 h-4 flex items-center justify-center "
            onClick={() => dispatch(increaseQuantity(product?.id))}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeProduct(product?.id))}
        className="absolute right-2 top-2 w-7 h-7 flex items-center justify-center border rounded-full bg-black text-white hover:bg-red-500 transition delay-50 ease-in "
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
