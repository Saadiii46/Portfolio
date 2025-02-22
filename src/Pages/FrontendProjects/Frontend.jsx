import React from 'react'
import './Frontend.css'
import Navbar from '../../Components/Navbar/Navbar'
import { FRONTEND_PROJECTS } from '../../utils/data'
import FrontendCard from './FrontendProjectCard/FrontendCard'

function Frontend() {
  return <>
  
  <Navbar />
  <div className='container' >
    <section className='frontend-project-container' >
      <h5 className='heading' >Frontend Projects</h5>
      <div className="frontend-project-content">
        <div className="frontend-projects">
          {FRONTEND_PROJECTS.map((item) => (
            <FrontendCard 
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              technology={item.technology}
              demo={item.demo}
              code={item.code}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
  
  </>
  
}

export default Frontend