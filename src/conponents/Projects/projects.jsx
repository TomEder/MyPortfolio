import React, { useState } from "react";
import BiozoneImg from "../../Images/BioZone.jpg";
import FTTLanding from "../../Images/FTTLanding.png";
import WeatherApp from "../../Images/WeatherApp.png";

const projectData = [
  {
    title: "BIOZONE WEBSITE REDESIGN",
    image: BiozoneImg,
    description:
      "Used Wordpress to build a modern website for Biozone. This project involved redesigning the website to improve user experience and SEO.",
    tech: ["Wordpress", "JavaScript", "SEO"],
  },
  {
    title: "FREELANCE TIME TRACKER APP",
    image: FTTLanding,
    description:
      "I am developing an app that helps hourly employees easily keep track of hours worked and money earned for different projects. The user creates a project, sets an hourly rate, and starts a timer for each work session. When the timer is stopped, the app automatically calculates the earnings and adds it to the total for the billing period.",
    tech: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    title: "WEATHER APP",
    image: WeatherApp,
    description:
      "I developed a weather app that displays the current weather and forecast for a user's location. The app uses the OpenWeatherMap API to fetch weather data and displays it in a clean, user-friendly interface.",
    tech: ["React", "OpenWeatherMap API", "Tailwind CSS"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-screen min-h-screen bg-[#999999] flex flex-col items-center px-10 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#313433] mb-12 text-center">
        MY LATEST WORK
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-xl font-semibold text-[#313433] mb-4">
              {project.title}
            </h2>
            <p className="text-[#6c6c6c]">
              {project.description.substring(0, 100) + "..."}
            </p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="modal-content bg-white py-10 px-6 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-[#313433] mb-4">
              {selectedProject.title}
            </h2>
            <img
              className="m-auto max-h-96 rounded-lg shadow-lg"
              src={selectedProject.image}
              alt="Project"
            />
            {selectedProject.tech && (
              <div className="flex flex-wrap mt-4">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[#313433] border border-gray-300 bg-gray-100 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <p className="text-[#6c6c6c] mt-4">{selectedProject.description}</p>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-[#313433] text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
