import "./Navbar.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const NavIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="navIcon"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  function toggleSidebar(isExpanded) {
    setExpanded(!isExpanded);
  }

  return (
    <div>
      <button 
      id="toggle-sidebar-button"
      onClick={() => toggleSidebar(isExpanded)}
      className={isExpanded ? "open" : ""}
      >
        {isExpanded ? <LiaTimesSolid size={"1.5rem"} /> : <FaBars size={"1.5rem"}/>}
      </button>

      <nav
        className={isExpanded ? "open" : ""}
      >
        <div className="navList">
          <a className="logo">AT</a>
          <a>About</a>
          <a>Projects</a>
          <a>Skills</a>
          <a>Experience</a>
          <a>Contact</a>
        </div>

        <div className="navIcons">
          <NavIcon link="https://github.com/AnthonyX4">
            <BsGithub size={"1.4rem"} />
          </NavIcon>
          <NavIcon link="https://www.linkedin.com/in/anthony-truong-172374143/">
            <BsLinkedin size={"1.4rem"} />
          </NavIcon>
          <NavIcon link="https://www.linkedin.com/in/anthony-truong-172374143/">
            <BsFilePerson size={"1.4rem"} />
          </NavIcon>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
