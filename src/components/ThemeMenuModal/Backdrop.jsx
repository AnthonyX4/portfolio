import styles from './Backdrop.module.css'

const Backdrop = ({children, onClick}) => {
    return(
        <div
            className={styles.backdrop}
            onClick={onClick}
        >

        </div>


    );
}

export default Backdrop;