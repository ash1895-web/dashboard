import styles from "./Navbar.module.css";
import SideMenu from "../sidemenu/SideMenu";

import Links from "./Links/links";
import { useState } from "react";
import SearchButton from "./Search/SearchButton";
import RightContainer from "./RightContainer/RightContainer";

const linkText = ["Dashboard", "Advanced Quarry", "Events"];

const Navbar = () => {

  const [activeLinkId, setActiveLinkId] = useState(0);

  const linkStateToggle = (event) => {
      setActiveLinkId(event.currentTarget.id)
  }

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.containerLeft}>
        <div className={styles.navlinks}>
          <ul>
            {linkText.map((item, index) => (
              <Links
                linkText={item}
                key={index}
                id={index}
                activeLinkId={activeLinkId}
                handleClick={linkStateToggle}
              />
            ))}
            <li>
              <div className={styles.rectangle}></div>
            </li>
            <li>
              <div className={styles.imageContainer}>
               <SearchButton/>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.containerRight}>
          <RightContainer/>
      </div>
    </div>
  );
};

export default Navbar;
