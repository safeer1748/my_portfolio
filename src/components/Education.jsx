import React from "react";

const Education = ({dark}) => {
  return (
    <section id="education" className={`${dark?'bg-gray-900':'bg-white'} flex flex-col pt-32 w-full items-center justify-center px-5 sm:px-24`}>
      <h1  className={`font-bold text-4xl ${dark?'text-cyan-300':'text-black'}`}>Education</h1>
        <div className="grid grid-cols-5 justify-items-center w-full lg:w-[58%] pt-20">
          <div className="flex flex-col justify-between gap-y-20 lg:gap-y-0 col-span-2">
            <div>
              <h1 className={`font-bold text-lg ${dark?'text-cyan-300':'text-black'}`}>BS Software Engineering</h1>
              <h3 className={`font-medium ${dark?'text-white':'text-gray-600'}`}>
                Internation Islamic University, Islamabad
              </h3>
              <div className={`flex flex-col md:flex-row justify-between mt-1 ${dark?'text-white':'text-gray-600'}`}>
                <h5 className="text-xs font-medium">
                  09/2020 - Present
                </h5>
                <h5 className="text-xs font-medium">
                  3.44/4.00 CGA
                </h5>
              </div>
            </div>
            <div>
              <h1 className={`font-bold text-lg ${dark?'text-cyan-300':'text-black'}`}>Matriculation</h1>
              <h3 className={`font-medium ${dark?'text-white':'text-gray-600'}`}>
                F.G Public School No.3, Wah cantt
              </h3>
              <div className={`flex flex-col md:flex-row justify-between mt-1 ${dark?'text-white':'text-gray-600'}`}>
                <h5 className="text-xs font-medium">
                  07/2014 - 04/2018
                </h5>
                <h5 className="text-xs font-medium">
                  898/1100, 81%
                </h5>
              </div>
            </div>
          </div>
          <div className={` ${dark?'bg-cyan-300 ':'bg-gray-700 '} relative min-h-80 w-1 flex justify-center`}>
            <div className={`${dark?'bg-cyan-300 ':'bg-gray-700 '} absolute top-0 h-3.5 w-3.5 rounded-full`}></div>
            <div className={`${dark?'bg-cyan-300 ':'bg-gray-700 '} absolute top-[50%] bottom-[50%] h-3.5 w-3.5 rounded-full`}></div>
            <div className={`${dark?'bg-cyan-300 ':'bg-gray-700 '} absolute bottom-0 h-3.5 w-3.5 rounded-full`}></div>
          </div>
          <div className="flex flex-col justify-center col-span-2">
          <div>
              <h1 className={`font-bold text-lg ${dark?'text-cyan-300':'text-black'}`}>Intermediate</h1>
              <h3 className={`font-medium ${dark?'text-white':'text-gray-600'}`}>
                F.G Degree Collage, Wah cantt
              </h3>
              <div className={`flex flex-col md:flex-row justify-between mt-1 ${dark?'text-white':'text-gray-600'}`}>
                <h5 className="text-xs font-medium">
                  07/2018 - 05/2020
                </h5>
                <h5 className="text-xs font-medium">
                  895/1100, 81%
                </h5>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Education;
