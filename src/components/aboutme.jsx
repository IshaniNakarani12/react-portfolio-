import React from "react";

const aboutme = () => {
  return (
    <div>
      <section class="about" id="about">
        <h2 class="title">
          <span>About Me</span>
        </h2>
        <div class="container flex about-conent">
          <div class="flex-center myImg">
            <img src="./assets/Ishani.jpg" alt="Ishani's image" width="100%" />
          </div>
          <div class="my-bio container">
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
              <div class="tag">Interest</div>
              <div class="flex">
                <span>Coding</span>
                <span>Dancing</span>
                <span>Cooking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutme;
