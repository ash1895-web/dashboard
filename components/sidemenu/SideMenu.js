import Button from "./button/Button";
import ButtonCollection from "./graphview/buttonCollection/ButtonCollection";
import MenuButton from "./menuButton/MenuButton";
import BottomButton from "./bottombutton/BottomButton";
import VerticalSpacing from "./verticalSpacing/VerticalSpacing";
import styles from "./SideMenu.module.css";

import Bitcoin from "../../public/icons/bitcoin.png";
import Nft from "../../public/icons/nft.png";

import pieChart from "../../public/icons/pie-chart.png";
import clock from "../../public/icons/clock.png";
import sun from "../../public/icons/sun.png";
import web from "../../public/icons/web.png";
import fourSquare from "../../public/icons/four-square.png";
import message from "../../public/icons/message.png";
import { useState } from "react";

const iconArray = [fourSquare, pieChart, clock, sun, web];
const imgSrcArray = [Bitcoin, Nft];

const SideMenu = () => {
  const [visibility, setVisibility] = useState(false)
  const [activeId, setActiveId] = useState(0)

  const toggleView = () => {
    if (visibility) {
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }

  const setActive = (e) => {
      setActiveId(e.currentTarget.id);
  }

  return (
    <div className={visibility ? styles.SideMenuContainerVisible : styles.SideMenuContainer }>
      <MenuButton toggleView={toggleView}/>
      {visibility ? 
      <div className={styles.SideMenuContent}>
      <div className={styles.SideMenuTop}>
        <VerticalSpacing height={15} />
        {imgSrcArray.map((item, index) => (
          <Button key={index} imgSrc={item} id={index} activeId={activeId} setActive={setActive}/>
        ))}
        <VerticalSpacing height={22} />
        <ButtonCollection iconArray={iconArray} />
      </div>
      <div className={styles.SideMenuBottom}>
        <VerticalSpacing height={22} />
        <BottomButton imgSrc={message}/>
      </div>
    </div>: null}
      
    </div>
  );
};

export default SideMenu;
