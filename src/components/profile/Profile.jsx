/* eslint-disable react/prop-types */
import Drawer from "../drawer/Drawer";

const Profile = ({ styles, activeProfile }) => {
  return (
    <Drawer styles={styles} activeDrawer={activeProfile}>
      <h1 className="text-4xl">Hello, John</h1>
      <p>Welcome to our shop</p>
      <ul className="mt-14 text-2xl">
        <li className="mb-3">Profile</li>
        <li className="mb-3">Orders</li>
        <li className="mb-10">Dashboard</li>
        <li className="text-red-500 tracking-widest">Logout</li>
      </ul>
    </Drawer>
  );
};

export default Profile;
