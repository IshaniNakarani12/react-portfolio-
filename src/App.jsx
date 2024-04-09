import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Aboutme } from "./components/Aboutme";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <label for="darkMode" className="dark-mode-togggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="banner" element={<Banner />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
