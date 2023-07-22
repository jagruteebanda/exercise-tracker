import styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <span>Menu</span>
      <span className={styles.appName}>Exercise Tracker</span>
      <span>Acc</span>
    </div>
  );
};

export default Header;
