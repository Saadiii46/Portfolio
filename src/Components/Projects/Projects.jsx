import React from 'react'
import './Projects.css'
import { PROJECTS } from '../../utils/data'
import ProjectCard from './ProjectCard/ProjectCard'

function Projects() {
  return (
    <section id='projects' className='project-continer' >
        <h5 className='heading' >Projects</h5>
        <div className="project-content">
            <div className="projects">
                {PROJECTS.map((item) => (

                    <ProjectCard 
                    
                    key={item.title}
                    image={item.image}
                    title={item.title}
                    
                    />

                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects