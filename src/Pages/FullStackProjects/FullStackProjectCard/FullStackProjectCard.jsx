import React from 'react'
import './FullStackProjectCard.css'

function FullStackProjectCard({image, title, description, technology, demo, code}) {
  return (
    <div className='fullstack-project-card' >
        <div className="fullstack-project-video">
            <img src={image} alt={title} />
        </div>
        <span>{title}</span>
        <span><h4>Description</h4>{description}</span>
        <span><h4>Technology</h4>{technology}</span>
        <span>{demo}</span>
        <span><a href={code}>Source Code</a></span>
    </div>
  )
}

export default FullStackProjectCard