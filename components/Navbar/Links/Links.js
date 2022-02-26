import styles from './Links.module.css'

const Links = ({ linkText, id, handleClick, activeLinkId }) => {
  return (
    <li
      onClick={handleClick}
      id={id}
      className={id == activeLinkId ? styles.activeLink : styles.inactiveLink}
    >
      {linkText}
    </li>
  );
};

export default Links;
