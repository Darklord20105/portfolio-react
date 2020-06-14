import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="section-heading text-uppercase">Services</h2>
              <span className="section-heading-shadow">Services</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card">
              <span className="fa-stack fa-4x">
                <i class="fas fa-palette primary-color"></i>
              </span>
              <h5>Web Design</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo
            </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <span className="fa-stack fa-4x">
                <i class="fas fa-code primary-color"></i>
              </span>
              <h5>Web Development</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo
            </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <span className="fa-stack fa-4x">
                <i class="fas fa-mobile-alt primary-color"></i>
              </span>
              <h5>Mobile Applications</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo
            </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
