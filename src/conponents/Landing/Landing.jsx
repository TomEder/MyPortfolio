import React from "react";
import "./Landing.css"; // Custom CSS if needed
import landingBackground from "../../Images/LandingBackground.jpg";
import Logo from "../../Images/Logo.png";
import Name from "../../Images/Name.png";

const Landing = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center p-5 md:p-10"
      style={{ backgroundImage: `url(${landingBackground})` }}
    >
      <div
        className="relative"
        style={{ position: "absolute", top: "15%", left: "10%" }}
      >
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" className="w-[300px] md:w-[600px]" />
          <img
            src={Name}
            alt="Name"
            className="w-[150px] ml-10 md:w-[220px] md:ml-64"
          />
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:gap-6">
          <div className="col-span-3 flex justify-center mb-4"></div>
          <button className="buttonStyle">ABOUT</button>
          <button className="buttonStyle">PORTFOLIO</button>
          <button className="buttonStyle">SERVICES</button>
          <button className="buttonStyle">TESTIMONIALS</button>
          <button className="buttonStyle">CONTACT</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
