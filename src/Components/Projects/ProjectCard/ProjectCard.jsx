import React from 'react';
import './ProjectCard.css';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ image, title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === 'Frontend Projects') {
      navigate('/frontend');
    } else if (title === 'Full Stack Projects') {
      navigate('/full-stack');
    }
  };

  return (
    <div className='project-card' onClick={handleClick}>
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
}

export default ProjectCard;