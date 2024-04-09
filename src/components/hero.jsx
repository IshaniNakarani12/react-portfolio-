import React from "react";
import Ishani from "../assets/Ishani.jpg";

export const Hero = () => {
  return (
    <div>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I'm <span>Ishani Nakarani</span>
            </div>
            <div className="tag">Full Stack Developer</div>
            <p>I love coding</p>
            <div>
              <a href="./assets/Ishani.jpg" download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={Ishani} alt="" width="80%" />
          </div>
        </div>
      </section>
    </div>
  );
};
