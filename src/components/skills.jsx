import React from "react";

const skills = () => {
  return (
    <div>
      <div class="skills" id="skills">
        <h2 class="title">
          <span>Skills</span>
        </h2>
        <div class="container flex skills-container">
          <div>
            <i class="fa-brands fa-html5" style="color: orange"></i>
            <span>HTML</span>
          </div>
          <div>
            <i class="fa-brands fa-css3-alt" style="color: blue"></i>
            <span>CSS</span>
          </div>
          <div>
            <i class="fa-brands fa-js" style="color: yellow"></i>
            <span>Javascript</span>
          </div>
          <div>
            <i class="fa-brands fa-github"></i>
            <span>Github</span>
          </div>
          <div>
            <i class="fa-brands fa-figma" style="color: purple"></i>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
