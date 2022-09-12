import styles from "./css/cv.module.css"
import profilePic from "./images/profile-pic.jpg"

export const CV = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.full}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img
            src={profilePic}
            alt="gfg-logo"
            style={{ width: 100, height: 100 }}
          />
        </div>
        <div className={styles.Contact}>
          <h2>Contacts</h2>
          <p>
            <b>Email:</b>plamenovnevyan@gmail.com
          </p>
          <p>
            <b>Mobile &#8470; : </b>0892961696
          </p>
        </div>
        <div className={styles.Skills}>
          <h2>Skills</h2>
          <ul>
            <li>
              <b>Programming Languages : Javascript</b>
            </li>
            <li>
              <b>Frontend : HTML5, CSS3, JavaScript, React</b>
            </li>
            <li>
              <b>Backend : Node.js, Express, MongoDB</b>
            </li>
          </ul>
        </div>
        <div className={styles.Language}>
          <h2>Languages</h2>
          <ul>
            <li>Bulgarian</li>
            <li>English</li>
          </ul>
        </div>
        <div className={styles.Hobbies}>
          <h2>Relevant Links</h2>
          <ul>
            <li><a href="https://github.com/Plamenov-Nevyan"><i class="fa-brands fa-github"></i> Github</a></li>
            <li>Swimming</li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.name}>
          <h1>Nevyan Plamenov Valchev</h1>
        </div>
        <div className={styles.title}>
          <p>Web Development Student</p>
        </div>
        <div className={styles.Summary}>
          <h2>Summary</h2>
          <p>
             Student in Softuni EOOD, learning Javascript, HTML5, CSS3, React, Angular and NodeJS.
          </p>
          <p>Would like to become a front-end web developer</p>
        </div>
        <div className={styles.Experience}>
          <h2>Employment History</h2>
           <p>Student at Softuni EOOD,  May 2021 - Current</p>
            <ul>
                <li>Completed Programming Basics : grade 6.00</li>
                <li>Completed Programming Fundamentals with JS : grade 5.89</li>
                <li>Completed JS Advanced : grade 6.00</li>
                <li>Completed JS Applications : grade 5.34</li>
                <li>Completed JS React: grade 6.00</li>
            </ul>
          <p>Machine-Operator, Apr 2019 to Jan 2020</p>
          <p>Vendor-Consultant, Oct 2017 to Jan 2018</p>
        </div>
        <div className={styles.Education}>
          <h2>Education</h2>
          <p>Softuni EOOD, Apr 2021 - Current</p>
          <p>University of Ruse - "Angel Kanchev", Sep 2015 - May 2018</p>
            <ul>
                <li>Bachelor Degree</li>
                <li>Specialization in Agricultural Engineering</li>
                <li>Participated in "Work and Travel". Rehoboth Beach, USA, 2016</li>
            </ul>
        </div>
        {/* <div className={styles.project}>
          <ul>
            <li>
              <h2>Project1</h2>
              <p>This project is based on html &amp; used React</p>
            </li>
            <li>
              <h2>Project2</h2>
              <p>This project is based on html &amp; used React</p>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
    </div>
  );
};
