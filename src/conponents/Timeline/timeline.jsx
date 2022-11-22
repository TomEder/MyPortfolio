import React from "react";

const Timeline = () => {
  return (
    <div className="bg-neutral-800">
      <div className="m-auto h-fit mt-2 w-fit">
        <h2 className="text-4xl overflow-y-hidden text-tommy-text">
          EXPERIENCE
        </h2>
      </div>

      <div className="divider-container flex flex-col items-center -mt-2">
        <div className="w-1 h-20"></div>
        <h2 className="text-tommy-text text-2xl">Oct 2022-</h2>
      </div>

      <div className="grid grid-cols-1 max-w-xl mx-auto">
        <div className=" p-4 rounded-md shadow-xl bg-gray-700 border border-solid border-white">
          <p className="text-gray-300">Okt 2022 - Current</p>
          <h2 className="text-slate-300 text-lg mb-2">
            <b>Great-IT</b>, Stockholm - Frontend-consultant
          </h2>
          <p className="text-sm text-slate-300">
            Hired to be a consultant for customers to help build websites and
            apps.
          </p>
        </div>
      </div>

      <div className="divider-container flex flex-col items-center -mt-2">
        <div className="w-1 h-20 bg-gray-400 rounded-full mt-2"></div>
        <h2 className="text-tommy-text text-2xl">Summer 2022</h2>
      </div>

      <div className="grid grid-cols-1 max-w-xl mx-auto">
        <div className=" p-4 rounded-md shadow-xl bg-gray-700 border border-solid border-white">
          <p className="text-gray-300">June 2022 - Oct 2022</p>
          <h2 className="text-slate-300 tezt-lg mb-2">
            <b>Blackpill innovative developments AB</b>
          </h2>
          <p className="text-sm text-slate-300">
            Worked in WordPress and Elementor to build brand new websites and
            improve design and SEO for clients.
          </p>
        </div>
      </div>
      <div className="divider-container flex flex-col items-center">
        <div className="w-1 h-20 bg-gray-400 rounded-full -mt-2"></div>
        <h2 className="text-tommy-text text-2xl">2021</h2>
      </div>

      <div className="grid grid-cols-1 max-w-xl mx-auto">
        <div className=" p-4 rounded-md shadow-xl bg-gray-700 border border-solid border-white">
          <h2 className="text-slate-300 text-lg mb-2">
            <b>Tele2</b>, Stockholm - Intern, frontend
          </h2>
          <p className="text-sm text-slate-300">
            Main tasks included improving GUI in existing internal applications
            at Tele2 and COMHEM as well as building and unit testing new
            functions and components in a new application for customer support.
          </p>
        </div>
      </div>
      <div className="divider-container flex flex-col items-center">
        <div className="w-1 h-20 bg-gray-400 rounded-full -mt-2"></div>
        <h2 className="text-tommy-text text-2xl">2019-2021</h2>
      </div>

      <div className="grid grid-cols-1 max-w-xl mx-auto mb-10">
        <div className=" p-4 rounded-md shadow-xl bg-gray-700 border border-solid border-white">
          <h2 className="text-slate-300 text-lg mb-2">
            <b>KYH</b>, Stockholm - Frontend development
          </h2>
          <p className="text-sm text-slate-300">
            A two year Polytechnical education that covers Frontend-Development
            with corporate partners like Telenor and TietoEVRY. The education
            deals with the development of digital applications in Javascript,
            React.js and HTML / CSS. In addition the education contains
            version-control, Backend-Programming (PHP, Firebase, Wordpress) and
            UX / UI-design. 20 weeks of internship at a company is also included
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
