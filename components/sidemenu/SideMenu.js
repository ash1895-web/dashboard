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

const iconArray = [fourSquare, pieChart, clock, sun, web];
const imgSrcArray = [Bitcoin, Nft];

const SideMenu = () => {
  return (
    <div className={styles.SideMenuContainer}>
      <MenuButton />
      <div className={styles.sideMenuContent}>
        <div className={styles.SideMenuTop}>
          <VerticalSpacing height={15} />
          {imgSrcArray.map((item, index) => (
            <Button key={index} imgSrc={item} />
          ))}
          <VerticalSpacing height={22} />
          <ButtonCollection iconArray={iconArray} />
        </div>
        <div className={styles.SideMenuBottom}>
          <VerticalSpacing height={22} />
          <BottomButton imgSrc={message}/>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
