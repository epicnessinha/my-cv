import React from "react";
import JobItem from "../../components/JobItem/JobItem";
import "../../styles/main.scss";
import "../../styles/experience.scss"

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <div className={`experience-container${darkMode ? " dark-mode" : ""}`}>
      <h2>Work Experience</h2>
      <div className="experience-item">
        <JobItem
          title="Frontend Developer"
          company="XING"
          description="I was responsible for x and y"
          startDate={new Date("2022-09-01")}
        />
      </div>
      <div className="experience-item">
        <JobItem
          title="Frontend Intern"
          company="NEW WORK SE"
          description="I was responsible for x and y"
          startDate={new Date("2022-09-01")}
        />
      </div>
    </div>
  );
};

export default Experience;
