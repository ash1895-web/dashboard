import Image from "next/image";

import styles from "./Button.module.css";

const Button = ({ imgSrc, id, activeId, setActive }) => {

  return (
    <div className={id == activeId ? styles.activeContainer : styles.inactiveContainer} id={id} onClick={setActive}>
      <div className={styles.icon}>
        <Image src={imgSrc} alt="icon" />
      </div>
    </div>
  );
};

export default Button;
