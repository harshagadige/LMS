import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Contact.module.css';
const ContactUs=()=>{
    return (
        <div>
            <Navbar/>
            <div>
            <div className={styles.contact}>
      <h3 className={styles.title}>Contact Info</h3>
      <p className={styles.info}>Call Us: +91 90357 78342</p>
      <p className={styles.info}>
        Address: 112/4, 3rd floor, BMR Landmark, HSR Layout, Mangammanapalya Main Rd, 7th Sector,
      </p>
      <p className={styles.info}>Bommanahalli, Bengaluru, Karnataka 560068</p>
      <p className={styles.info}>
        Mail Us: <a href="mailto:hello@elearning.com" className={styles.link}>hello@elearning.com</a>
      </p>
    </div>
            </div>
            <Footer/>
        </div>
    )
}
export default ContactUs;