import React from "react";

const Skills = () => {
  return (
    <div className="p-auto bg-gray-400">
      <div className="m-auto h-fit mt-2 w-fit">
        <h2 className="text-4xl text-tommy-text">SKILLS</h2>
      </div>
      <div className="flex justify-between mb-10 w-80 m-auto mt-20 md:w-96 md:m-auto md:mb-10 md:mt-10">
        <div>
          <h3 className="text-2xl text-tommy-text">CODE</h3>
          <p className="text-xl">HTML5</p>
          <p className="text-xl">CSS3</p>
          <p className="text-xl">JavaScript ES6</p>
          <p className="text-xl">React</p>
          <p className="text-xl">Redux</p>
          <p className="text-xl">Tailwind CSS</p>
        </div>
        <div>
          <h3 className="text-2xl text-tommy-text">TOOLBOX</h3>
          <p className="text-xl">Figma</p>
          <p className="text-xl">Slack</p>
          <p className="text-xl">Github</p>
          <p className="text-xl">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
