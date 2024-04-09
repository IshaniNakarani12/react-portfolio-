import React from "react";

const contact = () => {
  return (
    <div>
      <section class="contact" id="contact">
        <h2 class="title">
          <span>Contact</span>
        </h2>

        <div class="flex social">
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="">
            <i class="fa-solid fa-mobile"></i>
          </a>
        </div>
        <h3>OR</h3>

        <div class="flex-center">
          <a href="" class="email-section flex-center">
            <span>ishani@gmail.com</span>
            <div class="email-icon flex-center">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default contact;
