import {Link} from "react-router-dom"
import styles from "./css/home.module.css";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["avatar-holder"]}></div>
      <div className={styles["welcome-message"]}>
        <h2>Hello, I'm Nevyan! Currently a web development student.</h2>
        <p className={styles["info-paragraph"]}>
          This is my personal website where you can see my info and the projects
          i've made thus far.{" "}
        </p>
      </div>
      <div className={styles["buttons-holder"]}>
        <Link to={'/contacts'} className={styles.home_btn}>Hire me !</Link>
        <Link to={'/cv'} className={styles.home_btn}>See my CV ?</Link>
      </div>
    </div>
  );
};
