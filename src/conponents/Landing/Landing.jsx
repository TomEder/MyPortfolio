import React from "react";
import "./Landing.css"; // Custom CSS if needed
import Logo from "../../Images/Logo.png";
import Jag4 from "../../Images/Jag4.png";
import { Link } from "react-scroll";

const Landing = () => {
  return (
    <div className="h-screen bg-[#f9f9f9] flex flex-col items-center justify-center md:flex-row md:justify-between px-6 md:px-16 lg:px-32 space-y-6 md:space-y-0">
      {/* Left Section: Text and Logo */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4">
        <img src={Logo} alt="Logo" className="w-32 md:w-40 mb-4" />
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          I'M TOM EDERSTÅL, AT YOUR SERVICE!
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          READY TO HELP WITH WEB DEVELOPMENT & SOCIAL MEDIA MANAGEMENT
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACT ME!
          </Link>
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-shrink-0">
        <img
          src={Jag4}
          alt="Tom Ederstål"
          className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Landing;
