import React from "react";
import Jag from "../../Images/Jag4.png";
import { Link } from "react-scroll";

const jagimg = Jag;

const About = () => {
  return (
    <div className="w-screen h-screen bg-[#181818] flex flex-col md:flex-row items-center justify-between px-5 md:px-10">
      <div className="text-center md:text-left md:w-1/2 mt-8">
        <h1 className="bg-transparent text-2xl md:text-6xl text-[#8A8A8A] overflow-hidden">
          TOM EDERSTÅL
        </h1>
        <p className="bg-transparent text-xl md:text-3xl text-[#8A8A8A] mt-4 overflow-hidden">
          Freelance web developer
        </p>
        <p className="text-sm md:text-xl my-3 md:my-5 text-[#8A8A8A] overflow-y-hidden">
          With a two-year KYH diploma in frontend development and extensive
          expertise in UX/UI design, I’ve built a solid technical foundation,
          working at companies like Great-IT and Medexa Diagnostisk Service AB.
          I’ve led the development of web applications using React, Angular,
          TypeScript, and .NET. My technical skills, combined with strong
          interpersonal abilities, have earned me respect from colleagues and
          supervisors alike. I’m a team player with a proactive mindset,
          constantly seeking opportunities for growth and staying on top of the
          latest trends in web development.
        </p>
        <button className="buttonStyle" href>
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
      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          className="bg-transparent rounded-full w-40 h-40 md:w-80 md:h-80 border-2 mb-20 md:mb-0 md:mr-44 border-[#D35400]"
          src={jagimg}
          alt="Tom Ederstål"
        />
      </div>
    </div>
  );
};

export default About;
