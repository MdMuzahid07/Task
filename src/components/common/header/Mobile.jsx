/* eslint-disable react/prop-types */
import Drawer from "../../drawer/Drawer";

const Mobile = ({ setActiveMobile, activeMobile }) => {
  return (
    <Drawer
      setActiveDrawer={setActiveMobile}
      activeDrawer={activeMobile}
      styles={`w-full min-h-screen absolute top-[70px] right-0 z-10 bg-white p-5`}
    >
      <ul className="text-[20px]">
        <li onClick={() => setActiveMobile(false)}>Home</li>
        <li onClick={() => setActiveMobile(false)}>Shop</li>
      </ul>
    </Drawer>
  );
};

export default Mobile;
