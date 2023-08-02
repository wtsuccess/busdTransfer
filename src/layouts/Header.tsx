import { useState } from "react";
import Menu from "../components/Menu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="py-3 px-2">
      <div className="container mx-auto">
        <div className="mx-auto flex justify-between py-1 px-6 items-center ">
          <a
            href="http://namomudra.com"
            className="cursor-pointer text-[26px] block text-white"
          >
            <span className="font-black">BUSD</span>Handler
          </a>
          <div className="hidden md:block">
            <Menu />
          </div>
          <button
            type="button"
            className="border-white border-[1px] md:hidden bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-5 w-9"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">{showMobileMenu && <Menu />}</div>
      </div>
    </header>
  );
};

export default Header;
