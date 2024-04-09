import React from "react";

const banner = () => {
  return (
    <section class="flex banner container">
      <div class="flex info-content">
        <div class="flex-center icon-container">
          <i class="fa-solid fa-award"></i>
        </div>
        <div>
          <span>IT</span>
          <p>Graduation</p>
        </div>
      </div>
      <div class="info-divider"></div>

      <div class="flex info-content">
        <div class="flex-center icon-container">
          <i class="fa-solid fa-award"></i>
        </div>
        <div>
          <span>2+ Projects</span>
          <p>Completed</p>
        </div>
      </div>
      <div class="info-divider"></div>

      <div class="flex info-content">
        <div class="flex-center icon-container">
          <i class="fa-solid fa-award"></i>
        </div>
        <div>
          <span>2+ Year</span>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};

export default banner;
