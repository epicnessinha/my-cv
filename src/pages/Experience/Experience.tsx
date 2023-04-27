import React from "react";
import ExperienceItem from "../../components/JobItem/JobItem"
import "../../styles/main.scss"

const Experience: React.FC = () => {
   return (
      <div>
         <h2>Experience</h2>
         <ExperienceItem
            title="Software Engineer"
            company="Company A"
            startDate={new Date("2018-07-01")}
         />
         <ExperienceItem
            title="Web Developer"
            company="Company B"
            startDate={new Date("2016-03-01")}
         />
      </div>
   );
};

export default Experience;
