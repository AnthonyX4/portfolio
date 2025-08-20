import "./Navbar.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";

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
  return (
      <nav>
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
  );
};

export default Navbar;
