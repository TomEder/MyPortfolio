import React from "react";

import TailwindImg from "./Images/Tailwind.png";
import HTMLImg from "./Images/HTMLImg.png";
import CSSImg from "./Images/PngItem.png";
import JSImg from "./Images/JSImg.png";

const Container = () => {
  return (
    <>
      <div className="m-52">
        <h1 className="text-8xl text-center text-orange-200 mt-8">
          Tom Ederstål
        </h1>
        <p className="text-4xl text-center text-orange-200 mt-8">
          {"<Frontend Developer/>"}
        </p>
        <div className="grid grid-cols-2 my-7">
          <div className="rounded-xl mx-5 bg-slate-600">
            <h2 className="text-xl ml-4 mt-3 ">Contact för fan</h2>
            <p className="ml-4">
              for any inquiries please{" "}
              <a className="underline" href="mailto: tomederstal@gmail.com">
                E-mail
              </a>{" "}
              me
            </p>
            <h2 className="text-xl ml-4 mt-10 mb-3">My socials</h2>
            <ul className="space-y-3 my-3">
              <li className="ml-4">LinkedIn</li>
              <li className="ml-4">Github</li>
            </ul>
          </div>
          <div className="rounded-xl mx-5 bg-slate-600">
            <h2 className="text-xl ml-4 my-3">I live in stockholm, Sweden</h2>
            <p className="ml-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              placeat error illo harum odio similique, blanditiis at adipisci
              quibusdam corporis nihil repellat earum id perferendis dicta odit
              maiores consequatur facere?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 my-7">
          <div className="rounded-xl mx-5 bg-slate-600">
            <h1 className="text-xl ml-4 my-3">något</h1>
          </div>
          <div className="rounded-xl mx-5 bg-slate-600">
            <div>
              <h1 className="text-xl ml-4 my-3">Tech stack</h1>
            </div>
            <div className="grid grid-rows-3 grid-flow-col gap-2">
              <img className="h-20 w-25" src={HTMLImg} alt="" />
              <img className="h-20 w-25 ml-3" src={CSSImg} alt="" />
              <img className="h-20 w-25 ml-3" src={JSImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
              <img className="h-20 w-25" src={TailwindImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
