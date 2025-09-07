import styles from './Projects.module.css';
import section from "../../components/Content/Content";
const content = section.find((item) => item.id === 'projects');

const Projects = () => {
    return(
        <section className={styles.projects}>
            <h1 className="title">{content.title}</h1>

        </section>
    );
}

export default Projects;
