import React from "react";

const Services = () => {
  return (
    <div className="w-screen h-screen bg-[#f9f9f9] flex items-center justify-center px-10">
      {/* Grid Layout for the Left and Right Sections */}
      <div className="grid grid-cols-2 w-full max-w-6xl items-center">
        {/* Left Section */}
        <div className="pr-8 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#313433] leading-tight">
            WHAT CAN I DO FOR YOU?
          </h1>
        </div>

        {/* Right Section */}
        <div className="pl-8 flex flex-col items-start justify-center border-l border-gray-400">
          <h2 className="text-xl font-bold text-[#313433] mb-4">SERVICES</h2>
          <ul className="space-y-3 text-lg text-[#8A8A8A]">
            <li>WEB DESIGN</li>
            <li>WEB DEVELOPMENT</li>
            <li>SOCIAL MEDIA MANAGEMENT</li>
            <li>MARKETING</li>
            <li>VIDEO EDITING</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
