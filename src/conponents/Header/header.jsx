import React, { useState } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../../Images/ETHER _ NORDIC_bright.svg";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link
          to="landing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white no-underline hover:text-white hover:no-underline cursor-pointer"
        >
          <span className="text-1xl pl-2">Tom Ederstål</span>
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="block lg:hidden">
        <button
          className="flex flex-col h-12 w-12 border-2 border-gray-500 rounded justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>

      {/* Animated Menu for Mobile View */}
      <motion.div
        className={`w-full flex-grow lg:hidden ${isOpen ? "block" : "hidden"} pt-6 lg:pt-0`}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        id="nav-content"
      >
        <ul className="list-reset flex flex-col items-start">
          <li className="mr-3">
            <Link
              to="container"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>

      {/* Static Menu for Desktop View */}
      <div className="hidden lg:flex flex-grow lg:items-center lg:w-auto" id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              to="container"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
            >
              Portfolio
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
            >
              Testimonials
            </Link>
          </li>
          <li className="mr-3">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4 cursor-pointer"
            >
              Contact
            </Link>
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
