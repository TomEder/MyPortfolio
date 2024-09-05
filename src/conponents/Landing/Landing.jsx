import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Landing.css"; // Import custom CSS if needed

const Landing = () => {
  return (
    <div className="bg-tommy-background min-h-screen flex flex-col items-center justify-center text-center p-5 md:p-10">
  <div className="flex-grow flex flex-col items-center justify-center mt-10 md:mt-20">
    <motion.h1
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      className="text-3xl md:text-5xl font-light mb-2 overflow-hidden"
    >
      Hey! I'm <span className="font-bold text-blue-600">Tom Ederstål</span>
    </motion.h1>
    <motion.h2 className="text-xl md:text-2xl font-light text-gray-700 mb-4 md:mb-6">
      Freelance Web Developer
    </motion.h2>
    <p className="text-sm md:text-lg text-gray-700 mb-2">
      I can build user interfaces for websites and applications with React
      JS and Angular. I love frontend development.
    </p>
    <p className="text-sm md:text-lg text-gray-700 mb-6">
      I can also build APIs with .NET and C#.
    </p>
    <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 1,
            bounce: 0.3,
            delay: 2.5,
            duration: 2,
          }}
          className="flex space-x-4 mb-6 md:mb-10 bg-slate-500 rounded-3xl px-2 md:px-3"
        >
          <a
            href="https://github.com"
            className="text-white text-xl md:text-2xl hover:bg-button-hover p-2 md:p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://instagram.com"
            className="text-white text-xl md:text-2xl hover:bg-button-hover p-2 md:p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-white text-xl md:text-2xl hover:bg-button-hover p-2 md:p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com"
            className="text-white text-xl md:text-2xl hover:bg-button-hover p-2 md:p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </motion.div>
  </div>
</div>
  );
};

export default Landing;
