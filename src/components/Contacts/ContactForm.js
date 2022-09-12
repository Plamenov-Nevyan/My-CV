import styles from "./css/contactForm.module.css"

export const ContactForm = () => {
  return (
    <div className={styles.wrapper}>
    <div id={styles['contact-form']}>
      <div>
        <h1 className={styles.greeting}>Nice to Meet You!</h1>
        <h4 className={styles.question}>Have a question or just want to get in touch? Let's chat.</h4>
      </div>
      <form>
        <div>
          <label htmlFor="name">
            <span className={styles.required}>Name: *</span>
            <input
              type="text"
              id="name"
              name="name"
              value=""
              placeholder="Your Name"
              required="required"
              tabIndex={1}
              autofocus="autofocus"
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
              value=""
              placeholder="Your Email"
              tabIndex={2}
              required="required"
            />
          </label>
        </div>
        <div>
          <label htmlFor="subject">
            <span>Subject: </span>
            <select id="subject" name="subject" tabIndex={4}>
              <option value="hello">Product Price Question</option>
              <option value="quote">Where are my dragons?!</option>
              <option value="general">- Valar Morghulis - </option>
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
              value={""}
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
  );
};
