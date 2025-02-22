import React from 'react'
import './FrontendCard.css'

function FrontendCard({image, title, description, technology, demo, code}) {
  return (
    <div className='frontend-projects-card' >
        <div className="frontend-project-img">
            <img src={image} alt={title} />
        </div>
        <span className='title' >{title}</span>
        <span>{description}</span>
        <span>{technology}</span>
        <span>{demo}</span>
        <span><a href={code}>Source Code</a></span>
    </div>
  )
}

export default FrontendCard