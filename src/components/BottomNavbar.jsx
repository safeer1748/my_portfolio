import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiBriefcase } from "react-icons/hi";
import { HiDatabase } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
const BottomNavbar = ({ activeSection, dark }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 z-40 w-full h-20 ${
        dark ? "bg-gray-900" : "bg-white"
      } `}
    >
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <a
          href="#"
          className={`inline-flex flex-col items-center justify-center px-5 group`}
        >
          <HiHome
            className={`w-6 h-6 mb-0.5 ${
              dark
                ? `${
                    activeSection === "#"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "#"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          />
          <span
            className={`text-sm ${
              dark
                ? `${
                    activeSection === "#"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "#"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          >
            Home
          </span>
        </a>
        <a
          href="#education"
          className={`inline-flex flex-col items-center justify-center px-5 group`}
        >
          <HiAcademicCap
            className={`w-6 h-6 mb-0.5   ${
              dark
                ? `${
                    activeSection === "education"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "education"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          />
          <span
            className={`text-sm ${
              dark
                ? `${
                    activeSection === "education"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "education"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          >
            Education
          </span>
        </a>
        <a
          href="#work"
          className={`inline-flex flex-col items-center justify-center px-5 group`}
        >
          <HiBriefcase
            className={`w-6 h-6 mb-0.5  ${
              dark
                ? `${
                    activeSection === "work"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "work"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          />
          <span
            className={`text-sm  ${
              dark
                ? `${
                    activeSection === "work"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "work"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          >
            Work
          </span>
        </a>
        <a
          href="#skills"
          className={`inline-flex flex-col items-center justify-center px-5 group`}
        >
          <HiDatabase
            className={`w-6 h-6 mb-0.5   ${
              dark
                ? `${
                    activeSection === "skills"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "skills"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          />
          <span
            className={`text-sm  ${
              dark
                ? `${
                    activeSection === "skills"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "skills"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          >
            Skills
          </span>
        </a>
        <a
          href="#contact"
          className={`inline-flex flex-col items-center justify-center px-5 group`}
        >
          <HiUserCircle
            className={`w-6 h-6 mb-0.5   ${
              dark
                ? `${
                    activeSection === "contact"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "contact"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  } `
            }`}
          />
          <span
            className={`text-sm  ${
              dark
                ? `${
                    activeSection === "contact"
                      ? "text-cyan-300"
                      : "text-white group-hover:text-cyan-300"
                  }`
                : `${
                    activeSection === "contact"
                      ? "text-black"
                      : "text-gray-600 group-hover:text-black"
                  }`
            }`}
          >
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default BottomNavbar;
