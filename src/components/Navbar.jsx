import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const Navbar = ({ dark, handleDarkMode }) => {
  return (
    <nav
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } fixed w-full z-20 top-0 start-0`}
    >
      <div className="flex flex-wrap items-center justify-between py-4 px-5 sm:px-24">
        <a href="#">
          <span
            className={`${
              dark ? "text-cyan-300" : "text-black"
            } self-center text-2xl font-semibold`}
          >
            Portfolio.
          </span>
        </a>

        <button
          type="button"
          onClick={handleDarkMode}
          className={`${dark ? "text-white" : "text-black"}`}
        >
          {dark ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
