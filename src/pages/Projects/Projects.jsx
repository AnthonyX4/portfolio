import styles from './Projects.module.css';
import { BsGithub } from "react-icons/bs";
import { PiGlobeLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from 'react';
import section from "../../components/Content/Content";
import Modal from "../../components/ProjectModal/ProjectModal"
const content = section.find((item) => item.id === 'projects');

const NavIcon = ({ link, children }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ color: "var(--text-color)" }}
            whileHover={{ color: "var(--accent-color)" }}
        >
            {children}
        </motion.a>
    );
};

const Projects = () => {
    const skillVariants = {
        initial: {
            scale: 1,
            y: 0,
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 },
            y: -4
        },

    }

    const [toggleModal, setToggleModal] = useState(false);
    const close = () => setToggleModal(false);
    const open = () => setToggleModal(true);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (toggleModal) {
            // Store the current scrollbar width to prevent layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            // Prevent scrolling and preserve scrollbar space
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            // Restore scrolling and remove padding
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        
        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [toggleModal]);

    return (
        <section id="projects" className={styles.projects}>

            <div className={styles.contentBox}>
                <h1 className="title">{content.title}</h1>
                <div className={styles.projectsSectionContainer}>

                    {
                        content.items.map((item, index) =>
                            <div key={index} className={styles.card}>
                                <h1 className={styles.cardTitle}>{item.title}</h1>
                                <h2 className={styles.cardPeriod}>{item.period}</h2>
                                <img
                                    src={new URL(`../../assets/${item.image}`, import.meta.url).href}
                                    alt={item.title}
                                    className={styles.cardImage}
                                />

                                <div className={styles.skillsContainer}>
                                    {item.techstack.map((skill, skillIndex) => <motion.span variants={skillVariants} initial="initial" whileHover="hover" key={skillIndex} className={styles.cardSkill}>{skill}</motion.span>)}
                                </div>

                                <p className={styles.cardSummary}>{item.summary}</p>

                                <div className={styles.moreDetailsContainer}>
                                    {item.github && <NavIcon link={item.github}><BsGithub size={"1.4rem"} /></NavIcon>}
                                    {item.url && <NavIcon link={item.url}><PiGlobeLight size={"1.7rem"} /></NavIcon>}

                                    <motion.button
                                        className={styles.detailsButton}
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={()=>setToggleModal(!toggleModal)}
                                    >
                                        <p>more</p>
                                    </motion.button>

                                     <AnimatePresence>
                                         {toggleModal && <Modal handleClose={close}>{item.description}</Modal>}
                                     </AnimatePresence>

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
