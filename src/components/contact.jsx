import React from "react";

export const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <h2 className="title">
          <span>Contact</span>
        </h2>

        <div className="flex social">
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-mobile"></i>
          </a>
        </div>
        <h3>OR</h3>

        <div className="flex-center">
          <a href="" className="email-section flex-center">
            <span>ishani@gmail.com</span>
            <div className="email-icon flex-center">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
