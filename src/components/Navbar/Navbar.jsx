import "./Navbar.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavIcon = ({ link, children }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ color: "var(--accent-color)" }}
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  function toggleSidebar(isExpanded) {
    setExpanded(!isExpanded);
  }

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      // Scroll to top of page for hero
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.history.pushState(null, null, '#hero');
    } else if (sectionId === 'contact') {
      // For contact, scroll without offset
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        window.history.pushState(null, null, `#${sectionId}`);
      }
    } else {
      // For other sections, use scrollIntoView (CSS handles the offset)
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        window.history.pushState(null, null, `#${sectionId}`);
      }
    }
    // Close mobile menu after navigation
    setExpanded(false);
  };


  return (
    <div>
      <button
        id="toggle-sidebar-button"
        onClick={() => toggleSidebar(isExpanded)}
      >
        {isExpanded ? (
          <LiaTimesSolid size={"1.5rem"} />
        ) : (
          <FaBars size={"1.5rem"} />
        )}
      </button>

      <motion.nav
        className={isExpanded ? "open" : ""}
      >
        <div className="navList">
          <a className="logo" onClick={() => scrollToSection('hero')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1.5rem" height="1.5rem" style={{ transform: "rotate(180deg)" }}>
            <path d="M10 90 L50 10 L90 90 H70 L50 40 L30 90 Z" fill="var(--theme-color)" />
          </svg>

          </a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('experience')}>Experience</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className="navIcons">
          <NavIcon link="https://github.com/AnthonyX4">
            <BsGithub size={"1.4rem"} />
          </NavIcon>
          <NavIcon link="https://www.linkedin.com/in/anthony-truong-172374143/">
            <BsLinkedin size={"1.4rem"} />
          </NavIcon>
          <NavIcon link="https://drive.google.com/file/d/15dyV3iXq4Nz-9I5rzuwm9roC87DqTLNW/view?usp=sharing">
            <BsFilePerson size={"1.4rem"} />
          </NavIcon>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
