import {NavLink} from "react-router-dom"
import { useSessionStorage } from "../../hooks/useSessionStorage";
import styles from "./css/navbar.module.css"

export const Navbar = () => {

  const [storedBrowserData, setToStorage, clearFromStorage, getFromStorage] = useSessionStorage()

  return (
    <nav className={styles.nav}>
      <NavLink to={"/"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        Home
      </NavLink>
      <NavLink to={"/cv"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        My CV
      </NavLink>
      {/* <NavLink to={"/about"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        About me
      </NavLink> */}
      <NavLink to={"/portfolio"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        My Portfolio
      </NavLink>
      <NavLink to={"/contacts"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        Contact me
      </NavLink>
      {storedBrowserData.session &&  <NavLink to={"/admin/actions"} className={isActive => isActive.isActive ? styles['nav-link-active'] : styles['nav-link']}>
        Admin panel
      </NavLink>
      }
    </nav>
  );
};
