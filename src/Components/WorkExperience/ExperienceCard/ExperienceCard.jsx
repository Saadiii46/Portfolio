import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ details }) {
  // Check if details or details.responsibilities is undefined
  if (!details || !details.responsibilities) {
    return <div className="work-experience-card">No details provided.</div>;
  }

  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;