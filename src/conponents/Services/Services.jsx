import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="bg-tommy-background py-20 px-10 overflow-hidden border-b-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-blue-600 overflow-hidden">
          What I offer clients
        </h2>
        <p className="mt-4 text-gray-600">
          I provide a variety of services to my clients, ranging from web <br />
          development to UX/UI design. Here are some of the services I offer.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto py-10 w-1/2">
        <div className="card">
          <h2 className="card-text">Frontend Development</h2>
          <p>Studied frontend development for 2 years at KYH in Stockholm. This is what I'm best at.</p>
        </div>
        <div className="card">
          <h2 className="card-text">App Development</h2>
          <p>
            I have experience developing mobile applications for both Android
            and iOS.
          </p>
        </div>
        <div className="card">
          <h2 className="card-text">Backend Development</h2>
          <p>
            I have experience developing backend services using Node.js and
            C# with ASP.NET.
          </p>
        </div>
        <div className="card">
          <h2 className="card-text">UX/UI Design</h2>
          <p>
            I love designing user interfaces and user experiences
            for web and mobile applications.
          </p>
        </div>
        <div className="card">
          <h2 className="card-text">SEO Optimization</h2>
          <p>
            I help optimizing websites for search engines to improve
            their visibility online.
          </p>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-4xl text-blue-600 overflow-hidden">
          What I'm learning
        </h2>
        <p className="mt-4 text-gray-600">
          I am always learning new things to stay up to date with the latest <br />
          technologies and trends. Here are some of the things I'm currently
          learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto py-10 w-1/2">
          <div className="card">
            <h2 className="card-text">Music Production</h2>
            <p>
                I have recently started learning music production and sound
                design using Ableton Live.
            </p>
          </div>
          <div className="card">
            <h2 className="card-text">Video Editing</h2>
            <p>
                I have started learning video editing using Adobe Premiere Pro.
            </p>
          </div>
          <div className="card">
            <h2 className="card-text">3D Modelling</h2>
            <p>
                I have started learning 3D modelling using Blender and Cinema 4D.
            </p>
          </div>
          <div className="card">
            <h2 className="card-text">Photography</h2>
            <p>
                I have started learning photography and photo editing using Adobe Lightroom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
