import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "../../features/products/productSlice";
import { useEffect, useState } from "react";
import Card from "../common/card/Card";

const FeaturesProducts = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [priceFiltering, setPriceFiltering] = useState(products);
  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const handleProductPriceFiltering = (e) => {
    const [minPrice, maxPrice] = e.target.value.split("-");
    console.log(minPrice, maxPrice, "Min-Max");
    if (!e.target.checked) {
      setPriceFiltering(products);
      return;
    }
    const filteredProducts = products?.filter(({ price }) => {
      return price >= minPrice && price <= maxPrice;
    });
    setPriceFiltering(filteredProducts);
  };

  return (
    <section className="bg-slate-100 mt-32 py-20">
      <div className="max-w-7xl mx-auto  px-5 xl:px-0">
        <h1 className="text-[20] md:text-[40px] lg:text-[50px]">
          Featured Products
        </h1>
        <div className="grid lg:grid-cols-11 gap-5 mt-16">
          <div className="col-span-2">
            <h1 className="text-xl border-b pb-2">Search By</h1>
            <ul className="mt-7 w-full">
              <p className="mb-2">Price</p>
              <li className="flex items-center gap-4 cursor-pointer">
                <input
                  onChange={handleProductPriceFiltering}
                  value="100-500"
                  type="checkbox"
                  name=""
                  id="100-500"
                />
                <label htmlFor="100-500">
                  <p className="hover:underline">$100 - $500</p>
                </label>
              </li>
              <li className="flex items-center gap-4 cursor-pointer my-3">
                <input
                  onChange={handleProductPriceFiltering}
                  value="500-1000"
                  type="checkbox"
                  name=""
                  id="500-1000"
                />
                <label htmlFor="500-1000">
                  <p className="hover:underline">$500 - $1000</p>
                </label>
              </li>
              <li className="flex items-center gap-4 cursor-pointer">
                <input
                  onChange={handleProductPriceFiltering}
                  value="1000-1500"
                  type="checkbox"
                  name=""
                  id="1000-1500"
                />
                <label htmlFor="1000-1500">
                  <p className="hover:underline">$1000 - $1500</p>
                </label>
              </li>
            </ul>
          </div>
          <div className="col-span-9">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
              {priceFiltering?.map((product) => (
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
