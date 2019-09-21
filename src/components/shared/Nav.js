import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    // cahnge nav from fixed to stable with the class 'fixed-top'
    <nav className="navbar navbar-expand-lg " id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger " href="#page-top">
          OH WEB DEV
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu_
          <i className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link className="nav-link Gugi js-scroll-trigger " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Gugi js-scroll-trigger " to="/Work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link Gugi js-scroll-trigger " to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link Gugi js-scroll-trigger " to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
