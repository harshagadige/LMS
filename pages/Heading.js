import styles from '../styles/Heading.module.css';

const Heading = () => {
  return (
    <div className={styles.TextHeading}>
      <h1>
        Expand Your Career <span className={styles.highlight}>Opportunity</span>
      </h1>
      <p>Opportunity With Our Courses</p>
    </div>
  );
};

export default Heading;
