/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CartCard from "../common/card/CartCard";
import Drawer from "../drawer/Drawer";
import { useSelector } from "react-redux";

const Cart = ({ cartActive, styles }) => {
  const [productsPrice, setProductsPrice] = useState(0);
  const { cart } = useSelector((state) => state.products);

  useEffect(() => {
    let totalPrice = 0;
    if (cart?.length > 0) {
      cart?.forEach((product) => {
        totalPrice = totalPrice + product?.price;
      });
    }
    setProductsPrice(totalPrice);
  }, [cart]);

  const includeVat = productsPrice * 1.15;

  return (
    <Drawer activeDrawer={cartActive} styles={styles}>
      <div className="overflow-y-auto h-[70vh] pr-2">
        {cart?.map((product) => (
          <CartCard key={product?.id} product={product} />
        ))}
      </div>
      <hr className="my-3" />
      <div className="w-full h-full bg-white">
        <div className="min-h-20 flex items-start justify-between">
          <p className=" flex items-center gap-1">
            <span className="h-7 w-7 text-sm flex justify-center items-center border rounded-full">
              {cart?.length}
            </span>{" "}
            <span className="text-xs">
              {cart?.length === 1 ? "Product" : "Products"}
            </span>
          </p>
          <p>
            <span>Price: {productsPrice}$ + 15% vat</span> Total ={" "}
            {includeVat.toFixed(2)}$
          </p>
        </div>
        <div className="flex gap-10">
          <button className="w-32 h-7 border rounded-full flex justify-center items-center">
            Go To Cart
          </button>
          <button className="w-32 h-7 border bg-black text-white rounded-full flex justify-center items-center">
            Checkout
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default Cart;
