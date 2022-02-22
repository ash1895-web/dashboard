import Image from "next/image";
import { useState } from "react";

import styles from "./Button.module.css";

const Button = ({ imgSrc }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    if (active) {
      setActive(false);
    } else if (!active) {
      setActive(true);
    }
  };

  return (
    <div
      className={active ? styles.ContainerActive : styles.Container}
      onClick={toggleActive}
    >
      <div className={active ? styles.iconActive : styles.icon}>
        <Image src={imgSrc} alt="icon" />
      </div>
    </div>
  );
};

export default Button;
