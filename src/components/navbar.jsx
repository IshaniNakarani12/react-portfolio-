import React from "react";

const navbar = () => {
  return (
    <div>
      <header>
        <div class="header container flex">
          <div class="logo flex">
            <div>Ishani</div>
            <div class="line">Full Stack Developer</div>
          </div>
          <label for="hamburgerMenu">
            <i class="fa-solid fa-bars"></i>
          </label>

          <input type="checkbox" id="hamburgerMenu" />
          <div class="menu">
            <ul class="flex navigation">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default navbar;
