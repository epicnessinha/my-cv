import React from "react";
import StudyItem from "../../components/StudyItem/StudyItem";
import "../../styles/main.scss";
import "../../styles/studyItem.scss"

interface ExperienceProps {
  darkMode: boolean;
}

const Education: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <div className={`experience-container${darkMode ? " dark-mode" : ""}`}>
      <h2>Academic Education</h2>
      <div className="experience-item">
        <StudyItem
          title="Frontend Developer"
          school="GeeksHub Academy"
          date="2022-09-01"
        />
      </div>
      <div className="experience-item">
        <StudyItem
          title="FullStack Software Developer"
          school="Academia de Código"
          date="2022-09-01"
        />
      </div>
    </div>
  );
};

export default Education;
