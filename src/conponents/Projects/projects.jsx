import React from "react";

import Coolwolves from "../../Images/CoolWolves.jpg";
import BioZone from "../../Images/BioZone.jpg";
import MyMovies from "../../Images/MyMovies.jpg";

const CoolWolvesImg = Coolwolves;
const BioZoneImg = BioZone;
const MoviesImg = MyMovies;

const Projects = () => {
  return (
    <div className="bg-tommy-background m-auto text-center p-10">
      <h2 className="text-4xl my-5 overflow-y-hidden text-tommy-text">
        MY PROJECTS
      </h2>
      <div className="">
        <div class="max-w-md mx-auto bg-slate-200 m-2 rounded-md shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex h-full">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src={CoolWolvesImg}
                alt="coolwolves"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/TomEder/E-sports-team/tree/master"
                >
                  E-sports team website
                </a>
              </div>
              <p class="mt-2 text-slate-500">
                Made a website for mine and my friends Overwatch team.
              </p>
              <div className="md:flex md:w-full w-52 m-auto">
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  JavaScript ES6
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  CSS3
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  React
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-md mx-auto bg-slate-200 m-2 rounded-md shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex h-full">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src={BioZoneImg}
                alt="Biozone"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <a rel="noreferrer" target="_blank" href="https://biozone.se/">
                  BioZone.se
                </a>
              </div>
              <p class="mt-2 text-slate-500">
                Redesigned this website for a client using Wordpress and
                Elementor
              </p>
              <div className="md:flex md:w-full w-52 m-auto">
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  Wordpress
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  Elementor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-md mx-auto bg-slate-200 m-2 rounded-md shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex h-full">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src={MoviesImg}
                alt="MyMovies"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/TomEder/MyMovies"
                >
                  My-Movies
                </a>
              </div>
              <p class="mt-2 text-slate-500">
                A movie list app made with React. Uses TMDB-api to search movies
                and TV-shows.
              </p>
              <div className="md:flex md:w-full w-52 m-auto">
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  JavaScript ES6
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  CSS3
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  React
                </p>
                <p className="bg-gray-500 text-tommy-text p-1 rounded m-1">
                  Redux
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
