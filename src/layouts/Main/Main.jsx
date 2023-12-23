import Footer from "../../components/common/footer/Footer";
import Navbar from "../../components/common/header/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
