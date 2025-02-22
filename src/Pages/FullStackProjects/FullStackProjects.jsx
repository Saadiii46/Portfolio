import React from 'react'
import './FullStackProjects.css'
import { FULLSTACK_PROJECTS } from '../../utils/data'
import Navbar from '../../Components/Navbar/Navbar'
import FullStackProjectCard from './FullStackProjectCard/FullStackProjectCard'

function FullStackProjects() {
  return <>
    <Navbar/>
    <div className='container' >
        <div className="fullstack-project-container">
            <h5 className='heading' >Full Stack Projects</h5>
            <div className="fullstack-project-content">
                <div className="fullstack-projects">
                    {FULLSTACK_PROJECTS.map((item) => (
                        <FullStackProjectCard 
                            key={item.title}
                            video={item.image}
                            title={item.title}
                            description={item.description}
                            technology={item.technology}
                            demo={item.demo}
                            code={item.code}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
}

export default FullStackProjects