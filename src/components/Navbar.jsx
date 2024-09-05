import { useState } from "react";
import { CloseIcon, Logo, MenuIcon } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div id="navbar" className="h-20 flex items-center justify-center sticky">
      <div className="w-5/6 h-20 flex items-center justify-between font-robotoFlex relative">
        <img src={Logo} alt="Cars Spot logo" />
        <div
          className={`${
            active ? "block" : "hidden"
          } gap-6 absolute right-0 top-16 md:static md:block`}
        >
          <a
            href="#gallery"
            className="mr-3 text-complementary hover:text-details hover:underline hover:underline-offset-4 transition duration-500"
          >
            Galeria Zdjęć
          </a>
          <a
            href="#faq"
            className="ml-3 text-complementary hover:text-details hover:underline hover:underline-offset-4 transition duration-500"
          >
            FaQ
          </a>
        </div>
        <button className="hidden md:block text-whiteSmoke bg-details px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition duration-300 z-10">
          Zadzwoń do nas
        </button>
        <button onClick={() => setActive(!active)} className="block md:hidden">
          <img src={!active ? MenuIcon : CloseIcon} alt="Hamburger Menu Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
