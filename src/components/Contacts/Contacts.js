import {ContactForm} from "./ContactForm"
import styles from "./css/contacts.module.css"
import {OtherContacts} from "./OtherContacts"


export const Contacts = () => {
    return (
        <div className={styles['contacts-wrapper']}>
        <ContactForm />
        <OtherContacts />
        </div>
    )
}