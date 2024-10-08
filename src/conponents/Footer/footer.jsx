import React from "react";
import "./Footer.css";
import Logo from "../../Images/Logo.png";
import Name from "../../Images/Name.png";

const Footer = () => {
  return (
    <footer className="footer-section bg-[#181818] text-[#8A8A8A] p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Logo" className="w-[300px] md:w-[600px]" />
            <img
              src={Name}
              alt="Name"
              className="w-[150px] ml-10 md:w-[220px] md:ml-64"
            />
          </div>
          <p className="text-sm">Freelance Web Developer | Stockholm, Sweden</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="mailto:tom@ethersteelsoft.com"
            className="text-[#8A8A8A] hover:text-[#D35400] transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/tomederstal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-[#D35400] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tomederstal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8A8A] hover:text-[#D35400] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Tom Ederstål. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
