import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id='hero' className='hero-container' >
        <div className="hero-content">
          <h2>Full Stack Developer</h2>
          <p>Passionate full stack developer crafting seamless web experiences, from frontend design to backend functionality. Let's build something extraordinary together</p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img className='my-img' src="./assets/images/hero-image.jpg" alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero