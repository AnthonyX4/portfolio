import styles from './ThemeMenuModal.module.css'
import { motion } from 'framer-motion';


const ThemeMenuModal = () => {

    const buttonVariants = {
        initial: {
            
        },
        hovered: {

        }
    }

    return(
        <div>
            <motion.button className={styles.ThemeSelectorButton}></motion.button>
        </div>

    );
}

export default ThemeMenuModal;