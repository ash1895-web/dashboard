import Image from "next/image"
import { useState } from "react";

import styles from './SearchButton.module.css'
import searchIcon from "../../../public/icons/search.png";

const SearchButton = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        active ? setActive(false) : setActive(true)
    }

    return (
        <div onClick={handleClick} className={active ? styles.searchIconActive : styles.searchIcon}>
             <Image src={searchIcon} alt="search icon" />
        </div>
    )
}

export default SearchButton