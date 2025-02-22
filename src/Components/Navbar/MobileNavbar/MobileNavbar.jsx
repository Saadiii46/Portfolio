import React from 'react'
import './MobileNavbar.css'

function MobileNavbar({isOpen, toggleMenu}) {
  return (
    <>

    <div className={`mobile-menu ${isOpen ? "active" : ""}`} >
        <div className="mobile-menu-container">
            <img className='logo' src="./assets/images/logo.png" alt="" />

        <ul>
            <li><a className='menu-item' > Home </a></li>
            <li><a className='menu-item' > Skills </a></li>
            <li><a className='menu-item' > Projects </a></li>
            <li><a className='menu-item' > Work Experience </a></li>
            <li><a className='menu-item' > Contact Me </a></li>

            <button className='contact-btn' onClick={() => {}} >Hire Me</button>
      </ul>
        </div>
    </div>
    
    </>
  )
}

export default MobileNavbar