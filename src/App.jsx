import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductData } from "./features/products/productSlice";
import Slider from "./components/home/Slider";
import ProductOverView from "./components/home/ProductOverView";

const App = () => {
  const navigate = useNavigate();

  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Slider />
      <ProductOverView />
    </>
  );
};

export default App;
