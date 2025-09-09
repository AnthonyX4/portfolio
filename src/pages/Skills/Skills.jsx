import styles from './Skills.module.css';
import section from "../../components/Content/Content";
import { motion, scale } from 'framer-motion'
const content = section.find((item) => item.id === 'skills');

const skillVariants = {
    initial: {
        scale: 1,
        y:0,
    },
    hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
        y:-4
    },

}


const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>

            <div className={styles.contentBox}>

                <h1 className="title">{content.title}</h1>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Languages</h1>
                    <div className={styles.skillsContainer}>
                        {content.languages.map((item, index) =>
                            <motion.p
                                key={index}
                                className={styles.skill}
                                variants={skillVariants}
                                initial="initial"
                                whileHover="hover"
                            > {item}
                            </motion.p>
                        )}
                    </div>
                </div>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Developer Tools</h1>
                    <div className={styles.skillsContainer}>
                        {content.developerTools.map((item, index) =>
                            <motion.p
                                key={index}
                                className={styles.skill}
                                variants={skillVariants}
                                initial="initial"
                                whileHover="hover"
                            > {item}
                            </motion.p>
                        )}
                    </div>
                </div>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Frameworks</h1>
                    <div className={styles.skillsContainer}>
                        {content.frameworks.map((item, index) =>
                            <motion.p
                                key={index}
                                className={styles.skill}
                                variants={skillVariants}
                                initial="initial"
                                whileHover="hover"
                            > {item}
                            </motion.p>
                        )}
                    </div>
                </div>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Libraries</h1>
                    <div className={styles.skillsContainer}>
                        {content.libraries.map((item, index) =>
                            <motion.p
                                key={index}
                                className={styles.skill}
                                variants={skillVariants}
                                initial="initial"
                                whileHover="hover"
                            > {item}
                            </motion.p>
                        )}
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;
