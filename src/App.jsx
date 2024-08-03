import React, { useState } from "react";
import BottomNavbar from "./components/BottomNavbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  const[dark,setDark]=useState(true)
  const [activeSection, setactiveSection] = useState("#");
  window.addEventListener('scroll', () => {
    const activeElement = document.querySelectorAll("section");
    activeElement.forEach(element => {
      if (window.scrollY >= element.offsetTop) {
        setactiveSection(element.id);
      }
    });
  });

  const handleDarkMode=()=>{
    setDark(!dark)
  }
  return (
    <div className={`${dark?'bg-gray-900':'bg-white'}`}>
      <Navbar dark={dark} handleDarkMode={handleDarkMode}/>
      <Home dark={dark} />
      <Education dark={dark} />
      <Work dark={dark} />
      <Skills dark={dark} />
      <Contact dark={dark}/>
      <BottomNavbar dark={dark} activeSection={activeSection} />
    </div>
  );
};

export default App;
