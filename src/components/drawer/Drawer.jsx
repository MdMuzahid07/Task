/* eslint-disable react/prop-types */

const Drawer = ({ styles, activeDrawer, children }) => {
  return (
    <div className={`${styles} ${activeDrawer ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};

export default Drawer;
