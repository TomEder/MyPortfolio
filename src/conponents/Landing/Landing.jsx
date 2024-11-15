import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Landing.css"; // Custom CSS if needed
import landingBackground from "../../Images/LandingBackground.jpg";
import Logo from "../../Images/Logo.png";
import Name from "../../Images/Name.png";

const Landing = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = landingBackground;
    img.onload = () => setBackgroundLoaded(true);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center p-5 md:p-10"
      style={{
        backgroundImage: backgroundLoaded
          ? `url(${landingBackground})`
          : "none",
      }}
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
          <Link
            to="container"
            spy={true}
            smooth={true}
            duration={500}
            className="buttonStyle"
          >
            ABOUT
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="buttonStyle"
          >
            PORTFOLIO
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="buttonStyle"
          >
            SERVICES
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className="buttonStyle"
          >
            TESTIMONIALS
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="buttonStyle"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
