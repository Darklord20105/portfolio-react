import React from "react";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#eee" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">
              Copyright &copy; Omar HJ all rights reserved 2019
            </span>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
