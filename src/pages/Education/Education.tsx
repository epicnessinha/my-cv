import React from "react";

import "../../styles/main.scss";
import "../../components/Card/card.scss"
import "../../pages/Education/education.scss"
import Card from "../../components/Card/Card";

interface ExperienceProps {
  darkMode: boolean;
}

const Education: React.FC<ExperienceProps> = ({ darkMode }) => {
  
  return (
    <div className={`education-container${darkMode ? " dark-mode" : ""}`}>
      <h2>Academic Education</h2>
      <div className={`education-item${darkMode ? " dark-mode" : ""}`}>
        <Card
          title="Frontend Developer"
          school="GeeksHub Academy"
          startDate={new Date("2022-09-01")} description={""} company={""} darkMode={false}        />
      </div>
      <div className={`education-item${darkMode ? " dark-mode" : ""}`}>
        <Card
          title="FullStack Software Developer"
          school="Academia de Código"
          startDate={new Date("2022-05-09")} description={""} company={""} darkMode={false}        />
      </div>
      <div className={`education-item${darkMode ? " dark-mode" : ""}`}>
        <Card
          title="MSc in Applied Biology"
          school="University of Aveiro"
          startDate={new Date("2014-04-01")} description={""} company={""} darkMode={false}        />
      </div>
      <div className={`education-item${darkMode ? " dark-mode" : ""}`}>
        <Card
          title="BSc in Biology"
          school="University of Aveiro"
          startDate={new Date("2008-09-01")} description={""} company={""} darkMode={false}        />
      </div>
    </div>
  );
};

export default Education;
