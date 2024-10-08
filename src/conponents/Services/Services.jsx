import React from "react";
import "./Services.css";
import VectorBG from "../../Images/VectorBG.png";

const servicesData = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "Building responsive, fast, and modern websites using the latest technologies like React, Angular, and more.",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "Designing intuitive user interfaces and ensuring great user experiences with tools like Figma and Sketch.",
  },
  {
    title: "SEO OPTIMIZATION",
    description:
      "Improving website visibility on search engines by using SEO best practices and optimization techniques.",
  },
  {
    title: "FULL STACK DEVELOPMENT",
    description:
      "Creating complete web applications including both frontend and backend using technologies like Node.js, .NET, and more.",
  },
];

const Services = () => {
  return (
    <div
      className="services-section bg-[#181818] min-h-screen p-10 flex flex-col items-center"
      style={{
        backgroundImage: `url(${VectorBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold mb-20 mt-20 text-[#8A8A8A] text-center">
        MY SERVICES
      </h1>
      <div className="services-grid p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center justify-center">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card border-2 border-[#282828] p-6 bg-[#282828] rounded-lg shadow-lg text-center"
          >
            <h2 className="text-lg font-semibold mb-4 text-[#D35400]">
              {service.title}
            </h2>
            <p className="text-[#8A8A8A]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
