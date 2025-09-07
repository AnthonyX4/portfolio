import styles from './Projects.module.css';
import { BsGithub } from "react-icons/bs";
import { PiGlobeLight } from "react-icons/pi";
import { IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";
import section from "../../components/Content/Content";
const content = section.find((item) => item.id === 'projects');

const NavIcon = ({ link, children }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{color: "var(--text-color)"}}
      whileHover={{ color: "var(--accent-color)" }}
    >
      {children}
    </motion.a>
  );
};

const Projects = () => {
    return (
        <section className={styles.projects}>

            <div className={styles.contentBox}>
                <h1 className="title">{content.title}</h1>
                <div className={styles.projectsSectionContainer}>

                    {
                        content.items.map((item, index) =>
                            <div className={styles.card}>
                                <h1 className={styles.cardTitle}>{item.title}</h1>
                                <h2 className={styles.cardPeriod}>{item.period}</h2>
                                <img
                                    src={new URL(`../../assets/${item.image}`, import.meta.url).href}
                                    alt={item.title}
                                    className={styles.cardImage}
                                />

                                <div className={styles.skillsContainer}>
                                    {item.techstack.map((skill) => <span className={styles.cardSkill}>{skill}</span>)}
                                </div>

                                <p className={styles.cardSummary}>{item.summary}</p>

                                <div className={styles.moreDetailsContainer}>
                                    {item.github && <NavIcon link={item.github}><BsGithub size={"1.4rem"}/></NavIcon>}
                                    {item.url && <NavIcon link={item.url}><PiGlobeLight size={"1.7rem"}/></NavIcon>}
                                    <div className={styles.detailsButton}>
                                        <p>details</p>
                                        <IoChevronForward size={"1.4rem"}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>

        </section>
    );
}

export default Projects;
