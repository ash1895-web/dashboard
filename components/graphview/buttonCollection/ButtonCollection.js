import styles from "./ButtonCollection.module.css";
import Button from "../button/Button";

import pieChart from "../../../public/icons/pie-chart.png";
import clock from "../../../public/icons/clock.png";
import sun from "../../../public/icons/sun.png";
import web from "../../../public/icons/web.png";
import fourSquare from "../../../public/icons/four-square.png";

const iconArray = [fourSquare, pieChart, clock, sun, web];

const ButtonCollection = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.collection}>
        {iconArray.map((item, index) => (
          <Button key={index} imgSrc={item}/>
        ))}
      </div>
    </div>
  );
};

export default ButtonCollection;
