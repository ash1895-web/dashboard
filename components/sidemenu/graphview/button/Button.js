import Image from "next/image";

import styles from "./Button.module.css";

const Button = ({ imgSrc, id, activeId, onClick }) => {
  return (
    <div
      className={activeId == id ? styles.ContainerActive : styles.Container}
      onClick={onClick}
      id={id}
    >
      <div className={activeId == id ? styles.iconActive : styles.icon}>
        <Image src={imgSrc} alt="icon" />
      </div>
    </div>
  );
};

export default Button;
