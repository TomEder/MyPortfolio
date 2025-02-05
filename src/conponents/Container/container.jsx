import React from "react";
import Jag from "../../Images/Jag4.png";
import { Link } from "react-scroll";

const jagimg = Jag;

const About = () => {
  return (
    <div className="w-screen h-screen bg-[#999999] flex items-center justify-center">
      <div className="text-center px-5">
        <p className="text-sm md:text-base font-medium text-[#313433] mb-4">
          Why me?
        </p>
        <h1 className="text-3xl md:text-6xl font-extrabold text-[#313433] mb-6">
          I'M VERY QUALIFIED TO HELP!
        </h1>
        <p className="text-sm md:text-lg mx-auto max-w-3xl text-[#313433] leading-relaxed">
          With a two-year KYH diploma in frontend development and expertise in
          UX/UI design, I’ve developed web applications using React, Angular,
          TypeScript, and .NET at companies like Great-IT and Medexa Diagnostisk
          Service AB. I’m also passionate about social media, combining
          technical skills with creative storytelling to manage platforms and
          drive engagement. Known for my proactive mindset and teamwork, I stay
          ahead of trends in both web development and social media.
        </p>
      </div>
    </div>
  );
};

export default About;
