import styles from '../styles/Footer.module.css';  // Import the styles from Footer.module.css

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Course Dashboard</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3>Contact Info</h3>
          <p>Call Us: +91 90357 78342</p>
          <p>
            Address: 112/4, 3rd floor, BMR Landmark, HSR Layout,
            Mangammanapalya Main Rd, 7th Sector,
          </p>
          <p>Bommanahalli, Bengaluru, Karnataka 560068</p>
          <p>
            Mail Us:{' '}
            <a href="mailto:hello@elearning.com">hello@elearning.com</a>
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        Copyright &copy; 2024 ELearning TechSpira | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
