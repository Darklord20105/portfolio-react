import React from "react";
import Bio from "../about/bio";
import Services from "../about/services"
import Reviews from "../about/reviews"

const About = () => {
  return (
    <section className="page-section" id="bio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="section-heading text-uppercase">About Me</h2>
              <span className="section-heading-shadow">About Me</span>
            </div>
          </div>
        </div>
        <Bio />
        <Services />
        <Reviews />
      </div>
    </section>

  );
};

export default About;
