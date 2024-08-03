import React from "react";

const Skills = ({dark}) => {
  return (
    <section
      id="skills"
      className={`${dark?'yellow':'bg-white'} flex flex-col pt-32 w-full items-center justify-center px-5 sm:px-24`}
    >
      <h1 className={`${dark?'text-cyan-300':'text-black'} font-bold text-4xl`}>Skills</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pt-20 w-full justify-items-center gap-y-8">
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>React.js</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Tailwind CSS</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Bootstrap</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Html</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>CSS</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Javascript</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>API Integration</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>C++</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Firebase</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Github</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Figma</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'border-cyan-300':'border-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
        <div className={`max-w-sm bg-none rounded-lg flex items-center w-full justify-between p-4  border ${dark?'border-cyan-300':'border-gray-400'}`}>
            <h3 className={`${dark?'text-white':'text-gray-600'} font-medium text-xl`}>Photoshop</h3>
            <div className="flex items-center justify-center gap-x-3">
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} border rounded-full w-5 h-5`}>
              </div>
              <div className={`${dark?'bg-cyan-300':'bg-black'} border rounded-full w-5 h-5`}>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
