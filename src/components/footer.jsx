import React from "react";

const footer = () => {
  return (
    <div>
      <footer class="flex-center">
        <div class="top flex">
          <div class="links">
            <h3>Links</h3>
            <ul>
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom">
          &copy; Copy right all reserved 2024 || Made by me with 🚀
        </div>
      </footer>
    </div>
  );
};

export default footer;
