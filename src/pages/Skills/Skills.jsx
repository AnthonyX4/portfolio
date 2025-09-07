import styles from './Skills.module.css';
import section from "../../components/Content/Content";
const content = section.find((item) => item.id === 'skills');


const Skills = () => {
    return (
        <section className={styles.skills}>

            <div className={styles.contentBox}>

                <h1 className="title">{content.title}</h1>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Languages</h1>
                    <div className={styles.skillsContainer}>
                        {
                            content.languages.map((item, index) =>
                                <p
                                    key={index}
                                    className={styles.skill}
                                > {item}
                                </p>
                            )
                        }

                    </div>
                </div>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Developer Tools</h1>
                    <div className={styles.skillsContainer}>
                        {
                            content.developerTools.map((item, index) =>
                                <p
                                    key={index}
                                    className={styles.skill}
                                > {item}
                                </p>
                            )
                        }
                    </div>
                </div>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Frameworks</h1>
                    <div className={styles.skillsContainer}>
                        {
                            content.frameworks.map((item, index) =>
                                <p
                                    key={index}
                                    className={styles.skill}
                                > {item}
                                </p>
                            )
                        }
                    </div>
                </div>

                <div className={styles.skillSection}>
                    <h1 className={styles.skillTitle}>Libraries</h1>
                    <div className={styles.skillsContainer}>
                        {
                            content.libraries.map((item, index) =>
                                <p
                                    key={index}
                                    className={styles.skill}
                                > {item}
                                </p>
                            )
                        }
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Skills;
