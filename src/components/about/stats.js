import React from "react";

const Stats = ({ statsData }) => {
  return (
    <section className="bg-dark page-section" id="stats">
      <div>
        <div className="container">
          <h2 className="text-center text-uppercase section-heading text-white">
            Technical skills
          </h2>
          <div className="stats" style={{ paddingTop: 2 + "rem" }}>
            {statsData.map(({ name, progStyle, id }, index) => {
              return (
                <div key={id}>
                  <h4 className="Gugi ">{name}</h4>
                  <div className="progress">
                    <div className="stats-count" style={progStyle} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
