import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../features/products/productSlice";
import { useEffect } from "react";
import Card from "../common/card/Card";

const FeaturesProducts = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <section className="bg-slate-100 mt-32 py-20">
      <div className="max-w-7xl mx-auto  px-5 xl:px-0">
        <h1 className="text-[20] md:text-[40px] lg:text-[50px]">
          Featured Products
        </h1>
        <div className="grid lg:grid-cols-11 gap-5 mt-16">
          <div className="col-span-2">
            <h1>Search By</h1>
          </div>
          <div className="col-span-9">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
              {products?.map((product) => (
                <Card key={product?.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProducts;
