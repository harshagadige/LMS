import styles from '../styles/HeroSection.module.css';
import CourseContainerCode from './CoursdeContainerCode';
import Footer from './Footer';
import Heading from './Heading';
import Navbar from './Navbar';
import Comments from './comments';
import FAQQuestions from './faqQuestions';

const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <section className={styles.hero}>
      <div>
        <img  src='https://elearning-front-end.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlnruqp9u%2Fimage%2Fupload%2Fv1709130404%2Flayout%2Ftwc7aeue12fe5pvjkfv1.png&w=828&q=75'/>
      </div>
      <div>
      <br/><br/> <br/> <br/>
      <h1>Up Skill Your Skill With eLearning TechSpira</h1>
      <p>
        Welcome to eLearning TechSpira, your online destination for high-quality
        education and professional skill development.
      </p>
      <div className={styles.buttons}>
        
        <a href='https://youtu.be/qD--21GnB8U?si=PICLdMupjaNvnp9t' className={styles.demoButton}>Demo Class</a>
      </div>
      </div>
    </section>
    <Heading/>
   <CourseContainerCode/>
    <div>
    <header style={{ textAlign: "center", marginBottom: "2rem" }}>
      <h1>
        <span style={{ fontWeight: "bold" }}>Our Students Are </span>
        <span style={{ color: "#7A64FF" }}>Our Strength</span>
      </h1>
      <p style={{ color: "#555" }}>See What They Say About Us</p>
      <img src='https://elearning-front-end.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbusiness-img.7375ac9a.png&w=1920&q=75'/>
    </header>
    </div>
    <Comments/>
    <FAQQuestions/>
    <Footer/>
    </>
  );
};

export default HeroSection;
