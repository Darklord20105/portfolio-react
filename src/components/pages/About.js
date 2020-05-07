import React from "react";
import Bio from "../about/bio";
import Stats from "../about/stats";
import statsData from "../data/statsData";

const About = () => {
  return (
    <div>
      <Bio />
      <Stats statsData={statsData} />
    </div>
  );
};

export default About;
