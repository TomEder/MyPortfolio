import React, { useState } from "react";
import { ReactComponent as Logo } from "../../Images/ETHER _ NORDIC_bright.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a className="text-white no-underline hover:text-white hover:no-underline" href="#landing">
          <span className="text-1xl pl-2">Tom Ederstål</span>
        </a>
      </div>

      <div className="block lg:hidden">
      <button
        className="flex flex-col h-12 w-12 border-2 border-gray-500 rounded justify-center items-center group"
        onClick={() => setMenuOpen(!menuOpen)}
    >
        <div
            className={`${genericHamburgerLine} ${
              menuOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${menuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
            className={`${genericHamburgerLine} ${
              menuOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
    </button>
      </div>

      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${menuOpen ? "block" : "hidden"} lg:block pt-6 lg:pt-0`} id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#container">About</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#projects">Portfolio</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#services">Services</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#testimonials">Testimonials</a>
          </li>
          <li className="mr-3">
            <a className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <Logo />
      </div>
    </nav>
  );
};

export default Header;
