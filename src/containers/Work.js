import React, { Component } from "react";
import { Link } from "react-router-dom";
import portfolioLinks from "../components/data/portfoliolinks";
import "./Work.css";

class Work extends Component {
  state = {
    portfolioLinks: portfolioLinks
  };
  render() {
    return (
      <section className="bg-light page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="rowf work-items">
            {this.state.portfolioLinks.length ? (
              this.state.portfolioLinks.map(({ title, caption, id }, index) => (
                <Link to={"/Work/" + id}>
                  <div key={id}>
                    <div className="item">
                      <div className="item-image">
                        <img
                          src={`https://unsplash.it/800/600/?${Math.floor(
                            Math.random(0, 100) * 100
                          )}`}
                          alt="portfolio_img"
                        />
                      </div>
                      <div className="item-text">
                        <div className="item-text-wrap">
                          <p className="item-text-category">{title}</p>
                          <h2 className="item-text-title">{caption}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>loading projects please wait</p>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
