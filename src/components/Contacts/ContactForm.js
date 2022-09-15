import { useState } from "react"; 
import { sendEmailToBackend } from "../../services/emailServices";
import {ErrorAlert} from "../Alerts/ErrorAlert";
import {SuccessAlert} from "../Alerts/SuccessAlert";
import {SmallLoadingSpinner} from "../SmallLoadingSpinner/SmallLoadingSpinner";
import styles from "./css/contactForm.module.css"


export const ContactForm = () => {
   const [inputValues, setInputValues] = useState({
      name : '',
      email : '',
      subject : 'question',
      message : ''
   })
   const [alertStates, setAlertStates] = useState({
    errors : [],
    success : ''
   })
   const [showSpinner, setShowSpinner] = useState(false)

   const onChangeHandler = (e) => {
    setInputValues(oldValues => {return {
      ...oldValues,
      [e.target.name] : e.target.value
    }})
   }

   const onSubmitHandler = (e) => {
    e.preventDefault()
    setShowSpinner(true)
    if(Object.values(inputValues).includes('')){return setAlertStates(oldStates => {
      return {
        errors : [...oldStates.errors, 'Please enter the required information !'],
        success : ''
      }
     }
    )}
    sendEmailToBackend(inputValues)
    .then((resp) => {
      setInputValues(oldValues => {return {
        name : '',
        email : '',
        subject : 'question',
        message : ''
      }})
      setAlertStates(oldStates => {
        return{
          errors : [],
          success : 'Thank you ! Your email was sent successfully, i will answer you as soon, as i can !'
        }
      })
      setShowSpinner(false)
    })
    .catch(err => setAlertStates(oldStates => {
      setShowSpinner(false)
      return{
      errors : [...oldStates.errors, err],
      success : ''
    }
   })
 )
}

  return (
    <>
    {showSpinner && <SmallLoadingSpinner />}
    {alertStates.errors.length > 0 && <ErrorAlert errors={alertStates.errors} />}
    {alertStates.success && <SuccessAlert message={alertStates.success} />}
    <div className={styles.wrapper}>
    <div id={styles['contact-form']}>
      <div>
        <h1 className={styles.greeting}>Nice to Meet You!</h1>
        <h4 className={styles.question}>Have a question or just want to get in touch? Let's chat.</h4>
      </div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <div>
          <label htmlFor="name">
            <span className={styles.required}>Name: *</span>
            <input
              type="text"
              id="name"
              name="name"
              value={inputValues.name}
              placeholder="Your Name"
              required="required"
              tabIndex={1}
              autofocus="autofocus"
              onChange={(e) => onChangeHandler(e)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span className="required">Email: *</span>
            <input
              type="email"
              id="email"
              name="email"
              value={inputValues.email}
              placeholder="Your Email"
              tabIndex={2}
              required="required"
              onChange={(e) => onChangeHandler(e)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="subject">
            <span>Subject: </span>
            <select id="subject" name="subject" tabIndex={4} value={inputValues.subject} onChange={(e) => onChangeHandler(e)}>
              <option value="chat">I just want to chat..</option>
              <option value="question">I have a question !</option>
              <option value="offer">I have an offer !</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <span className="required">Message: *</span>
            <textarea
              id="message"
              name="message"
              placeholder="Please write your message here."
              tabIndex={5}
              required="required"
              value={inputValues.message}
              onChange={(e) => onChangeHandler(e)}
            />
          </label>
        </div>
        <div>
          <button name="submit" type="submit" id="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};
