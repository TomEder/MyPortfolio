import React from "react";
import { ReactComponent as Logo } from "../../Images/ETHER _ NORDIC_bright.svg";

const Header = () => {
  return (
    <>
      <div className="mx-auto bg-tommy-background border-b-2 px-10 md:py-3 fixed w-screen">
        <div className="flex flex-col md:flex-row justify-between items-center mt-5">
          <div className="Name">
            <a href="#landing">Tom Ederstål</a>
          </div>
          <div className="Buttons flex space-x-4">
            <a href="#container">About</a>
            <a href="#projects">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="Logo">
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
