import React from "react";
import Jag from "../../Images/Jag4.png";

const jagimg = Jag;

const Container = () => {
  return (
    <>
      <div className="bg-gradient-to-t w-screen h-screen from-tommy-lower-bg to-tommy-background pt-10 flex flex-col md:flex-row items-center justify-between px-5 md:px-10 border-b-4">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="bg-transparent text-4xl md:text-6xl text-tommy-text overflow-hidden">
            Tom Ederstål
          </h1>
          <p className="bg-transparent text-2xl md:text-4xl text-tommy-text mt-4 overflow-hidden">
            Freelance web developer
          </p>
          <h2 className="text-base md:text-2xl my-3 md:my-5 text-tommy-text overflow-y-hidden">
            I am a seasoned frontend developer with extensive experience in development and problem-solving. <br /> <br /> I possess an ambitious approach, complemented by a two-year specialized KYH diploma in frontend development and expertise in UX/UI design. My robust technical proficiency and interpersonal skills have made me well-liked by both colleagues and supervisors. As a team player, I also demonstrate the initiative and drive necessary for continuous personal and professional growth.
          </h2>
          <button className="mt-4 md:mt-5 bg-button-color hover:bg-button-hover text-white py-2 px-4 rounded shadow-sm">
            Contact me!
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            className="bg-transparent rounded-full w-40 h-40 md:w-60 md:h-60"
            src={jagimg}
            alt="Tom Ederstål"
          />
        </div>
      </div>
    </>
  );
};

export default Container;
