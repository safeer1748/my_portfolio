import React from "react";

const Skills = ({dark}) => {
  return (
    <section
      id="skills"
      className={`${dark?'yellow':'bg-white'} flex flex-col pt-32 w-full items-center justify-center px-5 sm:px-24`}
    >
      <h1 className={`${dark?'text-cyan-300':'text-black'} font-bold text-4xl`}>Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 pt-20 w-full justify-items-center gap-8">
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>React.js</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Tailwind CSS</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Bootstrap</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Html</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>CSS</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Javascript</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>API Integration</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>C++</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Firebase</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Git</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Figma</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-3  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-md lg:text-lg`}>Photoshop</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-4 h-4`}>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
