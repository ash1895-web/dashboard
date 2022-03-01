import styles from './RightContainer.module.css'
import DisplayMode from "../DisplayMode/DisplayMode";
import LoginDropdown from './LoginDropdown/LoginDropdown';

const RightContainer = () => {
  return (
    <div className={styles.container}>
      <LoginDropdown/>
      <DisplayMode />
    </div>
  );
};

export default RightContainer