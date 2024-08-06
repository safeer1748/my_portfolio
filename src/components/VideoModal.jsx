import React from "react";

const VideoModal = ({ toggleModal, handleToggleModal, workVideo, dark }) => {
  return (
    // <!-- Main modal -->
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        toggleModal ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-2 border-b rounded-t dark:border-gray-600">
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
            <video
            controls
          > <source src="/assets/legalEseVideo.mp4" type="video/mp4" /></video>
          ) : (
            ""
          )}
          {workVideo === "newsbay" ? (
            <video
              controls
            ><source src="/assets/NewsbayVideo.mp4" type="video/mp4" /></video>
          ) : (
            ""
          )}
          {workVideo === "calculator" ? (
            <video
              controls 
            > <source src="/assets/calculatorVideo.mp4"  type="video/mp4" /></video>
          ) : (
            ""
          )}
          {workVideo === "eduford" ? (
            <video
              controls
             
            ><source  src="/assets/edufordVideo.mp4" type="video/mp4" /></video>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
