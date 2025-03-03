import React from "react";
import Logo from "../../Images/Logo.png";
import Name from "../../Images/Name.png";

const Footer = () => {
  return (
    <footer className="footer-section bg-[#f9f9f9] text-[#313433] p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex flex-col items-center">
            <img
              src={Logo}
              alt="EtherSteel Software Logo"
              className="w-[300px] md:w-[600px]"
            />
            <img
              src={Name}
              alt="Tom Ederstål"
              className="w-[150px] md:w-[220px] md:ml-64 mb-2"
            />
          </div>
          <p className="text-sm">
            Frilansande Webbutvecklare, Social Media Manager | Stockholm,
            Sverige
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center md:text-left">
          <a
            href="mailto:tom@ethersteelsoft.com"
            className="text-[#313433] text-sm hover:text-[#007bff] transition-colors"
          >
            MEJLA MIG
          </a>
          <a
            href="https://www.linkedin.com/in/tom-ederst%C3%A5l-5b3b99101/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#313433] text-sm hover:text-[#007bff] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/tomeder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#313433] text-sm hover:text-[#007bff] transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.instagram.com/ethersteel_soft/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#313433] text-sm hover:text-[#007bff] transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.threads.net/@ethersteel_soft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#313433] text-sm hover:text-[#007bff] transition-colors"
          >
            THREADS
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Tom Ederstål. Alla rättigheter
          förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
