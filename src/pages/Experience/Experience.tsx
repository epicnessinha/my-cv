import React from "react";
import JobItem from "../../components/JobItem/JobItem";
import "../../styles/main.scss";

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <div className={`experience-container${darkMode ? " dark-mode" : ""}`}>
      <h2>Experience</h2>
      <div className="experience-item">
        <JobItem
          title="Software Engineer"
          company="Company A"
          description="I was responsible for x and y"
          startDate={new Date("2018-07-01")}
        />
      </div>
      <div className="experience-item">
        <JobItem
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
