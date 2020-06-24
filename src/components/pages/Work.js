import React, { Component } from "react";
import portfolioLinks from "../data/portfoliolinks";

const ProjectItem = (data) => {
  return (
    <div key={data.id}>
      <div className="item">
        <div className="item-image">
          <img
            // src={`https://unsplash.it/800/600/?${Math.floor(
            //   Math.random(0, 100) * 100
            // )}`}
            src={`./project/${data.img}.png`}
            alt="portfolio_img"
            height="100%"
          />
        </div>
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category">{data.title}</p>
            <h2 className="item-text-title">{data.caption}</h2>
            <a className="btn btn-info item-text-link d-block mt-2 mx-auto w-50" rel="noopener noreferrer" target="_blank" href={data.link}>Visit</a>
            <a className="btn btn-info item-text-link d-block mt-2 mx-auto w-50" rel="noopener noreferrer" target="_blank" href={data.github}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

class Work extends Component {
  state = {
    portfolioLinks: portfolioLinks
  };
  render() {
    return (
      <section className="page-section page-section-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <span className="section-heading-shadow">Portfolio</span>
              </div>
            </div>
          </div>
          <div className="rowf work-items">
            {this.state.portfolioLinks.length ? (
              this.state.portfolioLinks.map(({ title, caption, id, link, github, img }, index) => (
                <ProjectItem
                  key={id}
                  id={id}
                  title={title}
                  caption={caption}
                  link={link}
                  github={github}
                  img={img}
                />
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
