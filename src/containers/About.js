import React from "react";
import Bio from "../components/about/bio";
import Stats from "../components/about/stats";
import statsData from "../components/data/statsData";

const About = () => {
  return (
    <div>
      <Bio />
      <Stats statsData={statsData} />
    </div>
  );
};

export default About;
