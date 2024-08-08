import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
const DemoModal = ({ toggleModal, handleToggleModal, workDemo, dark }) => {
  const legalEseImgs = [
    "/assets/legalEse/legalese thumbnail.png",
    "/assets/legalEse/login.png",
    "/assets/legalEse/client Explore page.png",
    "/assets/legalEse/profile preview page.png",
    "/assets/legalEse/lawyer dashboard.png",
    "/assets/legalEse/manageAppoinment page.png",
    "/assets/legalEse/manageCases page.png",
  ];
  const newsbayImgs = [
    "/assets/newsbay/newsbay thumbnail.png",
    "assets/newsbay/newsbay2.png",
    "assets/newsbay/newsbay3.png",
  ];
  const [activeWorkDemoImgs, setActiveWorkDemoImgs] = useState([]);
  const [next, setNext] = useState();
  const [activeImg, setActiveImg] = useState("");
  useEffect(() => {
    if (workDemo === "legalEse") {
      setActiveWorkDemoImgs(legalEseImgs);
      setActiveImg(legalEseImgs[0]);
      setNext(1);
    } else if (workDemo === "newsbay") {
      setActiveWorkDemoImgs(newsbayImgs);
      setActiveImg(newsbayImgs[0]);
      setNext(1);
    }
  }, [workDemo]);
  const handleNextActiveImg = () => {
    if (next < activeWorkDemoImgs.length) {
      setActiveImg(activeWorkDemoImgs[next]);
      setNext(next + 1);
    }
  };
  const handlePrevActiveImg = () => {
    if (next > 1) {
      setActiveImg(activeWorkDemoImgs[next - 2]);
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
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-30 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full md:w-[76%]">
        {/* <!-- Modal content --> */}
        <div className="relative  rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal body --> */}
          <div id="gallery" className="relative w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}

            <div className="relative">
              {/* <!-- close model --> */}
              <button
                onClick={() => handleToggleModal()}
                className="absolute top-1 end-1 text-white bg-black/60 hover:bg-black/80 rounded-full p-1 z-50"
              >
                <IoMdClose size={15} />
              </button>
              {/* <!-- Item --> */}
              <div className="relative duration-700 ease-in-out w-full bg-gray-600 h-auto ">
                <img src={activeImg} alt="" />
              </div>
            </div>

            {/* <!-- Slider controls --> */}
            <button
              onClick={handlePrevActiveImg}
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/60 hover:bg-black/80">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/60 hover:bg-black/80">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
