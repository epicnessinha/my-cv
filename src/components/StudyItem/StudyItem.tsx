import React, { useState, useEffect } from "react";
import "../../styles/main.scss"
import "../../styles/studyItem.scss"

interface StudyItemProps {
   title: string;
   school: string;
   course: string;
   startDate: Date;
}

const StudyItem: React.FC<StudyItemProps> = ({ title, school, course, startDate }) => {
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
      <div className="study-item">
         <h3>{title}</h3>
         <p>School: {school}</p>
         <p>Started: {elapsedTime}</p>
         <p>Course: {course} </p>
      </div>
   );
};

export default StudyItem;
