import styles from "./styles/Header.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <MenuIcon />
      <span className={styles.appName}>Exercise Tracker</span>
      <AccountCircleIcon />
    </div>
  );
};

export default Header;
