import styles from "./css/projectBox.module.css"
import { convertDigitToWord } from "../../utils/convertMonthDigitToWord"

export const ProjectBox = ({link, previewImg, projectName, description, tags, createdAt}) => {
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
      <div>
        <h1>{projectName}</h1>
        <p>{description}</p>
        <div className={styles.date}>Added on {betterDate}</div>
        <div className={styles.tags}>
          {tags.map(tag => <div className={styles.tag}>{tag}</div>)}
        </div>
      </div>
    </a>
  </div>
   )
}