import React, { useState, useEffect } from "react";
import "../../styles/main.scss"
import "../../components/JobItem/jobItem.scss"
//importar studyitem

interface ExperienceItemProps {
   title: string;
   school: string;
   description: string;
   startDate: Date;
}

const StudyItem: React.FC<ExperienceItemProps> = ({ title, school,description, startDate }) => {
   const [elapsedTime, setElapsedTime] = useState("");

   useEffect(() => {
      const updateElapsedTime = () => {
         const now = new Date();
         const diff = now.getTime() - startDate.getTime();

         const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
         const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

         if (years < 1) {
            setElapsedTime(`${months} months, ${hours} hours, and ${minutes} minutes ago`);
         } else {
            setElapsedTime(`${years} years, ${hours} hours, and ${minutes} minutes ago`);
         }
      };

      updateElapsedTime();
      const interval = setInterval(updateElapsedTime, 60 * 1000);

      return () => {
         clearInterval(interval);
      };
   }, [startDate]);

   return (
      <div className="job-item">
         <h3>{title}</h3>
         <p>{school}</p>
         <p>{elapsedTime}</p>
         <p>{description} </p>
      </div>
   );
};



export default StudyItem;
