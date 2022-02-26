import Image from "next/image";
import { useState } from "react";

import Moon from "../../../public/icons/moon.png";
import Sun from "../../../public/icons/sunny.png";
import styles from "./DisplayMode.module.css";

const DisplayMode = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    mode == "light" ? setMode("dark") : setMode("light");
  };

  return (
    <div onClick={toggleMode} className={styles.container}>
      <div className={styles.image}>
        {mode == "light" ? (
          <Image src={Sun} alt="light mode" />
        ) : (
          <Image src={Moon} alt="dark mode" />
        )}
      </div>
    </div>
  );
};

export default DisplayMode;
