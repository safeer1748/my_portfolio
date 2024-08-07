import React, { useState } from "react";

const VideoModal = ({ toggleModal, handleToggleModal, workVideo, dark }) => {
  const legalEseImgs = [
    "/assets/legalEse/legalese thumbnail.png",
    "/assets/legalEse/login.png",
    "/assets/legalEse/client Explore page.png",
    "/assets/legalEse/profile preview page.png",
    "/assets/legalEse/lawyer dashboard.png",
    "/assets/legalEse/manageAppoinment page.png",
    "/assets/legalEse/manageCases page.png",
  ];
  const [next, setNext] = useState(1);
  const [activeImg, setActiveImg] = useState(legalEseImgs[0]);
  const handleNextActiveImg = () => {
    if (next < legalEseImgs.length) {
      console.log("next");
      setActiveImg(legalEseImgs[next]);
      setNext(next + 1);
    }
  };
  const handlePrevActiveImg = () => {
    if (next > 1) {
      console.log("prev");
      setActiveImg(legalEseImgs[next - 2]);
      setNext(next - 1);
    }
  };
  return (
    // <!-- Main modal -->
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        toggleModal ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className={`relative p-4 ${workVideo==='legalEse'?'w-full':'w-full md:w-1/2'}`}>
        {/* <!-- Modal content --> */}
        <div className="relative  rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between bg-white p-2 border-b rounded-t dark:border-gray-600">
            <button
              onClick={() => handleToggleModal("")}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          {workVideo === "legalEse" ? (
            <div id="gallery" className="relative w-full" data-carousel="slide">
              {/* <!-- Carousel wrapper --> */}
              <div className="relative h-56 overflow-hidden md:h-96">
                {/* <!-- Item --> */}
                <div className="absolute duration-700 ease-in-out w-full bg-gray-600 h-full ">
                  <img
                    src={activeImg}
                    className="absolute block w-[65%] h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt=""
                  />
                </div>
              </div>
              {/* <!-- Slider controls --> */}
              <button
                onClick={handlePrevActiveImg}
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                onClick={handleNextActiveImg}
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
          {workVideo === "newsbay" ? (
            <video controls>
              <source src="/assets/newsbay/NewsbayVideo.mp4" type="video/mp4" />
            </video>
          ) : (
            ""
          )}
          {workVideo === "calculator" ? (
            <video controls>
              <source src="/assets/calculator/calculatorVideo.mp4" type="video/mp4" />
            </video>
          ) : (
            ""
          )}
          {workVideo === "eduford" ? (
            <video controls>
              <source src="/assets/eduford/edufordVideo.mp4" type="video/mp4" />
            </video>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
