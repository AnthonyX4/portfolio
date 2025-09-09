import styles from './Experience.module.css';
import section from "../../components/Content/Content";
import { time } from 'framer-motion';
const content = section.find((item) => item.id === 'experience');

const Experience = () => {

    return (
        <section className={styles.experience}>
            <div className={styles.contentBox}>
                <h1 className="title">{content.title}</h1>

                <div className={styles.timeline}>


                    {content.items.map((experience, index) => {
                        // figure out if this is first or last
                        const isFirst = index === 0;
                        const isLast = index === content.items.length - 1;

                        return (
                            <div
                                key={index}
                                className={styles.timelineBox}
                            >
                                <div
                                    className={`${styles.timelineCircle} ${isFirst ? styles.timelineFirstItem : ""}`}
                                ></div>

                                <div className={styles.experienceContainer}>
                                    <h1 className={styles.role}>{experience.role}</h1>
                                    <h1 className={styles.organization}>{experience.organization}</h1>
                                    <div className={styles.experienceHeader}>
                                        <span>{experience.startDate} - {experience.endDate}</span>
                                        <span>•</span>
                                        <span>{experience.location}</span>
                                    </div>
                                    <ul>
                                            {experience.roleDescription.map((description) => <li>{description}</li>)}
                                    </ul>

                                </div>

                                {isLast && <svg width="1.75rem" height="1.75rem" viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.timelineDiamond}>
                                    <rect x="141.961" y="0.976562" width="200" height="200" transform="rotate(45 141.961 0.976562)" fill="var(--theme-color)" />
                                </svg>
                                }
                            </div>
                        );
                    })}

                </div>


            </div>
        </section>
    );

}

export default Experience;