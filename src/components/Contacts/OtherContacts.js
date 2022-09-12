import styles from "./css/otherContacts.module.css"
import {Link} from "react-router-dom"

export const OtherContacts = () => {
    return(
        <div className={styles['others-wrapper']}>
            <h2>Other Contacts</h2>
            <ul className={styles['other-contacts-list']}>
                <li><i class="fa fa-envelope" aria-hidden="true"></i> plamenovnevyan@gmail.com</li>
                <li><i class="fa-brands fa-facebook-f"></i> <a href="https://www.facebook.com/profile.php?id=100081800117375" target="_blank">facebook.com</a></li>
                <li><i class="fa-brands fa-linkedin-in"></i> linkedin</li>
                <li><i class="fa fa-phone" aria-hidden="true"></i> 0892961696</li>
            </ul>
        </div>
    )
}