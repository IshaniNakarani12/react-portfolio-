import React from "react";
import Ishani from "../assets/Ishani.jpg";

export const Aboutme = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="container flex about-conent">
        <div className="flex-center myImg">
          <img src={Ishani} alt="Ishani's image" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Ishani Nakarani</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            voluptas tempore eveniet exercitationem voluptatibus consequuntur
            magni ducimus quis deserunt maxime, voluptatum natus quaerat est
            molestiae? Earum, sunt pariatur? Voluptatem, assumenda!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur nisi accusamus dignissimos voluptatum nam harum hic
            assumenda ad nesciunt, inventore impedit et culpa maxime natus
            placeat quidem quisquam corrupti sunt.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Dancing</span>
              <span>Cooking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
