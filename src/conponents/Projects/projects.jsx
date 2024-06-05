import React from "react";

import Coolwolves from "../../Images/CoolWolves.jpg";
import BioZone from "../../Images/BioZone.jpg";
import MyMovies from "../../Images/MyMovies.jpg";

const CoolWolvesImg = Coolwolves;
const BioZoneImg = BioZone;
const MoviesImg = MyMovies;

const Projects = () => {
  return (
    <div className="bg-tommy-background m-auto text-center px-32 py-24 border-b-4">
      <h2 className="text-4xl my-5 text-tommy-text overflow-hidden">
        My Latest Work
      </h2>
      <p className="mb-10 text-tommy-text">
        I have worked on a variety of projects, ranging from web development to UX/UI design. Here are some of my latest projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <div className="bg-gray-700 border border-solid border-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
          <img
            className="w-full h-full object-cover"
            src={CoolWolvesImg}
            alt="coolwolves"
          />
        </div>

        <div className="bg-gray-700 border border-solid border-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
          <img
            className="w-full h-full object-cover"
            src={BioZoneImg}
            alt="Biozone"
          />
        </div>

        <div className="bg-gray-700 border border-solid border-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
          <img
            className="w-full h-full object-cover"
            src={MoviesImg}
            alt="MyMovies"
          />
        </div>
        <div className="bg-gray-700 border border-solid border-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
          <img
            className="w-full h-full object-cover"
            src={MoviesImg}
            alt="MyMovies"
          />
        </div>
        <div className="bg-gray-700 border border-solid border-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
          <img
            className="w-full h-full object-cover"
            src={MoviesImg}
            alt="MyMovies"
          />
        </div>
        <div className="bg-gray-700 border border-solid border-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
          <img
            className="w-full h-full object-cover"
            src={MoviesImg}
            alt="MyMovies"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
