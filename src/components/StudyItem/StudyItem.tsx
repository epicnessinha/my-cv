import React from "react";
import "../../styles/main.scss"
import "../../styles/studyItem.scss"

interface StudyItemProps {
   title: string;
   school: string;
   date: string;
}

const StudyItem: React.FC<StudyItemProps> = ({ title, school, date }) => {
   

   return (
      <div className="study-item">
         <h3>{title}</h3>
         <p>{school}</p>
         <p>{date}</p>
      </div>
   );
};

export default StudyItem;
