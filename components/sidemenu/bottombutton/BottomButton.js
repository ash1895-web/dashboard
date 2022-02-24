import Image from "next/image";

import styles from "./BottomButton.module.css";

const BottomButton = ({ imgSrc }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.imageBack}>
        <div className={styles.imageContainer}>
          <Image src={imgSrc} alt="bottom button" />
        </div>
      </div>
    </div>
  );
};

export default BottomButton;
