import React from "react";

const hero = () => {
  return (
    <div>
      <section class="hero-section container" id="hero">
        <div class="grid hero">
          <div class="left flex">
            <div>
              Hi I'm <span>Ishani Nakarani</span>
            </div>
            <div class="tag">Full Stack Developer</div>
            <p>I love coding</p>
            <div>
              <a href="./assets/Ishani.jpg" download>
                <button>
                  Download CV <i class="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div class="right flex">
            <img
              src="./assets/Ishani.jpg"
              alt="prem speaking"
              style="height: 500px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
