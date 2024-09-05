import React from "react";

import Coolwolves from "../../Images/CoolWolves.jpg";
import BioZone from "../../Images/BioZone.jpg";
import MyMovies from "../../Images/MyMovies.jpg";
import medexa from "../../Images/Medexa.png";

const CoolWolvesImg = Coolwolves;
const BioZoneImg = BioZone;
const MoviesImg = MyMovies;
const MedexaImg = medexa;

const Projects = () => {
  return (
    <div className="bg-tommy-background m-auto text-center px-5 h-screen md:px-16 lg:px-32 py-16 md:py-24 border-b-4">
      <h2 className="text-3xl md:text-4xl my-5 text-tommy-text overflow-hidden">
        My Latest Work
      </h2>
      <p className="mb-8 md:mb-10 text-tommy-text">
        I have worked on a variety of projects, ranging from web development to UX/UI design. Here are some of my latest projects.
      </p>

        <div className="bg-gray-700 border border-solid mb-6 border-white rounded-2xl shadow-md overflow-hidden max-w-xs mx-auto">
          <img
            className="w-full h-full object-cover"
            src={BioZoneImg}
            alt="Biozone"
          />
        </div>

        <div className="bg-gray-700 border border-solid mb-6 border-white rounded-2xl shadow-md overflow-hidden max-w-xs mx-auto">
          <img
            className="w-full h-full object-cover"
            src={MedexaImg}
            alt="Biozone"
          />
        </div>

        <div className="bg-gray-700 border border-solid mb-6 border-white rounded-2xl shadow-md overflow-hidden max-w-xs mx-auto">
          <img
            className="w-full h-full object-cover"
            src={CoolWolvesImg}
            alt="coolwolves"
          />
        </div>
      </div>
  );
};

export default Projects;
