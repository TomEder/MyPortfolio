import React from "react";

const Services = () => {
  return (
    <div className="w-screen min-h-screen bg-[#f9f9f9] flex items-center justify-center px-6 md:px-10 py-10">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl items-center gap-8">
        {/* Left Section (Title) */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#313433] leading-tight">
            WHAT CAN I DO FOR YOU?
          </h1>
        </div>

        {/* Right Section (Services List) */}
        <div className="flex flex-col items-center md:items-start justify-center border-t md:border-t-0 md:border-l border-gray-400 pt-6 md:pt-0 md:pl-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#313433] mb-4">
            SERVICES
          </h2>
          <ul className="space-y-3 text-base sm:text-lg text-[#8A8A8A] text-center md:text-left">
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
