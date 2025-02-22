import React from 'react'
import './About.css'

function About() {
  return <>
  <div id='about' >
    <h5 className='h5' >About</h5>
  </div>
    <section className="about-section">
      {/* Left Side - Image */}
      <div className="about-image">
        <img src="./assets/images/hero-image.jpg" alt="Saad's Image" />
      </div>

      {/* Right Side - About Information */}
      <div className="about-info">
        <h1>Muhammad Saad Khalid</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Hi, I'm Saad, a passionate Full Stack Developer with expertise in building modern, scalable, and user-friendly web applications. I specialize in front-end technologies like React.js and back-end technologies like Node.js and Express.js. I love solving complex problems and creating seamless digital experiences. Let's build something amazing together!
        </p>
      </div>
    </section>
    </>
}

export default About