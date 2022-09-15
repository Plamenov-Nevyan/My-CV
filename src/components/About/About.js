import styles from "./css/about.module.css"

export const About = () => {

    return(
        <div className={styles.wrapper}>
            <section className={styles['relevant-info']}>
             <article className={styles['image-holder']}>
                 <img />
             </article>
             <article className={styles['short-descr']}>

             </article>
             </section>
             <section className={styles['hobbies-aspirations']}>
                    <article className={styles.hobbies}>
                         <ul>

                         </ul>
                    </article>
                    <article className={styles.aspirations}>
                        <p>

                        </p>
                    </article>
             </section>
        </div>
    )
}