import React, { useState } from 'react';
import './Navbar.css';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleSectionClick = (sectionId) => {
    navigate('/'); // Navigate to the home page first
    setTimeout(() => {
      // Scroll to the section after navigation
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure the page has loaded
  };

  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className="nav-content">
          <img className='logo' src="./assets/images/logo.png" alt="logo" />
          <ul>
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className='menu-item'
                onClick={handleHomeClick} // Navigate to home page
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className='menu-item'
                onClick={() => handleSectionClick('skills')} // Navigate and scroll to skills
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className='menu-item'
                onClick={() => handleSectionClick('skills')} // Navigate and scroll to skills
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className='menu-item'
                onClick={() => handleSectionClick('projects')} // Navigate and scroll to projects
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className='menu-item'
                onClick={() => handleSectionClick('work')} // Navigate and scroll to work experience
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className='menu-item'
                onClick={() => handleSectionClick('contact')} // Navigate and scroll to contact
              >
                Contact Me
              </Link>
            </li>

            <button className='contact-btn' onClick={() => {}}>Hire Me</button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu}>
            <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }} />
            {openMenu ? "close" : "menu"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;