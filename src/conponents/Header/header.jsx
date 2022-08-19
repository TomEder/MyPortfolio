import React from "react";

const Header = () => {
  return (
    <>
      <div className="mx-auto bg-cyan-100 px-3 md:py-3">
        <div className="flex md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl dark:text-gray-700">
              Tom Ederstål
            </h1>
            <p className="text-base font-light text-gray-500">
              Frontend-Developer
            </p>
          </div>
          <div className="space-x-8 md-block">
            <a className="text-base text-gray-500">About</a>
            <a className="text-base text-gray-500">projects</a>
            <a className="text-base text-gray-500">Experience</a>
            <a className="text-base text-gray-500">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
