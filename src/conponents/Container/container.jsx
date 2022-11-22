import React from "react";

import Jag from "../../Images/Jag4.png";

const jagimg = Jag;

const Container = () => {
  return (
    <>
      <div className="bg-gradient-to-t w-screen from-gray-500 to-tommy-background pt-10">
        <h1 className=" bg-transparent from-gray-500 text-6xl text-center text-tommy-text">
          TOM EDERSTÅL
        </h1>
        <p className=" bg-transparent my-20 from-gray-500 text-4xl text-center text-tommy-text mt-8">
          {"<Frontend Developer/>"}
        </p>
        <h2 className="text-2xl my-5 text-center overflow-y-hidden text-tommy-text">
          My name is Tom Ederstål and i'm a Software Developer that loves
          Technology..
          <br /> Currently working at Great-IT.
        </h2>
        <div className="items-center bg-transparent w-60">
          <img
            className="bg-transparent object-left-bottom"
            src={jagimg}
            alt="Me"
          />
        </div>
      </div>
    </>
  );
};

export default Container;
