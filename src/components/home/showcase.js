import React from "react";

const Showcase = () => {
  return (
    <header className="masthead" id="page-top">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Welcome To My Portfolio!</div>
          <div className="intro-heading text-uppercase">I am Omar</div>
          <div className="intro-heading text-uppercase"> A Front-end</div>
          <div className="intro-heading text-uppercase"> web developer</div>
          <a
            className="btn btn-lg text-white btn-warning text-uppercase"
            href="#services"
            style={{ backgroundColor: "#fed136" }}
          >
            Tell Me More &rarr;
          </a>
        </div>
      </div>
    </header>
  );
};

export default Showcase;
