import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "./components/home/Slider";
import ProductOverView from "./components/home/ProductOverView";
import FeaturesProducts from "./components/home/FeaturesProducts";

const App = () => {
  const navigate = useNavigate();

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
      <FeaturesProducts />
    </>
  );
};

export default App;
