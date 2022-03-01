import Image from "next/image";
import { useState } from "react";

import styles from "./Dropdown.module.css";
import arrow from "../../public/icons/arrow.png";

const Dropdown = ({ width, optionsOnRight, profileImage, titleText }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    isDropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
  };

  return (
    <div className={styles.container} style={{ width: `${width}` || "auto" }}>
      <div className={styles.titleContainer} onClick={toggleDropdown}>
        {titleText && <div className={styles.titleText}>{titleText}</div>}
        {profileImage && (
          <div className={styles.profileImage}>
            <Image src={profileImage} alt="profile Image" />
          </div>
        )}
        <div
          className={
            isDropdownOpen ? styles.dropdownIconOpen : styles.dropdownIconClose
          }
        >
          <Image src={arrow} alt="dropdown icon" />
        </div>
      </div>
      {isDropdownOpen ? (
        <div
          className={
            optionsOnRight ? styles.optionsOnRight : styles.optionsOnLeft
          }
        >
          <div className={styles.optionContainer}>
            <div>Optios dfkjds kjfhs kdjfn A</div>
            <div>Option B</div>
            <div>Option C</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
