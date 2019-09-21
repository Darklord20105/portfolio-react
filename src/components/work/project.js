import React, { Component } from "react";
import portfolioLinks from "../data/portfoliolinks";

class Project extends Component {
  state = {
    project: portfolioLinks
  };
  renderSinglePost = ({ title, caption, tech }) => {
    return (
      <div>
        <h2>{title}</h2>
        <span>{caption}</span>
        <p>{tech}</p>
      </div>
    );
  };
  render() {
    const { project } = this.state;
    const {
      match: {
        params: { project_id }
      }
    } = this.props;
    console.log(project_id);
    let selectedPost = false;
    if (project_id > 0) {
      selectedPost = project.filter(note => note.id === Number(project_id))[0];
    }

    return (
      <div>{selectedPost ? this.renderSinglePost(selectedPost) : null}</div>
    );
  }
}

export default Project;
