import React, { useState, useEffect } from "react";
import "../../styles/main.scss";
import "./card.scss";

interface ExperienceItemProps {
  title: string;
  company: string;
  description: string;
  startDate: Date;
  school: string;
}

const Card: React.FC<ExperienceItemProps> = ({
  title,
  company,
  description,
  startDate,
  school,
}) => {
  const [elapsedTime, setElapsedTime] = useState("");
  const [expanded, setExpanded] = useState(false);

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-item">
      <div className="job-item-header" onClick={handleExpandClick}>
        <h3>
          {title}{" "}
          {expanded ? (
            <span className="job-item-symbol">⬆️</span>
          ) : (
            <span className="job-item-symbol">⬇️</span>
          )}
        </h3>
        <p>{company}</p>
        <p>⌛ {elapsedTime}.</p>
      </div>
      {expanded && (
        <div className="job-item-details">
          <p>{school}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
