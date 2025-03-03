import React, { useState } from "react";
import BiozoneImg from "../../Images/BioZone.jpg";
import FTTLanding from "../../Images/FTTLanding.png";
import WeatherApp from "../../Images/WeatherApp.png";

const projectData = [
  {
    title: "BIOZONE WEBBPLATS REDESIGN",
    image: BiozoneImg,
    description:
      "Använde Wordpress för att bygga en modern webbplats för Biozone. Detta projekt innebar att designa om webbplatsen för att förbättra användarupplevelsen och SEO.",
    tech: ["Wordpress", "JavaScript", "SEO"],
  },
  {
    title: "FREELANCE TIME TRACKER APP",
    image: FTTLanding,
    description:
      "Jag utvecklar en app som hjälper frilansare att enkelt hålla koll på arbetade timmar och intjänade pengar för olika projekt. Användaren skapar ett projekt, ställer in en timtaxa och startar en timer för varje arbetspass. När timern stoppas beräknar appen automatiskt intäkterna och lägger till dem till totalen för faktureringsperioden.",
    tech: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    title: "VÄDERAPP",
    image: WeatherApp,
    description:
      "Jag utvecklade en väderapp som visar aktuellt väder och prognos för användarens plats. Appen använder OpenWeatherMap API för att hämta väderdata och visar det i ett rent, användarvänligt gränssnitt.",
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
        MINA SENASTE PROJEKT
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
              alt={selectedProject.title}
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
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
