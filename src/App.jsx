import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Project";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div class="relative flex justify-center items-center">
        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-cyan-500"></div>
        <img
          src="https://res.cloudinary.com/dgechlqls/image/upload/v1756909415/vnh2pjmasv0frraubr5d.png"
          class="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <HeroSection />
          <Education />
          <Experience />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
