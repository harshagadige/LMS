import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/About.module.css';

const About=()=>{
    return (
        <div>
            <Navbar/>
            <div>
            <section className={styles.about}>
      <h1>
        What is <span className={styles.highlight}>Elearning?</span>
      </h1>
      <p>
        Are you ready to take your programming skills to the next level? Look no further than Elearning, the premier programming community dedicated to helping new programmers achieve their goals and reach their full potential.
      </p>
      <p>
        As the founder and CEO of Elearning, I know firsthand the challenges that come with learning and growing in the programming industry. That's why I created Elearning – to provide new programmers with the resources and support they need to succeed.
      </p>
      <p>
        Our YouTube channel is a treasure trove of informative videos on everything from programming basics to advanced techniques. But that's just the beginning. Our affordable courses are designed to give you the high-quality education you need to succeed in the industry, without breaking the bank.
      </p>
      <p>
        At Elearning, we believe that price should never be a barrier to achieving your dreams. That's why our courses are priced low – so that anyone, regardless of their financial situation, can access the tools and knowledge they need to succeed.
      </p>
      <p>
        But Elearning is more than just a community – we're a family. Our supportive community of like-minded individuals is here to help you every step of the way, whether you're just starting out or looking to take your skills to the next level.
      </p>
      <p>
        With Elearning by your side, there's nothing standing between you and your dream job. Our courses and community will provide you with the guidance, support, and motivation you need to unleash your full potential and become a skilled programmer.
      </p>
      <p>
        So what are you waiting for? Join the Elearning family today and let's conquer the programming industry together! With our affordable courses, informative videos, and supportive community, the sky's the limit.
      </p>
      <p className={styles.team}>
        <strong>TechSpira</strong>
        <br />
        Founders of Elearning
      </p>
    </section>
            </div>
            <Footer/>
        </div>
    )
}
export default About;