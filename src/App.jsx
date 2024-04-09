import navbar from "./components/navbar";
import hero from "./components/hero";
import banner from "./components/banner";
import skills from "./components/skills";
import projects from "./components/projects";
import aboutme from "./components/aboutme";
import contact from "./components/contact";
import footer from "./components/footer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <navbar />
      <hero />
      <banner />
      <skills />
      <projects />
      <aboutme />
      <contact />
      <footer />
    </>
  );
}

export default App;
