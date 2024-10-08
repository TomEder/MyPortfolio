import React, { useState } from "react";
import "./Projects.css";
import BiozoneImg from "../../Images/BioZone.jpg";
import MedexaImg from "../../Images/Medexa.png";
import FTTLanding from "../../Images/FTTLanding.png";
import VectorBG from "../../Images/VectorBG.png";

const projectData = [
  {
    title: "BIOZONE WEBSITE REDESIGN",
    image: BiozoneImg,
    description:
      "Used Wordpress to build a modern website for Biozone. This project involved redesigning the website to improve user experience and SEO.",
    tech: ["Wordpress", "JavaScript", "SEO"],
  },
  {
    title: "MEDEXA CONFIG EDITOR WEB APP",
    image: MedexaImg,
    description:
      "I independently developed a web application from concept to finished product according to the client's requirements, focusing on designing and implementing with ASP.NET Core and AngularJS. The application generates configuration files and allows XML uploads, streamlining the client's workflow and reducing errors in configuration management.",
    tech: ["Angular", ".NET", "C#", "Tailwind CSS"],
  },
  {
    title: "FREELANCE TIME TRACKER APP",
    image: FTTLanding,
    description:
      "I am developing an app that helps hourly employees easily keep track of hours worked and money earned for different projects. The user creates a project, sets an hourly rate, and starts a timer for each work session. When the timer is stopped, the app automatically calculates the earnings and adds it to the total for the billing period.",
    tech: ["React", "Tailwind CSS", "Firebase"],
  },
  /* {
    title: "Labelle studio website",
    image: LabelleLanding,
    description:
      "I designed and developed a website for a local hair salon. The website showcases the studio's portfolio and services, and includes a contact form for potential clients to reach out.",
    tech: ["React", "Tailwind CSS", "Instagram API", "Figma"],
  }, */
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className="projects-section bg-[#181818] min-h-screen p-10 flex flex-col items-center"
      style={{
        backgroundImage: `url(${VectorBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl md:mb-72 mt-20 text-[#8A8A8A] text-center">
        MY LATEST WORK
      </h1>
      <div className="projects-grid md:p-20 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card border-2 border-[#282828] p-6 bg-[#282828] rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:border-[#D35400] hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#8A8A8A]">
              {project.title}
            </h2>
            <p className="text-[#8A8A8A]">
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
            className="modal-content bg-[#282828] p-12 rounded-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold text-[#D35400] mb-4">
              {selectedProject.title}
            </h2>
            <img
              className="m-auto max-h-96"
              src={selectedProject.image}
              alt="Project"
            />
            {selectedProject.tech && (
              <div className="flex flex-wrap mt-4">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[#8A8A8A] rounded-full border-2 border-[#D35400] px-2 py-1 text-sm mr-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <p className="text-[#8A8A8A] mb-4">{selectedProject.description}</p>
            <button
              onClick={handleCloseModal}
              className="bg-[#D35400] text-white px-4 py-2 rounded hover:bg-[#b84400]"
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
