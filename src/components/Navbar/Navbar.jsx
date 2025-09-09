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
          <a className="logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1.5rem" height="1.5rem" style={{transform: "rotate(180deg)"}}>
  <path d="M10 90 L50 10 L90 90 H70 L50 40 L30 90 Z" fill="var(--theme-color)"/>
</svg>

          </a>
          <a>About</a>
          <a>Skills</a>
          <a>Projects</a>
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
      </motion.nav>
    </div>
  );
};

export default Navbar;
