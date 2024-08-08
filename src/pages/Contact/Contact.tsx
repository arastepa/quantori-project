import styles from '@/pages/Contact/Contact.module.css';
import time from '@/assets/time.svg';
import location from '@/assets/location.svg';
import phone from '@/assets/phone.svg';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>
        <img src={location} alt="" />
        <span>8558 Green Rd., LA</span>
      </p>
      <p>
        <img src={phone} alt="" />
        <span>+1 (603) 555-0123</span>
      </p>
      <p>
        <img src={time} alt="" />
        <span>Mon-Sat: 9:00 AM – 23:00 PM</span>
      </p>
    </div>
  );
};

export default Contact;
