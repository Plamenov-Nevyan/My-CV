import {NavLink} from "react-router-dom"
import styles from "./css/navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={"/"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        Home
      </NavLink>
      <NavLink to={"/cv"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        My CV
      </NavLink>
      <NavLink to={"/about"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        About me
      </NavLink>
      <NavLink to={"/portfolio"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        My Portfolio
      </NavLink>
      <NavLink to={"/contacts"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        Contact me
      </NavLink>
    </nav>
  );
};
