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
      <div className="education-item">
        <Card
          title="Frontend Developer"
          school="GeeksHub Academy"
          startDate={new Date("2022-09-01")} description={""} company={""}        />
      </div>
      <div className="education-item">
        <Card
          title="FullStack Software Developer"
          school="Academia de Código"
          startDate={new Date("2022-05-09")} description={""} company={""}        />
      </div>
      <div className="education-item">
        <Card
          title="MSc in Applied Biology"
          school="University of Aveiro"
          startDate={new Date("2014-04-01")} description={""} company={""}        />
      </div>
      <div className="education-item">
        <Card
          title="BSc in Biology"
          school="University of Aveiro"
          startDate={new Date("2008-09-01")} description={""} company={""}        />
      </div>
    </div>
  );
};

export default Education;
