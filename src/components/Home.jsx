import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Home = ({ dark }) => {
  return (
    <section
      id="#"
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } w-full lg:h-screen pt-32 lg:py-0 gap-y-4 lg:gap-y-0 lg:gap-x-24 flex flex-col lg:flex-row justify-center items-center px-5 sm:px-24`}
    >
      <img
        className={`w-48 h-48 md:w-52 md:h-52 rounded-full object-cover border-8 ${
          dark ? "border-cyan-300" : "border-gray-600"
        }`}
        src="/assets/mypic.jpg"
        alt="my pic"
      />
      <div className="flex flex-col justify-center items-center gap-y-0.5 lg:gap-y-0 lg:items-start">
        <h4
          className={`font-bold text-xl ${dark ? "text-white" : "text-black"}`}
        >
          Hello, I'm
        </h4>
        <h1
          className={`font-bold text-3xl sm:text-4xl ${
            dark ? "text-cyan-300" : "text-black"
          }`}
        >
          Safeer Muhammad
        </h1>
        <h2
          className={`font-bold text-xl ${
            dark ? "text-cyan-300" : "text-gray-600"
          }`}
        >
          Frontend React Developer
        </h2>
        <p
          className={`text-sm ${
            dark ? "text-white" : "text-gray-600"
          } text-justify`}
        >
          I'm a freshly graduated software engineer with expertise in frontend
          web development specializing in React.js, Tailwind CSS, and Bootstrap,
          along with a strong foundation in HTML, CSS, and JavaScript. I also
          have experience in Photoshop and provide graphic designing services as
          a freelancer on Fiverr. I am seeking a full-time job or internship to
          enhance my web development skills.
        </p>
        <div className="flex items-center gap-x-4 pt-5">
          <a href="\assets\My Resume.pdf" download="Resume">
          <button
            className={`rounded-full px-5 py-2 border font-semibold  text-center ${
              dark
                ? "border-white text-white hover:border-cyan-300 hover:bg-cyan-300 hover:text-black"
                : "border-gray-600 hover:border-black hover:bg-black hover:text-white"
            }`}
          >
            Download CV
          </button>
          </a>
          <a href="#contact">
            <button
              className={`rounded-full px-5 py-2 border font-semibold  text-center ${
                dark
                  ? "border-white text-white hover:border-cyan-300 hover:bg-cyan-300 hover:text-black"
                  : "border-gray-600 hover:border-black hover:bg-black hover:text-white"
              }`}
            >
              Contact me
            </button>
          </a>
        </div>
        <div
          className={`${
            dark ? "text-cyan-300" : "text-black"
          } flex items-center gap-x-3 px-4 pt-4`}
        >
          <a href="https://www.linkedin.com/in/safeer-muhammad-ba302427a/" target="_blank">
            <button>
              <FaLinkedin size={22} />
            </button>
          </a>
          <a href="https://github.com/safeer1748" target="_blank">
            <button>
              <FaGithub size={22} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
