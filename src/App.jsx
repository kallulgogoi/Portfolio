import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Project";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <About />
      <Skills />
      <Projects/>
      <HeroSection></HeroSection>
      <Education />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
