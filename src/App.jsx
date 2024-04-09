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
      <Navbar />
      <Hero />
      <Banner />
      <Skills />
      <Projects />
      <Aboutme />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
