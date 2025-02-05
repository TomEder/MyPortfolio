import React from "react";
import "./Landing.css"; // Custom CSS if needed
import Logo from "../../Images/Logo.png";
import Jag4 from "../../Images/Jag4.png";
import { Link } from "react-scroll";

const Landing = () => {
  return (
    <div className="h-screen bg-[#fbfdf2] flex items-center justify-between px-8 md:px-16 lg:px-32">
      {/* Left Section: Text and Logo */}
      <div className="flex flex-col justify-center max-w-lg space-y-4">
        <img src={Logo} alt="Logo" className="w-40 md:w-48" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          I'M TOM EDERSTÅL, AT YOUR SERVICE!
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
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
      <div className="w-[250px] md:w-[300px] lg:w-[350px] rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={Jag4}
          alt="Tom Ederstål"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Landing;
