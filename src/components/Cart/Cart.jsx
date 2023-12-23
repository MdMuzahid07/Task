/* eslint-disable react/prop-types */
import CartCard from "../common/card/CartCard";
import Drawer from "../drawer/Drawer";

const Cart = ({ cartActive, styles }) => {
  return (
    <Drawer activeDrawer={cartActive} styles={styles}>
      <div className="overflow-y-auto h-[70vh] pr-2">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <hr className="my-3" />
      <div className="w-full h-full bg-white">
        <div className="min-h-20 flex items-start justify-between">
          <p className=" flex items-center gap-1">
            <span className="h-7 w-7 text-sm flex justify-center items-center border rounded-full">
              10
            </span>{" "}
            <span className="text-xs">Products</span>
          </p>
          <p>
            <span>Price: 445$ + 15% vat</span> Total = 500$
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
