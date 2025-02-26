import React, { useRef } from 'react'
import './WorkExperience.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { WORK_EXPERIENCE } from '../../utils/data'
import Slider from 'react-slick';

function WorkExperience() {

  const slideRef = useRef();

  const settings = {
    date: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  }
  const slideLeft = () => {
    slideRef.current.slickPrev();
  }

  return (
    <section id='work' className='experience-container' >
      <h5 className='' >Work Experience</h5>

      <div className="experience-content ">

        <div className="arrow-right" onClick={slideRight} >
          <span class="material-symbols-outlined" >chevron_right</span>
        </div>

        <div className="arrow-left" onClick={slideLeft} >
          <span class="material-symbols-outlined" >chevron_left</span>
        </div>

        <Slider ref={slideRef} {...settings} >
        {WORK_EXPERIENCE.map((item) => (
          <ExperienceCard 
          
          key={item.title}
          details={item}
          
          />
        ))}
        </Slider>
      </div>
    </section>
  )
}

export default WorkExperience