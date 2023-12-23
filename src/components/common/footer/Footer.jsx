import { appStore, playStore } from "../../../assets";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20 mx-5 xl:mx-0">
      <div className="max-w-7xl mx-auto py-10 px:5 xl:px-0 flex justify-between flex-wrap gap-16">
        <ul>
          <li className="text-xl mb-5">About US</li>
          <li className="mb-3 cursor-pointer hover:underline">Our Mission</li>
          <li className="mb-3 cursor-pointer hover:underline">Our Vision</li>
          <li className="mb-3 cursor-pointer hover:underline">Team</li>
          <li className="mb-3 cursor-pointer hover:underline">Careers</li>
        </ul>
        <ul>
          <li className="text-xl mb-5">Products</li>
          <li className="mb-3 cursor-pointer hover:underline">Trending</li>
          <li className="mb-3 cursor-pointer hover:underline">New Releases</li>
          <li className="mb-3 cursor-pointer hover:underline">Best Sellers</li>
        </ul>
        <ul>
          <li className="text-xl mb-5">Support</li>
          <li className="mb-3 cursor-pointer hover:underline">FAQ</li>
          <li className="mb-3 cursor-pointer hover:underline">Contact US</li>
          <li className="mb-3 cursor-pointer hover:underline">Return Policy</li>
          <li className="mb-3 cursor-pointer hover:underline">
            Payment methods
          </li>
        </ul>
        <ul>
          <li className="text-xl mb-5">Download App</li>
          <li className="mb-3 flex items-center gap-2 border px-5 py-3 rounded-xl bg-white cursor-pointer">
            <img className="w-7 h-7" src={playStore} alt="" />{" "}
            <span>From Play Store</span>
          </li>
          <li className="mb-3 flex items-center gap-2 border px-5 py-3 rounded-xl bg-white cursor-pointer">
            <img className="w-7 h-7" src={appStore} alt="" />
            <span>From App Store</span>
          </li>
        </ul>
      </div>
      <hr />

      <div className="max-w-7xl mx-auto my-4 flex flex-col md:flex-row   md:justify-between md:items-center gap-3 text-[18px]">
        <p className="order-last md:order-first">
          Copyright | All Right Reserved 2023
        </p>
        <ul className="flex items-center gap-5 order-first md:order-last">
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
