import styles from './MenuButton.module.css'

const MenuButton = ({toggleView}) => {
    return (
        <div className={styles.menuButtonContainer} onClick={toggleView}>
            <div className={styles.iconContainer}>
                <div className={styles.firstLine}></div>
                <div className={styles.secondLine}></div>
                <div className={styles.thirdLine}></div>
            </div>
        </div>
    )
}

export default MenuButton