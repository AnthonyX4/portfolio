import styles from './About.module.css';
import section from "../../components/Content/Content";
import headshotImage from "../../assets/headshotOne.jpg";

const content = section.find((item) => item.id === 'about');

const About = () => {
    return (
        <section className={styles.about}>

            <div className={styles.contentBox}>

                <div className={styles.textBox}>
                    <h1 className="title">{content.title}</h1>
                    <p1 className={styles.text}>{content.contentOne}</p1>
                    <p1 className={styles.text}>{content.contentTwo}</p1>
                </div>

                <div className={styles.picturesBox}>
                    <img className={styles.profileImage} src={headshotImage} alt="Profile headshot" />

                    <svg className={styles.hat} width="12.5rem" height="12.5rem" viewBox="0 0 694 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_97_10" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="260" width="694" height="25">
                            <rect y="260" width="694" height="25" fill="#FED730" />
                        </mask>
                        <g mask="url(#mask0_97_10)">
                            <rect y="213" width="448" height="144" fill="#FED730" />
                            <rect x="347" y="213" width="347" height="144" fill="#FEE472" />
                        </g>
                        <mask id="mask1_97_10" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="108" y="5" width="478" height="478">
                            <circle cx="346.688" cy="243.688" r="238.338" transform="rotate(1.05539 346.688 243.688)" fill="#3B3723" />
                        </mask>
                        <g mask="url(#mask1_97_10)">
                            <rect x="-312" y="-457" width="688" height="717" fill="#FED730" />
                            <rect x="347" y="-457" width="688" height="717" fill="#FEE472" />
                            <path d="M-125 202H387V260H-125V202Z" fill="#D91213" />
                            <path d="M347 202H859V260H347V202Z" fill="#E45E5E" />
                        </g>
                    </svg>

                    <div className={styles.chineseNameContainer}>
                        <p1 className={styles.chineseName}>發布</p1>
                    </div>

                </div>

            </div>




        </section>
    );
}

export default About;