import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import CourseContainer from "./CourseContainer";

const Navbar = () => {
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/HeroSection" ><img src="https://techspira.co.in/cdn/image/T-logo.png" alt="Logo" /></Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/HeroSection">Home</Link></li>
        <li><Link href="/CourseContainer">Courses</Link></li>
        <li><Link href="/About">About</Link></li>
        <li><Link href="/Policy">Policy</Link></li>
        <li><Link href="/Faq">Faq</Link></li>
        <li><Link href="/ContactUs">Contact Us</Link></li>
      </ul>
      <div className={styles.authLinks}>
        <button><Link href="/Login">Login</Link></button>
        <button className={styles.register}><Link href="/Register">Register</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
