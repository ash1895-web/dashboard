import styles from './RightContainer.module.css'
import DisplayMode from "../DisplayMode/DisplayMode";

const RightContainer = () => {
  return (
    <div className={styles.container}>
      <p>User Name</p>
      <div className={styles.profile}>

      </div>
      <DisplayMode />
    </div>
  );
};

export default RightContainer