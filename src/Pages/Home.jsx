import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/Skills/Skills'
import Project from '../Components/Projects/Projects'
import WorkExperience from '../Components/WorkExperience/WorkExperience'
import ContactMe from '../Components/ContactMe/ContactMe'
import Footer from '../Components/Footer/Footer'
import About from '../Components/About/About'

function Home() {
  return <>
  
    <Navbar />
    <div className="container">
      <Hero />
      <Skills />
      <About />
      <Project />
      <WorkExperience />
      <ContactMe />
    </div>
    <Footer />

  </>
}

export default Home