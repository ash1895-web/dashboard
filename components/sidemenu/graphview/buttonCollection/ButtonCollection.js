import { useState } from "react";

import styles from "./ButtonCollection.module.css";
import Button from "../button/Button";

const ButtonCollection = ({iconArray}) => {
  const [activeId, setActiveId] = useState(0)

  const handleClick=(e)=>{
    setActiveId(e.currentTarget.id)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.collection}>
        {iconArray.map((item, index) => (
          <Button key={index} imgSrc={item} id={index} activeId={activeId} onClick={handleClick}/>
        ))}
      </div>
    </div>
  );
};

export default ButtonCollection;
