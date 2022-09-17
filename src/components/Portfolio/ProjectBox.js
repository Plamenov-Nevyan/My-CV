import styles from "./css/projectBox.module.css"
import { convertDigitToWord } from "../../utils/convertMonthDigitToWord"

export const ProjectBox = ({link, previewImg, projectName, description, tags, createdAt, deployment}) => {
    const bgImage = `--bg-img: url(${previewImg})`
    let date = createdAt.split('T')[0].split('-')
    let month = date[1]
    let convMonth = convertDigitToWord(month)
    date[1] = convMonth
    let betterDate = date[1] + ' ' + date[2] + ' ' + date[0]

   return (
<div className={styles['card-grid-space']}>
    <div className={styles.num}></div>
    <a className={styles.card} href={link} style= {{backgroundImage: "url(" + previewImg + ")"}} target="_blank">
      <div className={styles['project-info-holder']}>
        <h1>{projectName}</h1>
        <p className={styles['descr-paragraph']}>{description}</p>
    {deployment && <p className={styles['depl-p']}>Deployed <a href={deployment} className={styles['ex-link']}>here.</a></p>}
        <div className={styles.date}>Added on {betterDate}</div>
        <div className={styles.tags}>
          {tags.map((tag, index) => {
            if(index % 3 === 0 && index !== 0){
              return <>
              <div className={styles.break}></div> 
              <div className={styles.tag}>{tag}</div>
              </>
            }  
            else {return <div className={styles.tag}>{tag}</div>}
          })}
        </div>
      </div>
    </a>
  </div>
   )
}