import React from "react";

const Footer = () => {
  return (
    <div className="md:flex md:flex-nowrap text-center bg-gray-500 h-64 justify-between">
      <div className="md:mt-20">
        <h1 className="text-tommy-text text-xl mt-5">TOM EDERSTÅL</h1>
      </div>
      <div className="md:m-24 mt-20">
        <p className="text-tommy-text text-md">Email: tomederstal@gmail.com</p>
        <p className="text-tommy-text text-md">Phone: +4670 771 43 80</p>
      </div>
    </div>
  );
};

export default Footer;
