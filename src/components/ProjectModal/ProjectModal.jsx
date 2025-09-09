import styles from './ProjectModal.module.css'
import Backdrop from './Backdrop';
import { motion } from 'framer-motion';
import { ImCancelCircle } from "react-icons/im";

const ProjectModal = ({ handleClose, children }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className={styles.modal}
            >

                {children}

                <motion.div 
                    className={styles.cancelButton} 
                    onClick={handleClose}
                    initial={{scale: 1}}
                    whileHover={{scale: 1.1}}
                >
                    <ImCancelCircle size={"1.4rem"} color="var(--text-color)" />
                </motion.div>

            </motion.div>

        </Backdrop>

    );
}

export default ProjectModal;