import React from "react";
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: "700" // Denser the smaller the number.
      }
    },
    color: { // The color for every node, not the connecting lines.
      value: "rgba(250,250,250,.05)" // Or use an array of colors like [#9b0000, #001378, #0b521f]
    },
    shape: {
      type: "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      stroke: { // The border
        width: "1",
        color: "rgba(f,f,f,.05)"
      },
      polygon: { // if the shape is a polygon
        nb_sides: 5
      },
    },
    opacity: {
      value: "0.3",
      random: true
    },
    size: {
      value: "10",
      random: true
    },
    line_linked: {
      enable: false,
      distance: "200", // The radius before a line is added, the lower the number the more lines.
      color: "#007ecc",
      opacity: 0.5,
      width: 2
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top", // Move them off the canvas, either none, top, right, bottom, left, top-right, bottom-right et cetera...
      random: true,
      straight: false, // Whether they'll shift left and right while moving.
      out_mode: "out", // What it'll do when it reaches the end of the canvas, either out or bounce.
      bounce: false,
      attract: { // Make them start to clump together while moving.
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
}

const Showcase = () => {
  return (
    <header className="masthead" style={{ background: "#10121b" }} id="page-top">
      <div className="masthead-background">
        <Particles
          className='particles'
          params={particleOptions}
        />
      </div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-12 intro-text">
            <div style={{ padding: "50px 0" }}>
              <h1 className="intro-heading text-uppercase">Hi, I am <span className="primary-color">Omar HJ</span></h1>
              <p className="intro-lead-in">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Showcase;
