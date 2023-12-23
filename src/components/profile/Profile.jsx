/* eslint-disable react/prop-types */
import Drawer from "../drawer/Drawer";
import { useNavigate } from "react-router-dom";

const Profile = ({ styles, activeProfile }) => {
  const navigate = useNavigate();
  const firstName = localStorage.getItem("firstName");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userImage");
    localStorage.removeItem("firstName");
    navigate("/login");
  };

  return (
    <Drawer styles={styles} activeDrawer={activeProfile}>
      <h1 className="text-4xl">Hello, {firstName ? firstName : "John"}</h1>
      <p>Welcome to our shop</p>
      <ul className="mt-14 text-2xl">
        <li className="mb-3">Profile</li>
        <li className="mb-3">Orders</li>
        <li className="mb-10">Dashboard</li>
        <li onClick={handleLogout} className="text-red-500 tracking-widest">
          Logout
        </li>
      </ul>
    </Drawer>
  );
};

export default Profile;
