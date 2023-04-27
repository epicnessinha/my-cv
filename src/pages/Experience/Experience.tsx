import React from "react";
import ExperienceItem from "../../components/JobItem/JobItem";
import "../../styles/main.scss";

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience-item">
        <ExperienceItem
          title="Software Engineer"
          company="Company A"
          description="I was responsible for x and y"
          startDate={new Date("2018-07-01")}
        />
      </div>
      <div className="experience-item">
        <ExperienceItem
          title="Web Developer"
          company="Company B"
          description="I was responsible for x and y"
          startDate={new Date("2016-03-01")}
        />
      </div>
    </div>
  );
};

export default Experience;
