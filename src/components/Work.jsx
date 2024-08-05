import React, { useState } from "react";
import VideoModal from "./VideoModal";

const Work = ({ dark }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [workVideo, setWorkVideo]=useState('')
  const handleToggleModal = (work) => {
    setWorkVideo(work)
    setToggleModal(!toggleModal);
  };
  return (
    <>
      <section
        id="work"
        className={`${
          dark ? "bg-gray-900" : "bg-white"
        } w-full pt-32 px-5 sm:px-24 flex flex-col justify-center items-center`}
      >
        <h1
          className={`font-bold text-4xl ${
            dark ? "text-cyan-300" : "text-black"
          }`}
        >
          Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 pt-20 w-full justify-items-center gap-8">
          <div
            className={` max-w-sm rounded-lg ${
              dark ? "bg-gray-900 border-cyan-300" : "bg-white border-gray-400"
            }  border`}
          >
            <img
              className={`rounded-t-lg object-cover shadow-lg`}
              src="/assets/legalese thumbnail.png"
              alt="legalEse thumbnail"
            />
            <div className="p-5">
              <h5
                className={`${
                  dark ? "text-cyan-300" : "text-black"
                } mb-2 text-2xl font-bold tracking-tight`}
              >
                LegalEse
              </h5>
              <p
                className={`${
                  dark ? "text-white" : "text-black"
                } mb-3 font-normal text-sm text-justify`}
              >
                LegalEse is a Management System created using React.js, Tailwind
                CSS and Firebase which helps Lawyers to Manage Cases, Clients,
                Appointments and create Profile. It also helps the client to
                book an appointment with a lawyer.
              </p>
              <a
                href="https://github.com/safeer1748/LegalEse"
                target="_blank"
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg `}
              >
                Github Code
              </a>
              <a
                onClick={()=>handleToggleModal('legalEse')}
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } cursor-pointer inline-flex ml-5 items-center px-3 py-2 text-sm font-medium text-center rounded-lg`}
              >
                Video Demo
              </a>
            </div>
          </div>
          <div
            className={` max-w-sm rounded-lg ${
              dark ? "bg-gray-900 border-cyan-300" : "bg-white border-gray-400"
            }  border`}
          >
            <img
              className={`rounded-t-lg object-cover shadow-lg`}
              src="/assets/newsbay thumbnail.png"
              alt="newsbay thumbnail"
            />
            <div className="p-5">
              <h5
                className={`${
                  dark ? "text-cyan-300" : "text-black"
                } mb-2 text-2xl font-bold tracking-tight`}
              >
                Newsbay
              </h5>
              <p
                className={`${
                  dark ? "text-white" : "text-black"
                } mb-3 font-normal text-sm text-justify`}
              >
                Newsbay is a News app which can fetch the top headlines news of
                different category from News API. It is created by using
                React.js and Tailwind CSS.
              </p>
              <a
                href="https://github.com/safeer1748/Newsbay"
                target="_blank"
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg `}
              >
                Github Code
              </a>
              <a
                onClick={()=>handleToggleModal('newsbay')}
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } cursor-pointer inline-flex ml-5 items-center px-3 py-2 text-sm font-medium text-center rounded-lg`}
              >
                Video Demo
              </a>
            </div>
          </div>
          <div
            className={` max-w-sm rounded-lg ${
              dark ? "bg-gray-900 border-cyan-300" : "bg-white border-gray-400"
            }  border`}
          >
            <img
              className={`rounded-t-lg object-cover shadow-lg`}
              src="/assets/calculator thumbnail.png"
              alt="calculator thumbnail"
            />
            <div className="p-5">
              <h5
                className={`${
                  dark ? "text-cyan-300" : "text-black"
                } mb-2 text-2xl font-bold tracking-tight`}
              >
                Calculator
              </h5>
              <p
                className={`${
                  dark ? "text-white" : "text-black"
                } mb-3 font-normal text-sm text-justify`}
              >
                It is calculator created with the help of React.js and
                Tailwind.css. It perform basic math operation with the help of
                Mathjs library. I also added some checks for better experience.
              </p>
              <a
               href="https://github.com/safeer1748/calculator"
                target="_blank"
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg `}
              >
                Github Code
              </a>
              <a
                onClick={()=>handleToggleModal('calculator')}
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } cursor-pointer inline-flex ml-5 items-center px-3 py-2 text-sm font-medium text-center rounded-lg`}
              >
                Video Demo
              </a>
            </div>
          </div>
          <div
            className={` max-w-sm rounded-lg ${
              dark ? "bg-gray-900 border-cyan-300" : "bg-white border-gray-400"
            }  border`}
          >
            <img
              className={`rounded-t-lg object-cover shadow-lg`}
              src="/assets/eduford thumbnail.png"
              alt="eduford thumbnail"
            />
            <div className="p-5">
              <h5
                className={`${
                  dark ? "text-cyan-300" : "text-black"
                } mb-2 text-2xl font-bold tracking-tight`}
              >
                Eduford
              </h5>
              <p
                className={`${
                  dark ? "text-white" : "text-black"
                } mb-3 font-normal text-sm text-justify`}
              >
                A Landing Page of the university created with the help of
                React.js and Tailwind CSS. Also use Framer-Motion for the
                animation
              </p>
              <a
                href="https://github.com/safeer1748/eduford-university-website"
                target="_blank"
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg `}
              >
                Github Code
              </a>
              <a
                onClick={()=>handleToggleModal('eduford')}
                className={`${
                  dark
                    ? "text-black bg-cyan-300 hover:bg-white"
                    : "text-white bg-black hover:bg-gray-600"
                } cursor-pointer inline-flex ml-5 items-center px-3 py-2 text-sm font-medium text-center rounded-lg`}
              >
                Video Demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        toggleModal={toggleModal}
        handleToggleModal={handleToggleModal}
        workVideo={workVideo}
        dark={dark}
      />
    </>
  );
};

export default Work;
