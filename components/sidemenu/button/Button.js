import Image from "next/image";

import styles from "./Button.module.css";

const Button = ({ imgSrc }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.icon}>
        <Image src={imgSrc} alt="icon" />
      </div>
    </div>
  );
};

export default Button;
