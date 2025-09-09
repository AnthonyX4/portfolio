import styles from './Contact.module.css';
import section from "../../components/Content/Content";
const content = section.find((item) => item.id === 'contact');

const Contact = () => {
    return(
        <section id="contact" className={styles.contact} style={{scrollMarginTop: 0}}>
            <div className={styles.contentBox}>
                <h1 className="title">{content.title}</h1>  
                <div className={styles.emailSection}>
                    <span className={styles.emailTitle}>Email:</span>
                    <span className={styles.email}>{content.email}</span>
                </div>
            </div>

        </section>
    );
}

export default Contact;
