import Dropdown from "../../../Dropdown/Dropdown";
import styles from "./LoginDropdown.module.css";
import profileImage from '../../../../public/profile/user.jpg'

const LoginDropdown = () => {

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <Dropdown optionsOnRight={true} titleText='User Name' profileImage={profileImage}/>
      </div>
    </div>
  );
};

export default LoginDropdown;
