import React from "react";

const Header = () => {
  return (
    <>
      <div className="mx-auto bg-tommy-background px-3 md:py-3">
        <div className="flex md:flex-row justify-between items-center">
          <div className="space-x-8 md-block">
            <a target="_blank" href="https://www.linkedin.com/in/tom-ederst%C3%A5l-5b3b99101/" className="text-base text-gray-500">LinkedIn</a>
            <a target="_blank" href="https://github.com/TomEder" className="text-base text-gray-500">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
