import React from "react";
import LI from "../../Images/linkedin.png";
import GH from "../../Images/github.png";

const LiImg = LI;
const GHImg = GH;

const Header = () => {
  return (
    <>
      <div className="mx-auto bg-tommy-background px-3 md:py-3">
        <div className="flex md:flex-row justify-between items-center">
          <div className="flex mt-5 space-x-4 md-block">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/tom-ederst%C3%A5l-5b3b99101/"
              className="text-base text-gray-500"
            >
              <img className="scale-75" src={LiImg} alt="LinkedIn" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/TomEder"
              className="text-base text-gray-500"
            >
              <img className="scale-75" src={GHImg} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
